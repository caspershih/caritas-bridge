import React, { Component } from "react";

const Saved = (props) => {
  const removeCharity = (event) =>{
    var index = event.target.name;
    props.removeCharity(index);
  }

    return (

      <div className="row">
      <div className="col-sm-12">
        <br />
        
        <div className="panel panel-primary">
            <div className="panel-heading">
            <h3 className="panel-title">Saved Charities</h3>
          </div> 

          <div id="our-results" className="panel-body">
            {props.savedCharities.map((charity, i) => (
            <div key={i} id={"result_"+(i+1)} className="well">

            <div className="leftSide">
              <h4>{charity.title}</h4>
              <p><strong>Date Published:</strong> {charity.date}</p>
              <p><a href={charity.url} target="_blank" >View this charity on the New York Times website.</a></p>
              <p><strong>Date Saved: </strong> {charity.dateSaved}</p>
            </div>  

            <div className="rightSide">
              <button name={charity._id} className="btn btn-primary" onClick={removeCharity}> Delete</button> 
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

export default Saved;
