import React from "react";
import "../Burger/burger.scss";

class Burger extends React.Component {
  render() {
    return (
      <div className='site-header__burger'>
        <span className='site-header__burger-item'></span>
        <span className='site-header__burger-item'></span>
        <span className='site-header__burger-item'></span>
      </div>
    );
  }
}

export default Burger;
