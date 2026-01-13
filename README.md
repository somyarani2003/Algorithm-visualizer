<div align="center">
  <img src="https://img.shields.io/badge/Algorithm-Visualizer-00D9FF?style=for-the-badge&logo=react&logoColor=white" alt="Algorithm Visualizer">
  
  # 🎯 Algorithm Visualizer
  
  <p align="center">
    <strong>An interactive full-stack web application for visualizing sorting and searching algorithms with stunning 3D animations</strong>
  </p>
  
  <p align="center">
    <a href="https://github.com/Rajibul-Molla/algorithm-visualizer/stargazers">
      <img src="https://img.shields.io/github/stars/Rajibul-Molla/algorithm-visualizer?style=flat-square" alt="GitHub stars">
    </a>
    <a href="https://github.com/Rajibul-Molla/algorithm-visualizer/network/members">
      <img src="https://img.shields.io/github/forks/Rajibul-Molla/algorithm-visualizer?style=flat-square" alt="GitHub forks">
    </a>
    <a href="https://github.com/Rajibul-Molla/algorithm-visualizer/issues">
      <img src="https://img.shields.io/github/issues/Rajibul-Molla/algorithm-visualizer?style=flat-square" alt="GitHub issues">
    </a>
    <a href="https://github.com/Rajibul-Molla/algorithm-visualizer/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/Rajibul-Molla/algorithm-visualizer?style=flat-square" alt="MIT License">
    </a>
  </p>

  <p align="center">
    <a href="https://algorithm-visualizer-sooty.vercel.app/">View Demo</a>
    •
    <a href="#features">Features</a>
    •
    <a href="#installation">Installation</a>
    •
    <a href="#api-documentation">API Docs</a>
    •
    <a href="#contributing">Contributing</a>
  </p>
</div>

<br>

<div align="center">
  <img src="https://raw.githubusercontent.com/Rajibul-Molla/algorithm-visualizer/main/demo/preview.gif" alt="Algorithm Visualizer Demo" width="80%">
</div>

## 📖 Table of Contents

