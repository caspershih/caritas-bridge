import axios from "axios";
const APIKEY = "b8f6fcfe02204a2429177b5ba581bfa2";
const appID = "ae95316c";
const responseQTY = "10";

//Full api call for testing
//https://api.data.charitynavigator.org/v2/Organizations?app_id=ae95316c&app_key=b8f6fcfe02204a2429177b5ba581bfa2&pageSize=10&search=Animal

const API = {

  getCharities: function(searchTerm){
    const BASEURL = "https://api.data.charitynavigator.org/v2/";
    var params = "Organizations?app_id=" + appID + "&app_key=" + APIKEY + "&pageSize=" + responseQTY;
    params+="&search="+searchTerm;

    return axios.get(BASEURL+params);
  },
  saveCharity: function(data) {
    var newCharity = {
      name: data.charityName,
      address1: data.address1,
      address2: data.address2,
      city: data.city,
      state: data.state,
      zip: data.zip,
      category: data.category,
      webURL: data.webURL,
      mission: data.mission,
      ein: data.ein
    };
    
    return axios.post("/api/Saved", newCharity);
  },
  getSavedCharities: function() {
    return axios.get("/api/Saved");
  },

  removeCharity: function(id){
    return axios.delete("/api/Saved", {params: {id: id}});
  },
  
};

export default API;
