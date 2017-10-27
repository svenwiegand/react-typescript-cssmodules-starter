# React Webpack Typescript Starter
Minimal starter kit with hot module replacement (HMR) for rapid development and [CSS Modules](https://github.com/css-modules/css-modules). Bbased on [Viktor Persson's react-webpack-typescript-starter](https://github.com/vikpe/react-webpack-typescript-starter).

* **[React](https://facebook.github.io/react/)** (16.x) with
   * [React Router](https://reacttraining.com/react-router/web)
   * [Redux](http://redux.js.org/)
* **[Webpack](https://webpack.js.org/)** (3.x)
* **[Typescript](https://www.typescriptlang.org/)** (2.x)
* **[Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)** using [React Hot Loader](https://github.com/gaearon/react-hot-loader) (3.x)
* **[CSS Modules](https://github.com/css-modules/css-modules)** and **[cssnext](http://cssnext.io/)**
* [Babel](http://babeljs.io/) (6.x)
* [typed-intl](https://github.com/svenwiegand/typed-intl) for TypeScript friendly internationalization
* [typed-redux-actions](https://github.com/svenwiegand/typed-redux-actions) to avoid poilerplate when defining Redux actions
* [immutable](https://facebook.github.io/immutable-js/)
* [Jest](https://facebook.github.io/jest/) - Testing framework for React applications with [Enzyme](https://github.com/airbnb/enzyme)
* Support for absolute import paths so that you can use `import ... from 'common/MyClass'` instead of relative `../../common/MyClass`.
* Production build script
* Image loading/minification using [Image Webpack Loader](https://github.com/tcoopman/image-webpack-loader)
* Typescript compiling using [Awesome Typescript Loader](https://github.com/s-panferov/awesome-typescript-loader) (3.x)
* Code quality (linting) for Typescript.

## Installation
1. Clone/download repo
2. `npm install` (I prefer [yarn](https://yarnpkg.com/lang/en/) which works fine as well)

## Usage
**Development**

`npm start`

* Build app continously (HMR enabled)
* App served @ `http://localhost:3000`

**Production**

`npm run start-prod`

* Build app once (HMR disabled)
* App served @ `http://localhost:3000`

---

**All commands**

Command | Description
--- | ---
`npm run start` | Alias for `npm run start-dev`
`npm run start-dev` | Build app continuously (HMR enabled) and serve @ `http://localhost:3000`
`npm run start-prod` | Build app once (HMR disabled) and serve @ `http://localhost:3000`
`npm run build` | Build app to `/dist`
`npm run test` | Run tests continuously watching for changes
`npm run test-coverage` | Run tests once with coverage
`npm run lint` | Run TypeScript linter
`npm run start` | (alias of `npm run start-dev`)
`npm run css-types` | Builds TypeScript type declarations for CSS modules

## See also
* [react-webpack-typescript-starter](https://github.com/vikpe/react-webpack-typescript-starter)
* [React Webpack Babel Starter](https://github.com/vikpe/react-webpack-babel-starter)
* [Isomorphic Webapp Starter](https://github.com/vikpe/isomorphic-webapp-starter)
