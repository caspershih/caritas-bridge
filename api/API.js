import axios from "axios";
const APIKEY = "b8f6fcfe02204a2429177b5ba581bfa2";
const appID = "ae95316c";
const responseQTY = "10";

const API = {

  getCharities: function(searchTerm){
    const BASEURL = "https://api.data.charitynavigator.org/v2/";
    var params = "Organizations?app_id=" + appID + "&app_key=" + APIKEY + "&pageSize=" + responseQTY;
    params+="&search="+searchTerm;

    return axios.get(BASEURL+params);
  },
  saveCharity: function(organization) {
    var newCharity = {
      charity: organization.charityName,
      tagline: organization.tagLine,
      category: organization.category.categoryName,
      image: organization.category.image,
      url: organization.websiteURL,
      cause: organization.causeName,
      mission: organization.mission
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
