# NGO Portal / Charity Donation Web App

A web application for NGOs to accept donations, manage volunteers, and track donation history.

---

## Table of Contents

1. [Features](#features)  
2. [Tech Stack](#tech-stack)  
3. [Installation](#installation)  
4. [Usage](#usage)  
5. [Environment Variables](#environment-variables)  
6. [Roadmap](#roadmap)  
7. [Contributing](#contributing)  
8. [License](#license)  
9. [Contact](#contact)

---

## Features

- React + Vite frontend  
- Razorpay payment gateway integration  
- Planned: MySQL database integration for donation history  
- Future: Volunteer management module & reporting dashboard  

---

## Tech Stack

- **Frontend:** React, Vite  
- **Backend:** Node.js, Express  
- **Payment:** Razorpay  
- **Database:** MySQL  

---

## Installation

Follow these steps to run the project locally:

```bash
# 1. Clone the repository  
git clone https://github.com/K-S-Patel/NGO-Portal.git  

# 2. Install and run the frontend  
cd charity-App  
npm install  
npm run dev  

# 3. Install and run the backend  
cd ../backend  
npm install  
node server.js  



## Environment Variables

### Frontend  
Create a file named `.env in the `Charity-App/backened/.env` folder with the following variables:

RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
PORT=5000





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
