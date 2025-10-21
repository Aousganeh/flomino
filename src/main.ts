import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <!-- Header -->
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <img src="/logo.jpg" alt="Flomino Logo" class="leaf-icon">
          <span class="logo-text">Flomino</span>
        </div>
        
        <nav class="nav">
          <a href="#about" class="nav-link">About</a>
          <a href="#how-it-works" class="nav-link">How It Works</a>
          <a href="#rewards" class="nav-link">Rewards</a>
          <a href="#community" class="nav-link">Community</a>
        </nav>
        
        <div class="header-right">
          <div class="language-selector">
            <span class="globe-icon">🌐</span>
            <span>Eng</span>
            <span class="arrow">▼</span>
          </div>
          <button class="contact-btn">Contact</button>
        </div>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">Join the green mission, play for a better planet.</h1>
          <p class="hero-subtitle">Turn your daily actions into real environmental impact - complete eco-tasks, earn points, and help plant trees with Flomino.</p>
          <button class="cta-btn">Daha çox öyrən</button>
        </div>
        
        <div class="hero-visual">
          <div class="hero-image">
            <img src="/frame-984.jpg" alt="Flomino App Interface" class="hero-image">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- How It Works Section -->
  <section class="how-it-works" id="how-it-works">
    <div class="container">
      <h2 class="section-title">How it works</h2>
      
      <div class="how-it-works-content">
        <div class="how-it-works-visual">
          <img src="/group-42.jpg" alt="How It Works" class="how-it-works-img">
        </div>
        
        <div class="features-list">
          <div class="feature">
            <img src="/checkbox-icon.jpg" alt="Checkmark" class="checkmark">
            <div class="feature-content">
              <h3>Choose your mission</h3>
              <p>Pick an eco-challenge that fits your lifestyle — from saving water to planting trees.</p>
            </div>
          </div>
          
          <div class="feature">
            <img src="/checkbox-icon.jpg" alt="Checkmark" class="checkmark">
            <div class="feature-content">
              <h3>Complete real actions</h3>
              <p>Do small green tasks every day and track your impact directly in the app.</p>
            </div>
          </div>
          
          <div class="feature">
            <img src="/checkbox-icon.jpg" alt="Checkmark" class="checkmark">
            <div class="feature-content">
              <h3>Earn points & grow your tree</h3>
              <p>Gain eco-points for every action and watch your virtual tree flourish.</p>
            </div>
          </div>
          
          <div class="feature">
            <img src="/checkbox-icon.jpg" alt="Checkmark" class="checkmark">
            <div class="feature-content">
              <h3>Join the community</h3>
              <p>Connect with other planet protectors, share your progress, and climb the leaderboard.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Rewards Section -->
  <section class="rewards" id="rewards">
    <div class="container">
      <div class="rewards-header">
        <h2 class="section-title">Rewards</h2>
        <p class="rewards-subtitle">Turn your eco-actions into real impact - collect, grow, and inspire.</p>
      </div>
      
      <div class="rewards-grid">
        <div class="reward-card">
          <div class="reward-content">
            <div class="reward-text">
              <h3>Eco Points</h3>
              <p>Earn points for every completed green mission.</p>
              <div class="learn-more-link">
                <img src="/group-44.png" alt="Arrow" class="arrow-icon">
                <span>Learn more</span>
              </div>
            </div>
            <div class="reward-icon">
              <img src="/group.png" alt="Eco Points Icon" class="reward-image">
            </div>
          </div>
        </div>
        
        <div class="reward-card">
          <div class="reward-content">
            <div class="reward-text">
              <h3>Green Badges</h3>
              <p>Unlock badges, you complete sustainable challenges.</p>
              <div class="learn-more-link">
                <img src="/group-44.png" alt="Arrow" class="arrow-icon">
                <span>Learn more</span>
              </div>
            </div>
            <div class="reward-icon">
              <img src="/group-2.png" alt="Green Badges Icon" class="reward-image">
            </div>
          </div>
        </div>
        
        <div class="reward-card">
          <div class="reward-content">
            <div class="reward-text">
              <h3>Tree Growth</h3>
              <p>Watch virtual tree grow—every point helps plant a real one.</p>
              <div class="learn-more-link">
                <img src="/group-44.png" alt="Arrow" class="arrow-icon">
                <span>Learn more</span>
              </div>
            </div>
            <div class="reward-icon">
              <img src="/palm-tree.png" alt="Tree Growth Icon" class="reward-image">
            </div>
          </div>
        </div>
        
        <div class="reward-card">
          <div class="reward-content">
            <div class="reward-text">
              <h3>Community Rank</h3>
              <p>Compete with others, climb the leaderboard, inspire change.</p>
              <div class="learn-more-link">
                <img src="/group-44.png" alt="Arrow" class="arrow-icon">
                <span>Learn more</span>
              </div>
            </div>
            <div class="reward-icon">
              <img src="/group-3.png" alt="Community Rank Icon" class="reward-image">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Community Section -->
  <section class="community" id="community">
    <div class="container">
      <h2 class="section-title">Community</h2>
      
      <div class="community-container">
        <div class="community-content">
          <div class="community-text">
            <h3>Join the Green Community</h3>
            <p>Connect with thousands of eco-heroes making real change - share your progress, earn badges, and grow together.</p>
            <div class="learn-more-link">
              <img src="/group-44.png" alt="Arrow" class="arrow-icon">
              <span>Learn more</span>
            </div>
          </div>
          
          <div class="community-image">
            <img src="/image-28.png" alt="Community" class="community-img">
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-left">
          <div class="footer-logo">
            <img src="/logo.jpg" alt="Flomino Logo" class="leaf-icon">
            <span class="logo-text">Flomino</span>
          </div>
          <div class="social-icons">
            <a href="#" class="social-icon">📷</a>
            <a href="#" class="social-icon">💼</a>
            <a href="#" class="social-icon">📘</a>
            <a href="#" class="social-icon">🐦</a>
          </div>
        </div>
        
        <div class="footer-links">
          <div class="footer-column">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Eco Missions & Daily Challenges</a></li>
              <li><a href="#">Tree Planting Program</a></li>
              <li><a href="#">Sustainability Tracking</a></li>
              <li><a href="#">Reward & Points System</a></li>
              <li><a href="#">Educational Campaigns</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h4>Explore</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Flomino</a></li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Challenges</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Blog & Articles</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Technical Support</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Become a Partner</a></li>
            </ul>
          </div>
  </div>
        
        <div class="footer-contact">
          <div class="contact-info">
            <p><strong>Phone:</strong> +994 123 45 67</p>
            <p><strong>Email:</strong> contactemailkdkjdoijdoqj</p>
            <p><strong>Address:</strong> contactemailkdkjdoijdoqj</p>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2025 Flomino. All rights reserved.</p>
      </div>
    </div>
  </footer>
`