import React from "react";
import PropTypes from "prop-types";
import "../Promo-description/promo-description.scss";

class PromoDescription extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='info__text-wrap'>
        <h1 className='info__title'>{this.props.meta.title}</h1>
        <h3 className='info__subtitle'>{this.props.meta.location}</h3>
        <p className='info__text'>{this.props.meta.description}</p>
        <button className='info__button btn btn--large'>
          <a href='#' className='info__btn-link'>
            {this.props.action.title}
          </a>
        </button>
      </div>
    );
  }
}

PromoDescription.propTypes = {
  meta: PropTypes.object
};

export default PromoDescription;