- [About](#about)
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Algorithms Implemented](#algorithms-implemented)
- [Installation](#installation)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Team](#team)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## 🎨 About

<table>
  <tr>
    <td>
      <b>Algorithm Visualizer</b> is a modern, full-stack educational web application built with React.js, Node.js, and MongoDB. It helps students, developers, and coding enthusiasts understand fundamental computer science algorithms through dynamic 3D visualizations and interactive animations.
      <br><br>
      The platform features a stunning 3D animated homepage with particle effects and floating cubes, color-coded sorting visualizations, step-by-step searching animations.
      <br><br>
      Whether you're preparing for technical interviews, studying data structures and algorithms, or simply curious about how different algorithms work, this tool provides an immersive, production-ready learning experience.
    </td>
  </tr>
</table>

## 🚀 Demo

<div align="center">
  <a href="algorithm-visualizer-puce-seven.vercel.app/">
    <img src="https://img.shields.io/badge/LIVE%20DEMO-Click%20Here-success?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo">
  </a>
  <br><br>
  <a href="https://algorithm-visualizer-api.onrender.com">
    <img src="https://img.shields.io/badge/API-Backend%20Server-blue?style=for-the-badge&logo=node.js&logoColor=white" alt="Backend API">
  </a>
</div>

## ✨ Features

<table>
  <tr>
    <td width="50%">
      <h3>🎨 3D Animated Homepage</h3>
      <ul>
        <li>Particle starfield effect (150 particles)</li>
        <li>8 rotating wireframe cubes</li>
        <li>Smooth floating animations</li>
        <li>Gradient text effects</li>
        <li>Canvas-based high-performance rendering</li>
      </ul>
    </td>
    <td width="50%">
      <h3>🔄 Advanced Sorting Visualizer</h3>
      <ul>
        <li>5 algorithms with color-coded states</li>
        <li>Bubble Sort (O(n²))</li>
        <li>Selection Sort (O(n²))</li>
        <li>Insertion Sort (O(n²))</li>
        <li>Merge Sort (O(n log n))</li>
        <li>Quick Sort (O(n log n))</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🔍 Interactive Searching Visualizer</h3>
      <ul>
        <li>Linear Search with step tracking</li>
        <li>Binary Search with visual indicators</li>
        <li>Real-time step counter</li>
        <li>Color-coded element states</li>
        <li>Found/Not Found visual feedback</li>
      </ul>
    </td>
     <td width="50%">
      <h3>🎮 Interactive Controls</h3>
      <ul>
        <li>Array size: 10-100 elements</li>
        <li>Speed control: 1-100 levels</li>
        <li>Generate random arrays</li>
        <li>Real-time visualization updates</li>
        <li>Responsive slider controls</li>
      </ul>
    </td>
  </tr>
 
  <tr>
      <td width="50%">
      <h3>📚 Educational Content</h3>
      <ul>
        <li>C++ code implementation display</li>
        <li>Time complexity analysis (Big O)</li>
        <li>Space complexity breakdown</li>
        <li>Syntax highlighting (Prism.js)</li>
        <li>Algorithm explanations</li>
      </ul>
    </td>
  </tr>
</table>

### 🌟 Additional Features

<details>
<summary><b>Click to expand</b></summary>

- **📱 Fully Responsive Design**: Optimized for mobile, tablet, and desktop with CSS media queries
- **⚡ High Performance**: Smooth 60fps animations even with 100 elements
- **🎯 Color-Coded Visualization**:
  - 🔵 Cyan: Unsorted elements
  - 🟡 Yellow: Currently comparing
  - 🔴 Red: Swapping/Moving
  - 🟣 Purple: Pivot/Selected element
  - 🟢 Green: Sorted/Found element
- **💾 MongoDB Integration**: User data persistence
- **📊 RESTful API**: Complete backend API with validation
- **🚀 Production Ready**: Deployed on Vercel & Render
- **♿ Accessibility**: ARIA labels and keyboard navigation
- **🎨 Modern UI/UX**: Tailwind CSS with custom animations

</details>

## 🛠️ Tech Stack

<div align="center">

### Frontend
| Technology | Purpose | Version |
|------------|---------|---------|
| ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) | UI Framework | 18.2.0 |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) | Styling | 3.3.5 |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) | Programming | ES6+ |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) | HTTP Client | 1.6.2 |
| ![Lucide React](https://img.shields.io/badge/Lucide-F56565?style=for-the-badge&logo=lucide&logoColor=white) | Icons | 0.263.1 |
| ![Canvas API](https://img.shields.io/badge/Canvas-E34F26?style=for-the-badge&logo=html5&logoColor=white) | 3D Animations | Native |

### Backend
| Technology | Purpose | Version |
|------------|---------|---------|
| ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) | Runtime | 16+ |
| ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) | Web Framework | 4.18.2 |
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) | Database | 6.0+ |
| ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white) | ODM | 8.0.3 |


### Deployment
| Platform | Purpose |
|----------|---------|
| ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) | Frontend Hosting |
| ![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white) | Backend Hosting |
| ![MongoDB Atlas](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white) | Database Hosting |

</div>

## 🧮 Algorithms Implemented

### Sorting Algorithms

| Algorithm | Best Case | Average Case | Worst Case | Space Complexity | Color States |
|-----------|-----------|--------------|------------|------------------|--------------|
| **Bubble Sort** | O(n) | O(n²) | O(n²) | O(1) | 🟡🔴🟢 |
| **Selection Sort** | O(n²) | O(n²) | O(n²) | O(1) | 🟡🔴🟣🟢 |
| **Insertion Sort** | O(n) | O(n²) | O(n²) | O(1) | 🟡🔴🟢 |
| **Merge Sort** | O(n log n) | O(n log n) | O(n log n) | O(n) | 🟡🔴🟣🟢 |
| **Quick Sort** | O(n log n) | O(n log n) | O(n²) | O(log n) | 🟡🔴🟣🟢 |

### Searching Algorithms

| Algorithm | Best Case | Average Case | Worst Case | Space Complexity | Visual States |
|-----------|-----------|--------------|------------|------------------|---------------|
| **Linear Search** | O(1) | O(n) | O(n) | O(1) | 🟡🔴🟢 |
| **Binary Search** | O(1) | O(log n) | O(log n) | O(1) | 🟡🔴🟢 |

### Color Legend

#### Sorting
- 🔵 **Cyan**: Unsorted elements
- 🟡 **Yellow**: Elements being compared
- 🔴 **Red**: Elements being swapped/moved
- 🟣 **Purple**: Pivot or selected minimum element
- 🟢 **Green**: Sorted elements in final position

#### Searching
- 🟣 **Purple**: Not yet checked
- 🟡 **Yellow (Pulsing)**: Currently checking
- 🔴 **Red**: Already checked (not a match)
- 🟢 **Green (Glowing)**: Target element found!

