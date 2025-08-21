import React, { useEffect } from "react";
import "./App.css";
import logo from "./assets/logo.PNG";
import feature1 from "./assets/feature1.png";
import feature2 from "./assets/feature2.png";
import feature3 from "./assets/feature3.png";
import user1 from "./assets/user1.jpg";
import user2 from "./assets/user2.jpg";
import user3 from "./assets/user3.jpg";
import facebook from "./assets/facebook.svg";
import twitter from "./assets/twitter.svg";
import instagram from "./assets/instagram.svg";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="App">
      {/* Header */}
      <header className="header" data-aos="fade-down">
        <img src={logo} alt="Elevvo Task Flow" className="logo" />
        <h1>Elevvo Task Flow</h1>
        <p>Organize your life, one task at a time.</p>
        <button className="cta-button">Get Started</button>
      </header>

      {/* Features Section */}
      <section className="features">
        <div className="feature" data-aos="fade-up">
          <img src={feature1} alt="Checklist" />
          <h3>Smart Task Management</h3>
          <p>Easily create, organize, and track your to-do lists with an intuitive interface.</p>
        </div>
        <div className="feature" data-aos="fade-up" data-aos-delay="200">
          <img src={feature2} alt="Calendar" />
          <h3>Calendar Integration</h3>
          <p>Sync tasks with your calendar to never miss a deadline again.</p>
        </div>
        <div className="feature" data-aos="fade-up" data-aos-delay="400">
          <img src={feature3} alt="Cloud Sync" />
          <h3>Cloud Sync</h3>
          <p>Access your tasks from anywhere with secure cloud synchronization.</p>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews">
        <div className="review" data-aos="zoom-in">
          <img src={user1} alt="User 1" />
          <p>"Elevvo Task Flow changed the way I organize my day. Highly recommend!"</p>
          <h4>- Sarah K.</h4>
        </div>
        <div className="review" data-aos="zoom-in" data-aos-delay="200">
          <img src={user2} alt="User 2" />
          <p>"Super intuitive and keeps me on track with my deadlines."</p>
          <h4>- John M.</h4>
        </div>
        <div className="review" data-aos="zoom-in" data-aos-delay="400">
          <img src={user3} alt="User 3" />
          <p>"I can manage my personal and work tasks all in one place."</p>
          <h4>- Lisa T.</h4>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <div className="price-card" data-aos="flip-left">
          <h3>Free</h3>
          <p>$0/month</p>
          <ul>
            <li>Basic task management</li>
            <li>Limited cloud storage</li>
          </ul>
          <button>Choose</button>
        </div>
        <div className="price-card" data-aos="flip-left" data-aos-delay="200">
          <h3>Pro</h3>
          <p>$9.99/month</p>
          <ul>
            <li>Advanced task features</li>
            <li>Priority support</li>
          </ul>
          <button>Choose</button>
        </div>
        <div className="price-card" data-aos="flip-left" data-aos-delay="400">
          <h3>Team</h3>
          <p>$19.99/month</p>
          <ul>
            <li>Collaborative tools</li>
            <li>Unlimited cloud storage</li>
          </ul>
          <button>Choose</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" data-aos="fade-up">
        <div className="container">
          <p>© 2025 Elevvo Task Flow — Built by sohaibranjha</p>
          <div className="social-icons">
            <a href="#"><img src={facebook} alt="Facebook" /></a>
            <a href="#"><img src={twitter} alt="Twitter" /></a>
            <a href="#"><img src={instagram} alt="Instagram" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
