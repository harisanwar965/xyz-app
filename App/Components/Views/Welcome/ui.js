import React, { useRef, useState } from "react";
import useService from "./service";
import useStyles from "./styles";
import { Image, View, TouchableOpacity } from "react-native";
import { Text } from "@Atoms";
import { Screen } from "@Templates";

import Swiper from "react-native-swiper";
import { Button } from "Components/Molecules";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import SwiperFlatList from "react-native-swiper-flatlist";
const Welcome = (props) => {
  const { onContinue, imageArray, setImageArray, num, setNum } =
    useService(props);
  const { container, image, button } = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  return (
    <>
      <Screen>
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
              width: responsiveWidth(2),
              height: responsiveHeight(2),
            }}
            data={imageArray}
            renderItem={({ item, index }) => (
              <View style={[, { width: responsiveWidth(100) }]}>
                <Image
                  style={{
                    height: responsiveHeight(50),
                    width: responsiveWidth(100),
                  }}
                  // resizeMethod="resize"
                  resizeMode="contain"
                  source={item.image}
                />
                <View style={{ alignSelf: "center" }}>
                  <Text>{item.text}</Text>
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
            const next = (num + 1) % 3;
            setNum(next);
            ref.current.scrollToIndex({ index: next, animated: true });
          }}
          style={[
            button,
            {
              position: "absolute",
              top: responsiveHeight(80),
            },
          ]}
        >
          <Text h5 center>
            Continue
          </Text>
        </TouchableOpacity>
      </Screen>
    </>
  );
};

export default Welcome;
