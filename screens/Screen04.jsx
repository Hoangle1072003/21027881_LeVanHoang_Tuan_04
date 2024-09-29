import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Button,
} from "react-native";
import Toast from "react-native-toast-message";

// Nạp dữ liệu JSON
const data = require("../products.json");
const navigations = require("../data/Image 183.png");
const rating = require("../data/Rating 3.png");
const plus = require("../data/Button 5.png");

const Screen04 = () => {
  const [selectedProduct, setSelectedProduct] = useState(data[0]);
  const [selectCount, setSelectCount] = useState({});
  const [total, setTotal] = useState(0);
  const [db, setData] = useState([]);
  const navigation = useNavigation();

  const handleAddToCard = () => {
    // alert(JSON.stringify(db) + "\nTotal: " + total);
   const newDb =  JSON.stringify(db);
   console.log("newDB: ", newDb);
    console.log("newDB: ", db);
    console.log("Total: ", total);
    const message = `Success! Added to cart. Total: ${total}`;
    Toast.show({
      type: "success",
      position: "top",
      text1: message,
      text2:"Data: " + newDb,
      visibilityTime: 4000, // 4 seconds
      autoHide: true, 
      topOffset: 50,
      bottomOffset: 40,
    })
  };
  const handlePlus = () => {
    const exist = db.find((item) => item.id === selectedProduct.id);
    console.log("exist", exist);
    if (!selectedProduct) {
      return;
    }

    if (exist) {
      const newDb = db.map((item) =>
        item.id === selectedProduct.id ? { ...item } : item
      );
      setData(newDb);
      setTotal((prev) => prev + selectedProduct.price);
      setSelectCount((prev) => ({
        ...prev,
        [selectedProduct.id]: (prev[selectedProduct.id] || 0) + 1,
      }));
      return;
    }
    setSelectCount((prev) => ({
      ...prev,
      [selectedProduct.id]: (prev[selectedProduct.id] || 0) + 1, 
    }));
    setTotal((prev) => prev + selectedProduct.price);
    setData((prev) => [...prev, selectedProduct]);
  };

  const handleSub = () => {
    if (!selectedProduct) {
      return; // Early return if no product is selected
    }
  
    const exist = db.find((item) => item.id === selectedProduct.id);
    console.log("exist", exist);
  
    if (exist) {
      const currentCount = selectCount[selectedProduct.id] || 0;
  
      if (currentCount > 1) {
        const newDb = db.map((item) =>
          item.id === selectedProduct.id ? { ...item } : item
        );
        setData(newDb);
        setSelectCount((prev) => ({
          ...prev,
          [selectedProduct.id]: currentCount - 1,
        }));
        setTotal((prev) => prev - selectedProduct.price);
      } else {
        const newDb = db.filter((item) => item.id !== selectedProduct.id);
        setData(newDb);
        setSelectCount((prev) => ({
          ...prev,
          [selectedProduct.id]: 0,
        }));
        setTotal((prev) => prev - selectedProduct.price);
      
      }
    }
  }

  const renderProducts = ({ item }) => {
    return (
      <View style={styles.productCard}>
        <View>
          <TouchableOpacity
            onPress={() => {
              setSelectedProduct(item);
            }}
          >
            <Image
              source={{ uri: item.images }}
              style={{
                resizeMode: "cover",
                width: 70,
                height: 70,
                borderColor:
                item.id === selectedProduct.id ? "#00CFFF" : "#000",
                borderWidth: item.id === selectedProduct.id ? 1 : 0,
                borderRadius: 10,
                backgroundColor: "#f3acbc1c",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <ScrollView>
      {/* Container */}
      <View style={styles.container}>
        {/* header */}
        <View
          style={{
            flexDirection: "row",
          }}
        >
          {/* navigation */}
          <View
            style={{
              marginRight: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Image
                source={navigations}
                style={{
                  resizeMode: "cover",
                  width: 20,
                  height: 20,
                }}
              />
            </TouchableOpacity>
          </View>
          {/* title */}
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Product Name
            </Text>
          </View>
        </View>
        {/* Image preview */}
        <View
          style={{
            marginVertical: 20,
            backgroundColor: "#f3acbc1c",
          }}
        >
          <Image
            source={{ uri: selectedProduct.images }}
            style={{
              resizeMode: "cover",
              // width: "100%",
              height: 200,
              borderColor: "#000",
              // borderWidth: 1,
              borderRadius: 10,
            }}
          />
        </View>
        {/* Image list */}
        <FlatList
          data={data}
          renderItem={renderProducts}
          keyExtractor={(item) => item.id}
          numColumns={4}
        />
        {/* Desc Product Price*/}
        <View
          style={{
            flexDirection: "row",
            marginVertical: 20,
          }}
        >
          <View>
            <Text
              style={{
                color: "#00CFFF",
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              ${selectedProduct.price}
            </Text>
          </View>
          <View
            style={{
              padding: 5,
              backgroundColor: "rgb(255 229 229)",
              borderRadius: 10,
              marginLeft: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "rgb(189 98 98)",
              }}
            >
              Buy 1 get 1
            </Text>
          </View>
        </View>
        {/* Desc Product Name*/}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {selectedProduct.name}
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: "#A9A9",
              }}
            >
              Occaecat est deserunt tempor offici
            </Text>
          </View>
          {/* rating  */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={rating}
              style={{
                resizeMode: "cover",
              }}
            />
            <Text>{selectedProduct.rating}</Text>
          </View>
        </View>
        {/* size XS, S, M (active), L, XL*/}
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          {["XS", "S", "M", "L", "XL"].map((size, index) => {
            return (
              <View
                key={index}
                style={{
                  backgroundColor: size === "M" ? "#00CFFF" : "#f3acbc1c",
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    color: size === "M" ? "#fff" : "#000",
                    fontWeight: size === "M" ? "bold" : "normal",
                  }}
                >
                  {size}
                </Text>
              </View>
            );
          })}
        </View>
        {/* quantity */}
        <View>
          <View
            style={{
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Quantity
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* count */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={()=>{
                handleSub();
              }}>
                <View
                  style={{
                    backgroundColor: "#f3acbc1c",
                    padding: 5,
                    borderRadius: 10,
                  }}
                >
                  <Text>-</Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  marginHorizontal: 10,
                }}
              >
                <Text>{selectCount[selectedProduct.id] || 0}</Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    handlePlus();
                  }}
                >
                  <Image
                    source={plus}
                    style={{
                      resizeMode: "cover",
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* total */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: "grey",
                }}
              >
                Total
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                  marginLeft: 5,
                }}
              >
                ${total}
              </Text>
            </View>
          </View>
        </View>
        {/* hr */}
        <View>
          <View
            style={{
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
              marginVertical: 10,
            }}
          />
        </View>
        {/* Size guide */}
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginVertical: 10,
            }}
          >
            Size guide
          </Text>
        </View>
        {/* hr */}
        <View>
          <View
            style={{
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
              marginVertical: 10,
            }}
          />
        </View>
        {/* Review */}
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginVertical: 10,
            }}
          >
            Review (99)
          </Text>
        </View>
        {/* button card */}
        <View
          style={{
            marginVertical: 20,
          }}
        >
          <TouchableOpacity>
            <Button
              onPress={() => {
                handleAddToCard();
              }}
              title="Add to card"
              color="#00CFFF"
              style={{
                width: "100%",
                height: 50,
                borderRadius: 10,
                backgroundColor: "#00CFFF",
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 20,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 20,
  },
  productCard: {
    width: (Dimensions.get("window").width - 50) / 4,
  },
});

export default Screen04;
