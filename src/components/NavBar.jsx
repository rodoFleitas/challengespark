import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
} from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../Redux/Action/myUserAction";

const NavBar = ({ isAuth }) => {
  const classes = useStyles();
  const [auth, setAuth] = useState(isAuth);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch();

  const name = useSelector((state) => state.myuser.userLog);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={classes.nav}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {auth ? `${name.name} ${name.lastname}` : `Bienvenido`}
          </Typography>
          {auth ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <ExitToAppIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={() => dispatch(logOutUser())}>
                  Cerrar Sesion
                </MenuItem>
              </Menu>
            </div>
          ) : null}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  nav: { color: "#ffffff", backgroundColor: "#000000" },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default NavBar;
