import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const FileDetails = ({ results }) => {
  return (
    <View style={styles.viewDetail}>
      <Image style={styles.image} source={{ uri: results.image_url }} />
      <Text style={styles.text}>{results.name}</Text>
      <Text style={{ marginLeft: 15 }}>
        {" "}
        {results.rating} Stars, {results.review_count} reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewDetail: {
    marginLeft: 15,
    flex: 1,
  },
  image: {
    height: 120,
    width: 250,
    borderRadius: 5,
    marginBottom: 5,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 15,
  },
});

export default FileDetails;
