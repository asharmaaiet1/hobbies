import React from 'react';
import { deleteHobby } from '../services/hobbies';

import { HobbyModel } from '../models';

type DeleteHobbyProps = {
  selectedUser: string
  selectedHobby: string
  hobbiesList: HobbyModel[]
  updateHobbiesList(data: HobbyModel[]): any
}

const DeleteHobby = (props: DeleteHobbyProps) => {

  const confirmDelete = () => {
    const { selectedUser, selectedHobby } = props;
    deleteHobby(selectedUser, selectedHobby).then((data) => {
      let hobbiesList = props.hobbiesList;

      hobbiesList = hobbiesList.filter((hobby: any) => {
        if (hobby.id !== data.id) {
          return hobby
        }
      })

      props.updateHobbiesList(hobbiesList);

    })
  }

  return (
    <>
      <h2>Are you sure to delete the hobby.</h2>
      <button onClick={confirmDelete}>Delete</button>
    </>
  )
}

export default DeleteHobby;
