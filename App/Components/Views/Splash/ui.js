import React from "react";
import useService from "./service";
import useStyles from "./styles";
import { StatusBar, Image, View } from "react-native";
import { Screen } from "@Templates";
import { Colors } from "@Theme";

const Splash = (props) => {
  const {} = useService(props);
  const { container, image } = useStyles();
  return (
    <>
      <StatusBar translucent backgroundColor={"transparent"}></StatusBar>
      <Screen viewStyle={{ backgroundColor: Colors.background }}>
        <View style={container}>
          <Image
            style={image}
            resizeMethod="resize"
            resizeMode="contain"
            source={require("@Images/logo.png")}
          />
        </View>
      </Screen>
    </>
  );
};

export default Splash;
