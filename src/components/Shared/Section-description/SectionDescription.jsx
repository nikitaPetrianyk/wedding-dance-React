import React from "react";
import PropTypes from "prop-types";
import "../Section-description/section-description.scss";

class SectionDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='description-wrapper'>
        <h2 className='services__title sect-title'>{this.props.meta.title}</h2>
        <p className='services__text sect-info'>
          {this.props.meta.description}
        </p>
      </div>
    );
  }
}

SectionDescription.propTypes = {
  meta: PropTypes.object
};

export default SectionDescription;
