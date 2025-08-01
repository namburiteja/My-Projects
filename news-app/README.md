# 📰 News App – React + Vite

This is a responsive, clean UI **News App** built using **React + Vite**, integrating a real-time News API. Users can browse headlines by country, category, and search keywords. It’s fully component-based, optimized for mobile and desktop, and deployed on **Netlify**.

---

# 🚀 Live Demo

🌐 [Click to View Live App](https://tejas-news-app.netlify.app/)

📂 [GitHub Repository](https://github.com/namburiteja/My-Projects/tree/main/news-app)

---

## 🔧 Tech Stack

- **React** (Component-based structure)
- **Vite** (Faster builds, dev server)
- **NewsData.io API** (200 free requests/day)
- **Netlify** (CI/CD deployment)
- **CSS** (Custom styles + Media Queries)

---

## ✨ Features

### 📦 Component-Based Architecture
- Each functionality (NavBar, SearchBar, NewsCard, etc.) is separated into clean, reusable components.
- Easy to scale and maintain.

### 🔍 Search Functionality
- Dynamic search bar with **toggle visibility**
- Lets users search by keyword
- Works in sync with country/category selection

### 📱 Mobile Responsiveness
- Fully responsive design using **media queries**
- Optimized for all screen sizes (phones, tablets, laptops)

### 🌐 API Integration
- Used NewsData.io for fetching real-time news
- Optimized request usage within **200 free requests/day**
- Gracefully handles loading and empty states

### 🎨 Clean UI/UX
- Custom CSS with consistent layout, spacing, and modern feel
- Intuitive interface — simple and user-friendly

---

## 🧠 Challenges Faced

- **Rate Limits of API:**  
  I had to optimize the number of fetch calls, prevent unnecessary re-renders, and implement fallback behaviors.

- **Search Toggle Logic:**  
  Managing conditional rendering of the search bar while keeping UI aligned across breakpoints was tricky.

- **Responsive Design Issues:**  
  Initial UI broke on smaller devices; fixing it taught me how to use percentage widths, flex-wrap, and media queries properly.

- **Component Reusability:**  
  Understanding prop drilling and how to maintain separation of concerns improved over time.

- **Deployment Setup:**  
  Learned how Vite and Netlify work together, and how to troubleshoot issues like relative paths in production builds.

---

## 🧪 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/namburiteja/My-Projects.git

# Navigate into the project
cd My-Projects/news-app

# Install dependencies
npm install

# Start the dev server
npm run dev

you need toadd Your api key in .env file VITE_API_KEY=your_actual_api_key
