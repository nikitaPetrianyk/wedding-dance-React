import React from "react";
import PropTypes from "prop-types";
import "../Footer/footer.scss";
import Logo from "../Header-components/Logo/Logo";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  getTitle() {
    return this.props.sectionData.meta.title;
  }

  render() {
    return (
      <footer className='site-footer'>
        <Logo title={this.getTitle()} />
        <span className='site-footer__privacy'>Copyright © 2019 </span>
      </footer>
    );
  }
}

Footer.propTypes = {
  sectionData: PropTypes.object
};

export default Footer;
