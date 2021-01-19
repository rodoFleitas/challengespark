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
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useStyles } from "./styles";
import { useDispatch } from "react-redux";
import { logInUser } from "../Redux/Action/myUserAction";
import { validationLogin } from "./validations";

const Login = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const initialValues = { email: "", password: "" };

  const onSubmit = (values, { resetForm }) => {
    dispatch(logInUser(values));
    resetForm();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paperlogin}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar Sesion
        </Typography>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={validationLogin}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form className={classes.form}>
              <Field
                as={TextField}
                id="email"
                name="email"
                type="email"
                label="Correo"
                variant="outlined"
                margin="normal"
                fullWidth
                autoComplete="email"
                autoFocus
                helperText={<ErrorMessage name="email" />}
                error={errors.email && touched.email ? true : false}
              />
              <Field
                as={TextField}
                id="password"
                type="password"
                name="password"
                label="Contraseña"
                variant="outlined"
                margin="normal"
                fullWidth
                autoComplete="current-password"
                helperText={<ErrorMessage name="password" />}
                error={errors.password && touched.password ? true : false}
              />
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="primary"
                className={classes.submit}
              >
                Iniciar
              </Button>
              <Link href="/register" variant="body2">
                {"¿No tienes una cuenta? Registrate"}
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default Login;
