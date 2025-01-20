import React, { useRef, useState } from "react";
import {} from "react-native";

const useService = (props) => {
  const [flag, setFlag] = useState(false);
  const [imageArray, setImageArray] = useState([
    {
      image: require("@Images/memberShip.png"),
      text: "Membership",
    },
    {
      image: require("@Images/bookTable.png"),
      text: "Book A Table",
    },

    {
      image: require("@Images/takeOut.png"),
      text: "Takeout",
    },
  ]);
  const [memberShip, setMemberShip] = useState([
    {
      amount: "100",
      dicount: "10%",
    },
    {
      amount: "",
      dicount: "20%",
    },

    {
      amount: "Takeout",
      dicount: "30%",
    },
  ]);

  return {
    imageArray,
    flag,
    setFlag,
    memberShip,
    setMemberShip,
  };
};

export default useService;
