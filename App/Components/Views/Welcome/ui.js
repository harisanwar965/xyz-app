import React, { useRef, useState } from "react";
import useService from "./service";
import useStyles from "./styles";
import {
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Text,
} from "react-native";
import { Screen } from "@Templates";

import Swiper from "react-native-swiper";
import { Button } from "Components/Molecules";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import SwiperFlatList from "react-native-swiper-flatlist";
import { Colors, FontFamily } from "Theme";
import RBSheet from "react-native-raw-bottom-sheet";
const Welcome = (props) => {
  const {
    onContinue,
    imageArray,
    setImageArray,
    num,
    setNum,
    refRBSheet,
    next,
    setNext,
  } = useService(props);
  const { container, image, button, btnText } = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  return (
    <View style={{ flex: 1 }}>
      {/* <Screen> */}
      <StatusBar translucent backgroundColor={"transparent"}></StatusBar>
      <View style={container}>
        {/* <Image
            style={image}
            resizeMethod="resize"
            resizeMode="contain"
            source={require("@Images/logo.png")}
          /> */}

        <SwiperFlatList
          ref={ref}
          index={num}
          showPagination
          paginationStyle={{
            width: responsiveWidth(1),
            height: responsiveHeight(1),
            position: "absolute",
            bottom: responsiveHeight(15),
          }}
          data={imageArray}
          renderItem={({ item, index }) => (
            <View style={[, { width: responsiveWidth(100) }]}>
              <ImageBackground
                style={{
                  height: "100%",
                  width: "100%",
                  flex: 1,
                }}
                // resizeMethod="resize"
                resizeMode="cover"
                source={item.image}
              />
              <View
                style={{
                  alignSelf: "center",
                  position: "absolute",
                  bottom: responsiveHeight(20),
                }}
              >
                <Text
                  style={{
                    color: Colors.foreground,
                    textAlign: "center",
                  }}
                >
                  {item.text}
                </Text>
                <Text
                  style={{
                    color: Colors.foreground,
                    textAlign: "center",
                    width: responsiveWidth(70),
                    marginTop: responsiveHeight(5),
                  }}
                >
                  {item.btmText}
                </Text>
              </View>
            </View>
          )}
        ></SwiperFlatList>

        {/* <Button style={button} 
          onPress={onContinue}>
            Continue
          </Button> */}
      </View>
      <TouchableOpacity
        onPress={() => {
          const next = (num + 1) % 4;
          setNum(next);
          ref.current.scrollToIndex({ index: next, animated: true });
          console.log("\n\n\n\n next::", next);
          if (next === 3) {
            refRBSheet.current.open();
          }
        }}
        style={[
          button,
          {
            position: "absolute",
            top: responsiveHeight(95),
          },
        ]}
      >
        <Text
          style={{
            fontFamily: FontFamily.Bold,
            alignSelf: "center",
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
      {num === 3 ? (
        <View
          style={{
            position: "absolute",
            alignSelf: "center",
            top: responsiveHeight(20),
          }}
        >
          <Image
            style={image}
            resizeMethod="resize"
            resizeMode="contain"
            source={require("@Images/logo.png")}
          />
        </View>
      ) : null}
      {/* </Screen> */}
      <RBSheet
        ref={refRBSheet}
        closeOnPressBack={false}
        onClose={() => {
          refRBSheet.current.open();
          console.log("closed");
        }}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
        customModalProps={{
          animationType: "slide",
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}
      >
        <View
          style={{
            height: responsiveHeight(20),
          }}
        >
          <TouchableOpacity
            onPress={() => {
              refRBSheet.current.close();

              props.navigation.navigate("Login");
            }}
            style={[
              button,
              {
                backgroundColor: Colors.background,
                marginTop: responsiveHeight(5),
              },
            ]}
          >
            <Text style={btnText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              button,
              {
                // backgroundColor: Colors.background,
                marginTop: responsiveHeight(5),
              },
            ]}
          >
            <Text
              style={[
                btnText,
                {
                  color: Colors.background,
                },
              ]}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  );
};

export default Welcome;
