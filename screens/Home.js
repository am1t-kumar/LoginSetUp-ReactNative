import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, Platform , ScrollView} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import LoginScreen from "../components/LoginScreen";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSignInPressed = () => {
    console.warn("sign in");
  };

  const onForgotPasswordPressed = () => {
    console.warn("Forgot Password");
  };

  const onSignInFacebook = () => {
    console.warn("Facebook");
  };
  const onSignInGoogle = () => {
    console.warn("Google");
  };
  const onSignInApple = () => {
    console.warn("Apple");
  };
  const onSignUpPress = () => {
    console.warn("Sign Up");
  };
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <SafeAreaView style={styles.root}>
      <View
        style={{
          backgroundColor: "white",
          padding: 15,
        }}
      >
        <LoginScreen />
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="password"
          value={password}
          setValue={setPassword}
          // secureTextEntry={true}
          // it's already true so
          secureTextEntry
        />
        <CustomButton
          text="Sign In"
          onPress={onSignInPressed}
          // don't need to pass type here bcz we already declare the default value
        />
        <CustomButton
          text="Forgot password"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <CustomButton
          text="Sign In with Facebook"
          onPress={onSignInFacebook}
          type="TERTIARY"
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          text="Sign In with Google"
          onPress={onSignInGoogle}
          type="TERTIARY"
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton
          text="Sign In with Apple"
          onPress={onSignInApple}
          type="TERTIARY"
          bgColor="#e3e3e3"
          fgColor="#363636"
        />
        <CustomButton
          text="Don't Have Account ? Sign In"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: "#eee",
  },
});