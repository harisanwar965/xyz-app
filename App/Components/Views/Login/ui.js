import React from "react";
import useService from "./service";
import useStyles from "./styles";
import {
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Button } from "@Molecules";
import { Screen } from "@Templates";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Colors, FontFamily } from "Theme";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { CountryPicker } from "react-native-country-codes-picker";
import Toast from "react-native-simple-toast";
const Login = (props) => {
  const {
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
  } = useService(props);
  const validateEmail = (text) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(text)) {
      setEmail(text); // Clear error if valid
    } else {
      Toast.show("Please enter a valid email address.");
    }
    setEmailTest(text);
  };
  const { button, root, text, inputStyle, textView, topImage, subText } =
    useStyles();
  return (
    <Screen
      viewStyle={{
        backgroundColor: signUp === true ? Colors.background : "white",
      }}
    >
      {/* <StatusBar backgroundColor={Colors.background}></StatusBar> */}
      {signUp === false ? (
        signFlag === true ? (
          <View style={root}>
            <Image
              style={topImage}
              resizeMethod="resize"
              resizeMode="contain"
              source={require("@Images/logo.png")}
            />
            <Text style={[text, { alignSelf: "center" }]}>Welcome Back!</Text>
            <Text style={subText}>
              Enter your registered account to sign in
            </Text>
            <Text
              style={[
                text,
                {
                  marginLeft: responsiveWidth(5),
                  marginTop: responsiveHeight(2),
                },
              ]}
            >
              Email
            </Text>
            <TextInput
              style={inputStyle}
              placeholder="Enter your email address"
              placeholderTextColor={Colors.border}
            ></TextInput>
            <Text
              style={[
                text,
                {
                  marginLeft: responsiveWidth(5),
                  marginTop: responsiveHeight(2),
                },
              ]}
            >
              Password
            </Text>
            <TextInput
              style={inputStyle}
              placeholder="Enter your password"
              placeholderTextColor={Colors.border}
            ></TextInput>
            <Button text={"Sign in with Email"}></Button>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                marginTop: responsiveHeight(2),
              }}
            >
              <Text
                style={{
                  fontSize: responsiveFontSize(1.4),
                  fontFamily: FontFamily.SemiBold,
                  alignSelf: "center",
                }}
              >
                Don't have any account?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setSignFlag(false);
                }}
              >
                <Text
                  style={[
                    text,
                    {
                      fontSize: responsiveFontSize(1.6),
                      color: Colors.background,
                    },
                  ]}
                >
                  SignUp
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={root}>
            <Icon
              onPress={() => {
                setSignFlag(true);
              }}
              name={"arrow-left"}
              size={30}
              style={{
                marginTop: responsiveHeight(2),
                marginLeft: responsiveWidth(2),
              }}
              color={Colors.background}
            ></Icon>
            <Text
              style={[
                text,
                {
                  alignSelf: "center",
                  color: "black",
                  fontSize: responsiveFontSize(2.5),
                },
              ]}
            >
              Create an Account
            </Text>
            <Text
              style={[
                text,
                {
                  alignSelf: "center",
                  color: "#131415",
                  fontFamily: FontFamily.Regular,
                  marginTop: responsiveHeight(2),
                },
              ]}
            >
              Enter your details to continue to proceed to your account
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text
                  style={[
                    text,
                    {
                      marginLeft: responsiveWidth(5),
                      marginTop: responsiveHeight(2),
                    },
                  ]}
                >
                  First Name
                </Text>
                <TextInput
                  value={fname}
                  onChangeText={setFName}
                  style={[
                    inputStyle,
                    {
                      width: responsiveWidth(40),
                      alignSelf: "flex-start",
                      marginLeft: responsiveWidth(5),
                    },
                  ]}
                  placeholder="Enter first name"
                  placeholderTextColor={Colors.border}
                ></TextInput>
              </View>
              <View>
                <Text
                  style={[
                    text,
                    {
                      marginLeft: responsiveWidth(5),
                      marginTop: responsiveHeight(2),
                    },
                  ]}
                >
                  Last Name
                </Text>
                <TextInput
                  value={lname}
                  onChangeText={setLName}
                  style={[
                    inputStyle,
                    {
                      width: responsiveWidth(40),
                      alignSelf: "flex-start",
                      marginLeft: responsiveWidth(5),
                    },
                  ]}
                  placeholder="Enter last name"
                  placeholderTextColor={Colors.border}
                ></TextInput>
              </View>
            </View>
            <Text
              style={[
                text,
                {
                  marginLeft: responsiveWidth(5),
                  marginTop: responsiveHeight(2),
                },
              ]}
            >
              Phone
            </Text>
            <View style={textView}>
              <TouchableOpacity
                onPress={() => setShow(true)}
                style={{
                  paddingHorizontal: responsiveWidth(2.5),
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignSelf: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: responsiveFontSize(2),
                    }}
                  >
                    {countryCode?.flag}
                  </Text>
                  <Text
                    style={{
                      fontSize: responsiveFontSize(2),
                    }}
                  >
                    {countryCode?.dial_code}
                  </Text>
                  <Icon name={"chevron-down"} size={20}></Icon>
                </View>
              </TouchableOpacity>
              <TextInput
                value={phoneTest}
                onChangeText={(text) => {
                  console.log("\n\n\n text lengthis::", text.length);
                  if (text.length <= 9) {
                    Toast.show("Phone number is not valid");
                    setPhoneTest(text);
                  } else {
                    console.log(
                      "\n\n\n final phone number iss::",
                      countryCode.dial_code + text
                    );
                    setPhone(countryCode.dial_code + text);
                  }
                }}
                keyboardType={"phone-pad"}
                style={[
                  inputStyle,
                  {
                    borderColor: Colors.foreground,
                    fontSize: responsiveFontSize(2),
                    alignSelf: "center",
                    marginTop: 0,
                    width: responsiveWidth(67),
                  },
                ]}
                placeholderTextColor={Colors.border}
              ></TextInput>
            </View>
            <Text
              style={[
                text,
                {
                  marginLeft: responsiveWidth(5),
                  marginTop: responsiveHeight(2),
                },
              ]}
            >
              Email
            </Text>
            <TextInput
              value={emailTest}
              onChangeText={validateEmail}
              style={[
                inputStyle,
                // {
                //   width: responsiveWidth(40),
                //   alignSelf: "flex-start",
                //   marginLeft: responsiveWidth(5),
                // },
              ]}
              placeholder="Enter Email address"
              keyboardType={"email-address"}
              placeholderTextColor={Colors.border}
            ></TextInput>
            <Text
              style={[
                text,
                {
                  marginLeft: responsiveWidth(5),
                  marginTop: responsiveHeight(2),
                },
              ]}
            >
              Password
            </Text>
            <View style={[textView, { alignItems: "center" }]}>
              <TextInput
                value={password}
                onChangeText={setPassword}
                style={[
                  inputStyle,
                  {
                    width: responsiveWidth(75),
                    alignSelf: "flex-start",
                    marginLeft: responsiveWidth(0),
                    marginTop: 0,
                    borderColor: Colors.foreground,
                  },
                ]}
                placeholder="Min. 8 characters"
                placeholderTextColor={Colors.border}
                secureTextEntry={showPass}
              ></TextInput>
              <TouchableOpacity style={{ marginLeft: responsiveWidth(5) }}>
                <Icon
                  onPress={() => {
                    setShowPass(!showPass);
                  }}
                  name={showPass === true ? "eye" : "eye-off"}
                  color={Colors.grey}
                  size={25}
                  style={{ alignSelf: "center" }}
                ></Icon>
              </TouchableOpacity>
            </View>
            <Text
              style={[
                text,
                {
                  marginLeft: responsiveWidth(5),
                  marginTop: responsiveHeight(2),
                },
              ]}
            >
              Confirm Password
            </Text>
            <View style={[textView, { alignItems: "center" }]}>
              <TextInput
                value={conPassword}
                onChangeText={setConPassword}
                style={[
                  inputStyle,
                  {
                    width: responsiveWidth(75),
                    alignSelf: "flex-start",
                    marginLeft: responsiveWidth(0),
                    marginTop: 0,
                    borderColor: Colors.foreground,
                  },
                ]}
                placeholder="Min. 8 characters"
                placeholderTextColor={Colors.border}
                secureTextEntry={showConf}
              ></TextInput>
              <TouchableOpacity style={{ marginLeft: responsiveWidth(5) }}>
                <Icon
                  onPress={() => {
                    setShowConf(!showConf);
                  }}
                  name={showConf === true ? "eye" : "eye-off"}
                  color={Colors.grey}
                  size={25}
                  style={{ alignSelf: "center" }}
                ></Icon>
              </TouchableOpacity>
            </View>
            <Text
              style={[
                text,
                {
                  alignSelf: "center",
                  color: "#131415",
                  fontFamily: FontFamily.Regular,
                  marginTop: responsiveHeight(2),
                  width: responsiveWidth(90),
                },
              ]}
            >
              By starting my application , I agree to MyNawaab's Terms of
              Service and Privacy Policy
            </Text>
            <Button
              text={"Sign Up"}
              onPress={() => {
                props.navigation.navigate("Home");

                if (
                  lname === "" ||
                  fname === "" ||
                  phone === "" ||
                  password === "" ||
                  conPassword === ""
                ) {
                  Toast.show("Please fill all fields!");
                } else if (email === "") {
                  Toast.show("Please enter a valid email ");
                } else if (password === conPassword) {
                  setSignUp(true);
                  setTimeout(() => {
                    setSignUp(false);
                    props.navigation.navigate("Home");
                  }, 3000);
                  console.log("\n\n\n\n signup", signUp);
                } else {
                  Toast.show("not same ");
                }
              }}
            ></Button>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
              }}
            >
              <Text
                style={[
                  text,
                  {
                    alignSelf: "center",
                    color: "#131415",
                    fontFamily: FontFamily.Regular,
                    marginTop: responsiveHeight(2),
                    // width: responsiveWidth(80),
                  },
                ]}
              >
                Already have an account?
              </Text>
              <TouchableOpacity
                style={{ alignSelf: "center", marginTop: responsiveHeight(2) }}
                onPress={() => {
                  setSignFlag(true);
                }}
              >
                <Text
                  style={[
                    text,
                    {
                      fontSize: responsiveFontSize(1.6),
                      color: Colors.background,
                    },
                  ]}
                >
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      ) : (
        <View
          style={{
            justifyContent: "center",
            alignSelf: "center",
            height: "90%",
          }}
        >
          <Image
            source={require("@Images/Created.png")}
            style={{
              alignSelf: "center",
            }}
          ></Image>
          <Text
            style={[
              text,
              {
                // alignSelf: "center",
                color: "white",
                fontSize: responsiveFontSize(2.5),
                width: responsiveWidth(50),
                textAlign: "center",
                marginTop: responsiveHeight(3),
              },
            ]}
          >
            Account has been created successfully!
          </Text>

          {/* <Button onPress={setSignUp(false)}></Button> */}
        </View>
      )}

      <CountryPicker
        show={show}
        pickerButtonOnPress={(item) => {
          console.log("\n\n\n item", item);
          setCountryCode(item);
          setShow(false);
        }}
      />
    </Screen>
  );
};

export default Login;
