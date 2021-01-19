import * as Yup from "yup";

export const validationRegister = Yup.object({
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


  export const validationLogin = Yup.object({
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

  export const validationEdit = Yup.object({
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
    document: Yup.number()
      .min(0, "Minimo 7 numeros")
      .max(9999999999, "Aún dudamos de que exista ese documento")
      .required("Este campo es obligatorio."),
    home: Yup.string()
      .min(3, "Minimo 3 caracteres")
      .max(250, "Excelente descripcion, pero resumamos.")
      .required("Este campo es obligatorio."),
  });