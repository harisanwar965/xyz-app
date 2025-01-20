import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useStyles from "./styles";
import { SplashScreen, WelcomeScreen, LoginScreen, HomeScreen } from "@Views";
import { Appbar } from "@Organisms";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { headerHidden } = useStyles();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          {...headerHidden}
        />
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          {...headerHidden}
        />
        <Stack.Screen name="Login" component={LoginScreen} {...headerHidden} />
        <Stack.Screen name="Home" component={HomeScreen} {...headerHidden} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
