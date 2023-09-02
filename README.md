# GSTINsight
The objective of this project is to develop a web application that allows users to verify the GSTIN number of a business entity. The application should use the GST API provided by the GST department to retrieve the relevant information about the GSTIN number.

## Table of Contents

- [Introduction](#gstdex)
- [Technologies](#technologies)
- [Key Features](#key-features)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Sources](#sources)

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

- **Theme Customization**: The application is designed to work seamlessly on both light mode and dark mode.

## Screenshots


![image](https://github.com/RiteshKumarShukla/GSTINsight/assets/110231091/3c7c6cc9-c3dd-4d31-b9ac-65811cba8917)

![image](https://github.com/RiteshKumarShukla/GSTINsight/assets/110231091/e455745e-bf2b-4872-b4af-0ae58fb37069)

![image](https://github.com/RiteshKumarShukla/GSTINsight/assets/110231091/55a0d033-5068-4d6d-bee0-01742c15a7b6)

![image](https://github.com/RiteshKumarShukla/GSTINsight/assets/110231091/fe15e982-2d8d-4ecf-99e1-fe4dbb9c9916)


![image](https://github.com/RiteshKumarShukla/GSTINsight/assets/110231091/4c9b4440-708f-483f-a331-4d3f533fbe63)


![image](https://github.com/RiteshKumarShukla/GSTINsight/assets/110231091/3857ef2c-c86c-4046-bdec-a2db25f9d84d)


![image](https://github.com/RiteshKumarShukla/GSTINsight/assets/110231091/40453b82-9b97-4f7a-9ea6-5f279c2658fe)

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

## Sources

**Master GST API** :  https://api.mastergst.com

**Note** : This API will work for only one GSTIN (33AAGCC7144L6ZE), Because it allows us to check only one GSTIN for free. If You want to explore more, please switch to premium plan.

