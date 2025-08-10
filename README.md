# 📌 Personal Portfolio Website

This project is a **personal portfolio website** with both client-side and server-side components.  
Its main purpose is to showcase **Front-End** and **Back-End** development skills, including sending contact forms via email through the server.

---

## 🚀 Technologies

### **Server Side (Node.js + TypeScript)**
- **Node.js** – Backend runtime environment
- **Express** – HTTP server framework
- **Nodemailer** – Sending emails from contact forms
- **TypeScript** – Strong typing and code safety
- **ts-node-dev** – Development server runner
- **@types/\*** – TypeScript type definitions for third-party libraries

### **Client Side (React + Vite)**
- **React** – UI development
- **Vite** – Fast build tool
- **TypeScript** – Strong typing and code safety
- **Tailwind CSS** – Styling
- **shadcn/ui** – Pre-built UI components

---

## 📦 Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2. Install dependencies for both client and server
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 3. Run both client and server

**In one terminal (Server):**
```bash
cd server
npm run dev
# Server runs on: http://localhost:5000
```

**In another terminal (Client):**
```bash
cd client
npm run dev
# Client runs on: http://localhost:8000
```

### 4. Access the app
- **Client:** http://localhost:8000
- **Server:** http://localhost:5000

---

## 📡 Client-to-Server Communication

The client sends contact form data to the server using fetch:

```typescript
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Server = process.env.API_URL || "http://localhost:5000";

export const sendContactForm = async (data: ContactFormData) => {
  const response = await fetch(`${Server}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  
  if (!response.ok) {
    throw new Error("Failed to send contact form");
  }
  
  return response.json();
};
```

---

## 🎯 Project Goals

- Display a personal portfolio and demonstrate design/development capabilities
- Combine Front-End and Back-End in a single project
- Show how to send contact forms via email
- Practice using TypeScript on both client and server

---

## ✅ Example API Response

When a contact form is successfully submitted, the server returns:

```json
{
  "success": true,
  "message": "Contact form sent successfully"
}
```

---

## 🛠️ Development Commands

| Component | Command | Description |
|-----------|---------|-------------|
| Server | `npm run dev` | Run server in development mode |
| Client | `npm run dev` | Run client in development mode |
| Server | `npm run build` | Build server for production |
| Client | `npm run build` | Build client for production |

---

## 📁 Project Structure

```
project/
├── client/          # React + Vite frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── server/          # Node.js + Express backend
│   ├── src/
│   ├── dist/
│   └── package.json
└── README.md
```