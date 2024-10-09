import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen_01 from "./screens/Screen_01.jsx";
import Screen_02 from "./screens/Screen_02.jsx";
import Screen_03 from "./screens/Screen_03.jsx";
import Screen_04 from "./screens/Screen_04.jsx";
import Toast from "react-native-toast-message";
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Screen_01"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Screen_01" component={Screen_01} />
        <Stack.Screen name="Screen_02" component={Screen_02} />
        <Stack.Screen name="Screen_03" component={Screen_03} />
        <Stack.Screen name="Screen_04" component={Screen_04} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}
