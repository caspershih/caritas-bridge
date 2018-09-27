import React from "react";

const Saved = (props) => {
  const removeCharity = (event) =>{
    var index = event.target.name;
    props.removeCharity(index);
  }

    return (

<div className="resultsDiv">
          <h2>Saved Charities</h2>
          <hr />
        
            {props.savedCharities.map((data, i) => (
              <div key={i} id={"result_"+(i+1)} className="well">

                <h4>Charity Name: {data.name}</h4>
                <span><p>Address: {data.address1}</p>
                <p>{data.address2}</p></span>
                <span><p>{data.city}</p>
                <p>{data.state}</p>
                <p>{data.zip}</p></span>
                <p>Category: {data.category}</p>
                <p>Website: <a href={data.webURL} target="_blank" >{data.webURL}</a></p>
                <p>Mission: {data.mission}</p>
                <p>EIN: {data.ein}</p>

                <button name={charity._id} className="btn btn-primary" onClick={removeCharity}> Delete</button> 
            
              </div>
              ))
            }              
  </div>
    
    );
  
}

export default Saved;
