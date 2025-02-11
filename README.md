# Simple Blog API

This is a backend API for a simple blog application built with **Node.js**, **Express**, and **MongoDB**. It allows users to perform CRUD operations on blog posts and includes basic user authentication using JSON Web Tokens (JWT).

---

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Setup Instructions](#setup-instructions)

---

## Features
- **User Authentication**:
  - Register a new user.
  - Login and receive a JWT token.
- **Blog Post Management**:
  - Create, read, update, and delete blog posts.
  - Only authenticated users can create, update, or delete posts.
- **Validation**:
  - Validate user input (e.g., email format, required fields).
- **Error Handling**:
  - Proper error handling for invalid requests, unauthorized access, etc.

---

## Technologies Used
- **Backend**: Node.js, Express
- **Database**: MongoDB (with Mongoose as ODM)
- **Authentication**: JWT, bcrypt
- **Validation**: Express Validator
- **Error Handling**: Custom middleware
- **Testing**: Postman

---

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud-based)
- Postman (for testing)

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/simple-blog-api.git
   cd simple-blog-api
2. **Install dependencies**:
   ```bash
   npm install
3. **Set up environment variables**:
   ```bash
   MONGODB_URI=mongodb://localhost:27017/blog-api
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
4. **Start the Server**:
   ```bash
   npm start
4. **Test the API**:
   -Use Postman or curl to test the endpoints

