// @ts-nocheck
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import theme from "../Theme/paper.theme";
import MyStatusBar from "../Components/MyStatusBar";

// -------------------------------------------------------

import HomeScreen from "../Components/GenericScreens/Home/Home.screen";
// import HomeScreen from "../Entities/Home/Home.screen";
// import HomeScreen from "../Components/GenericScreens/Handlers"
// import Profile from "../Components/GenericScreens/Profile/Profile.screen";

// -------------------------------------------------------

const Tab = createBottomTabNavigator();

// -------------------------------------------------------

const screenOptions = ({ route: { name } }: any) => ({
  headerShown: false,
  swipeEnabled: true,
  // @ts-ignore
  header: (props: any) => <MyStatusBar {...props} />,
  tabBarIcon: ({ color }: any) => {
    let iconName = "home";

    if (name === "home") {
      iconName = "home";
    } else if (name === "invite") {
      iconName = "message-arrow-right-outline";
    } else if (name === "qrcode") {
      iconName = "qrcode-scan";
    } else if (name === "profile") {
      iconName = "account";
    } else if (name === "facilities") {
      iconName = "tools";
    } else {
      iconName = "book";
    }

    // @ts-ignore
    return <MaterialCommunityIcons name={iconName} size={26} color={color} />;
  },
  tabBarActiveTintColor: theme.colors.primary,
  tabBarInactiveTintColor: "gray",
  tabBarStyle: { height: hp(12) },
  tabBarItemStyle: { paddingTop: hp(0.5), paddingBottom: hp(1.5) },
  tabBarHideOnKeyboard: true,
});

// -------------------------------------------------------

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name={"home"} component={HomeScreen} />
      {/* <Tab.Screen name={"profile"} component={Profile} /> */}
    </Tab.Navigator>
  );
}
