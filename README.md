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

# Screenshot walkthrough 

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

5. Open project in the browser. Vite will display a link which you can click on. For example 'http://localhost:5173'

6. Start the server in a separate terminal

  - Move to the server directory 'cd server'
  - Start the server:
    ```
    node app.js
    ```
