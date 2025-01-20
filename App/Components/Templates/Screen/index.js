import { ScrollView, View, SafeAreaView, StatusBar } from "react-native";
import useStyles from "./styles";
import React from "react";
import { Colors } from "Theme";

const Screen = (props) => {
  const { children, viewStyle } = props;

  const { root, rootScroll } = useStyles();

  return (
    <>
      <StatusBar backgroundColor={Colors.transparent} />

      <SafeAreaView
        style={{
          backgroundColor: Colors.transparent,
        }}
      />

      <ScrollView
        {...props}
        keyboardShouldPersistTaps={"handled"}
        contentInsetAdjustmentBehavior="automatic"
        style={rootScroll}
      >
        <View style={[root, { ...viewStyle }]}>{children}</View>
      </ScrollView>
    </>
  );
};

export default Screen;
