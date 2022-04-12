import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchApi, galti, results] = useResults();

  const FilterResultByPrice = (price) => {
    return results.filter((FilteredResults) => {
      return FilteredResults.price === price;
    });
  };

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        onTermChange={setSearchTerm}
        onTermSubmit={() => searchApi(searchTerm)}
      />
      {galti ? <Text> {galti} </Text> : null}
      <ScrollView>
        <ResultsList results={FilterResultByPrice("$")} title="Cheap" />
        <ResultsList
          results={FilterResultByPrice("$$")}
          title="Bit Expensive"
        />
        <ResultsList results={FilterResultByPrice("$$$")} title="Big Spender" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default Index;
