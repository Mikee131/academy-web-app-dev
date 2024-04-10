import { ReactFinalForm } from '@dhis2/ui';
import React from 'react';
import styles from './Form.module.css';

/**
 * This is just a function to demonstrate the values when the form is submitted
 * It takes the form's values (which is an object), transforms it into readable JSON,
 * and then finally displays the values in an alert box
 *
 * @param {Object} values
 * @param {string} values.title
 * @param {string} values.surname
 * @param {string} values.firstname
 * @param {string} values.email
 * @param {string} values.email-confirmation
 * @param {bool} values.newsletter
 */
const alertValues = values => {
  const formattedValuesString = JSON.stringify(values, null, 2);
  alert(formattedValuesString);
};
const {
  Field,
  Form: RFForm
} = ReactFinalForm;
export const Form = () => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Form"), /*#__PURE__*/React.createElement(RFForm, {
  onSubmit: alertValues
}, _ref => {
  let {
    handleSubmit
  } = _ref;
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.row
  }, /*#__PURE__*/React.createElement(Field, {
    name: "surname",
    label: "Surname",
    component: 'input',
    className: styles.surname,
    initialValue: 'Traore'
  })));
}));