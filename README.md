# MERN Stack Authentication System with MySQL

A full-stack web application built with React.js, Express.js, Node.js, and MySQL.
Features user registration, login, password reset via email, and a dashboard with full CRUD operations.

---

## Project Structure

```
mern-mysql-auth-crud/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── itemController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── itemRoutes.js
│   ├── .env.example
│   ├── .gitignore
│   ├── server.js
│   └── package.json
├── frontend/
│   └── src/
│       ├── api/
│       │   ├── axios.js
│       │   ├── authApi.js
│       │   └── itemApi.js
│       ├── context/
│       │   └── AuthContext.jsx
│       ├── components/
│       │   ├── Login.jsx
│       │   ├── Register.jsx
│       │   ├── ForgotPassword.jsx
│       │   ├── ResetPassword.jsx
│       │   ├── Dashboard.jsx
│       │   ├── ProtectedRoute.jsx
│       │   └── PublicRoute.jsx
│       ├── App.jsx
│       ├── main.jsx
│       └── index.css
├── database.sql
└── README.md
```

---

## What You Need to Install Before Starting

Before running the project, make sure you have installed:

1. **Node.js** — Download from https://nodejs.org (use the LTS version)
2. **MySQL Server** — Download from https://dev.mysql.com/downloads/ OR install XAMPP from https://www.apachefriends.org
3. **Git** — Download from https://git-scm.com
4. A code editor like **VS Code** — https://code.visualstudio.com

---

## Step 1 — Set Up the MySQL Database

### Option A: Using XAMPP 
1. Open XAMPP Control Panel
2. Click **Start** next to **MySQL**
3. Click **Admin** next to MySQL (this opens phpMyAdmin in your browser)
4. In phpMyAdmin, click the **SQL** tab
5. Copy and paste the entire contents of the `database.sql` file
6. Click **Go** to run it
7. You should see a new database called `mern_auth_db` appear on the left side

### Option B: Using MySQL Command Line
1. Open your terminal
2. Log in to MySQL by typing: `mysql -u root -p` and pressing Enter
3. Enter your MySQL password
4. Type this command to run the SQL file:
   ```
   source /full/path/to/database.sql
   ```
5. Type `SHOW TABLES;` to confirm both tables were created

### Verify the Setup
After running the SQL file, run these commands in MySQL to confirm:
```sql
USE mern_auth_db;
SHOW TABLES;
DESCRIBE users;
DESCRIBE items;
```
You should see both `users` and `items` tables.

---

## Step 2 — Set Up the Backend

### 2.1 Open a terminal and go into the backend folder
```
cd backend
```

### 2.2 Install all the required packages
```
npm install
```
This will install: express, mysql2, bcryptjs, jsonwebtoken, dotenv, cors, nodemailer, and nodemon.

### 2.3 Create your .env file
- In the `backend` folder, create a new file called `.env`
- Copy the contents of `.env.example` into it
- Fill in your actual values:

```
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_actual_mysql_password
DB_NAME=mern_auth_db

JWT_SECRET=makethisalongrandommixoflettersandnumbers123
JWT_EXPIRE=7d

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=your_gmail_app_password

FRONTEND_URL=http://localhost:5173
```


### 2.4 Start the backend server
```
npm run dev
```

You should see:
```
Server is running on port 5000
MySQL Connected Successfully!
```

If you see any MySQL error, double-check your `.env` file credentials.

---

## Step 3 — Set Up the Frontend

### 3.1 Open a NEW terminal window and go into the frontend folder
```
cd frontend
```

### 3.2 Install all dependencies
```
npm install
```

### 3.3 Install additional dependencies if not already done
```
npm install react-router-dom axios
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3.4 Configure Tailwind CSS
Open `tailwind.config.js` and make sure the content array looks like this:
```js
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

In `src/index.css`, make sure these three lines are at the top:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3.5 Start the frontend
```
npm run dev
```

You should see:
```
VITE ready at http://localhost:5173
```

Open your browser and go to: **http://localhost:5173**

---

## Step 4 — Test the Application

1. Open your browser at `http://localhost:5173`
2. You will be redirected to the Login page
3. Click **Register** to create a new account
4. Fill in your name, email, and password and click Register
5. You will be automatically logged in and taken to the Dashboard
6. Try adding, editing, and deleting items
7. Try logging out and logging back in

---

## API Endpoints

| Method | Endpoint | Description | Protected |
|--------|----------|-------------|-----------|
| POST | /api/auth/register | Register a new user | No |
| POST | /api/auth/login | Login user | No |
| POST | /api/auth/forgot-password | Send reset email | No |
| POST | /api/auth/reset-password | Reset password | No |
| GET | /api/auth/me | Get current user | Yes |
| GET | /api/items | Get all items | Yes |
| GET | /api/items/:id | Get one item | Yes |
| POST | /api/items | Create new item | Yes |
| PUT | /api/items/:id | Update item | Yes |
| DELETE | /api/items/:id | Delete item | Yes |
| GET | /api/stats | Get statistics | Yes |

---

## Common Problems and Fixes

**MySQL connection failed:**
- Make sure MySQL server is running (check XAMPP or Windows Services)
- Double-check the password in your `.env` file
- Make sure the database `mern_auth_db` was created

**Port already in use:**
- Change the PORT in `.env` to another number like `5001`

**CORS error in browser:**
- Make sure `FRONTEND_URL` in `.env` matches the address where your React app runs

**Email not sending:**
- Make sure you used an App Password, not your regular Gmail password
- Make sure 2-Step Verification is enabled on your Google account

---

## Technologies Used

- **Frontend:** React.js, Vite, Tailwind CSS, React Router, Axios, Context API
- **Backend:** Node.js, Express.js
- **Database:** MySQL with mysql2
- **Auth:** JWT (JSON Web Tokens), bcryptjs
- **Email:** Nodemailer with Gmail SMTP
