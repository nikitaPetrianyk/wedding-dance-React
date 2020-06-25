import React from "react";
import PropTypes from "prop-types";
import "../Offer-card/offer-card.scss";

class OfferCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className='offer-card card card--column card--fourth'>
        <i className='icon icon-ico03'></i>
        <h4 className='offer-card__title'>{this.props.card.title}</h4>
      </li>
    );
  }
}

OfferCard.propTypes = {
  card: PropTypes.object
};

export default OfferCard;
