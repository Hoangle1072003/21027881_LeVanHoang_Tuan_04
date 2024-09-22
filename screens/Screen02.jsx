import { useNavigation } from "@react-navigation/native";
import React from "react";
import { useState } from "react";
import {
  SafeAreaView,
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
const Screen02 = () => {
  const navigation = useNavigation();
  const [isSelected, setSelection] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleContinue = () => {
    if (isSelected) {
      if (!username || !email || !password) {
        alert("Please fill all fields");
        return;
      }
      const newData = {
        username,
        email,
        password,
      };

      console.log("check data", newData);
      navigation.navigate("Screen_03", { data: newData });
    } else {
      alert("Please agree with Terms & Conditions");
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* navigation */}
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Screen_01")}>
            <Image
              source={imageNavigation}
              style={{
                resizeMode: "cover",
                width: 20,
                height: 20,
              }}
            />
          </TouchableOpacity>
        </View>
        {/* logo */}
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: 100,
            // borderColor: "black",
            // borderWidth: 1,
            marginTop: 100,
          }}
        >
          <Image
            source={imageLogo}
            style={{
              resizeMode: "cover",
            }}
          />
        </View>
        {/* logo title */}
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            paddingBottom: 10,
          }}
        >
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            Nice to meet you!
          </Text>
        </View>
        {/* logo subtitle */}
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            marginBottom: 70,
          }}
        >
          <Text
            style={{
              fontSize: 13,
              color: "grey",
            }}
          >
            Create your account
          </Text>
        </View>
        {/* Username Input */}
        <View style={styles.inputContainer}>
          <Image
            source={imageInputName}
            style={{
              // absolut
              width: 20,
              height: 20,
              resizeMode: "cover",
              position: "absolute",
              top: 15,
              left: 15,
            }}
          />
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
          <Image
            source={imageInputEmail}
            style={{
              // absolut
              width: 20,
              height: 20,
              resizeMode: "cover",
              position: "absolute",
              top: 15,
              left: 15,
            }}
          />
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
          <Image
            source={imageInputPassword}
            style={{
              // absolut
              width: 20,
              height: 20,
              resizeMode: "cover",
              position: "absolute",
              top: 15,
              left: 15,
            }}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        {/* Terms & Conditions */}
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={{
              marginRight: 10,
            }}
          />
          <Text>
            I agree with
            <Text style={{ color: "#00CFFF" }}> Terms & Conditions</Text>
          </Text>
        </View>
        {/* Button Continue */}
        <View
          style={{
            marginTop: 20,
            width: "100%",
            borderRadius: 8,
          }}
        >
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
  inputContainer: {
    position: "relative",
    marginBottom: 10,
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
});
export default Screen02;
