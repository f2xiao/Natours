# Natours

Create a simple tour booking service web with MongoDB, Express and Node.js.
Stacks:
MVC
RESTful APIs: tour, user

## TODO

1. setup ESLint and Prettier and Environment varibales
   Here: Prettier for code formatting, eslint for rules, environment variables are global variables that are used to define the environment in which a node app is running

   ```
    // ESLint and Prettier
   npm i eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-node eslint-config-airbnb  eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks --save-dev

    // dotenv
    const dotenv = require("dotenv");
    dotenv.config({ path: "./config.env" });
   ```

   eslint-config-prettier disables eslint for formatting so prettier can be used for that
   eslint-plugin-prettier allows eslint to show errors as we type, using prettier
   eslint-config-airbnb is a style guide
   eslint-plugin-import eslint-plugin-jsx-ally eslint-plugin-react needed to make airbnb style guide work
   eslint-plugin-node sets specific rules only for node.js codes

2. server.js: setting up server and port; app.js: setup app from express
3. public folder for static assets
4. routes folder for routes mapping logic: tourRoutes, userRoutes
   both routes are actually express router
5. controller folder for routes handlers: tourController, userController
6. configure the app in app.js: use middlewares, configure controller functions in controller folder

## Environment variables

- setup by express
  `app.get("env") = production || development`
- setup by node
  `process.env`

## Middlewares

- serve static files
- logging in, setting headers
- parsing body
- http request logger
- Router (routes mapping logic and controller functions)
