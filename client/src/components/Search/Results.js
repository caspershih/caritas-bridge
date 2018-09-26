import React, { Component } from "react";

const Results = (props) => {
  const saveCharity = (event) =>{
    var index = event.target.name;
    props.saveCharity(index);
  }

    return (

      <div className="row">
      <div className="col-sm-12">
        <br />
        
        <div className="panel panel-primary">
            <div className="panel-heading">
            <h3 className="panel-title">Search Results</h3>
          </div> 

          <div id="our-results" className="panel-body">
        
            {props.passedResults.map((charity, i) => (
                <div key={i} id={"result_"+(i+1)} className="well">
                
                <div className="leftSide">
                  <h4>{charity.headline.main}</h4>
                  <p>{charity.byline ? charity.byline.original : "No Author"}</p>
                  <p><strong>Date Published: </strong> {charity.pub_date}</p>
                  <p><a href={charity.web_url} target="_blank" >View this charity on the New York Times website.</a></p>
                </div>
                
                <div className="rightSide">
                  <button name={i} className="btn btn-primary" onClick={saveCharity}> Save Charity</button>
                </div>
                
                </div>
              ))
            }
              
          </div>

        </div>
      </div>
    </div>
    
    );
  
}

export default Results;
