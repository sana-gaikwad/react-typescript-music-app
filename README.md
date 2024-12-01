# React Typescript Music Festival App

This project is a React Typescript app, that fetches Music Festival data from an API and organizes the festivals into a list of record labels and their bands.

## Features

- **React**: Fast and modern front-end library.
- **TypeScript**: Static type checking for improved code quality.
- **Vite**: Lightning-fast development environment.
- **ESLint**: Linting and code quality checks.
- **Prettier**: Code formatting.
- **Husky**: Git hooks for linting and formatting.
- **Vitest**: Unit testing framework.
- **Vercel**: App is deployed to Vercel using free tier.

## Development Getting Started

To begin developing locally, follow the instructions below to clone the repository, install dependencies, and start the local development server.

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v20 or higher)
- [Yarn](https://yarnpkg.com/)

### Steps

1. Clone the repository from [GitHub](https://github.com/sana-gaikwad/react-typescript-music-app)

   ```bash
   git clone <repo-url>
   ```

2. Navigate to the cloned repository and install dependencies

   ```bash
   cd react-typescript-music-app
   yarn install
   ```

3. Start the development server

   ```bash
    yarn dev
   ```

4. Open the app

   Visit http://localhost:5173 in your browser to see the result.

## Testing Framework Setup

### Unit testing

Vitest is used for unit testing the app. The configuration file is located at `vitest.config.ts`.

- **Test Directory**: The test directory is set to `tests/unit/`. Each test file should have a `.test.ts` extension.

- **Example Test**: An example test can be found in `test/unit/getBandRecordLabelInfo.test.ts`.

## Deploy on Vercel

The app is deployed using Vercel free hosting which provides seamless integration with Vite. The deployed app is available **[here](https://react-typescript-music-app.vercel.app/)**.

### Lint

`yarn lint` checks for linter errors and `yarn lint:fix` will automatically fix them.

### Format checking

`yarn prettier` uses Prettier to format code. `yarn prettier:fix` will automatically format code.

### Type Checking

`yarn typecheck` runs the TypeScript compiler to check for type errors without emitting any output files. It ensures that your code adheres to TypeScript's type-checking rules.

## Pre-Commit Hook

`yarn prepare` installs the pre-commit hooks.

The Husky pre-commit hook will automatically run ESLint and Prettier on staged files, preventing commits that do not meet code quality standards.

## License

This project is licensed under the MIT License.
