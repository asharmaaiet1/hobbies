import React, { useEffect, useState } from 'react';
import { addHobby } from '../services/hobbies';
import { getHobbies } from '../services/hobbies';

import { HobbyModel } from '../models';

type HobbiesProps = {
  selectedUser: string
  hobbiesList: HobbyModel[]
  updateHobbiesList(data: HobbyModel[]): any
  addNewHobby(data: HobbyModel[]): any
  updateHobby(hobbyId: string): any
}

const Hobbies = (props: HobbiesProps) => {

  const [passionLevel, setPassionLevel] = useState('');
  const [hobby, setHobby] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    getHobbies(props.selectedUser).then((data) => {
      props.updateHobbiesList(data);
    })
  }, [props.selectedUser])

  const addHobbiesClickHandler = (event: any) => {
    event.preventDefault();
    if (props.selectedUser) {
      let userHobbyData = {
        passion: passionLevel,
        hobby: hobby,
        year: year
      };
      addHobby(props.selectedUser, userHobbyData).then((data) => {
        props.addNewHobby([data])
        setPassionLevel('');
        setHobby('');
        setYear('');
      });
    }
  }

  const passionLevelHandleChange = (event: any) => {
    setPassionLevel(event.target.value);
  }

  const hobbyOnChangeHandler = (event: any) => {
    setHobby(event.target.value);
  }

  const yearOnChangeHandler = (event: any) => {
    setYear(event.target.value);
  }

  const deleteHobbyClickHandler = (hobbyId: string) => {
    props.updateHobby(hobbyId);
  }

  return (
    <>
      <div className="add-hobby">
        <form onSubmit={addHobbiesClickHandler}>
          <select
            required
            onChange={passionLevelHandleChange}
            value={passionLevel}
          >
            <option value="" disabled style={{ "display": "none" }}>Select passion level</option>
            <option value="Very High">Very High</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <input required type="text" placeholder="Enter user hobby" value={hobby} onChange={hobbyOnChangeHandler} />
          <input required type="number" placeholder="Enter year" value={year} onChange={yearOnChangeHandler} />
          <button type="submit">Add</button>
        </form>
      </div>

      <div className="hobbie-list">
        <table>
          <tbody>
            {
              props.hobbiesList.map((hobby: any, index: any) => {
                return (<tr key={`hobby-${props.selectedUser}-${hobby.id}`}>
                  <td>
                    Passion: {hobby.passion}
                  </td>
                  <td>
                    {hobby.hobby}
                  </td>
                  <td>
                    Since {hobby.year}
                  </td>
                  <td>
                    <button onClick={() => deleteHobbyClickHandler(hobby.id)} title="Delete"></button>
                  </td>
                </tr>)
              })
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Hobbies;
