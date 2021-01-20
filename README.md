# Comenzando

Vamos iniciar clonando el repo de Github.

__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Actualmente las versiónes necesarias son:

 * __Node__: 14.15.4 o mayor
 * __NPM__: 6.14.10 o mayor

Para verificar que versión tienen instalada:

> node -v
>
> npm -v

### Una vez clonado

Ejecutar `npm install` desde la consola sobre el proyecto, de igual manera situarse dentro de la carpeta `/api` y ejecutar un `npm install` para instalar las dependencias del back-end. 

## BoilerPlate

El boilerplate cuenta con las carpetas creadas a partir de `create-react-app` ademas de incorporar una más denominada `api`. En esta carpeta estará el código del back-end.

En `api` vas a tener que crear un archivo llamado: `.env` que tenga la siguiente forma:

```
ACCESS_TOKEN_SECRET = 246763eb8578a52383296f2a5ae888e3264d276de30cfc3c9228caf63403f79ece274c14c6db14f673091047376d9e5a6c3c8d16e3c932b8c254fabb92de9fd5
URI = mongodb+srv://rodoFleitas:12345@cluster0.qequa.mongodb.net/myfirstdb?retryWrites=true&w=majority
```

Este archivo va ser ignorado por github, ya que contiene información sensible (las credenciales) por el momento no es nada, pero si la app fuera mas grande y se llevara a producción estos datos no tienen que estar a la vista.


### Iniciar servidor y React APP

Ejecutar `npm start` desde la consola sobre el proyecto, de igual manera situarse dentro de la carpeta `/api` y ejecutar un `npm start` para iniciar el back-end. 

### Usuario default admin

```
email: admin@gmail.com
password: admin101
```

### Usuarios no Autenticados

Un Visitante anónimo solo puede ver la vista de iniciar sesión o registrarse.


### Usuarios Autenticados que no sean admin

Los usuarios que hayan creado su cuenta, podrán solo ver información de su perfil.


### Admin

Los usuarios administradores pueden manejar la informacion de los demas usuarios, como editarlos, ver sus conexiones en la ultima semana y eliminarlos.


## Dependencias Utilizadas

### Back-End

> bcrypt
>
> express
>
> express session
>
> jsonwebtoken
>
> moongoose ORM
>
> passport
>
> dotenv

### Front-End

> react 
>
> redux
>
> axios
>
> material-ui
>
> formik
>
> yup
>
> highcharts
>
> moment

