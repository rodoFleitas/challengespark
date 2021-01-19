import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";

const Register = () => {
  const classes = useStyles();

  const initialValues = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    document: "",
    home: "",
  };

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const validation = Yup.object({
    name: Yup.string()
      .min(3, "Minimo 3 caracteres")
      .max(30, "Tu nombre es espectacular, pero resumamos.")
      .required("Este campo es obligatorio."),
    lastName: Yup.string()
      .min(3, "Minimo 3 caracteres")
      .max(30, "Tu apellido es espectacular, pero resumamos.")
      .required("Este campo es obligatorio."),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Ingrese un correo valido"
      )
      .required("Este campo es obligatorio."),
    password: Yup.string()
      .min(8, "Minimo 8 caracteres")
      .max(16, "Contraseña segura pero ya es demasiado.")
      .required("Se requiere una contraseña para continuar."),
    document: Yup.number()
      .min(0, "Minimo 7 numeros")
      .max(9999999999, "Aún dudamos de que exista ese documento")
      .required("Este campo es obligatorio."),
    home: Yup.string()
      .min(3, "Minimo 3 caracteres")
      .max(250, "Excelente descripcion, pero resumamos.")
      .required("Este campo es obligatorio."),
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Registrarse
        </Typography>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={validation}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
                    id="name"
                    name="name"
                    type="name"
                    label="Nombre(s)"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    autoComplete="name"
                    autoFocus
                    helperText={<ErrorMessage name="name" />}
                    error={errors.name && touched.name ? true : false}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                <Field
                    as={TextField}
                    id="lastName"
                    name="lastName"
                    type="lastName"
                    label="Apellido(s)"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    autoComplete="lname"
                    helperText={<ErrorMessage name="lastName" />}
                    error={errors.lastName && touched.lastName ? true : false}
                  />
                </Grid>
                <Grid item xs={12}>
                <Field
                    as={TextField}
                    id="document"
                    name="document"
                    type="document"
                    label="Documento"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    helperText={<ErrorMessage name="document" />}
                    error={errors.document && touched.document ? true : false}
                  />
                </Grid>
                <Grid item xs={12}>
                <Field
                    as={TextField}
                    id="home"
                    name="home"
                    type="home"
                    label="Dirección"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    multiline
                    helperText={<ErrorMessage name="home" />}
                    error={errors.home && touched.home ? true : false}
                  />
                </Grid>
                <Grid item xs={12}>
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
                    helperText={<ErrorMessage name="email" />}
                    error={errors.email && touched.email ? true : false}
                  />
                </Grid>
                <Grid item xs={12}>
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
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="primary"
                className={classes.submit}
              >
                Registrarse
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
    backgroundColor: "#3A3635",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default Register;
