import React from "react";
import PropTypes from "prop-types";
import "../Coaches-list/coaches-list.scss";
import CoachesCard from "../Coaches-card/CoachesCard";

class CoachesList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='cards-list coaches-list'>
        {this.props.content.map(item => (
          <CoachesCard key={item._id} card={item} />
        ))}
        <div className='coaches-list__controls'>
          <img
            className='coaches-list__controls-arrow coaches-list__controls-arrow--left '
            src={require("../../../assets/img/rightArrow.svg")}
            alt='left arrow'
          />
          <div className='coaches-list__controls-counter'>1 of 4</div>
          <img
            className='coaches-list__controls-arrow coaches-list__controls-arrow--right'
            src={require("../../../assets/img/rightArrow.svg")}
            alt='right arrow'
          />
        </div>
      </div>
    );
  }
}

CoachesList.propTypes = {
  content: PropTypes.array
};

export default CoachesList;
