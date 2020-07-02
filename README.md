# ⚛ React + Express – SSR Setup with TypeScript

## Installation

As a general recommendation you should create a **fork** of this project first or use GitHub's [use this template](https://github.com/manuelbieh/react-ssr-setup/generate) function so you can adjust it to your own needs, add all the dependencies you need and commit everything back into your own repository.

Once you've forked the repository here on Github, clone it, `cd` into the directory and run `yarn` (or `npm install`) on your command line to install all the dependencies. You're ready to go now!

## Usage

There are npm scripts for all the relevant things. The server will always be started on port 8500 unless otherwise specified in `process.env.PORT`. You can use a `.env` file to specify env vars. If you want to use them in your client side code, don't forget to add them in [config/env.js](config/env.js#L37).

### Noteworthy scripts:

#### `yarn start`

Starts the app in development mode: creates a new client and server dev build using webpack, starts the Express server build (for both file serving and server side pre-rendering) and keeps webpack open in watchmode. Updates the app (if possible) on change using HMR.

#### `yarn build`

Creates a new build, optimized for production. Does **not** start a dev server or anything else.

#### `yarn test`

Run all tests using jest.

#### `yarn test:update`

Update all Jest snapshots (if there are any)

#### `yarn lint:js`

Run ESLint for all JavaScript and TypeScript files

#### `yarn lint:css`

Run Stylelint for all CSS files

#### `yarn lint`

Run lint:js and lint:css in parallel

#### `yarn analyze`

Starts `webpack-bundle-analyzer` to give you the opportunity to analyze your bundle(s)

#### `yarn depgraph`

Creates an image of your dependency graph. Requires [GraphVIZ](https://www.graphviz.org/) to be in your system's `PATH`

#### `yarn plop`

Run plop to create new React components or Redux reducers via CLI


引用别人的代码
