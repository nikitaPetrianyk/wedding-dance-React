import React from "react";
import PropTypes from "prop-types";
import "../Header-content/header-content.scss";
import Navigation from "../Navigation/Navigation";
import Modal from "../../Modal/Modal";
import Login from "../../Login/Login";

class HeaderContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpened: false
    };
  }

  setComponentWithProps = () => <Login toggleModal={this.toggleModal} />;

  toggleModal = value => {
    this.setState({ isModalOpened: value });
  };

  render() {
    return (
      <div className='site-header__content'>
        <Navigation content={this.props.content} />
        <button
          className='site-header__button btn'
          onClick={() => this.toggleModal(true)}>
          <a href='#' className='site-header__link'>
            {this.props.action.title}
          </a>
        </button>
        <Modal
          isModalOpened={this.state.isModalOpened}
          toggleModal={this.toggleModal}
          modalInnerComponent={this.setComponentWithProps()}
        />
      </div>
    );
  }
}

HeaderContent.propTypes = {
  content: PropTypes.array,
  action: PropTypes.object
};

export default HeaderContent;
