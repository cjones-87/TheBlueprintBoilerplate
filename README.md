<!-- Header -->

![header](https://capsule-render.vercel.app/api?type=waving&color=0:301D42,10:553373,20:7a49a5,30:6D4194,40:A17FC0,50:C9B6DB,60:A17FC0,70:6D4194,80:7a49a5,90:553373,100:301D42&height=180&text=CJ%20Jones&fontAlignY=35&animation=scaleIn&desc=Software%20Engineer&descAlign=80&descAlignY=59&descSize=30)

# The Blueprint Boilerplate

## Table of Contents

- [About](#about)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation & Set-up](#installation-and-setup)
- [Configuration](#configuration)
- [Running Application](#running-the-application)
- [Conclusion](#conclusion)
- [Contact](#contact)

## About

The Blueprint Boilerplate is a full-stack eCommerce boilerplate template that provides a solid foundation for building eCommerce web applications. It includes out-of-the-box essential features such as:

- CRUD (Create, Read, Update, Delete) express routes for products and users
- authenticated routes for accessing personal information of logged-in users
- login and registration routes
- authenticated and connected forms.

This template also incorporates conditional rendering to differentiate between guest and logged-in user experiences.

## Demo

![LoginLoop](https://i.imgur.com/HOiTb5v.gif)

## Technologies Used

### Front-end

- React (v18.2.0)
- React Router DOM (v6.11.0)
- Redux (v4.2.1) and React Redux (v8.0.5) for state management
- @reduxjs/toolkit (v1.9.5) for efficient Redux development
- axios (v1.4.0) for making HTTP requests
- react-dom (v18.2.0) for rendering React components

### Back-end

- Express.js (v4.18.2) as the server framework
- body-parser (v1.20.2) for parsing request bodies
- bcrypt (v5.1.0) for password hashing
- jsonwebtoken (v9.0.0) for generating and verifying JSON Web Tokens (JWT) for authentication
- morgan (v1.10.0) for HTTP request logging
- pg (v8.10.0) and pg-hstore (v2.3.4) for PostgreSQL database integration
- sequelize (v6.31.0) as an ORM (Object-Relational Mapping) for database operations

### Development

- webpack (v5.81.0) for module bundling and asset management
- webpack-dev-server (v4.13.3) for development server with hot module replacement
- babel-loader (v9.1.2) for transpiling JavaScript using Babel
- css-loader (v6.7.3) and style-loader (v3.3.2) for handling CSS imports
- file-loader (v6.2.0) for loading files and assets
- @babel/core (v7.21.5) and related plugins/presets for JavaScript transpilation
- Redux Logger (v3.0.6) for logging Redux actions and state changes during development
- Redux Thunk (v2.4.2) for handling asynchronous actions with Redux

## Installation and Setup

To set up The Blueprint Boilerplate, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/cjones-87/TheBlueprintBoilerplate.git

   ```

2. Navigate to the project directory:

   ```shell
   cd TheBlueprintBoilerplate

   ```

3. Install the required dependencies by running:

   ```shell
   npm install
   ```

## Configuration

1. Rename the project folder: Navigate to the root directory of the cloned project and rename the folder to the desired name of the project. This will update the project's directory name.

2. Update the package.json file: Open the package.json file located in the root directory of the project. Modify the following fields to reflect the new project name and other relevant details:

   - "name": Change the value of the name field to the new project name.
   - "description": Update the description of the project if needed.
   - "author": Change the author field to reflect the correct author information.
   - "repository": Update the repository URL to point to the new project repository if applicable.
   - "bugs": Modify the bugs URL to point to the new project's issue tracker if applicable.
   - "homepage": Update the homepage URL to reflect the new project's homepage if applicable.
   - Update any other relevant fields that contain project-specific information.

3. Update configuration files: Check for any other configuration files in the project that may contain project-specific information, such as .env files, webpack configuration files, or database configuration files. Update these files with the necessary changes, such as database connection details, API endpoints, or environment variables.

4. Customize the code: Review the codebase and make any necessary modifications to adapt it to the new project name. This may include renaming variables, components, or files, updating file headers, or making other relevant changes to align with the new project name.

5. Install dependencies: In the project's root directory, run the command npm install or yarn install to install the project's dependencies mentioned in the package.json file. This ensures that all required packages are installed and ready for use.

These steps will guide you in customizing the cloned project and making it your own, reflecting your project's specific details and requirements.

## Running the Application

To run the application, execute the following command:

```shell
npm run start:dev
```

This command will start the development server using webpack-dev-server, run the backend server using nodemon, and trigger the initial build using npm run build.

Please note that you need to create a PostgreSQL database before running the application. Make sure to update the database configuration in the backend code accordingly.

Once the application is running, you can access it at [http://localhost:1987](http://localhost:1987) in your browser.

## Conclusion

The Blueprint Boilerplate provides a robust foundation for developing full-stack web applications. With its pre-configured CRUD routes, authenticated routes, and connected forms, The Blueprint Boilerplate saves development time and provides a structured starting point for building feature-rich applications. It incorporates modern front-end technologies like React and Redux, enabling efficient state management and dynamic UI updates. On the back-end, Express.js and Sequelize simplify server-side development and interaction with the PostgreSQL database.

To customize the boilerplate to fit your specific application requirements, you can modify the existing routes, components, and styles or add new ones as needed. The modular architecture and separation of concerns make it easy to extend and maintain the codebase.

Feel free to explore the repository at [The Blueprint Boilerplate](https://github.com/cjones-87/TheBlueprintBoilerplate) for more information, documentation, and issue tracking.

Happy coding with The Blueprint Boilerplate!

## Contact

You can reach out to me via email at cj@seejonesengineer.com

Connect with me on LinkedIn: https://www.linkedin.com/in/cjones1827/

Visit my portfolio website: https://www.seejonesengineer.com/

<!-- Footer -->

![footer](https://capsule-render.vercel.app/api?type=waving&color=0:301D42,10:553373,20:7a49a5,30:6D4194,40:A17FC0,50:C9B6DB,60:A17FC0,70:6D4194,80:7a49a5,90:553373,100:301D42&height=100&reversal=true&section=footer)
