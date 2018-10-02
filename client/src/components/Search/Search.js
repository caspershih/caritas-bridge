import React from "react";

const Search = props =>

<div className="searchSection">
  <div className="heavy">Search for a Charity</div>
    <form id="search-form" onSubmit={this.handleSubmit}>
      <div className="profileForm">
        <input 
        type="text" 
        className="formInput" 
        id="search-term" 
        name='searchTerm'
        placeholder="Enter here to search for charities."
        onChange={this.handleChange} 
        value={this.state.searchTerm} />
      </div>
    <button type='submit' className="btn btn-primary search" id="3"> Search</button>
                                
    </form>
</div>

export default Search;
