import React from 'react';
import translate from 'i18n/translate';

const FormField = ({ name, type, label, placeholder, onChange }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        id={name}
        type={type}
        className="form-control"
        onChange={e => onChange(e)}
      />
    </div>
  );
};

export default FormField;
