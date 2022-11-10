import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import { I18n } from "i18n-js";
import theme from "../Theme/paper.theme";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
// ========================================================

const hiddenStatusBar = ["login"];

// ========================================================

export default function MyStatusBar({
  navigation: { goBack, openDrawer },
  route: { name, params },
}: any) {
  const i18n = new I18n();

  if (hiddenStatusBar.includes(name)) return null;

  let back = true;
  let drawer = false;
  let title = params?.title ? params.title : name;

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  if (!params?.title) {
    title = `${title} ${params?.id ? " - " + params?.id : ""}`;
  }

  if (name === "home" || name == "HomeTabNavigator") title = "App Asap";

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  if (
    ["HomeTabNavigator", "exploreGroups", "home", i18n.t("home")].includes(name)
  ) {
    back = false;
    drawer = true;
  }

  if (["Tabs", "login"].includes(name)) back = false;

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
  // {menu ? <MenuBar /> : false}

  return (
    // @ts-ignore
    <Appbar.Header style={styles.header}>
      {back && (
        // @ts-ignore
        <Appbar.BackAction onPress={goBack} color={theme.colors.primary} />
      )}
      {drawer && (
        // @ts-ignore
        <Appbar.Action
          size={30}
          icon="menu"
          onPress={openDrawer}
          color={theme.colors.primary}
        />
      )}
      {/* @ts-ignore */}
      <Appbar.Content title={"App Asap"} titleStyle={styles.content} />
    </Appbar.Header>
  );
}

// ========================================================

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.white,
    // backgroundColor: "red",
  },
  content: {
    fontSize: 22,
    fontWeight: "500",
    color: theme.colors.primary,
    marginLeft: -wp(7),
  },
});
