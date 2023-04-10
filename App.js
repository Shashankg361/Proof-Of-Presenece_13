import profile from "./screens/profile";
import presence from "./screens/Presence";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false,}}>
        <Stack.Screen 
          name="Profile"
          component={profile}
          options={{title: "Welcome"}}
        />
        <Stack.Screen 
          name="Presence"
          component={presence}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}