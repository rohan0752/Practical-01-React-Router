import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page home-page">
      <div className="hero">
        <h1>Welcome to React Router Demo</h1>
        <p className="hero-subtitle">
          Navigate between pages without a full page reload using React Router.
        </p>
        <div className="hero-buttons">
          <Link to="/about" className="btn btn-primary">Learn About Us</Link>
          <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
        </div>
      </div>

      <div className="features">
        <div className="feature-card">
          <span className="feature-icon">🔗</span>
          <h3>Client-Side Routing</h3>
          <p>Navigate between pages without reloading the browser. React Router intercepts URL changes and renders the correct component.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">⚡</span>
          <h3>Fast Navigation</h3>
          <p>Since only the content changes (not the entire page), navigation feels instant and smooth.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🧩</span>
          <h3>Component-Based</h3>
          <p>Each page is a React component. Routes map URLs to components using the &lt;Route&gt; element.</p>
        </div>
      </div>

      <div className="concepts-section">
        <h2>Key Concepts Used</h2>
        <div className="concepts-grid">
          <div className="concept">
            <code>&lt;BrowserRouter&gt;</code>
            <p>Wraps the app and enables client-side routing using the HTML5 History API.</p>
          </div>
          <div className="concept">
            <code>&lt;Routes&gt;</code>
            <p>Container for all Route definitions. Only the first matching route is rendered.</p>
          </div>
          <div className="concept">
            <code>&lt;Route&gt;</code>
            <p>Maps a URL path to a specific React component.</p>
          </div>
          <div className="concept">
            <code>&lt;Link&gt;</code>
            <p>Replaces &lt;a&gt; tags. Navigates without triggering a page reload.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
