import React from "react";
import PropTypes from "prop-types";
import "../Logo/logo.scss";

class Logo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='site-header__logo'>
        <span className='site-header__logo-title'>{this.props.title}</span>
      </div>
    );
  }
}

Logo.propTypes = {
  title: PropTypes.string
};

export default Logo;
