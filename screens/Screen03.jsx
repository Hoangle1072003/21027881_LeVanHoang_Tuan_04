import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Toast from "react-native-toast-message";

const image = require("../data/Image 20.png");
const imageInputName = require("../data/codicon_account.png");
const imageInputEmail = require("../data/Vector.png");
const imageInputPassword = require("../data/lock.png");
const Screen03 = ({ route }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const { data } = route.params;
  console.log("data", data);
  const handleLogin = () => {
    if (!email || !password) {
     Toast.show({
        type: "error",
        position: "top",
        text1: "Error",
        text2: "Please fill all fields",
     });
      return;
    }
    
    if (email !== data.email || password !== data.password) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Error",
        text2: "Invalid email or password",
      })
      return;
    }
    if (email === data.email && password !== data.password) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Error",
        text2: "Invalid email or password",
      })
      return;
    }

    if (email !== data.email && password === data.password) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Error",
        text2: "Invalid email or password",
      })
      return;
    }


    if (email === data.email && password === data.password) {
      Toast.show({
        type: "success",
        position: "top",
        text1: "Success",
        text2: "Login successfully",
      })
    }
    navigation.navigate("Screen_04");
  };
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
        }}
      >
        <View>
          <Image
            source={image}
            style={{
              resizeMode: "cover",
              width: "100%",
              height: "200px",
            }}
          />
        </View>
        {/* welcome */}
        <View
          style={{
            width: "100%",
            height: 100,
            marginHorizontal: 10,
            marginVertical: 20,
          }}
        >
          <Text
            style={{
              fontSize: 35,
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Welcome!
          </Text>
        </View>
        {/* Input email */}
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#000",
            }}
          >
            Email
          </Text>
          <View
            style={{
              position: "relative",
              flexDirection: "row",
            }}
          >
            <Image
              source={imageInputName}
              style={{
                width: 20,
                height: 20,
                position: "absolute",
                top: 20,
                left: 10,
              }}
            />
            <TextInput
              placeholder="Email"
              style={{
                width: "100%",
                height: 35,
                borderRadius: 10,
                marginVertical: 10,
                backgroundColor: "rgb(231 224 224);",
                paddingLeft: 40,
              }}
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>
        {/* input password */}
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#000",
            }}
            value={password}
            onChangeText={setPassword}
          >
            Password
          </Text>
          <View
            style={{
              position: "relative",
              flexDirection: "row",
            }}
          >
            <Image
              source={imageInputPassword}
              style={{
                width: 20,
                height: 20,
                position: "absolute",
                top: 20,
                left: 10,
              }}
            />
            <TextInput
              placeholder="Password"
              style={{
                width: "100%",
                height: 35,
                borderRadius: 10,
                marginVertical: 10,
                backgroundColor: "rgb(231 224 224);",
                paddingLeft: 40,
              }}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>
        {/* Button Login */}

        <View
          style={{
            marginTop: 90,
            marginHorizontal: 20,
          }}
        >
          <TouchableOpacity onPress={() => handleLogin()}>
            <View
              style={{
                backgroundColor: "#00CFFF",
                borderRadius: 10,
                padding: 10,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontSize: 20,
                }}
              >
                Login
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});
export default Screen03;
