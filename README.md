# GitHub User Search App 🔍

A powerful and user-friendly React web application that allows users to search for GitHub profiles, view detailed information about each user, and explore their public repositories. Ideal for developers looking to explore the GitHub community or showcase their frontend skills.

---

## 🚀 Features

### 🔎 User Search

- Search GitHub users by entering a username.
- Real-time fetching of data from GitHub's public API.
- Displays a list of users with their avatar and username.

### 👤 User Details Page

- Click on any user to view more information.
- Detailed page includes:
  - GitHub profile link
  - User avatar
  - Name and bio (if available)
  - Location
  - Number of public repositories

### 📁 Repositories

- Displays the 5 most recently created public repositories of the user.
- Each repository shows its name and is linked directly to GitHub.

### 🧭 Navigation

- Simple and clean navigation bar with routes to:
  - Home
  - About Us
  - Contact Us
- 404 Not Found page for undefined routes.

---

## 🛠️ Built With

- **React** – Functional components and hooks
- **React Router** – Navigation between different pages
- **GitHub REST API** – Data source for user information and repositories
- **CSS** – Custom styling for layout and responsiveness

---

## 📂 Project Structure

src/
│
├── components/
│ ├── home/ # Form, Users, and Loading components
│ ├── showMoreUser/ # Repos, Hairable, and SingleUser components
│ └── UI/ # Header and Footer
│
├── pages/
│ ├── Home.jsx # Main page for search and user results
│ ├── AboutUs.jsx
│ ├── ConnectUs.jsx
│ ├── ShowMoreUser.jsx # Displays detailed info for selected user
│ └── NotFound.jsx
│
├── App.jsx # Root component
├── index.js # Entry point with BrowserRouter
└── index.css # Main stylesheet

## 📦 Getting Started

Follow these steps to run the app locally:

### 1. Create a new React app

````bash
npx create-react-app my-app

 2. Replace the contents of the src folder
Copy all the project files into the src directory of the newly created React app, replacing the existing files.

3. Install dependencies (if any)
```bash
npm install

4. Start the development server
```bash
npm start

The app will open in your default browser at http://localhost:3000.


````
