import { Colors, FontFamily } from "Theme";
import { Dimensions, StyleSheet } from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const { height } = Dimensions.get("window");

const useStyles = () =>
  StyleSheet.create({
    root: {
      flex: 1,
      // alignItems: "center",
      paddingTop: height * 0.05,

      // height: "100%",
    },
    button: {
      margin: 10,
      paddingHorizontal: 25,
      paddingVertical: 10,
      backgroundColor: "aqua",
      borderRadius: 10,
    },
    text: {
      fontSize: responsiveFontSize(1.6),
      fontFamily: FontFamily.Bold,
      color: Colors.text,
    },
    inputStyle: {
      borderColor: Colors.border,
      borderRadius: 10,
      borderWidth: 1.5,
      width: responsiveWidth(90),
      alignSelf: "center",
      marginTop: responsiveHeight(1),
      fontSize: responsiveFontSize(2),
      paddingLeft: responsiveWidth(4),
    },
    textView: {
      borderColor: Colors.border,
      borderWidth: 1.5,
      width: responsiveWidth(90),
      alignSelf: "center",
      borderRadius: 10,
      flexDirection: "row",
    },
    topImage: {
      height: responsiveHeight(10),
      marginTop: responsiveHeight(5),
      alignSelf: "center",
    },
    subText: {
      fontSize: responsiveFontSize(1.4),
      fontFamily: FontFamily.SemiBold,
      alignSelf: "center",
    },
  });

export default useStyles;
