# Equal Experts Assignment - Calculator

Spec version number: 627d7be039e0085025a51d47e42bdd970409ec1c

## Caveats & Known Issues

- Due to the limited time this app is only tested on modern builds of Google Chrome & Firefox.
- Entering multiple decimal points will cause the calculator to display 'NaN' - this could be fixed by only allowing 1 decimal point to be entered but this wasn't achievable in the suggested time limit.
- The testing strategy concentrated on the calculator reducer logic and it's edge cases - the UI components themselves were very simple so given the time constraints it was more important to make the business logic work correctly rather than have 100% test coverage. In a production app I would have increased test coverage and added some BDD tests that tested the full UI using [Cypress](https://www.cypress.io/) or similar.

## Prerequisites

To run this app you need to have Node available in your environment.
If you need to install it you can download installers for all platforms here: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

## Install

On the command line, cd into the root folder of the project and run

```
npm install
```

## Run

From the root directory run

```
npm run start
```

By default the app will be available at [http://localhost:3001/](http://localhost:3001/) - if that port is in use the CLI will ask to use an alternate port port and inform you.

## Tests

Running

```
npm run test
```

in the root directory will run all tests and then watch for code changes and re-run.

## Coverage

To see test coverage run

```
npm run test -- --coverage
```