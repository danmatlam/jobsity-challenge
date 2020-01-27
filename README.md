This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Como Funciona?

Debes tener instalado [Node js](https://nodejs.org/es/).


### `npm install`
Debe ejecutar este comando para instalar las dependncias antes de ejecutar el codigo.

### `npm run start`
Ejecuta  la app en modo desarrollo
en la dirección [http://localhost:3000](http://localhost:3000) to view it in the browser.


The page will reload if you make edits.<br />
You will also see any lint errors in the console.




## Manifiesto de desarrollo

En el presente documento se detallan las consideraciones a seguir para este proyecto:

### Consideraciones generales

1.  La escritura de variables y funciones se escribirán con la notación [CamelCase](https://es.wikipedia.org/wiki/Camel_case) considerando para sus variantes:

    a. lowerCamelCase: nombres de variables, funciones, incluidos modelos, procedimientos y funciones en la capa de base de datos.

    _EJEMPLO_

    ```javascript
    let usuarioSession = 'thianlopezz';
    const getUsuario = () => console.log(usuarioSession);
    getUsuario();
    ```

    b. UpperCamelCase: nombres de clases, componentes de React (functional y class components) y sus resepectivos archivos.

    _EJEMPLO_

    ```javascript
    import React from 'react';
    const Hola = (props) => {
        return (<div>'HELLO WORLD!'<div>);
    };
    export default Hola;
    ```

2.  Las constantes que contengan información de configuración, variables de entorno, acciones de reducers(React), deberán seguir la notación [SCREAMING_SNAKE_CASE](https://en.wikipedia.org/wiki/Snake_case).

    ```javascript
    const USUARIO_GET = 'USUARIO_GET';
    const URL_CORREO = process.ENV.URL_CORREO;
    ```

### React

## Los nombres de los componentes y sus archivos se escribirán

## Componentes de listax

Los componentes de listas son componentes en el que vamos a enlistar (valga la redundacia) los modelos de datos.

1. Deben tener como nombre el nombre del modelo seguido de la palabra "List", siguiendo la regla 1b de las [consideraciones generales](#consideraciones-generales).

### Reducers

1. Considerar siempre un (1) reducer por modelo de datos.

2. Los nombres de los reducer deben definirse con el nombre del modelo en singular seguido de la palabra "Reducer".

#### EJEMPLO

usuarioReducer.js
planReucer.js

2. En reducers/index.js los estados deben definirse con el nombre del modelo en singular seguido de la palabra "state"

#### EJEMPLO

usuarioState
planState

3. El nombre de las acciones siempre empezarán con el nombre del model de datos.

#### EJEMPLO

```javascript
const USUARIO_GET = 'USUARIO_GET';
const USUARIO_GET_SUCCESS = 'USUARIO_GET_SUCCESS';
const USUARIO_GET_ERROR = 'USUARIO_GET_ERROR';

const USUARIO_SAVE = 'USUARIO_SAVE';
const USUARIO_SAVE_SUCCESS = 'USUARIO_SAVE_SUCCESS';
const USUARIO_SAVE_ERROR = 'USUARIO_SAVE_ERROR';
```

4. Si en el reducer existe una variación de obtención de datos, esta no deberá tener su respectiva descripción de _SUCCESS_ O _ERROR_, sino que se manejarán a través de el GET simple.

   #### EJEMPLO

   ```javascript
   const USUARIO_GET = 'USUARIO_GET';
   const USUARIO_GET_BY_NAME = 'USUARIO_GET_BY_NAME'; // Variación de consulta
   const USUARIO_GET_SUCCESS = 'USUARIO_GET_SUCCESS';
   const USUARIO_GET_ERROR = 'USUARIO_GET_ERROR';

   const USUARIO_SAVE = 'USUARIO_SAVE';
   const USUARIO_SAVE_SUCCESS = 'USUARIO_SAVE_SUCCESS';
   const USUARIO_SAVE_ERROR = 'USUARIO_SAVE_ERROR';
   ```