## 📦 Installation

### Prerequisites

- **Node.js** (v16.0 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v6.0 or higher) - [Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **npm** or **yarn** - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rajibul-Molla/algorithm-visualizer.git
   cd algorithm-visualizer
   ```

2. **Install Backend Dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Configure Environment Variables**

   **Backend `.env` (server/.env):**
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/algorithm-visualizer
   JWT_SECRET=your_super_secret_jwt_key_here
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   CLIENT_URL=http://localhost:3000
   ```

   **Generate JWT Secret:**
   ```bash
   node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
   ```

   **Frontend `.env` (client/.env):**
   ```env
   REACT_APP_API_URL=http://localhost:5000/api
   REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
   ```

5. **Start MongoDB**
   ```bash
   # macOS
   brew services start mongodb-community
   
   # Windows
   net start MongoDB
   
   # Linux
   sudo systemctl start mongod
   
   # Docker
   docker run -d -p 27017:27017 --name mongodb mongo:latest
   ```

6. **Run the Application**

   **Terminal 1 (Backend):**
   ```bash
   cd server
   npm run dev
   ```

   **Terminal 2 (Frontend):**
   ```bash
   cd client
   npm start
   ```

7. **Access the Application**
   ```
   Frontend: http://localhost:3000
   Backend API: http://localhost:5000/api
   Health Check: http://localhost:5000/api/health
   ```

## 🔌 API Documentation

### Base URL
```
Production: https://algorithm-visualizer-api.onrender.com/api
Development: http://localhost:5000/api
```



#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <your_jwt_token>
```

#### Google OAuth
```http
POST /api/auth/google
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@gmail.com",
  "googleId": "1234567890",
  "avatar": "https://..."
}
```

### User Endpoints

#### Get Profile
```http
GET /api/users/profile
Authorization: Bearer <your_jwt_token>
```

#### Update Profile
```http
PUT /api/users/profile
Authorization: Bearer <your_jwt_token>
Content-Type: application/json

{
  "name": "John Updated"
}
```

### Health Check
```http
GET /api/health

