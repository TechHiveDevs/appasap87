import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import globalStyles from "../../../Theme/global.styles";
import Form from "../../Form/Form";
import Input from "../../Form/Input";
import { useRegisterMutation } from "../../../API/api";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import theme from "../../../Theme/paper.theme";

// =================================================================

export default function RegisterScreen() {
  // ------------------------------

  const { navigate } = useNavigation();
  const [register] = useRegisterMutation();

  const defaultValues = {
    name: "mario",
    email: "mario@mario.com",
    password: "mario",
    confirmPassword: "mario",
    type: "Resident",
    phone: "01201200777",
    streetName: "mario",
    blockNumber: "12",
    unitNumber: "23",
    compoundId: 0,
    active: false,
  };

  // ------------------------------

  const onSubmit = async (values: any) => {
    if (values.confirmPassword !== values.password) {
      return Toast.show({ type: "error", text1: "passwords do not match" });
    }
    const { data }: any = await register(values);
    if (data?.user?.id) {
      Toast.show({ type: "success", text1: "Successfully registered" });
      // @ts-ignore
      return navigate("login");
    }
  };

  // ------------------------------

  // Dont Delete Commented Parts
  /*
  const Depend = (props) => {
    const userType = props.getValues()?.userType;
    if (userType !== "Student") return null;
    return <Input name="phone" label="phone" icon="phone" {...props} />;
  };
  */

  // ------------------------------

  return (
    <SafeAreaView style={globalStyles.screen}>
      <Form
        title=""
        {...{
          defaultValues,
          onSubmit,
          cancelButton: false,
          submitText: "register",
          submitIcon: "account-plus",
        }}
      >
        <Input name="name" label="name" icon="account" />
        <Input name="email" label="email" icon="email" />
        <Input name="password" label="password" secureTextEntry />
        <Input
          name="confirmPassword"
          label="confirmPassword"
          secureTextEntry
          icon="lock-check"
        />
        <Input name="phone" label="phone" icon="cellphone" />
        <Input name="streetName" label="streetName" icon="home-group" />
        <Input name="blockNumber" label="blockNumber" icon="home" />
        <Input name="unitNumber" label="unitNumber" icon="key" />
        {/* <Select name="level" placeholder="level" choices={levels} /> */}
        {/* <Depend /> */}
      </Form>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  buttonStyle: {
    width: wp(90),
    marginHorizontal: wp(1),
    marginVertical: hp(2),
    borderWidth: 1,
    borderRadius: 15,
    borderColor: theme.colors.placeholder,
    backgroundColor: "#f2f2f2",
  },
});
