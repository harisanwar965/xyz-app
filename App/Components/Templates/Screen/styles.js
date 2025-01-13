import { Dimensions, StyleSheet } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { Colors } from "Theme";

const { width, height } = Dimensions.get("window");

const useStyles = () =>
  StyleSheet.create({
    rootScroll: {
      flexGrow: 1,
      backgroundColor: Colors.background,
    },
    root: {
      flex: 1,
      height: responsiveHeight(100),
    },
  });

export default useStyles;
