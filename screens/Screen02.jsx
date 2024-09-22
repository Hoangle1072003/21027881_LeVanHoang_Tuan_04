import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  TextInput,
  CheckBox,
} from "react-native";

const imageNavigation = require("../data/Image 183.png");
const imageLogo = require("../data/Image 19.png");
const imageInputName = require("../data/codicon_account.png");
const imageInputEmail = require("../data/Vector.png");
const imageInputPassword = require("../data/lock.png");
const imageCheck = require("../data/eye.png");

const Screen02 = () => {
  const navigation = useNavigation();
  const [isSelected, setSelection] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleContinue = () => {
    if (isSelected) {
      if (!username || !email || !password) {
        alert("Please fill all fields");
        return;
      }
      const newData = { username, email, password };
      console.log("check data", newData);
      navigation.navigate("Screen_03", { data: newData });
    } else {
      alert("Please agree with Terms & Conditions");
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Navigation */}
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Screen_01")}>
            <Image
              source={imageNavigation}
              style={{ resizeMode: "cover", width: 20, height: 20 }}
            />
          </TouchableOpacity>
        </View>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image source={imageLogo} style={{ resizeMode: "cover" }} />
        </View>
        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Nice to meet you!</Text>
        </View>
        {/* Subtitle */}
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>Create your account</Text>
        </View>
        {/* Username Input */}
        <View style={styles.inputContainer}>
          <Image source={imageInputName} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your user name"
            autoCapitalize="none"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Image source={imageInputEmail} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Image source={imageInputPassword} style={styles.icon} />
          <TouchableOpacity onPress={handleShowPassword} style={styles.eyeIcon}>
            <Image
              source={imageCheck}
              style={{
                width: 20,
                height: 20,
                tintColor: showPassword ? "black" : "grey",
              }}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
        </View>
        {/* Terms & Conditions */}
        <View style={styles.termsContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text>
            I agree with
            <Text style={{ color: "#00CFFF" }}> Terms & Conditions</Text>
          </Text>
        </View>
        {/* Button Continue */}
        <View style={styles.buttonContainer}>
          <Button title="Continue" onPress={handleContinue} color="#00CFFF" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 100,
    marginTop: 100,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingBottom: 10,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitleContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 70,
  },
  subtitleText: {
    fontSize: 13,
    color: "grey",
  },
  inputContainer: {
    position: "relative",
    marginBottom: 10,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "cover",
    position: "absolute",
    top: 15,
    left: 15,
  },
  eyeIcon: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    paddingLeft: 50,
    color: "grey",
  },
  termsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  checkbox: {
    marginRight: 10,
  },
  buttonContainer: {
    marginTop: 20,
    width: "100%",
    borderRadius: 8,
  },
});

export default Screen02;
