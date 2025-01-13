import React, { useState } from "react";
import {} from "react-native";

const useService = (props) => {
  const [num, setNum] = useState(0);
  const [imageArray, setImageArray] = useState([
    {
      image: require("@Images/logo.png"),
      text: " Get the car to your destination easily",
    },
    {
      image: require("@Images/logo.png"),
      text: " Secure and easy payment method",
    },

    {
      image: require("@Images/logo.png"),
      text: "Give the review depend on your service",
    },
  ]);
  const onContinue = () => {
    props.navigation.navigate("User");
  };

  return { onContinue, imageArray, setImageArray, num, setNum };
};

export default useService;
