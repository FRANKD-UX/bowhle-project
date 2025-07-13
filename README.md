
# BOWHLE  
**A Full Stack Project for Creative Collaboration**

---

## 🧭 Project Overview

**Bowhle** is a modern web application built for a creative agency, designed to elegantly showcase the agency's **portfolio**, **services**, and **creative capabilities**. It features a **public-facing website** for prospective clients, alongside **dedicated dashboards** for both **employees** and **clients**.

The platform streamlines internal workflows, improves collaboration, and provides a transparent and intuitive experience for project management and design review.

---

## 📁 Project Structure

The application is divided into two key areas:

- **Frontend** – built with **React.js**
- **Backend** – powered by **Node.js**, **Express.js**, and **MongoDB**

---

## 👥 Authors

| Name         | Role                 |
|--------------|----------------------|
| **Samantha B** | Frontend Developer & Designer |
| **Frank D**     | Backend Engineer         |

---

## 👩‍💻 Frontend – Samantha B

### Setup:
```bash
npm install axios react-router-dom @react-oauth/google jwt-decode
npm start
```

Handled all interface design and client-side development.

### Key Features:

1. **Services Section**
   - Campaign Design  
   - Print Design  
   - Digital Art & Design  
   - Email Newsletter Design  
   - Social Media  
   - Illustration  
   - Brand Identity  

2. **Portfolio Page**
   - Storyboard and grid layout  
   - "In a Snap" highlight feature  
   - Service-based project storytelling  

3. **React.js Setup**
   - Installed core dependencies  
   - Configured scalable component structure  

4. **Header & Footer**
   - Responsive, reusable components  
   - Navigation menu with route links  

5. **Testimonials**
   - Carousel or grid layout  
   - Connected to the backend testimonial data  

6. **Contact Form Integration**
   - Styled form with validations  
   - Connects to backend (form submission & response handling)  
   - Displays success/error states  

7. **Client Dashboard**
   - Project tracking  
   - Past project gallery
   - Profile editing & password management
   - Status box + file download button
  
9. **Employee Dashboard**
   - File uploads (.jpg, .png, .pdf)
   - External link submission
   - Profile editing & password management

---

## 🏗️ Frontend Architecture Overview

```txt
Frontend (React)
│
├── Public Website
│   ├── Homepage animations
│   ├── Services, Portfolio, About
│   └── Contact Form
│
├── Client Dashboard
│   ├── Sidebar, Header
│   ├── Project Timeline + Past Gallery
│   └── Account Page (Info + Settings)
│
└── Employee Dashboard
    ├── Upload files
    └── Submit links (e.g. WeTransfer)

## 🧑‍💻 Backend – Frank D

Handled all server-side functionality and database operations.

### Key Features:

### Features:
- 🔐 JWT + Google Login
- ✅ Email verification
- 👥 Custom user model (client/employee)
- 🗃️ Project & report tracking
- 📩 Email notifications for report submission
- 📈 Admin-only analytics

### Setup:
```bash
python -m venv env
source env/bin/activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

### Email Verification:
- Gmail SMTP setup in `settings.py`
- Use App Password if 2FA is on

---

## 💻 Frontend (React)/ Backend (Django) intergration 

### Features:
- 🔐 Auth (JWT + Google SSO)
- 🔁 Role-based dashboards
- 📄 File uploads
- 🔎 Pagination + search
- ✅ Protected routes

### Setup:
```bash
npm install axios react-router-dom @react-oauth/google jwt-decode
npm start
```

### Folder Structure:
```
src/
├── utils/ (api.js, auth.js)
├── routes/ (PrivateRoute.js)
├── pages/ (Login.js, Dashboards, Upload, List)
└── App.js
```

---

## ✅ How To Test
| Feature                    | How to Test                              |
|---------------------------|-------------------------------------------|
| 🔑 Register/Login         | Use Login UI or Postman                  |
| 📬 Email verification     | Check your Gmail inbox                   |
| 👤 Role-based access      | Login as both roles                      |
| 📂 Uploads                | Upload image to project                  |
| 📝 Report submission      | Client receives email automatically      |
| 📊 Analytics              | Only admin can view                      |

## Link to the deployed site
https://bowhle.github.io/bowhle-project
