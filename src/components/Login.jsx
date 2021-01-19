import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  CssBaseline,
  TextField,
  Typography,
  Container,
  Button,
  Avatar,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";


const Login = () => {
  const classes = useStyles();

  const initialValues = { email: "", password: "" };

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const validation = Yup.object({
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Ingrese un correo valido"
      )
      .required("Este campo es obligatorio."),
    password: Yup.string().required(
      "Se requiere la contraseña para continuar."
    ),
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar Sesion
        </Typography>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={validation}
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
                type="text"
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
                Enviar
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#3A3635',
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default Login;
