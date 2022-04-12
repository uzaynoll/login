import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/",
  headers: {
    Authorization:
      "Bearer WpQMgQ4swpbkaLhjFWJIEkXbXw3PrxLA32R0EtIkvB4itS2EdeuUiYq--SVSvlZR2xtf7a8WUIaiVhiUITxeeCi7PKuR9iRaZ8E7sxUwYilNrISkmVyLLvwz0NZCYnYx",
  },
});
