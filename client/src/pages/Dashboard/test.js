import React from "react";
import axios from "axios";
import "./SearchField.css";


class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  // Need to hide the app_id and app_key
  handleSubmit(event) {
    console.log('A search query was submitted for ' + this.state.value);
    event.preventDefault();
    axios.get(`https://api.data.charitynavigator.org/v2/Organizations?app_id=23f5e47b&app_key=39fc201e9242112fad6b7a96de422bd6&search=${this.state.value}`)
    .then(json => console.log(json));
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