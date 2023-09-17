import React from "react";
import PropTypes from "prop-types";

function Filter({ filter, onFilterChange }) {
  return (
    <div>
      <label htmlFor="filter" style={{ display: 'block', marginTop: '10px', marginBottom: '10px' }}>Find contacts by name:</label>
      <input
        type="text"
        id="filter"
        name="filter"
        placeholder="Search by name"
        value={filter}
        onChange={onFilterChange}
      />
    </div>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
