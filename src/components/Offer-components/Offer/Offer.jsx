import React from "react";
import PropTypes from "prop-types";
import "../Offer/offer.scss";
import OfferList from "../Offer-list/OfferList";
import SectionDescription from "../../Shared/Section-description/SectionDescription";

class Offer extends React.Component {
  constructor(props) {
    super(props);
  }

  getMeta() {
    return this.props.sectionData.meta;
  }

  getContent() {
    return this.props.sectionData.content;
  }
  render() {
    return (
      <div className='section-wrapper'>
        <section className='offer'>
          <SectionDescription meta={this.getMeta()} />
          <OfferList content={this.getContent()} />
        </section>
      </div>
    );
  }
}

Offer.propTypes = {
  sectionData: PropTypes.object
};

export default Offer;
