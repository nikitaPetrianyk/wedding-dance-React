import React from "react";
import PropTypes from "prop-types";
import "../Navigation-item/navigation-item.scss";

class NavigationItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a href='#' className='site-header__nav-link'>
        {this.props.navigationItem.title}
      </a>
    );
  }
}

NavigationItem.propTypes = {
  navigationItem: PropTypes.object
};

export default NavigationItem;
