import { useGetList, useRedirect, useTranslate } from "react-admin";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";

// =================================================================

export default function NotificationBell() {
  const translate = useTranslate();
  const redirect = useRedirect();
  // const { total } = useGetList("request", {
  //   filter: {
  //     requestStatus: "Pending",
  //   },
  // });

  // -------------------------------

  return (
    <Tooltip title={translate("other.notifications")}>
      <IconButton
        size="large"
        color="inherit"
        // onClick={() => redirect("/request")}
      >
        {/* <Badge color="primary" badgeContent={total} max={999}> */}
        {/* <NotificationsIcon />
        </Badge> */}
      </IconButton>
    </Tooltip>
  );
}
