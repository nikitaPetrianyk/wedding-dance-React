import React from "react";
import PropTypes from "prop-types";
import "../Header/header.scss";
import HeaderContent from "../Header-content/HeaderContent";
import Logo from "../Logo/Logo";
import Burger from "../Burger/Burger";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  getTitle() {
    return this.props.sectionData.meta.title;
  }

  getAction() {
    return this.props.sectionData.action;
  }

  getContent() {
    return this.props.sectionData.content;
  }

  getLoginComponent() {
    return this.props.loginComponent;
  }

  render() {
    return (
      <div className='container'>
        <header className='site-header'>
          <Logo title={this.getTitle()} />
          <HeaderContent
            content={this.getContent()}
            action={this.getAction()}
            loginComponent={this.getLoginComponent()}
          />
          <Burger />
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  sectionData: PropTypes.object
};

export default Header;
