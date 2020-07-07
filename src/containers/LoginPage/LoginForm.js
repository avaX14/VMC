import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from './validations';
import messages from './messages';
import translate from 'i18n/translate';
import FormField from 'components/FormField/FormField';

export default function LoginForm({ onSubmit, isPending }) {
  const [values, setValues] = useState({ email: '', password: '' });

  const handleOnSubmit = () => {
    console.log(values);
    const { email, password } = values;
    onSubmit(email, password);
  };

  const onChange = e => {
    console.log(e);
    const { id, value } = e.target;
    console.log(id, value);
    setValues({
      ...values,
      [id]: value
    });
  };

  const { formatMessage } = useIntl();

  return (
    <form onSubmit={() => handleOnSubmit()}>
      <h2 className="mb-3">Login</h2>

      <FormField
        name="email"
        type="email"
        label={translate('emailAddress')}
        onChange={onChange}
      ></FormField>

      <FormField
        name="password"
        type="password"
        label={translate('password')}
        onChange={onChange}
      ></FormField>

      <button type="submit" className="btn btn-primary btn-block mt-5">
        {translate('submit')}
      </button>
      {/* <label className="forgot-password text-right">Forgot password?</label> */}
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  isPending: PropTypes.bool
};
