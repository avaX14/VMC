import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../containers/App/actions';

const SelectLanguage = () => {
  const dispatch = useDispatch();
  const handleLanguage = useCallback(
    e => dispatch(setLanguage(e.target.value)),
    [dispatch]
  );

  // const handleLanguage = () => {
  //   console.log('DSADS');
  // };
  return (
    <div class="form-group select-language">
      <select
        onChange={e => handleLanguage(e)}
        class="form-control "
        id="exampleFormControlSelect1"
      >
        <option value="srb">SRB</option>
        <option value="en-us">ENG</option>
      </select>
    </div>
  );
};

export default SelectLanguage;
