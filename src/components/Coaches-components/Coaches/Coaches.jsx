import React from "react";
import { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../Coaches/coaches.scss";
import SectionDescription from "../../Shared/Section-description/SectionDescription";
import CoachesList from "../Coaches-list/CoachesList";
import AuthContext from "../../../AuthContext";
import Modal from "../../Modal/Modal";
import EditCoaches from "../../Edit-coaches/EditCoaches";

const Coaches = props => {
  const [isAuthorized, setAuthorized] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const value = useContext(AuthContext);

  useEffect(() => {
    value.checkIsAuthorized() ? setAuthorized(true) : setAuthorized(false);
  }, []);

  const toggleModal = value => {
    setIsModalOpened(value);
  };

  const setComponentWithProps = () => (
    <EditCoaches
      content={getContent()}
      meta={getMeta()}
      toggleModal={toggleModal}
    />
  );

  const getMeta = () => {
    return props.sectionData.meta;
  };

  const getContent = () => {
    return props.sectionData.content;
  };

  return (
    <div className='section-wrapper'>
      <section className='coaches'>
        {isAuthorized || value.isAuthorized ? (
          <div className='coaches__edit'>
            <button
              className='coaches__edit-btn btn'
              onClick={() => toggleModal(true)}>
              Edit
            </button>
          </div>
        ) : null}
        <SectionDescription meta={getMeta()} />
        <CoachesList content={getContent()} />
        <Modal
          isModalOpened={isModalOpened}
          toggleModal={toggleModal}
          modalInnerComponent={setComponentWithProps()}
        />
      </section>
    </div>
  );
};

Coaches.propTypes = {
  sectionData: PropTypes.object
};

export default Coaches;
