import {} from "react-native";
import React, { useEffect, useState } from "react";
import { dummy } from "Api";
import { useDispatch, useSelector } from "react-redux";
import { setLoginSlice } from "Store/Redux/Users";

const useService = (props) => {
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState(1);
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneTest, setPhoneTest] = useState("");

  const [email, setEmail] = useState("");
  const [emailTest, setEmailTest] = useState("");

  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");

  const [signFlag, setSignFlag] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConf, setShowConf] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState({
    code: "GB",
    dial_code: "+44",
    flag: "🇬🇧",
  });

  const user = useSelector((state) => state.Users?.data);

  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return {
    data,
    setData,
    userId,
    setUserId,
    user,
    signFlag,
    setSignFlag,
    show,
    setShow,
    countryCode,
    setCountryCode,
    showPass,
    setShowPass,
    showConf,
    setShowConf,
    fname,
    setFName,
    lname,
    setLName,
    phone,
    setPhone,
    email,
    setEmail,
    password,
    setPassword,
    conPassword,
    setConPassword,
    signUp,
    setSignUp,
    emailTest,
    setEmailTest,
    phoneTest,
    setPhoneTest,
  };
};

export default useService;
