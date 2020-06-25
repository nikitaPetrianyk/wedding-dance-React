import React from "react";
import { useContext } from "react";
import { Formik, Form } from "formik";
import PropTypes from "prop-types";
import "../Edit-coaches/edit-coaches.scss";
import AuthContext from "../../AuthContext";

const baseUrl =
  "https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/section/coach";

const EditCoaches = props => {
  const value = useContext(AuthContext);

  return (
    <Formik
      initialValues={{
        meta: props.meta,
        content: props.content
      }}
      onSubmit={values => {
        const token = value.getAuthToken();
        fetch(`${baseUrl}`, {
          method: "PUT",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Accept": "application/json",
            "Authorization": "Bearer " + token
          }
        }).then(() => window.location.reload());
      }}>
      {({ values, handleChange }) => (
        <Form className='edit-coaches'>
          <div className='edit-coaches__item'>
            <span className='edit-coaches__current-value'>Current value: </span>
            <input
              name='meta.title'
              className='edit-coaches__inp inp'
              onChange={handleChange}
              defaultValue={values.meta.title}
            />
            <span className='edit-coaches__current-value'>Current value: </span>
            <input
              name='meta.description'
              className='edit-coaches__inp inp'
              onChange={handleChange}
              defaultValue={values.meta.description}
            />
          </div>
          <div className='edit-coaches__item'>
            <ul className='edit-coaches__list'>
              <div className='edit-coaches__item'>
                {values.content.map((item, index) => (
                  <div className='edit-coaches__edit-fields' key={item._id}>
                    Current values:
                    <input
                      name={`content[${index}].name`}
                      className='inp edit-coaches__inp'
                      onChange={handleChange}
                      value={item.name}
                    />
                    <input
                      className='inp edit-coaches__inp'
                      name={`content[${index}].direction`}
                      defaultValue={item.direction}
                      onChange={handleChange}
                    />
                    <input
                      className='inp edit-coaches__inp'
                      name={`content[${index}].workExperience`}
                      defaultValue={item.workExperience}
                      onChange={handleChange}
                    />
                    <input
                      className='inp edit-coaches__inp'
                      name={`content[${index}].teachExperience`}
                      defaultValue={item.teachExperience}
                      onChange={handleChange}
                    />
                    <input
                      className='inp edit-coaches__inp'
                      name={`content[${index}].style`}
                      defaultValue={item.style}
                      onChange={handleChange}
                    />
                    <input
                      className='inp edit-coaches__inp'
                      name={`content[${index}].url`}
                      defaultValue={item.url}
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </div>
            </ul>
          </div>
          <div className='edit-coaches__item'>
            <div className='edit-coaches__btn-group'>
              <button type='submit' className='edit-coaches__btn btn'>
                Submit
              </button>
              <button
                type='button'
                className='edit-coaches__btn btn'
                onClick={() => {
                  props.toggleModal(false);
                }}>
                Cancel
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

EditCoaches.propTypes = {
  content: PropTypes.array,
  meta: PropTypes.object,
  toggleModal: PropTypes.func
};

export default EditCoaches;
