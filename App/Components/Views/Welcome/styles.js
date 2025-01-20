import { FontFamily } from "Theme";
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
      alignItems: "center",
    },
    image: {
      height: 200,
      width: width * 0.8,
      marginTop: height * 0.05,
      marginBottom: height * 0.05,
      alignSelf: "center",
    },
    button: {
      // margin: 10,
      paddingHorizontal: 25,
      paddingVertical: responsiveHeight(2),
      backgroundColor: "white",
      borderRadius: 10,
      width: responsiveWidth(90),
      alignSelf: "center",
    },
    btnText: {
      fontFamily: FontFamily.Bold,
      alignSelf: "center",
      color: "white",
      fontSize: responsiveFontSize(1.6),
    },
  });

export default useStyles;
