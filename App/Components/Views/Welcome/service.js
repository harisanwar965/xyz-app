import React, { useRef, useState } from "react";
import {} from "react-native";

const useService = (props) => {
  const [num, setNum] = useState(0);
  const [next, setNext] = useState(0);

  const refRBSheet = useRef();
  const [imageArray, setImageArray] = useState([
    {
      image: require("@Images/image1.png"),
      text: "Great Food Near You",
      btmText: "Order with friend and family to make better food time",
    },
    {
      image: require("@Images/image2.png"),
      text: "Great Food Near You",
      btmText: "Order with friend and family to make better food time",
    },

    {
      image: require("@Images/image3.png"),
      text: "Great Food Near You",
      btmText: "Order with friend and family to make better food time",
    },
    {
      image: require("@Images/image4.png"),
      // text: "Great Food Near You",
      // btmText: "Order with friend and family to make better food time",
    },
  ]);
  const onContinue = () => {
    props.navigation.navigate("User");
  };

  return {
    onContinue,
    imageArray,
    setImageArray,
    num,
    setNum,
    refRBSheet,
    next,
    setNext,
  };
};

export default useService;
