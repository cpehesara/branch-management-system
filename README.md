# Branch Management System

A full-stack web application to manage branches, departments, employees, and managers within an organization. The backend is developed using Spring Boot and the frontend using React with MUI (Material UI) components. The system includes CRUD operations, data visualization, secure APIs, and a responsive admin interface.

---

## Technologies Used

### Backend:
- Java 21
- Spring Boot 3.4.4
- Spring Data JPA
- Spring Security
- Hibernate Validator
- ModelMapper
- MySQL / SQL Server (MSSQL JDBC)
- Maven

### Frontend:
- React 19
- MUI (Material UI)
- React Router DOM
- Axios
- Formik + Yup
- Nivo Charts
- FullCalendar
- Date-FNS

---

## Getting Started

### Backend Setup (Spring Boot)

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/branch-management-system.git
   cd branch-management-system/backend
   ```

2. **Configure your database**  
   Edit `src/main/resources/application.properties`:
   ```properties
   spring.datasource.url=jdbc:sqlserver://localhost:1433;databaseName=BranchManagementSystemBackend
   spring.datasource.username=(your_db_username)
   spring.datasource.password=(your_db_password)
   spring.jpa.hibernate.ddl-auto=update
   ```

3. **Run the application**
   - Using your IDE (IntelliJ, Eclipse, etc.) or:
   ```bash
   ./mvnw spring-boot:run
   ```

### Frontend Setup (React)

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

> The app will be available at: `http://localhost:3000`

---

## Features

- Admin dashboard with navigation sidebar
- Secure login and route protection using JWT
- CRUD operations for Branch, Department, Employee, Manager
- Calendar and event management (FullCalendar)
- Responsive UI with Material UI (MUI)
- Form validation using Formik and Yup

---


## Scripts

From the React project:

```bash
npm start       # Start frontend
npm run build   # Build for production
npm test        # Run tests
```

From the Spring Boot backend:

```bash
./mvnw spring-boot:run       # Run the backend server
```

---

## Contributing

Pull requests are welcome. If you have major suggestions or want to report bugs, please [open an issue](https://github.com/cpehesara/branch-management-system.git) first to discuss.

---

## ✍️ Author

Created by KMCP Munasinghe and RAD Team 16 as part of the Rapid Application Development Module.

---
