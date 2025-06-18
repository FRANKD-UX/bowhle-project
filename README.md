
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
   - Connected to backend testimonial data  

6. **Contact Form Integration**
   - Styled form with validations  
   - Connects to backend (form submission & response handling)  
   - Displays success/error states  

7. **Chatbot UI Component**
   - Expandable widget interface  
   - Includes chat bubbles, loading states, and UX animations  

---

## 🧑‍💻 Backend – Frank D

Handled all server-side functionality and database operations.

### Key Features:

1. **MongoDB Integration**
   - Schema for users, projects, feedback, uploads, etc.

2. **Email Enquiry System**
   - Connected via **NodeMailer**  
   - Routes messages from the contact form to company inbox  

3. **Node.js + Express API**
   - RESTful API endpoints for frontend interaction  
   - Routes for contact, projects, testimonials, feedback, login/signup  

4. **Testimonial System**
   - Stores feedback with client consent toggle  
   - Manages visibility for public testimonial display  

5. **Employee Tracker Portal**
   - Backend logic for updating project statuses  
   - Tracks design phases (brief, in progress, submitted, revisions, completed)  

6. **Chatbot with Escalation**
   - FAQ automation logic  
   - Live chat escalation via websocket integration (future upgrade path)  

---

## 📌 Usage Summary

- **Clients** can:
  - View their current and past projects  
  - Track progress and leave feedback  
  - Interact with a support chatbot

- **Employees** can:
  - Access assigned projects  
  - Upload designs and mark progress  
  - See revisions, submit updates, and finalize work  

---

## 🚧 Ongoing / Future Enhancements

- Admin-level dashboard for analytics  
- Integration with cloud storage (Firebase)  
- Real-time notification system  
- Full authentication and session control  
- CMS integration for editable portfolio/projects  
