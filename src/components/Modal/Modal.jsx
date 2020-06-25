import React from "react";
import PropTypes from "prop-types";
import "./modal.scss";

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    {
      return this.props.isModalOpened ? (
        <div className='modal-wrap'>
          <div className='jw-modal'>
            <div className='jw-modal-body'>
              {this.props.modalInnerComponent}
            </div>
          </div>
          <div className='jw-modal-background'></div>
        </div>
      ) : null;
    }
  }
}

Modal.propTypes = {
  isModalOpened: PropTypes.bool,
  toggleModal: PropTypes.func,
  modalInnerComponent: PropTypes.object
};

export default Modal;
