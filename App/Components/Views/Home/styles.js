import { Colors, FontFamily } from "Theme";
import { Dimensions, StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const { width, height } = Dimensions.get("window");

const useStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      // alignItems: "center",
    },
    image: {
      height: responsiveHeight(30),
      width: responsiveWidth(100),

      alignSelf: "center",
    },

    text: {
      color: Colors.foreground,
      width: responsiveWidth(70),
      marginTop: responsiveHeight(7),
      marginLeft: responsiveWidth(5),
      fontFamily: FontFamily.Light,
    },
    subImage: {
      height: responsiveHeight(20),
      width: responsiveWidth(90),
      borderRadius: 10,
      marginTop: responsiveHeight(2),
      backgroundColor: "white",
    },

    mainText: {
      fontSize: responsiveFontSize(2),
      fontFamily: FontFamily.Bold,
      color: Colors.text,
    },
  });

export default useStyles;
