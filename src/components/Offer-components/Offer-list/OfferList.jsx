import React from "react";
import PropTypes from "prop-types";
import "../Offer-list/offer-list.scss";
import OfferCard from "../Offer-card/OfferCard";

class OfferList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='offer-list cards-list cards-list--wrap'>
        {this.props.content.map(item => (
          <OfferCard key={item._id} card={item} />
        ))}
      </div>
    );
  }
}

OfferList.propTypes = {
  content: PropTypes.array
};

export default OfferList;
