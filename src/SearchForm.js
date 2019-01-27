import React from "react";

const SearchForm = props => {
  const onSubmit = event => {
    event.preventDefault();
    props.onFormSubmit();
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        autoFocus
        type="text"
        placeholder="Enter Search Term"
        onChange={event => props.onSearchValueChange(event.target.value)}
      />
      <div>
        <button disabled={props.isSearching}>Search</button>

        <button onClick={props.onSingleSearchClick}>Feeling Funny?</button>
      </div>
    </form>
  );
};

export default SearchForm;
