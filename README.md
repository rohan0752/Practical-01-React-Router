# Practical 1: React Router Navigation

## 📋 Practical Question
**Implement navigation between Home, About, and Contact pages using React Router. Use BrowserRouter, Routes, Route, and Link. Demonstrate navigation without a full page reload.**

## 🎯 Aim & Objectives
- Implement client-side navigation using React Router
- Use BrowserRouter, Routes, Route, and Link components
- Demonstrate Single Page Application (SPA) navigation without full page reloads
- Create a clean, responsive, and visually appealing user interface

## 🛠️ Technologies Used
| Technology | Purpose |
|-----------|---------|
| React 19 | UI library for building component-based interfaces |
| React Router v7 | Client-side routing library |
| Vite | Fast build tool and dev server |
| JavaScript (JSX) | Programming language with JSX syntax |
| CSS3 | Styling with custom properties and animations |

## ✨ Features
- **Home Page** — Welcome page with feature cards explaining React Router concepts
- **About Page** — Project information, objectives, and technologies used
- **Contact Page** — Contact form with validation and success feedback
- **Responsive Navbar** — Active link highlighting using `useLocation()`
- **Smooth Transitions** — Page fade-in animations on route changes
- **Dark Theme** — Modern dark UI with gradient accents

## 📚 React Concepts Demonstrated
1. **BrowserRouter** — Wraps the app to enable routing using the HTML5 History API
2. **Routes & Route** — Define URL-to-component mappings
3. **Link** — Navigate between routes without full page reload (replaces `<a>` tags)
4. **useLocation** — Hook to read the current URL for active link styling
5. **useState** — State management for the contact form
6. **Component composition** — App composed of Navbar, page components, and footer

## 🚀 Installation & Run Instructions
```bash
# Navigate to this project
cd Practical-01-React-Router

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔨 Build for Production
```bash
npm run build
```
The production build will be in the `dist/` folder.

## ⚠️ Limitations
- Contact form does not actually send emails (demo only)
- No backend server — all data is client-side

## 🔗 Links
- **GitHub Repository:** *(will be added after publishing)*
- **Netlify Live URL:** *(will be added after deployment)*
