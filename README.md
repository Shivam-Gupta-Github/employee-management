# Employee Data Management

A simple full-stack CRUD application to manage employees using **React** (frontend) and **Node.js + Express + SQLite** (backend).

---

## Project Description

This project allows users to:

- Create, read, update, and delete employees.
- Search employees by name.
- Edit employees via a modal for better UX.

Backend provides RESTful API endpoints; frontend uses a service layer to consume them.

---

## Setup and Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/employee-management.git
cd employee-management
```

### 2. Backend

```bash
cd backend
npm install
npm run dev
```

### 3. Frontend

```bash
cd ../frontend
npm install
npm run dev
```

---

## Run Test Cases

Backend tests are written using Jest + Supertest.

Run tests from the backend folder:

```bash
cd backend
npm run test
```

### Tests cover all CRUD endpoints:

- POST /api/employees → create employee
- GET /api/employees → list all employees
- GET /api/employees/:id → get single employee
- PUT /api/employees/:id → update employee
- DELETE /api/employees/:id → delete employee

---

## Design Choices

- SQLite is used for simplicity (file-based DB, no authentication).
- Service layer in frontend separates API calls from UI.
- Modal used for editing instead of a separate page.
- Backend separated into app.js (Express app) and server.js (server start) for easier testing.
- Jest + Supertest chosen for lightweight backend testing.
