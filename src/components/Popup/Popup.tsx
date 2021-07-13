import React, { Component } from 'react';

type PopupProps = {
  className: string,
  popupid: string,
  children: any,
  closePopup?(id: string): any,
  isSelected?(): boolean,
}

class Popup extends Component<PopupProps> {
  button: any = "";

  render() {
    const {
      className,
      children,
      isSelected,
      closePopup
    } = this.props;

    return (
      <div
        className={`popup-container ${className} ${isSelected && isSelected() && 'popup-show'}`}
        role="dialog"
      >
        <div>

          <button
            ref={(button) => { this.button = button; }}
            type="button"
            title="Close"
            className="popup-close"
            onClick={() => { closePopup && closePopup("-1"); }}
          >
            &#10006;
          </button>

          {children}

        </div>
      </div>
    );
  }
}

export default Popup;
