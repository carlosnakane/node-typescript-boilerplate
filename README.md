# Node Typescript with batteries boilerplate
> Specially created for NodeJS NPM packages authoring

![](https://i.giphy.com/media/hSvSPMknCv0Bx6WFsu/giphy.webp)

# What's included?

This boilerplate was created focused on authoring NodeJS NPM pakcages and CLI programs so you won't find any browser dependency like React.

### Tech Stack 
-   [typescript](https://www.typescriptlang.org/) TSC compiler is used for building your production code;
-   also [esbuild](https://esbuild.github.io/) ⚡ is used for superfast buildings for debuging purposes (see VSCODE item below);
-   [test](https://jestjs.io/pt-BR/) and [ts-jest](https://github.com/kulshekhar/ts-jest) for unity testing
-   [eslint](https://www.npmjs.com/package/eslint) (google preset) and [prettier](https://www.npmjs.com/package/prettier)
-   [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://typicode.github.io/husky/) for preventing not linted code commits;
-   [VSCODE](https://code.visualstudio.com/) is recomended if you wanna debug your code. This boilerplate is prepared to use VSCODE debugging tool. Just place your breakpoints and press F5.


# How to get started


1. Clone ``git clone https://github.com/carlosnakane/node-typescript-boilerplate.git``;
1. Use Yarn ot NPM to install dependencies `yarn` / `npm install`;
2. `yarn start` / `npm run start` for running the program from it's entrypoint (src/main.ts);
3. See the available scrips section for more tooling.

# How to debug
VSCODE debugging tools is fully configured to do the job.
You just have to add your breakpoints and press F5

# Available scripts

-   `lint`: find for linting problems in your code;
-   `lint:fix`: do the same as ``lint``. Also fix all "autofixable" problems;
-   `build`: build your code to the ``dist`` folder using TSC;
-   `build:debug`: fast build your code for debugging your code. You don't have to run this script for your own. VSCODE task will do it for you right after pressing F5;
-   `build:watch`: build and wait for code changes;
-   `test`: run the test suit against your code;
-   `test:coverge`: same above. Also show the istabull coverage report.

# Why esbuild only for debugging?
At the moment esbuild is a very experimental tool so I don't trust it for production yet. So the build script makes use of typescript TSC compiler

