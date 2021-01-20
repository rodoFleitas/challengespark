import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import { useDispatch } from "react-redux";
import { createUser, editUser } from "../Redux/Action/usersAction";
import { validationEdit, validationRegister } from "./validations";
import {useStyles} from './styles'

const FormEditRegister = ({ edit, user, handleClose }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const initialValues = {
    name: edit ? user.name : "",
    lastName: edit ? user.lastName : "",
    email: edit ? user.email : "",
    password: edit ? user.password : "",
    document: edit ? user.document : "",
    home: edit ? user.home : "",
  };

  const onSubmit = (values, { resetForm }) => {
    if (edit) {
      const id = user._id;
      const data = {
        name: values.name,
        lastName: values.lastName,
        email: values.email,
        home: values.home,
        document: values.document,
      };
      dispatch(editUser(id, data));
    } else {
      dispatch(createUser(values));
    }
    resetForm();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paperform}>
        {edit ? (
          <Avatar className={classes.avatar}>
            <EditOutlinedIcon />
          </Avatar>
        ) : (
          <Avatar className={classes.avatar}>
            <PersonAddOutlinedIcon />
          </Avatar>
        )}
        <Typography component="h1" variant="h5">
          {edit ? `Editar datos de ${user.name}` : `Registrarse`}
        </Typography>
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          validationSchema={edit ? validationEdit : validationRegister}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form className={classes.form}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <Field
                    as={TextField}
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
                {!edit ? (
                  <Grid item xs={12}>
                    <Field
                      as={TextField}
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
                ) : null}
              </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="outlined"
                      color="primary"
                      className={classes.submit}
                      onClick={edit? handleClose : null}
                    >
                      {edit? 'Terminar Edición' : 'Registrarse'}
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="secondary"
                      className={classes.submit}
                      onClick={edit? handleClose : () => window.location.replace('/')}
                    >
                      Cancelar
                    </Button>
                  </Grid>
                </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default FormEditRegister;
