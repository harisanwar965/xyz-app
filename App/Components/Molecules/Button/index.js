import { Colors, FontFamily } from "Theme";
import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const Button = (props) => {
  const { text, onPress, icon, tStyle, styles, disabled } = props;

  return (
    <TouchableOpacity
      disabled={disabled}
      {...props}
      icon={icon}
      mode="contained"
      onPress={onPress}
      style={[
        {
          backgroundColor: Colors.background,
          width: responsiveWidth(90),
          alignSelf: "center",
          paddingVertical: responsiveHeight(1.5),
          borderRadius: 8,
          flexDirection: "row",
          justifyContent: "center",
          marginTop: responsiveHeight(2),
        },
        styles,
      ]}
    >
      <Text
        style={[
          tStyle,
          {
            color: Colors.foreground,
            alignSelf: "center",
            fontSize: responsiveFontSize(2.2),
            fontFamily: FontFamily.SemiBold,
            marginLeft: responsiveWidth(2),
          },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
