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
        {this.state.nonProfit.map(nonprofit => 
                    
        <div class="charityResults" key={nonprofit.id}>
          <h4>{nonprofit.charityName}</h4>
          <p><font color="#064554">EIN: </font> {nonprofit.ein}</p>
          <p><font color="#064554">Mission Statement: </font> {nonprofit.mission}</p>
          <div class="buttonRow">
          <button name="organization._id" className="btn btn-primary" onClick="removeCharity"> Save This</button>
          </div>
          <div className="spacer"><hr /></div>
                    
        </div>)}
              ))
            }              
  </div>
    
    );
  
}

export default Saved;
