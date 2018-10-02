import React from "react";

const Results = (props) => {
  /*const saveCharity = (event) =>{
    var index = event.target.name;
    props.saveCharity(index);
  }*/

    return (

      <div className="resultsDiv">
      <h2>Search Results</h2>
      <hr />
      {this.state.nonProfit.map(nonprofit => 
      
      <div className="charityResults" key={nonprofit.id}>
          <h4><font color="#064554">Charity Name: </font> {nonprofit.charityName}</h4>
          <p><font color="#064554">Cause: </font> {nonprofit.cause.causeName}</p>
          <p><font color="#064554">Mission Statement: </font> {nonprofit.mission}</p>
          <p><font color="#064554">Website: </font> <a href={nonprofit.websiteURL}>{nonprofit.websiteURL}</a></p>
          <div className="buttonRow">
          <button name="organization._id" className="btn btn-primary" onClick="saveCharity"> Save Charity</button>
          </div>
          <div className="spacer"><hr /></div>
      
      </div>)}
  </div>
    
    );
  
}

export default Results;
