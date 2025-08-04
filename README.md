# 🛍️ Trendylo

**Trendylo** is a full-stack **E-commerce Web Application** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.  
It provides a seamless shopping experience for customers and an intuitive admin panel for managing products and orders.

🌐 **Live Demo:** [https://trendylo.vercel.app](https://trendylo.vercel.app)

---

## 📦 Key Features

### 👩‍💻 For Customers
- 🔐 JWT-based user authentication
- 🛍️ Browse products by category & subcategory
- 📦 Product details with size & quantity selection
- 🛒 Add to cart, update/delete cart items
- 💳 Place orders using Stripe
- 📱 Fully responsive UI

### 👩‍💼 For Admin
- 🔐 Secure admin login
- ➕ Add, ✏️ Edit, 🗑️ Delete products
- 📋 View & manage all orders
- 📊 Admin dashboard with revenue and orders data
- 🔒 Protected admin routes

---

## 🚀 Tech Stack

### 🖥️ Frontend (/frontend)
- React.js + React Router
- Axios
- Bootstrap + Custom CSS

### 🛠️ Backend (/backend)
- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication
- Multer + Cloudinary (Image Uploads)
- Stripe Payment Gateway

### ⚙️ Admin Panel (/admin)
- React-based admin dashboard
- Product & Order management UI
- Admin route protection

---
##🔐 Environment Variables Setup

Both the /frontend and /backend apps require environment variables.
Sample .env.example files are provided — copy them and rename to .env:

##✅ Setup Steps

### For frontend
cd frontend/.env.example frontend/.env

### For backend
cp backend/.env.example backend/.env

##🛠️ Getting Started (Local Setup)
### 1. Clone the repository
git clone https://github.com/student-sneha/Trendylo-Ecommerce
cd Trendylo

### 2. Install Frontend Dependencies
cd frontend
npm install

### 3. Install Backend Dependencies
cd ../backend
npm install

### 4. Add Environment Variables
 Create .env files as shown above

### 5. Start the Project
cd backend
npm run server

### Run frontend app
cd frontend
npm run dev

### 📁 Folder Structure
```bash
Trendylo/
│
├── backend/                 # Node.js + Express + MongoDB API
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/                # Customer-facing React app
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── context/
│       ├── App.js
│       └── index.js
│
├── admin/                   # Admin dashboard React app
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── pages/
│       ├── App.js
│
├── .env
├── .gitignore
├── README.md
└── package.json
```

🙋‍♀️ About Me

I'm Sneha Khandelwal, a frontend developer passionate about building real-world web applications using React and the MERN stack.

- 💼 [LinkedIn](https://www.linkedin.com/in/snehagupta12/)  
- 🧠 [GitHub](https://github.com/student-sneha)

## ⭐️ Show Your Support

If you found this project helpful:

- ⭐️ Star this repo  
- 🍴 Fork it  
- 🛠️ Submit PRs or issues
