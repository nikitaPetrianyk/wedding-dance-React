import React from "react";
import PropTypes from "prop-types";
import "../Services/services.scss";
import SectionDescription from "../../Shared/Section-description/SectionDescription";
import ServicesList from "../Services-list/ServicesList";

class ServicesComponent extends React.Component {
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
        <section className='services'>
          <SectionDescription meta={this.getMeta()} />
          <ServicesList content={this.getContent()} />
        </section>
      </div>
    );
  }
}

SectionDescription.propTypes = {
  sectionData: PropTypes.object
};

export default ServicesComponent;
