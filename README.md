Live link: https://areness-role-management-app.onrender.com
(ps: API may take some time to load, Optimization is in progress)

# Role Management Page in MERN Stack

## Project Overview

This project is a Role Management Page implemented in the MERN (MongoDB, Express.js, React.js, Node.js) stack. It incorporates signup and login functionalities, ensuring secure authentication using JWT (JSON Web Tokens). The application differentiates between admin and user roles, directing them to personalized pages upon successful login.

## Features

1. **Signup Functionality:**
   - Users can register with the following information:
     - Email
     - Username
     - Role (Dropdown with options: admin, user)
     - Password (securely stored using bcrypt)

2. **Login Feature:**
   - Users can authenticate using their email and password.
   - Utilizes JWT for token-based authentication.

3. **Role-Based Redirection:**
   - Admins are redirected to the admin page with the greeting "Hello Admin" upon login.
   - Regular users are redirected to the user page with the greeting "Hello User" upon login.

4. **Error Handling and Validation:**
   - Proper error handling and validation are implemented for the signup and login processes.

5. **MongoDB Database Schema:**
   - A MongoDB database schema is designed and implemented to securely store user information.

6. **Middleware for Authentication and Authorization:**
   - Necessary middleware is implemented for authentication and authorization.

7. **Simple User Interface:**
   - A simple user interface is created using React.js for signup, login, admin, and user pages.

## Getting Started

1. Clone the repository: `git clone https://github.com/R-holmes10/areness-role-management-app.git`
2. Navigate to the project directory: `cd client` for Frontend) and `cd server` for Backend
3. Install dependencies: `npm install`
4. Set up the MongoDB database and update the connection details.
5. Start the server: `npm start`

## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- JWT (JSON Web Tokens)
- Bcrypt

## Project Structure

- `server/`: Backend server built with Node.js and Express.js
- `client/`: Frontend application built with React.js
- `database/`: MongoDB database schema implementation
- `middleware/`: Authentication and authorization middleware
- `routes/`: Backend route handlers for signup and login
- `public/`: Static files for the React.js application
