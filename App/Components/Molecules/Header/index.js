import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors, FontFamily } from "Theme";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Header = (props) => {
  const { text, onPress } = props;
  return (
    <View style={styles.mainView}>
      <MIcon
        name={"arrow-left"}
        size={25}
        color={Colors.text}
        style={{
          alignSelf: "center",
          position: "absolute",
          left: responsiveWidth(4),
          top: responsiveHeight(7.5),
        }}
        onPress={onPress}
      ></MIcon>
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: Colors.foreground,
    height: responsiveHeight(13),
    flexDirection: "row",
    paddingHorizontal: responsiveWidth(3),
    justifyContent: "center",
    paddingBottom: responsiveHeight(2),
    // marginTop: responsiveHeight(2),
  },
  textStyle: {
    fontSize: responsiveFontSize(2),
    alignSelf: "center",
    fontFamily: FontFamily.Bold,
    color: Colors.text,
    marginTop: responsiveHeight(7),
  },
});
