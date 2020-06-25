import React from "react";
import PropTypes from "prop-types";
import "../Promo/promo.scss";
import PromoDescription from "../Promo-description/PromoDescription";
import PromoIllustration from "../Promo-illustration/PromoIllustration";

class Promo extends React.Component {
  constructor(props) {
    super(props);
  }

  getMeta() {
    return this.props.sectionData.meta;
  }

  getAction() {
    return this.props.sectionData.action;
  }

  render() {
    return (
      <div className='section-wrapper'>
        <section className='info'>
          <PromoDescription meta={this.getMeta()} action={this.getAction()} />
          <PromoIllustration meta={this.getMeta()} />
        </section>
      </div>
    );
  }
}

Promo.propTypes = {
  sectionData: PropTypes.object
};

export default Promo;
