import { Dimensions, StyleSheet } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";

const { width, height } = Dimensions.get("window");

const useStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
    },
    image: {
      height: responsiveHeight(110),
      width: width * 0.8,
      // marginTop: height * 0.3,
      alignSelf: "center",
    },
  });

export default useStyles;
