import React, { Fragment } from "react";

import {
  List,
  MenuItem,
  ListItemIcon,
  Typography,
  Collapse,
  Tooltip,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslate } from "react-admin";

const useStyles = makeStyles((theme) => ({
  icon: {},
  sidebarIsOpen: {
    "& a": {
      transition: "padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
    },
  },
  sidebarIsClosed: {
    "& a": {
      transition: "padding-left 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
    },
  },
}));

// =====================================================================

const SubMenu = (props) => {
  const [open, setOpen] = React.useState(false);

  const { handleToggle, isOpen, name, icon, children, dense } = props;
  const translate = useTranslate();
  const classes = useStyles();

  const header = (
    <MenuItem
      dense={dense}
      button
      onClick={() => {
        setOpen(!open);
      }}
    >
      <ListItemIcon sx={classes.icon}>
        {open ? <ExpandMoreIcon /> : icon}
      </ListItemIcon>
      <Typography variant="inherit" color="textSecondary">
        {translate(name)}
      </Typography>
    </MenuItem>
  );

  return (
    <Fragment>
      {open ? (
        header
      ) : (
        <Tooltip title={translate(name)} placement="right">
          {header}
        </Tooltip>
      )}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List dense={dense} component="div" disablePadding>
          {children}
        </List>
      </Collapse>
    </Fragment>
  );
};

export default SubMenu;
