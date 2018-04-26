// importing axios, which is essentially Reacts way of calling API's
import axios from "axios";

// Export an object containing methods that we'll use for accesssing the makeup App-intro

export default {
  getMatchMakeup: function() {
    // put in the API link in the below ""
    return axios.get("");
    
  }
};
