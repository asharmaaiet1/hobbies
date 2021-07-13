import { connect } from 'react-redux';
import Users from '../components/Users';
import { updateUsersList, updateSelectedUser } from '../actions';

const mapStateToProps = (state: any) => {
  return {
    usersList: state.usersList,
    selectedUser: state.selectedUser,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateUsersList: (data: any) => {
      dispatch(updateUsersList(data));
    },
    updateSelectedUser: (data: string) => {
      dispatch(updateSelectedUser(data));
    }
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

export default UsersContainer;
