import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import validate from './validate.js';

const LawyerFormLastPage = (props) => {
  const {
    handleSubmit,
    fields: { barNumber, company, typeOfLaw },
    pristine,
    submitting,
    previousPage,
    } = props;

  return (
    <div id="signup-step-one">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <input {...barNumber} type="text" placeholder="Bar Number" />
          {barNumber.touched && barNumber.error && <div>{barNumber.error}</div>}
        </div>
        <div className="row">
          <input {...company} type="text" placeholder="Company Name" />
          {company.touched && company.error && <div>{company.error}</div>}
        </div>
        <div className="row">
          <label>Cannabis
            <input
              {...typeOfLaw} onClick={e => { console.log(e, typeOfLaw.value); }}
              name="type" type="checkbox" value="Cannabis"
            />
          </label>
          <label>Trademark
            <input {...typeOfLaw} name="type" type="checkbox" value="Trademark" />
          </label>
        </div>
        <div className="row">
          {props.onError()}
          <button type="button" onClick={previousPage}>Previous</button>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
        </div>
      </form>
    </div>
  );
};

LawyerFormLastPage.propTypes = {
  handleSubmit: PropTypes.func,
  fields: PropTypes.object,
  onError: PropTypes.func,
  previousPage: PropTypes.func,
  pristine: PropTypes.func,
  submitting: PropTypes.func,
};

export default reduxForm({
  form: 'lawyerSignup',
  fields: ['barNumber', 'company', 'typeOfLaw'],
  destroyOnUnmount: false,
  validate,
})(LawyerFormLastPage);
