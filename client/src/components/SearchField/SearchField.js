import React from "react";
import "./SearchField.css";


class SearchField extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A search query was submitted for ' + this.state.value);
      event.preventDefault();
      //const {value } = this.state;
      //axios.post('http://localhost:8080/search', value).then(response => {
        //console.log(response);
     // })
    }
  
    render() {
      return (
        <div className="searchRow">
         <form onSubmit={this.handleSubmit}>
          <div className="searchform">
             <label className="srchlabel">Find Charities: </label>
              <input type="text" className="srchinput" value={this.state.value} onChange={this.handleChange} />
              <input type="submit" className="btn searchBtn" value="Search" />
          </div>
          </form>
        </div>
      );
    }
  }

export default SearchField;