Response:
{
  "status": "OK",
  "message": "Server is running",
  "database": "Connected"
}
```

## 📁 Project Structure

```
algorithm-visualizer/
├── client/                          # React Frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth/
│   │   │   │   └── AuthPage.jsx       # Login/Signup Component
│   │   │   ├── About/
│   │   │   │   └── AboutSection.jsx   # Team Section
│   │   │   ├── Visualizers/
│   │   │   │   ├── SortingVisualizer.jsx    # 5 Sorting Algorithms
│   │   │   │   └── SearchingVisualizer.jsx  # 2 Search Algorithms
│   │   │   ├── Layout/
│   │   │   │   └── Header.jsx         # Navigation Header
│   │   │   └── Home/
│   │   │       └── HomePage.jsx       # 3D Animated Homepage
│   │   ├── context/
│   │   │   └── AuthContext.jsx        # Auth State Management
│   │   ├── utils/
│   │   │   └── api.js                 # Axios API Client
│   │   ├── App.jsx                    # Main App Component
│   │   ├── index.js                   # React Entry Point
│   │   └── index.css                  # Tailwind CSS
│   ├── .env                           # Frontend Config
│   ├── package.json
│   └── tailwind.config.js
│
├── server/                          # Express Backend
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js            # MongoDB Connection
│   │   ├── controllers/
│   │   │   └── authController.js      # Auth Logic
│   │   ├── models/
│   │   │   └── User.js                # User Schema
│   │   ├── routes/
│   │   │   ├── authRoutes.js          # Auth Routes
│   │   │   └── userRoutes.js          # User Routes
│   │   └── middleware/
│   │       └── auth.js                # JWT Verification
│   ├── .env                           # Backend Config
│   ├── package.json
│   └── server.js                      # Express Server
│
├── .gitignore
├── docker-compose.yml               # Docker Setup
├── LICENSE
└── README.md
```

## 👥 Team

<table align="center">
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/rajibulmolla/">
        <img src="https://github.com/Rajibul-Molla/Algorithm-Visualizer/blob/master/About%20Us/unnamed.jpg" width="120px;" alt="Rajibul Molla"/><br />
        <sub><b>Rajibul Molla</b></sub>
      </a>
      <br />
      <sub>Full Stack Developer</sub>
      <br />
      <a href="https://github.com/Rajibul-Molla" title="GitHub">💻</a>
      <a href="https://www.linkedin.com/in/rajibulmolla/" title="LinkedIn">💼</a>
      <a href="mailto:rajibulat@gmail.com" title="Email">📧</a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/aditya-kumar-8a7094296/">
        <img src="https://github.com/Rajibul-Molla/Algorithm-Visualizer/blob/master/About%20Us/adi.jpg" width="120px;" alt="Aditya Kumar"/><br />
        <sub><b>Aditya Kumar</b></sub>
      </a>
      <br />
      <sub>Full Stack Developer</sub>
      <br />
      <a href="#" title="GitHub">💻</a>
      <a href="https://www.linkedin.com/in/aditya-kumar-8a7094296/" title="LinkedIn">💼</a>
      <a href="mailto:kadityah378@gmail.com" title="Email">📧</a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/somya-rani/">
        <img src="https://github.com/Rajibul-Molla/Algorithm-Visualizer/blob/master/About%20Us/somya.jpg" width="120px;" alt="Somya Rani"/><br />
        <sub><b>Somya Rani</b></sub>
      </a>
      <br />
      <sub>Full Stack Developer</sub>
      <br />
      <a href="#" title="GitHub">💻</a>
      <a href="https://www.linkedin.com/in/somya-rani/" title="LinkedIn">💼</a>
      <a href="mailto:somyarani698@gmail.com" title="Email">📧</a>
    </td>
  </tr>
</table>

## 🎯 Future Enhancements

<details>
<summary><b>Planned Features (Click to expand)</b></summary>

- [ ] **More Algorithms**
  - Heap Sort
  - Radix Sort
  - Counting Sort
  - Shell Sort

- [ ] **Graph Algorithms**
  - Dijkstra's Algorithm Visualization
  - BFS/DFS Traversal
  - Kruskal's & Prim's MST
  - A* Pathfinding

- [ ] **Data Structures**
  - Binary Search Tree Visualization
  - AVL Tree Rotations
  - Stack & Queue Operations
  - Linked List Operations
  - Hash Table Collisions

- [ ] **Enhanced Features**
  - Algorithm Comparison Mode (side-by-side)
  - Custom Array Input
  - Export Visualizations as GIF/Video
  - Step-by-step Explanation Mode
  - Algorithm Race Mode
  - Sound Effects for Operations
  - Multi-language Code Display (Python, Java, C++)
  - User Progress Tracking & Badges
  - Social Sharing Features

- [ ] **Mobile App**
  - React Native mobile application
  - Offline mode support
  - Touch gesture controls

</details>

## 🤝 Contributing

We love contributions! Here's how you can help make this project even better:

### 1. Fork & Clone
```bash
git clone https://github.com/Rajibul-Molla/algorithm-visualizer.git
cd algorithm-visualizer
```

### 2. Create Feature Branch
```bash
git checkout -b feature/AmazingFeature
```

### 3. Make Your Changes
- Write clean, commented code
- Follow existing code style
- Test thoroughly on multiple devices
- Update documentation if needed

### 4. Commit Changes
```bash
git commit -m 'Add some AmazingFeature'
```

### 5. Push & Create PR
```bash
git push origin feature/AmazingFeature
```

Then open a Pull Request with a clear description of your changes.

### Code Style Guidelines
- Use Prettier for formatting
- Follow React best practices
- Write meaningful commit messages
- Add comments for complex logic
- Test on Chrome, Firefox, Safari

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```

MIT License

Copyright (c) 2024 Rajibul Molla, Aditya Kumar, Somya Rani

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

## 🙏 Acknowledgments

<div align="center">

Special thanks to the open-source community and these amazing tools:

**Libraries & Frameworks:**
- [React.js](https://reactjs.org/) - UI Framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Express.js](https://expressjs.com/) - Backend Framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Prism.js](https://prismjs.com/) - Syntax Highlighting
- [Lucide React](https://lucide.dev/) - Beautiful Icons

**Resources:**
- [MDN Web Docs](https://developer.mozilla.org/) - Web Documentation
- [Stack Overflow](https://stackoverflow.com/) - Problem Solving
- [GitHub](https://github.com/) - Version Control
- [Vercel](https://vercel.com/) - Frontend Hosting
- [Render](https://render.com/) - Backend Hosting

</div>

## 📞 Contact

<div align="center">

For queries, suggestions, or collaboration:

[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:somyarani698@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/somya-rani/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/somyarani2003)

**Project
