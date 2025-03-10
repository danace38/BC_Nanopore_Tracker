# BC Nanopore Tracker

The BC Nanopore Tracker web application was developed as part of an academic initiative for the Biology Department's laboratory at CUNY Brooklyn College. 

The laboratory's data management practices, primarily relying on Google Sheets and third-party services, present limitations for secure and efficient handling of critical research information. The goal of this project is to deliver a scalable and efficient web application for managing laboratory data, including experiments, runs, devices, and participants. 

# Features
* Registered users can login to the website using their email and password.
* NavBar which provides seamless navigation throughout the website.
* Users can view all current experiments which is stored in MySQL database.
* CRUD Operations:
  - Create: Add new experiments, runs, computers, or minions.
  - Read: Fetch data with optional pagination and search.
  - Update: Modify existing records.
  - Delete: Remove records by ID.

# Screenshot Walkthrough 

#### Login page
![LoginPage_BCNanopore](https://github.com/user-attachments/assets/4b2e0003-7c93-43b2-8526-07072462ed16)

#### Home page
![HomePage_BCNanopore](https://github.com/user-attachments/assets/88514b1d-5444-49e2-92b3-b13bd6c943a8)

#### Runs page
![RunsPage_BCNanopore](https://github.com/user-attachments/assets/b8bf47be-918c-42e7-8205-b51c54be6b2b)

#### Query page
![QueryPage_BCNanopore](https://github.com/user-attachments/assets/c694afe4-5325-463d-b0b3-bc4f9d47f275)

# Tech Stack

Front-End:
* React
* JSX
* HTML
* CSS

Back-End:
* Node
* Express
* MySQL
* Redis

For detailed back-end documentation, visit [my teammate's repo](https://github.com/FrankRenN/BC_Nanopore_Tracker/tree/main)


# Project Structure

* Front-End
```
src
│   App.css
│   App.jsx
│   main.jsx
│
├───assets
│       BC_Logo.png
│       bc_round_logo.png
│
└───components
        AddComputer.css
        AddComputer.jsx
        AddExperiment.css
        AddExperiment.jsx
        AddMinion.css
        AddMinion.jsx
        Delete.css
        Delete.jsx
        Edit.css
        Edit.jsx
        Experiments.css
        Experiments.jsx
        Home.css
        Home.jsx
        Login.css
        Login.jsx
        Nav.css
        Nav.jsx
        Query.css
        Query.jsx
        RunList.jsx
```

* Back-End

```
project-root
├── controllers
│   └── dbController.js   # Handles database operations
├── middlewares
│   └── validateTable.js  # Middleware to validate table names
├── models
│   ├── db.js             # Database connection setup
│   └── tableModel.js     # Database query models
├── routes
│   └── dataRoutes.js     # API route definitions
├── .env                  # Environment variables
├── app.js                # Application entry point
└── package.json          # Project dependencies and scripts
```

# Instructions 

#### Prerequisites

For IDE, I recommend using [VS Code](https://code.visualstudio.com/)

Ensure you have the following installed on your local machine:
* Node.js (v14 or higher)
* MySQL database


#### To Use This Application:
1. Clone the project
```
git clone https://github.com/danace38/BC_Nanopore_Tracker.git
```

2. Move into the project's client directory 
```
cd client\vite-project
```

3. Install dependencies 
```
npm install 
```

4. Run the application in developer mode 
```
npm run dev
```

5. Open project in the browser. Vite will display a link which you can click on. For example `http://localhost:5173`

6. Configure the environment variables in a `.env` file
    
    ```
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=your_password
    DB_NAME=labdatabase
    PORT=8000
    ```
    Note: 
    - Ensure you have MySQL database set up with the necessary tables and data. 
    - Ensure that the database credentials in your application match those in the `.env` file or the database connection settings.
    - Backup your database before making changes to prevent data loss.

7. Start the server in a separate terminal

  - Move to the server directory `cd server`
  - Start the server:
    ```
    node app.js
    ```
# Contributors

Developers:
 * Danil Ermolin 
 * Feng Ren - [GitHub](https://github.com/FrankRenN) 

Supervisors:
 * Ilana Cohen - `icohen1@gradcenter.cuny.edu`
 * Prof. Theodore Muth - `tmuth@brooklyn.cuny.edu`