import React from "react";
import PropTypes from "prop-types";
import "../Promo-illustration/promo-illustration.scss";

class PromoIllustration extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='info__img-wrap'>
        <img
          className='info__img'
          src={require(`../../../assets/img${this.props.meta.heroImage}`)}
          alt='wedding dance'
        />
      </div>
    );
  }
}

PromoIllustration.propTypes = {
  meta: PropTypes.object
};
export default PromoIllustration;
