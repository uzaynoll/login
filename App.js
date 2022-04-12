import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "./src/screens/SignUpScreen";
import LoginForm from "./src/components/LoginForm";
import SignupForm from "./src/components/SignupForm";
import Index from "./src/screens/Index";
import Results from "./src/screens/Results";
import ResultShowScreen from "./src/screens/ResultShowScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Login",
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUpScreen}
          options={{
            title: "Create a new User",
          }}
        />
        <Stack.Screen
          name="loginForm"
          component={LoginForm}
          options={{
            title: "Login",
          }}
        />
        <Stack.Screen
          name="signupForm"
          component={SignupForm}
          options={{
            title: "Create a new User.",
          }}
        />
        <Stack.Screen
          name="Index"
          component={Index}
          options={{
            title: "Search",
          }}
        />
        <Stack.Screen
          name="Results"
          component={Results}
          options={{
            title: "Results.",
          }}
        />
        <Stack.Screen
          name="ResultShowScreen"
          component={ResultShowScreen}
          options={{
            title: "Result",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
