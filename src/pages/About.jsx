function About() {
  return (
    <div className="page about-page">
      <div className="page-header">
        <h1>About Us</h1>
        <p className="page-subtitle">Learn about this React Router demonstration project</p>
      </div>

      <div className="about-content">
        <div className="about-card">
          <h2>📚 About This Project</h2>
          <p>
            This is <strong>Practical 1</strong> of the BCA (Hons.) React JS practical series. 
            It demonstrates navigation between multiple pages using <strong>React Router</strong> — 
            the most popular routing library for React applications.
          </p>
        </div>

        <div className="about-card">
          <h2>🎯 Objectives</h2>
          <ul className="objectives-list">
            <li>Implement navigation between Home, About, and Contact pages</li>
            <li>Use BrowserRouter, Routes, Route, and Link components</li>
            <li>Demonstrate Single Page Application (SPA) navigation</li>
            <li>Create a clean and responsive user interface</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>🛠️ Technologies Used</h2>
          <div className="tech-badges">
            <span className="badge">React 19</span>
            <span className="badge">React Router v7</span>
            <span className="badge">Vite</span>
            <span className="badge">JavaScript (JSX)</span>
            <span className="badge">CSS3</span>
          </div>
        </div>

        <div className="about-card">
          <h2>💡 How It Works</h2>
          <p>
            React Router uses the browser's History API to change the URL without a full page reload.
            When you click a <code>&lt;Link&gt;</code>, React Router updates the URL and renders the 
            matching component — giving users a fast, app-like experience.
          </p>
          <p>
            <strong>Notice:</strong> When you navigate between pages, the browser tab doesn't reload. 
            The URL changes, but only the page content updates. That's the power of client-side routing!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
