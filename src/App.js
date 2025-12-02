import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './App.css';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';


const ThemeWrapper = ({ children }) => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]);

  return children;
};

function AppContent() {
  const { isDarkMode } = useTheme();
  return (
    <div className="site-root">
      <Navbar />
      <div className="container">
        <aside className="sidebar">
          <div className="profile-card">
            <img
              src={isDarkMode ? '/prof.png' : '/proflight.png'}
              alt="Profile"
              className="profile-img"
            />
            <h1 className="name">Paul Michael Vergara</h1>
            <p className="sub">Pasig City, Philippines</p>
            <p className="sub small">Full-stack Developer</p>
          </div>
          <div className="card tech-card">
            <h3>Tech Stack</h3>
            <div className="cols">
              <ul>
                <li><strong>Frontend:</strong> HTML, CSS, React, JavaScript</li>
                <li><strong>Backend:</strong> Node.js, Python, Node-RED </li>
                <li><strong>DB / Tools:</strong> InfluxDB, Grafana, GitHub, Vercel</li>
              </ul>
            </div>
          </div>

          <div className="card social-card">
            <h3>Social Links</h3>
            <div className="social-list">
              <a className="social-item" href="https://www.linkedin.com/in/paul-michael-vergara-808045319/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <span className="social-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
                    <path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.84v2.2h.05c.54-1.02 1.86-2.2 3.83-2.2C20.4 8 24 10.2 24 15.3V24h-4v-7.1c0-1.69-.03-3.86-2.35-3.86-2.35 0-2.71 1.84-2.71 3.74V24h-4V8z"/>
                  </svg>
                </span>
                <span className="social-label">LinkedIn</span>
              </a>

              <a className="social-item" href="https://github.com/PaulMichaelVergara" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <span className="social-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
                    <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.806 1.304 3.492.997.108-.775.418-1.304.76-1.604-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.235-3.222-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.653.243 2.874.12 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.804 5.624-5.475 5.92.43.37.814 1.102.814 2.222 0 1.604-.015 2.896-.015 3.293 0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </span>
                <span className="social-label">GitHub</span>
              </a>

              <a className="social-item" href="https://www.instagram.com/maulpichael" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <span className="social-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
                    <path fill="currentColor" d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.97.24 2.427.403.6.22 1.03.485 1.48.935.45.45.715.88.935 1.48.164.457.35 1.257.404 2.427.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.404 2.427-.22.6-.485 1.03-.935 1.48-.45.45-.88.715-1.48.935-.457.164-1.257.35-2.427.404-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.427-.404-.6-.22-1.03-.485-1.48-.935-.45-.45-.715-.88-.935-1.48-.164-.457-.35-1.257-.404-2.427C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.054-1.17.24-1.97.404-2.427.22-.6.485-1.03.935-1.48.45-.45.88-.715 1.48-.935.457-.164 1.257-.35 2.427-.404C8.416 2.212 8.8 2.2 12 2.2zm0 2.2c-3.13 0-3.504.012-4.74.068-1 .048-1.54.216-1.9.36-.48.19-.82.42-1.18.78-.36.36-.59.7-.78 1.18-.144.36-.312.9-.36 1.9-.056 1.236-.068 1.61-.068 4.74s.012 3.504.068 4.74c.048 1 .216 1.54.36 1.9.19.48.42.82.78 1.18.36.36.7.59 1.18.78.36.144.9.312 1.9.36 1.236.056 1.61.068 4.74.068s3.504-.012 4.74-.068c1-.048 1.54-.216 1.9-.36.48-.19.82-.42 1.18-.78.36-.36.59-.7.78-1.18.144-.36.312-.9.36-1.9.056-1.236.068-1.61.068-4.74s-.012-3.504-.068-4.74c-.048-1-.216-1.54-.36-1.9-.19-.48-.42-.82-.78-1.18-.36-.36-.7-.59-1.18-.78-.36-.144-.9-.312-1.9-.36C15.504 4.412 15.13 4.4 12 4.4zM12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 2.2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm4.9-3.6a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2z"/>
                  </svg>
                </span>
                <span className="social-label">Instagram</span>
              </a>

              <a className="social-item" href="https://facebook.com/Paullvergara" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <span className="social-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
                    <path fill="currentColor" d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.41c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.245l-1.918.001c-1.504 0-1.796.716-1.796 1.765v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"/>
                  </svg>
                </span>
                <span className="social-label">Facebook</span>
              </a>

              <a className="social-item" href="https://mail.google.com/mail/?view=cm&fs=1&to=paulmichaelrvergara@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <span className="social-icon">
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
                    <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </span>
                <span className="social-label">Email</span>
              </a>
            </div>
          </div>
        </aside>

        <main className="main">
          <Element name="about" className="section">
            <div className="card about">
              <h2>About Me</h2>
              <p>
                I’m an Information Technology student at FEU Institute of Technology with a strong passion for building clean, efficient, and user-friendly applications. I enjoy exploring new technologies and continuously improving my technical skills through hands-on projects and real-world problem-solving.
              </p>
              <p>I approach development with a strong emphasis on precision, structure, and long-term reliability. I’m committed to understanding systems at both the technical and architectural level, ensuring that every solution I work on is efficient, scalable, and well-designed.
              </p>
            </div>
          </Element>

          <Element name="projects" className="section">
            <div className="card projects">
              <h2>Projects</h2>
              <div className="project-list">
                <div className="project">
                  <img src= '/fitbeat.png' alt="project" />
                  <div className="proj-meta">
                    <h4>Medical Appointment Booking</h4>
                    <p>A medical appointment booking system with AI-integrated data analysis.</p>
                  </div>
                </div>

                <div className="project">
                  <img src='shelleco.png' alt="project" />
                  <div className="proj-meta">
                    <h4>Telemetry Dashboard</h4>
                    <p>Live Car telemetry dashboard for competition use by FEU participants.</p>
                  </div>
                </div>
              </div>
            </div>
          </Element>

          <div className="cards-row">
            <div className="card certifications-card">
              <div className="certifications">
                <h3>Certifications</h3>
                <div className="certifications-list">
                  <a href="https://drive.google.com/file/d/1t52J2tLgR5Xc6y_yD-HvpslS8SEjDtDE/view?usp=sharing" className="certification-item" target="_blank" rel="noopener noreferrer">
                    <span className="certification-icon">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M10 6V8H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"/>
                      </svg>
                    </span>
                    <span>Information Technology Specialist in JavaScript</span>
                  </a>
                  <a href="https://drive.google.com/file/d/1_lnitSQM6iBh9ACp3ucqcklDK0XkT0-e/view?usp=sharing" className="certification-item" target="_blank" rel="noopener noreferrer">
                    <span className="certification-icon">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M10 6V8H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"/>
                      </svg>
                    </span>
                    <span>Information Technology Specialist in Networking</span>
                  </a>
                  <a href="https://drive.google.com/file/d/1NjJ3flxAxKyvwJjC4a8Zoca9hV3aZLCy/view?usp=sharing" className="certification-item" target="_blank" rel="noopener noreferrer">
                    <span className="certification-icon">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M10 6V8H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"/>
                      </svg>
                    </span>
                    <span>Information Technology Specialist in HTML and CSS</span>
                  </a>
                  <a href="https://drive.google.com/file/d/1ByrpZSoY6-TokSBWLoFPHM1aT8RXbzzZ/view?usp=sharing" className="certification-item" target="_blank" rel="noopener noreferrer">
                    <span className="certification-icon">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <path d="M10 6V8H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"/>
                      </svg>
                    </span>
                    <span>PMI Project Management Ready</span>
                  </a>
                </div>
              </div>
            </div>

            <Element name="contact" className="section">
              <div className="card contact-card">
                <div className="contact">
                  <h3>Contact Me</h3>
                  <ContactForm />
                </div>
              </div>
            </Element>
          </div>
        </main>
      </div>

    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <AppContent />
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default App;
