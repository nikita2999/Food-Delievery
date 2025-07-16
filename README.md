# 🍽️ Food Delivery App

A full-stack Food Delivery web application built with **MERN Stack** (MongoDB, Express, React, Node.js). This app allows users to browse food items, add them to cart, and place orders. It includes separate frontend and backend codebases and is deployed using **Render**.

---

## 📁 Project Structure

```
food-delivery-app/
│
├── frontend/   # React frontend (deployed separately)
├── backend/    # Express + MongoDB backend (deployed separately)
└── README.md
```

---

## 🔗 Live Demo

- **Frontend**: [https://your-frontend-url.onrender.com](https://your-frontend-url.onrender.com)
- **Backend API**: [https://your-backend-url.onrender.com](https://your-backend-url.onrender.com)

---

## 🚀 Tech Stack

**Frontend:**
- React.js
- Axios
- Tailwind CSS / Bootstrap (optional)
- React Router

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv (for environment config)
- CORS

---

## ⚙️ Setup Instructions (Local Development)

### Prerequisites
- Node.js and npm
- MongoDB (local or Atlas)

---

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/food-delivery-app.git
cd food-delivery-app
```

---

### 2. Backend Setup
```bash
cd backend
npm install
```

#### Create a `.env` file:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=4000
```

#### Run the server:
```bash
npm start
```

---

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

#### Run the client:
```bash
npm run dev
```

---

## 🌐 Deployment (Render)

### Frontend
- Create a **Static Site** on Render
- Root directory: `frontend/`
- Build command: `npm install && npm run build`
- Publish directory: `dist` or `build` (depending on setup)

### Backend
- Create a **Web Service** on Render
- Root directory: `backend/`
- Build command: `npm install`
- Start command: `npm start`
- Add environment variables (e.g., `MONGODB_URI`, `PORT`)

---

## 🧪 API Endpoints (Examples)

| Method | Endpoint             | Description         |
|--------|----------------------|---------------------|
| GET    | `/api/foods`         | Get list of food    |
| POST   | `/api/user/register` | Register a user     |
| POST   | `/api/order`         | Place an order      |

---

## 👩‍💻 Author

**Nikita Sharma**  
[GitHub](https://github.com/nikkitabhardwaj)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
