import React from "react";
import PropTypes from "prop-types";
import "../Navigation/navigation.scss";
import NavigationItem from "../Navigation-item/NavigationItem";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props.content);
    return (
      <nav className='site-header__navigation'>
        {this.props.content.map(item => (
          <NavigationItem key={item._id} navigationItem={item} />
        ))}
      </nav>
    );
  }
}

Navigation.propTypes = {
  content: PropTypes.array
};

export default Navigation;
