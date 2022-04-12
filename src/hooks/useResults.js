import React, { useState, useEffect } from "react";
import Yelp from "../api/Yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [galti, setGalti] = useState("");

  const searchApi = async (term) => {
    try {
      const response = await Yelp.get("/search", {
        params: {
          limit: 50,
          term: term,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setGalti("Kei Gadbad vayo Daya !!");
    }
  };
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, galti, results];
};
