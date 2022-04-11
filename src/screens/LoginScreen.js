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

const LoginScreen = (navigation) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const baseUrl = "http://f672-113-199-230-49.ngrok.io";
  // const submitCred = () => {
  //   return async (userName, password) => {
  //     await jsonServer.post("/cred", { userName, password });
  //   };
  // };

  // Invoking get method to perform a GET request

  // let [fontsLoaded] = useFonts({
  //   Michroma__400Regular,
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } else {
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
              alert("Logged In");
            } else {
              alert("Login Failed");
            }
          });
        }}
      >
        <Text> Login </Text>
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

export default LoginScreen;

// axios.get(`${baseUrl}/api/users/1`).then((response) => {
//   console.log(response.data);
// });
