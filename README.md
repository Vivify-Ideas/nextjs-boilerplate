# **_VivifyIdeas NextJS boilerplate_**

If you are using our NextJS boilerplate we recommend you use it with our [laravel](https://github.com/Vivify-Ideas/laravel-boilerplate) boilerplate.


## **Start**

### Locally

```
yarn run dev
```

### Docker
Build and run your container locally

```
docker-compose up --build
```


## **Built in functions**

- HTTPS mode in dev
- Redux & Saga
- Formik & Yup
- Immerjs
- Sign in
- Sign up
- Facebook sign in
- Google sign in
- Forgot & reset password
- Internationalization
- Edit profile

## **TBD**

- Change password

## **Code structure and technologies**

For our forms we use [Formik](https://github.com/jaredpalmer/formik), and for validation we use [Yup](https://github.com/jquense/yup).

In components folder there are some examples of our forms, they all use custom text inputs which are located in `components/shared/formFields`, and in `validation` folder you will find some `Yup` validation examples.

    ├── components
    ├──── auth
    ├──── shared
    ├─────── formFields
    ├────────── PasswordInputWithLabel.js
    ├────────── TextInputWithLabel.js
    └── validation


### State Management

For state management we use [React Redux](https://github.com/reduxjs/react-redux) with [Redux Saga](https://github.com/redux-saga/redux-saga) and [Reselect](https://github.com/reduxjs/reselect).

    ├── store
    ├──── actions
    ├──── index.js
    ├──── reducer
    ├──── selectors
    └──── sagas

### Localization

For more details check out [next-i18next](https://github.com/isaachinman/next-i18next).

### Route Guards

There are HOC made for this (`withAuth`, `withGuest`).
You can find examples in `utils/hoc`.

Logged in user is beeing `server side rendered` you can find the code in `pages/_app.js` in `getInitialProps` method.

## **HTTPS Mode**

To run this application in HTTPS mode you will need to generate certificates localy and put them in `certs` folder in root of your project. The required certificate files are `server.key` and `server.ctr`. After that you can run `yarn dev-https` command to run it in HTTPS.