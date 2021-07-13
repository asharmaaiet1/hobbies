import React, { Component } from 'react';

type PopupHOCProps = {
  children: any,
  togglePopup(id: string): any,
  currentPopup: string
}

class PopupHOC extends Component<PopupHOCProps> {

  componentDidMount() {
    const {
      togglePopup,
    } = this.props;

    document.addEventListener('keydown', (event) => {
      if (event.keyCode === 27) {
        const {
          currentPopup,
        } = this.props;
        if (currentPopup !== "-1") {
          togglePopup("-1");
        }
      }
    });
  }

  render() {
    const {
      children,
      togglePopup,
      currentPopup,
    } = this.props;

    return (
      <>
        <div
          className={`popups-container-main ${currentPopup !== "-1" ? 'popup-show' : ''}`}
        >

          <div
            className={`popups-overlay`}
            onClick={() => { togglePopup('-1'); }}
          />

          {
            React.Children.map(children, (popup, i) => {
              return (
                React.cloneElement(popup, {
                  key: `popup-${popup.props.popupid}`,
                  index: i,
                  isSelected: () => currentPopup === popup.props.popupid,
                  closePopup: togglePopup,
                })
              );
            })
          }

        </div>
      </>
    );
  }
}

export default PopupHOC;
