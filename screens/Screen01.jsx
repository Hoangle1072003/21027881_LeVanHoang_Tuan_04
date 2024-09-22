import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";

const imageContainer17 = require("../data/Container 17.png");

const Screen_01 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {/* Add Image component here */}
          <View>
            <Image
              source={imageContainer17}
              style={{
                resizeMode: "cover",
              }}
            />
          </View>
          {/* Add title here */}
          <View style={styles.textContainer}>
            <Text style={styles.titleText}>Boots Productivity</Text>
            <Text style={styles.titleTextSub}>
              Simlify tasks, boost productivity
            </Text>
          </View>
          {/* Button Sign up */}
          <TouchableOpacity
            style={{
              width: "85%",
              height: 35,
              alignItems: "center",
              marginVertical: 10,
              backgroundColor: "#00CFFF",
              borderRadius: 10,
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            <View>
              <Text
                onPress={() => navigation.navigate("Screen_02")}
                style={{
                  color: "#fff",
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                Sign up
              </Text>
            </View>
          </TouchableOpacity>
          {/*  Button Log in */}
          <TouchableOpacity>
            <View
              style={{
                paddingVertical: 10,
                alignItems: "center",
                backgroundColor: "#fff",
                textAlign: "center",
                justifyContent: "center",
                borderColor: "#00CFFF",
              }}
            >
              <Text
                style={{
                  color: "#000",
                  fontSize: 15,
                }}
              >
                Log in
              </Text>
            </View>
          </TouchableOpacity>
          {/* dot */}
          <View style={styles.pageIndicatorContainer}>
            <View style={styles.pageDot} />
            <View style={[styles.pageDot, styles.activePageDot]} />
            <View style={styles.pageDot} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginVertical: 20,
  },
  textContainer: {
    width: "100%",
    alignItems: "left",
    marginVertical: 10,
    paddingLeft: 35,
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  titleTextSub: {
    marginTop: 5,
    fontSize: 15,
    color: "#A9A9",
  },
  pageIndicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  pageDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  activePageDot: {
    backgroundColor: "#00CFFF",
  },
});

export default Screen_01;
