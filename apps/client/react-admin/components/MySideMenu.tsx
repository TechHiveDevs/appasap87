import React, { useEffect } from "react";
import { Sidebar, MenuItemLink, useTranslate } from "react-admin";
import GroupIcon from "@mui/icons-material/Group";
import entities from "../../entities/entites";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
// import SettingsIcon from "@mui/icons-material/Settings";
// import SubMenu from "./MySubMenu";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import PasswordIcon from "@mui/icons-material/Password";
// import SearchIcon from "@mui/icons-material/Search";
// import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
// import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

// ------------------------------------------------

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// ------------------------------------------------

export default function MySideMenu(props: any) {
  const translate = useTranslate();

  useEffect(() => {}, []);

  const icons = {
    group: <GroupIcon />,
    video: <YouTubeIcon />,
    post: <ViewTimelineIcon />,
  };

  // ------------------------------------------------
  return (
    <Sidebar
      {...props}
      sx={{
        marginTop: 5,
      }}
    >
      {entities
        ?.filter((e) => !e.hide)
        .map((entity: any, index: any) => {
          const { name, label } = entity;
          return (
            <MenuItemLink
              key={name + "-" + index}
              to={`/${name}`}
              resource={entity}
              primaryText={capitalize(label)}
              // primaryText={translate("menu." + label)}
              // @ts-ignore
              leftIcon={icons[name] ? icons[name] : <GroupIcon />}
            />
          );
        })}
    </Sidebar>
  );
}
