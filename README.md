Certainly! Here's a README.md documentation for your CRUD app:

# CRUD App Documentation

!([front-end\src\assets\Screenshot user.png](https://github.com/mike489/User-curd-/blob/adff267a64e945a07e7bc425c6176db21a8692f8/front-end/src/assets/Screenshot%20user.png))

This is a CRUD (Create, Read, Update, Delete) application that manages a table called 'user,' which includes fields for Name, Email, Password, and Phone Number. The app is structured as a monorepo and utilizes a variety of technologies to facilitate these operations.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Frontend](#frontend)
- [Backend](#backend)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Tech Stack

- **Frontend:**
  - React with TypeScript
  - Ant Design (ANTD) for the UI components
  - React Query for API data fetching and state management

- **Backend:**
  - Nest.js for the API
  - Prisma as the database ORM

## Project Structure

The project is organized into two main parts: the frontend and the backend. Each part is in its respective directory within the monorepo.

- `frontend/`: Contains the React TypeScript application.
- `backend/`: Contains the Nest.js application and Prisma database setup.

## Getting Started

Before running the application, make sure to install the required dependencies. In the root directory of the monorepo, run the following command:

```bash
npm install
```

### Frontend

To start the frontend application, navigate to the `frontend/` directory and run:

```bash
cd frontend/
npm install
npm run dev
```

This will start the React application using the development server.

### Backend

To start the backend server, navigate to the `backend/` directory and run:

```bash
cd backend/
npm install
npm run start:dev
```

The Nest.js server will start and expose the API endpoints.

### API

The API endpoints for CRUD operations on the 'user' table can be accessed at `http://localhost:3000/api/users`.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository on GitHub.
2. Clone your fork locally.
3. Create a new branch for your feature or bug fix.
4. Make your changes, commit, and push to your fork.
5. Create a pull request on the original repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to add more details, specific setup instructions, and guidelines for contributing as needed. Also, make sure to replace `"app-screenshot.png"` with the actual path to your app's screenshot.
