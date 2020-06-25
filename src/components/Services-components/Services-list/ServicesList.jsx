import React from "react";
import PropTypes from "prop-types";
import "../Services-list/services-list.scss";
import ServicesCard from "../Services-card/ServicesCard";

class ServicesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='cards-list'>
        {this.props.content.map(item => (
          <ServicesCard key={item._id} card={item} />
        ))}
      </div>
    );
  }
}

ServicesList.propTypes = {
  content: PropTypes.array
};

export default ServicesList;
