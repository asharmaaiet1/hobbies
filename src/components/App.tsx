import React from 'react';
import ResponsiveWrapper from './ResponsiveWrapper';
import { Popup } from './Popup';
import UsersContainer from '../containers/UsersContainer';
import HobbiesContainer from '../containers/HobbiesContainer';
import PopupContainer from '../containers/PopupContainer';
import DeleteHobbyContainer from '../containers/DeleteHobbyContainer'

const App = () => {

  const responsiveWrapperBreakpoints = {
    small: [0, 639],
    medium: [640, 1023],
    large: [1024, '~'],
  }

  return (
    <>
      <ResponsiveWrapper breakpoints={responsiveWrapperBreakpoints} name="user-hobbies">
        <h1>User Hobbies</h1>
        <div className="users">
          <div className="users-container">
            <UsersContainer />
          </div>
          <div className="hobbies-container">
            <HobbiesContainer />
          </div>
        </div>
        <PopupContainer>
          <Popup popupid="0" className="popup-delete-hobby">
            <DeleteHobbyContainer />
          </Popup>
        </PopupContainer>
      </ResponsiveWrapper>

    </>
  );
}

export default App;
