import React from "react";

const Results = (props) => {
<<<<<<< HEAD
  const saveCharity = (event) =>{
    var index = event.target.name;
    props.saveCharity(index);
  }
=======
  /*const saveCharity = (event) =>{
    var index = event.target.name;
    props.saveCharity(index);
  }*/
>>>>>>> 5c300b33862c451ce40ac1b93f17326fa265a750

    return (

      <div className="resultsDiv">
<<<<<<< HEAD
          <h2>Search Results</h2>
          <hr />
        
            {props.passedResults.map((charity, i) => (
                <div key={i} id={"result_"+(i+1)} className="well">
                
                <h4>Charity Name: {organizations.name}</h4>
                <span><p>Address: {organizations.address1}</p>
                <p>{organizations.address2}</p></span>
                <span><p>{organizations.city}</p>
                <p>{organizations.state}</p>
                <p>{organizations.zip}</p></span>
                <p>Category: {organizations.category}</p>
                <p>Website: <a href={organizations.webURL} target="_blank" >{organizations.webURL}</a></p>
                <p>Email Address: {organizations.email}</p>
                <p>EIN: {organizations.ein}</p>
                
                <button name={i} className="btn btn-primary" onClick={saveCharity}> Save Charity</button>
                
                </div>
              ))
            }
              
          </div>
=======
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
>>>>>>> 5c300b33862c451ce40ac1b93f17326fa265a750
    
    );
  
}

export default Results;
