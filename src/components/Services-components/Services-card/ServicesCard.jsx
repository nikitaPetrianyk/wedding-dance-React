import React from "react";
import PropTypes from "prop-types";
import "../Services-card/services-card.scss";

class ServicesCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='card card--column card--third services-card'>
        <div className='services-card__img-wrap'>
          <img
            className='services-card__img'
            src={require(`../../../assets/img${this.props.card.url}.jpg`)}
            alt=''
          />
        </div>
        <div className='services-card__info-wrap'>
          <h3 className='services-card__title card__title'>
            {this.props.card.title}
          </h3>
          <ul className='services-card__list'>
            <li className='card-list__item services-card__list-item'>
              First Dance
            </li>
            <li className='card-list__item services-card__list-item'>
              Parent & Child Dance
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

ServicesCard.propTypes = {
  card: PropTypes.object
};

export default ServicesCard;
