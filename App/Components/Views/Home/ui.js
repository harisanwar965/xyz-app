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
  FlatList,
} from "react-native";
import { Screen } from "@Templates";

import Swiper from "react-native-swiper";
import { Button, Header } from "Components/Molecules";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import SwiperFlatList from "react-native-swiper-flatlist";
import { Colors, FontFamily } from "Theme";
import RBSheet from "react-native-raw-bottom-sheet";
import { Shadow } from "react-native-shadow-2";
const Home = (props) => {
  const { imageArray, flag, setFlag } = useService(props);
  const { container, image, text, subImage, mainText } = useStyles();
  const [currentIndex, setCurrentIndex, memberShip, setMemberShip] =
    useState(0);
  const ref = useRef(null);
  const renderItem = ({ item, index }) => {
    console.log("\n\n\n item", item);
    return (
      <TouchableOpacity
        onPress={() => {
          setFlag(true);
        }}
      >
        <Image source={item?.image} style={subImage}></Image>
        <Text
          style={[
            text,
            {
              color: Colors.text,
              fontFamily: FontFamily.Bold,
              position: "absolute",
              top: responsiveHeight(10),
              fontWeight: 900,
            },
          ]}
        >
          {item?.text}
        </Text>
      </TouchableOpacity>
    );
  };
  const renderMembershipItem = ({ item, index }) => {
    console.log("\n\n\n item", item);
    return (
      <TouchableOpacity onPress={() => {}}>
        <Text
          style={[
            text,
            {
              color: Colors.text,
              fontFamily: FontFamily.Bold,
              position: "absolute",
              top: responsiveHeight(10),
              fontWeight: 900,
            },
          ]}
        >
          {item?.amount}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.border,
      }}
    >
      {/* <Screen> */}
      <StatusBar translucent backgroundColor={"transparent"}></StatusBar>
      <View
        style={[
          container,
          {
            // backgroundColor: Colors.border,
          },
        ]}
      >
        {flag === false ? (
          <>
            <Image
              style={[
                image,
                {
                  // opacity: 0.8,
                },
              ]}
              resizeMethod="contain"
              // resizeMode="contain"
              source={require("@Images/main.png")}
              borderBottomRightRadius={20}
              borderBottomLeftRadius={20}
            />
            <Image
              source={require("@Images/logoWhite.png")}
              style={{
                position: "absolute",
                top: responsiveHeight(20),
                alignSelf: "center",
              }}
            ></Image>
            <View
              style={{
                position: "absolute",
                height: responsiveHeight(40),
                width: responsiveWidth(100),
              }}
            >
              <Text style={text}>Welcome</Text>
              <Text
                style={[
                  text,
                  {
                    fontFamily: FontFamily.Regular,
                    marginTop: responsiveHeight(0.5),
                  },
                ]}
              >
                David Googins
              </Text>
            </View>
            <FlatList
              data={imageArray}
              renderItem={renderItem}
              style={{ alignSelf: "center" }}
            ></FlatList>
          </>
        ) : (
          <View>
            <Header text={"Join Pro"}></Header>
            <FlatList
              data={memberShip}
              renderItem={renderMembershipItem}
            ></FlatList>

            <Button
              text={"Buy Now"}
              onPress={() => {
                setFlag(false);
              }}
            ></Button>
          </View>
        )}
      </View>
      <View
        style={{
          height: 20,
        }}
      ></View>
      {/* </Screen> */}
    </View>
  );
};

export default Home;
