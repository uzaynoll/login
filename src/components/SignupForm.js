import { React, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import axios from "axios";
// import bcrypt from "bcrypt";

const SignupForm = ({ navigation }) => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const baseUrl = " http://99d5-113-199-230-190.ngrok.io";

  // const hashPassword = () => {
  //   const salt = bcrypt.genSaltSync(saltRounds);
  //   const hash = bcrypt.hashSync(myPlaintextPassword, salt);
  //   setPassword(hash);
  //   // bcrypt.genSalt(10, function (err, salt) {
  //   //   bcrypt.hash(password, salt, function (err, hash) {
  //   //     setPassword(hash);
  //   //   });
  //   //   console.log(password);
  //   // });
  // };

  return (
    <View style={styles.container}>
      <Image source={require("../assests/image.png")} style={styles.logo} />
      <TextInput
        placeholder="Name"
        onChangeText={(name) => {
          setName(name);
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="Username"
        onChangeText={(userName) => {
          setUserName(userName);
        }}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(password) => {
          setPassword(password);
          // hashPassword(password);
        }}
        style={styles.input}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          axios.post(`${baseUrl}/cred`, { name, userName, password });
          navigation.navigate("loginForm");
        }}
      >
        <Text> Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(51,51,51)",
    height: "100%",
  },
  logo: {
    marginBottom: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#FF1493",
    backgroundColor: "#FF1493",
    height: 40,
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 2,
    borderRadius: 20,
    marginBottom: 20,
    borderColor: "rgb(255, 192, 203)",
    height: 40,
    padding: 10,
    width: "70%",
    backgroundColor: "rgb(255, 192, 203)",
  },
  forgot: {
    fontSize: 15,
    marginBottom: 20,
  },
  //   login: {
  //     fontFamily: "Michroma__400Regular",
  //   },
});

export default SignupForm;
