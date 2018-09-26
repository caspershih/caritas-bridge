import React from "react";

const Search = props =>

<div className="searchSection">
<div className="heavy">Search for a Charity</div>
<form>
  <div className="search-form">
    <input type="text" className="formInput" id="search-term" placeholder="Enter here to search for charities." value={props.searchTerm} onChange={props.handleSearchTerm} />
  </div>
    <button onClick={props.handleFormSubmit} className="search" id="3"> Search</button>
  
</form>
</div>;

export default Search;
