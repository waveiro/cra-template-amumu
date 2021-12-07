# CRA-MHL
## My Create React App (CRA) primary template  

A very opinionated starter [Create React App](https://github.com/facebook/create-react-app) (CRA) _template_ with:

- React
- State management - Redux
- CSS tools - SASS, PostCSS
- Router - React Router
- Unit Testing - React Testing Library
- Folder structure
- Format & Lint - ESLint & Prettier
- Useful utilities - Classnames, React-Helmet.

Custom Templates, format, and ESLint configurations.

## Usage

```bash
yarn create react-app your-project-name --template cra-template-amumu
```

Or;

```bash
npx create-react-app your-project-name --template cra-template-amumu
```

`npx` package runner tool installs the most recent stable version of CRA from npm. (npx comes out of the box with npm 5.2+)

`--template` parameter points to this template, note that `cra-template-` prefix will be omitted.

## Run Scripts

Inside the project directory run:

- `yarn start` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `yarn test` - launches the test runner in the interactive watch mode.
- `yarn build` - builds the app for production to the `build` folder.
- `yarn eject` - exposes content of `react-script` package
- `yarn lint` - lints project files according to Airbnb — as part of their style guide 👍 — it provides an ESLint configuration that anyone can use and it is the standard.
- `yarn fix` - fix lints issues according to style guide set.
- `yarn format` - will format your code prettier using opinionated settings inside `.prettierrc` file.
- `yarn isready` - will check if the code is ready for showtime (production), run lint, format and build.

CRA template only support `scripts` and `dependencies` inside generated `package.json`. No `devDependencies` is possible on CRA template for now.

If you like this library, don't be shy to star it 🙏
