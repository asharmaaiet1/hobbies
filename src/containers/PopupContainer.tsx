import { connect } from 'react-redux';
import PopupHOC from '../components/Popup';
import { togglePopup } from '../actions';

const mapStateToProps = (state: any) => {
  return {
    currentPopup: state.currentPopup,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    togglePopup: (id: any) => {
      dispatch(togglePopup(id));
    },
  };
};

const PopupContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PopupHOC);

export default PopupContainer;
