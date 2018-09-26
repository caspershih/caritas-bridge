import React, { Component } from "react";

const Search = props =>

    <div className="row">
      <div className="col-sm-12 col-m-12">
        <br />
        
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Search Parameters</h3>
          </div>
          <div className="panel-body">

            <form>
              <div className="form-group">
                <label htmlFor="search">Search Term:</label>
                <input type="text" className="form-control" id="search-term" placeholder="Enter here to search for articles." value={props.searchTerm} onChange={props.handleSearchTerm} />
              </div>

              <div className="flexBtns">
                <button onClick={props.handleFormSubmit} type="submit" className="btn btn-default" id="run-search"> Search</button>
                <button onClick={props.clearSearch} type="button" className="btn btn-danger" id="clear-all" style={styles.marginLeft}> Clear Results</button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>;

const styles = {
    marginLeft: {
        marginLeft: 5
    }
}    

export default Search;
