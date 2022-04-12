import { React, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
// import jsonServer from "../api/jsonServer";
import axios from "axios";
// import { useFonts, Michroma__400Regular } from "@expo-google-fonts/dev";
// import { AppLoading } from "expo-app-loading";

const LoginForm = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const baseUrl = " http://99d5-113-199-230-190.ngrok.io";
  return (
    <View style={styles.container}>
      <Image source={require("../assests/image.png")} style={styles.logo} />
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
        }}
        style={styles.input}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.forgot}>
        <Text style={{ color: "rgb(147,146,148)" }}>Forgot Password ?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // axios.post(`${baseUrl}/cred`, { userName, password });
          axios.get(`${baseUrl}/cred`).then((response) => {
            const newUser = response.data.find(
              (user) => user.userName === userName
            );
            // console.log(response.data);
            // console.log(newUser.password);
            if (
              userName === newUser.userName &&
              password === newUser.password
            ) {
              navigation.navigate("Index");
            } else {
              alert("Login Failed");
            }
          });
        }}
      >
        <Text> Login </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("signupForm");
        }}
      >
        <Text
          style={{
            flexDirection: "row",
            marginTop: 30,
            color: "rgb(147,146,148)",
          }}
        >
          Dont have an account?
          <Text style={{ fontWeight: "bold" }}> Signup Here !!!</Text>
        </Text>
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

export default LoginForm;
