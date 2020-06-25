import React from "react";
import PropTypes from "prop-types";
import "../Coaches-card/coaches-card.scss";

class CoachesCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props.card);
    return (
      <div className='coaches-list__item card'>
        <div className='coaches-list__img-wrap'>
          <img
            src={require("../../../assets/img/firstCoach.jpg")}
            alt='first coach'
            className='coaches-list__item-img'
          />
        </div>
        <div className='coaches-list__item-inner'>
          <span className='coaches-list__item-number'>01</span>
          <h3 className='coaches-list__item-title card__title'>
            {this.props.card.name}
          </h3>
          <span className='coaches-list__item-profile'>
            {this.props.card.direction}
          </span>
          <div className='coaches-list__text-line'>
            <span className='coaches-list__item-text coaches-list__item-text--light'>
              Work experience
            </span>
            <span className='coaches-list__item-text'>
              {this.props.card.workExperience} years
            </span>
          </div>
          <div className='coaches-list__text-line'>
            <span className='coaches-list__item-text coaches-list__item-text--light'>
              Teacher for
            </span>
            <span className='coaches-list__item-text'>
              {this.props.card.teachExperience} years
            </span>
          </div>
          <div className='coaches-list__text-line'>
            <span className='coaches-list__item-text coaches-list__item-text--light'>
              Style
            </span>
            {this.props.card.style.map((item, index) => (
              <span className='coaches-list__item-text' key={index}>
                {item}
              </span>
            ))}
          </div>
          <button className='coaches-list__item-btn btn btn--large'>
            Let's start
          </button>
          <button className='coaches-list__item-btn coaches-list__item-btn--hidden'></button>
        </div>
        <button className='coaches-list__item-btn--hidden'></button>
      </div>
    );
  }
}

CoachesCard.propTypes = {
  card: PropTypes.object
};

export default CoachesCard;
