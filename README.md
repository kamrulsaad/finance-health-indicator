# Financial Health Tracker Tool Backend

## Table of Contents

- [Overview](#overview)
  - [Links](#links)
- [How to run](#how-to-run)
- [My process](#my-process)
- [Future Improvements](#future-improvements)
- [Built with](#built-with)

---

## Overview

Welcome to a financial health indicator tool backend.

A strong and scalable architecture was the main focus of this project. This project has a modern setup with linting, husky git hooks, code formatting, typescript, modular routing, ORM, validation, logging, environment variables, error handling etc.

## Links

- Live Site Link: [Click Here](https://finance-health-indicator-backend.vercel.app/) to see the Live API server.
- Client side Github Repo: [Click Here](https://github.com/kamrulsaad/finance-health-indicator-frontend) to check my client side github repo for this project.
- Client side Github Repo: [Click Here](https://github.com/kamrulsaad/finance-health-indicator-backend) to check my client side github repo for this project.

---

## How to run

- Clone the project from the github repo.
- Run `yarn install` to install all the dependencies.
- Run `yarn prisma generate` to generate the prisma client.
- Run `yarn run dev` to run the project.
- If you want to connect it to the local postgreSQL database, then
  - Create a `.env` file in the root directory of the project.
  - Copy the content of `.env.example` file and paste it in the `.env` file.
  - Change the `DATABASE_URL` value to your local database url.
- Additinally, you can also run `yarn husky install` to implement husky git hooks.

## My Process

Basically, this project was built as per the requirements provided. This project has a very scalable architecture. It uses modular pattern for api routing. Only `Income` and `Expense` module was implemented. However, it can be easily extended to add more modules.

Although automated or manual testing was not performed in the building of this project. However, since I have used typescript I can be sure that a project of this size will have comparatively fewer issues than what it could have if javascript was used.

## Future Improvements

I have tried to implement the project as per the requirements. However, there are many opportunities to improve this project. Some of them are listed below:

- Automated testing can be implemented.
- More features can be added to the transaction module.
- Features like transaction category module can be added.
- Features like user authentication can be added, and many more.
- Microservice architecture can be implemented for authentication service, payment service, status service etc.

## Built With

- `Typescript` - Language
- `Node.js` - Runtime Environment
- `Express.js` - Web Framework
- `Prisma` - ORM
- `PostgreSQL` - Database
- `Zod` - Validation
- `Winston` - Logger
- `Cors` - CORS
- `Dotenv` - Environment Variables
- `Http-status` - HTTP Status Codes
- `Eslint` - Linter
- `Prettier` - Code Formatter
- `Husky` - Git Hooks
- `Lint-staged` - Git Hooks
- `Ts-node-dev` - Development Environment

---

Please check the [frontend repository](https://github.com/kamrulsaad/finance-health-indicator-frontend) for more details about the backend of this project.
