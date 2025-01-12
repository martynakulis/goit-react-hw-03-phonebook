import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ handleInput, value }) => {
  const filterInputId = nanoid();
  return (
    <div className={css.section}>
      <label htmlFor={filterInputId}>Find contacts by name</label>
      <input
        id={filterInputId}
        name="filter"
        type="text"
        value={value}
        onChange={handleInput}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  handleInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
