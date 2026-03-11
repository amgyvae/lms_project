# SHAKS LMS

SHAKS LMS is a learning management system (LMS) developed to manage courses, lessons, and assignments in an educational environment. The system allows students to access learning materials, complete assignments, and interact with course content, while teachers can manage courses and review student submissions.

This project is developed as an individual academic project using modern web technologies. The backend is built with Django REST Framework, while the frontend is developed using React.

---

## Project Purpose

The purpose of this project is to create a functional learning platform that demonstrates the implementation of a full-stack web application with a REST API. The system supports role-based access, course management, and assignment submissions.

---

## Main Features

### User Management
- User registration and authentication
- Role-based access (student / teacher)
- User profile management

### Course Management
- Create and manage courses
- Organize course content into modules and lessons
- View course materials

### Assignments
- Students can submit assignments
- Teachers can review and check submissions

### Learning Structure
Each course may contain:
- Modules
- Lessons
- Assignments

---

## Technologies Used

### Backend
- Python
- Django
- Django REST Framework

### Frontend
- React
- JavaScript
- HTML / CSS

### Database
- SQLite (development)
- PostgreSQL (optional for production)

### Authentication
- JWT Authentication (SimpleJWT)

---

## Project Architecture

The system follows a full-stack architecture:

Frontend (React) → API Requests → Backend (Django REST) → Database


Frontend (React)
│
│ API Requests
▼
Backend (Django REST Framework)
│
▼
Database


---

## Project Structure


Shaks/
│
├── backend/
│ ├── apps/
│ │ ├── users
│ │ ├── courses
│ │ └── submissions
│ │
│ ├── settings
│ ├── manage.py
│
├── frontend/
│ ├── src
│ ├── components
│ ├── pages
│ └── package.json
│
├── requirements.txt
└── README.md


---

## Installation

### Clone the repository


git clone https://github.com/amgyvae/lms_project.git

cd lms_project


---

### Backend Setup (Django)

Create virtual environment


python -m venv venv
source venv/bin/activate


Install dependencies


pip install -r requirements.txt


Run migrations


python manage.py migrate


Start backend server


python manage.py runserver


---

### Frontend Setup (React)

Go to frontend folder


cd frontend


Install dependencies


npm install


Run React application


npm start


---

## API Endpoints

### Authentication


POST /api/auth/login
POST /api/auth/register


### Courses


GET /api/courses
GET /api/courses/{id}


### Lessons


GET /api/lessons
GET /api/lessons/{id}


### Submissions


POST /api/submissions
GET /api/submissions


---

## Future Improvements

Possible improvements for the system include:

- course progress tracking
- quiz system
- notifications
- file uploads
- grading system
- better UI/UX design

---

## Author

Sharipzhan Margulan
Kazakh-British Technical University  
Information Systems Program

---

## License

This project was developed for educational purposes.
