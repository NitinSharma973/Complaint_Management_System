# Complaint Management System

A complete web-based Complaint Management System for managing user complaints and keeping track of their statuses. The application includes a user-friendly interface, admin dashboard, and email notification functionality.

---

## Features

### User Features
- **Submit Complaint**: Users can submit complaints by providing the title, description, category, and priority.
- **Email Notifications**: Users and admins receive email notifications upon complaint submission and status updates.

### Admin Features
- **Admin Dashboard**: Admins can view all complaints in a table with details like title, category, priority, and status.
- **Status Management**: Admins can update the status of complaints (e.g., Pending, In Progress, Resolved).
- **Email Notifications**: Admins are notified when the status of a complaint is updated.

---

## Technologies Used

### Frontend
- **React**: For the user interface.
- **React Router**: For routing between pages (e.g., User Form and Admin Dashboard).
- **CSS**: For styling the application.

### Backend
- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for handling routes and APIs.
- **Mongoose**: For MongoDB integration.
- **Nodemailer**: For sending email notifications.
- **SendGrid/Mailgun**: Alternative email service integrations.

### Database
- **MongoDB**: To store complaint data.

---

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB installed locally or a MongoDB Atlas account
- SendGrid or Mailgun API key

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/complaint-management-system.git
   cd complaint-management-system
