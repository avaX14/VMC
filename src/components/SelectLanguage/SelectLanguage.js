import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../containers/App/actions';
import serbiaFlag from '../../images/serbia.svg';
import ReactFlagsSelect from 'react-flags-select';

const SelectLanguage = () => {
  const dispatch = useDispatch();
  const handleLanguage = useCallback(e => dispatch(setLanguage(e)), [dispatch]);

  // const handleLanguage = e => {
  //   console.log('DSADS', e);
  // };
  return (
    <div class="form-group select-language">
      {/* <select
        onChange={e => handleLanguage(e)}
        class="form-control "
        id="exampleFormControlSelect1"
      >
        <option style={{ backgroundImage: `url(${serbiaFlag})`, }} value="srb">
          SRB
        </option>
        <option value="en-us">ENG</option>
      </select> */}
      <ReactFlagsSelect
        onSelect={e => handleLanguage(e)}
        countries={['US', 'RS']}
        showOptionLabel={false}
        defaultCountry="RS"
        showSelectedLabel={false}
      />
    </div>
  );
};

export default SelectLanguage;
