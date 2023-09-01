# GSTINsight

GSTINsight is a web application designed to help users verify the GSTIN (Goods and Services Tax Identification Number) of a business entity. It leverages the power of the MasterGST API to fetch and display essential information associated with a GSTIN. With GSTINsight, you can quickly and accurately verify the legitimacy of a GST number, ensuring transparency and trust in your business transactions.

## Table of Contents

- [Introduction](#gstdex)
- [Technologies](#technologies)
- [Key Features](#key-features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Technologies

GSTINsight is built with the following technologies:

- **Node.js**: A JavaScript runtime environment for building server-side applications.
- **Express**: A fast, minimalist web framework for Node.js, which provides essential features for building robust web applications.
- **React**: A popular JavaScript library for building user interfaces.
- **Chakra UI**: A simple, modular, and accessible component library for building React applications.

## Key Features

- **GSTIN Verification**: Input a GSTIN, and the application will verify its authenticity and retrieve associated information from the MasterGST API.

- **User-Friendly Interface**: A clean and intuitive user interface that allows users to easily enter and verify GSTINs.

- **Real-Time Data Display**: Display of real-time information about the business entity associated with the provided GSTIN.

- **Error Handling**: Graceful handling of errors and validation of input data.

- **Loading Spinner**: A loading spinner indicates when data is being fetched from the API.

- **Responsive Design**: The application is designed to work seamlessly on both desktop and mobile devices.

## Screenshots


![image](https://github.com/RiteshKumarShukla/GSTINsight/assets/110231091/4edac03c-4ad2-42bd-ae12-d6fb45d507b5)

![image](https://github.com/RiteshKumarShukla/GSTINsight/assets/110231091/1535e932-06ac-4bec-ba33-e45165966ef5)


![image](https://github.com/RiteshKumarShukla/GSTINsight/assets/110231091/8a435839-6f39-4bdd-9e05-4c551d9cb0b6)


![image](https://github.com/RiteshKumarShukla/GSTINsight/assets/110231091/e89046be-df67-46e3-83ca-b8ff29617c7d)


## Getting Started

To run GSTINsight locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/RiteshKumarShukla/GSTINsight.git
   cd GSTINsight
   ```

2. Install dependencies for the backend and frontend:

   ```shell
   # Install backend dependencies
   cd server
   npm install

   # Install frontend dependencies
   cd client
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the backend directory.
   - Add your email and other required API credentials to the `.env` file.

4. Start the application:

   ```shell
   # Start the backend server
   cd server
   npm start

   # Start the frontend development server
   cd client
   npm start
   ```

5. Access the application at `http://localhost:3000` in your web browser.

## Deployment

GSTINsight can be deployed to various hosting platforms. Here's a general outline of the deployment process:

1. Build the frontend:

   ```shell
   cd client
   npm run build
   ```

2. Deploy the backend and frontend to your chosen hosting platform (e.g., Heroku, Vercel, Netlify, AWS, etc.).

3. Set up environment variables on your hosting platform for email and API credentials.

4. Configure your hosting platform to serve the frontend build and start the backend server.

5. Access your deployed application using the provided URL.

