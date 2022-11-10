import * as React from "react";
import {
  AppBar,
  Logout,
  UserMenu,
  ToggleThemeButton,
  defaultTheme,
} from "react-admin";
import { Box, Typography } from "@mui/material";
// import NotificationBell from "./NotificationBell";
// import SwitchLanguage from "./SwitchLanguage";

// ------------------------------------------------

const MyUserMenu = (props: any) => (
  <UserMenu {...props}>
    {/* <SwitchLanguage /> */}
    {/* <ThemeToggler /> */}
    <Logout />
  </UserMenu>
);

// ------------------------------------------------

const darkTheme = { palette: { mode: "dark" } };

const style = {
  backgroundColor: "#013e5a",
  height: 50,
};
// ------------------------------------------------

const MyAppBar = (props: any) => (
  <AppBar {...props} userMenu={<MyUserMenu />} style={style}>
    <Box flex="1">
      <Typography variant="h6" id="react-admin-title"></Typography>
    </Box>
    {/*
     // @ts-ignore */}
    <ToggleThemeButton lightTheme={defaultTheme} darkTheme={darkTheme} />
  </AppBar>
);

// ------------------------------------------------

export default MyAppBar;
