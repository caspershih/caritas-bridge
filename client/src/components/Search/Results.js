import React from "react";

const Results = (props) => {
  const saveCharity = (event) =>{
    var index = event.target.name;
    props.saveCharity(index);
  }

    return (

      <div className="resultsDiv">
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
    
    );
  
}

export default Results;
