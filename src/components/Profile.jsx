import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  CssBaseline,
  TextField,
  Typography,
  Container,
  Button,
  Avatar,
  Link,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import AccountBoxOutlinedIcon from "@material-ui/icons/AccountBoxOutlined";

const Profile = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.myuser.userLog);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paperlogin}>
        <AccountBoxOutlinedIcon />
        <h2> {`Bienvenido de Nuevo ${user.name} ${user.lastname}`}</h2>
        <p>Sus datos son :</p>
        <ul>
            <li>{user.email}</li>
            <li>{user.document}</li>
            <li>{user.home}</li>
        </ul>
      </div>
    </Container>
  );
};

export default Profile;
