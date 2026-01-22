/* assets/css/home.css */
/* Homepage Specific Styles */

/* Hero Section */
.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 12px 24px;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.hero-badge .current-year {
  background: var(--accent);
  color: #000;
  padding: 4px 12px;
  border-radius: 6px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.hero-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto 40px;
  font-weight: 400;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 50px 0;
  flex-wrap: wrap;
}

.stat-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 25px;
  border-radius: var(--radius-md);
  border: 1px solid rgba(255, 255, 255, 0.2);
  min-width: 180px;
  text-align: center;
  transition: var(--transition);
}

.stat-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
}

.stat-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
  opacity: 0.9;
}

.stat-number {
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  display: block;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.95rem;
  opacity: 0.8;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-btn-primary {
  background: white;
  color: var(--primary-dark);
  padding: 18px 40px;
  border-radius: 15px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1rem;
  transition: var(--transition);
}

.cta-btn-primary:hover {
  background: #f0f9ff;
  transform: translateY(-3px);
  box-shadow: 0 15px 30px rgba(255, 255, 255, 0.1);
  text-decoration: none;
}

.cta-btn-secondary {
  background: transparent;
  color: white;
  padding: 18px 40px;
  border-radius: 15px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  transition: var(--transition);
}

.cta-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
  border-color: white;
  text-decoration: none;
}

/* Exam Categories */
.exam-categories {
  padding: 100px 0;
  background: var(--bg);
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--text);
}

.section-title span {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  color: var(--text-light);
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.exam-card {
  background: var(--card);
  border-radius: var(--radius-lg);
  padding: 40px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.exam-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: var(--gradient-primary);
}

.exam-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-xl);
  border-color: var(--primary-light);
}

.exam-card.ssc:hover::before {
  background: var(--gradient-primary);
}

.exam-card.banking:hover::before {
  background: linear-gradient(135deg, var(--success), var(--secondary));
}

.exam-card.upsc:hover::before {
  background: linear-gradient(135deg, var(--purple), var(--primary));
}

.exam-card.rrb:hover::before {
  background: linear-gradient(135deg, var(--accent), var(--danger));
}

.card-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
}

.card-icon {
  width: 70px;
  height: 70px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  flex-shrink: 0;
}

.card-icon.ssc { background: linear-gradient(135deg, #dbeafe, #bfdbfe); color: var(--primary-dark); }
.card-icon.banking { background: linear-gradient(135deg, #dcfce7, #bbf7d0); color: var(--success); }
.card-icon.upsc { background: linear-gradient(135deg, #f3e8ff, #e9d5ff); color: var(--purple); }
.card-icon.rrb { background: linear-gradient(135deg, #fef3c7, #fde68a); color: var(--accent); }

.card-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 5px;
}

.card-subtitle {
  color: var(--text-light);
  font-size: 0.95rem;
}

.card-body {
  margin-bottom: 30px;
}

.card-features {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 25px;
}

.feature {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-light);
  font-size: 0.95rem;
}

.feature i {
  color: var(--success);
  width: 20px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.year-badge {
  background: linear-gradient(135deg, var(--accent-light), var(--accent));
  color: #000;
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
}

.start-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  border-radius: 12px;
  background: var(--primary);
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  transition: var(--transition);
  border: none;
  cursor: pointer;
}

.start-btn:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(37, 99, 235, 0.2);
  text-decoration: none;
}

/* Quick Test Cards */
.quick-tests {
  padding: 100px 0;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
}

.test-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 40px;
}

.test-card {
  background: var(--card);
  border-radius: var(--radius-lg);
  padding: 35px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border);
  transition: var(--transition);
  text-align: center;
}

.test-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
  border-color: var(--primary-light);
}

.test-icon {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  margin: 0 auto 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.test-icon.quant { background: linear-gradient(135deg, var(--primary), var(--purple)); color: white; }
.test-icon.reasoning { background: linear-gradient(135deg, var(--success), var(--secondary)); color: white; }
.test-icon.english { background: linear-gradient(135deg, var(--accent), #ec4899); color: white; }
.test-icon.gk { background: linear-gradient(135deg, var(--purple), #3b82f6); color: white; }

.test-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--text);
}

.test-desc {
  color: var(--text-light);
  margin-bottom: 25px;
  line-height: 1.7;
}

.test-meta {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 25px;
}

.meta-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.meta-value {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: var(--primary);
}

.meta-label {
  font-size: 0.85rem;
  color: var(--text-light);
}

/* Previous Year Papers */
.pyq-section {
  padding: 100px 0;
  background: var(--bg);
}

.pyq-carousel {
  display: flex;
  gap: 30px;
  overflow-x: auto;
  padding: 20px 10px;
  margin: 40px 0;
  scrollbar-width: thin;
  scrollbar-color: var(--primary) var(--border);
}

.pyq-carousel::-webkit-scrollbar {
  height: 8px;
}

.pyq-carousel::-webkit-scrollbar-track {
  background: var(--border);
  border-radius: 10px;
}

.pyq-carousel::-webkit-scrollbar-thumb {
  background: var(--primary);
  border-radius: 10px;
}

.pyq-card {
  min-width: 280px;
  background: var(--card);
  border-radius: var(--radius-lg);
  padding: 30px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border);
  transition: var(--transition);
  position: relative;
}

.pyq-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-light);
}

.pyq-year {
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 15px;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.pyq-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--text);
}

.pyq-stats {
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
}

.pyq-stat {
  background: var(--bg);
  padding: 10px 15px;
  border-radius: var(--radius-sm);
  text-align: center;
  flex: 1;
}

.stat-value {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: var(--primary);
  display: block;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-light);
}

.pyq-badge {
  position: absolute;
  top: 20px;
  right: 20px;
  background: var(--accent);
  color: #000;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

/* Features Section */
.features-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #fefce8 0%, #fef3c7 100%);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 50px;
}

.feature-card {
  background: var(--card);
  border-radius: var(--radius-lg);
  padding: 40px 30px;
  text-align: center;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border);
  transition: var(--transition);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.feature-icon {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  margin: 0 auto 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  background: linear-gradient(135deg, var(--primary-light), var(--primary-dark));
  color: white;
}

.feature-title {
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--text);
}

.feature-desc {
  color: var(--text-light);
  line-height: 1.7;
}

/* CTA Section */
.cta-section {
  padding: 120px 0;
  background: linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%);
  position: relative;
  overflow: hidden;
  text-align: center;
  color: white;
}

.cta-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
}

.cta-title {
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
}

.cta-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Footer */
.footer {
  background: #0f172a;
  color: #cbd5e1;
  padding: 80px 0 40px;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-bottom: 50px;
}

.footer-section h3 {
  font-family: 'Poppins', sans-serif;
  color: white;
  font-size: 1.2rem;
  margin-bottom: 25px;
  font-weight: 600;
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  color: #94a3b8;
  text-decoration: none;
  transition: var(--transition);
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer-links a:hover {
  color: white;
  transform: translateX(5px);
  text-decoration: none;
}

.footer-links a i {
  width: 20px;
  color: var(--primary-light);
}

.footer-bottom {
  text-align: center;
  padding-top: 40px;
  border-top: 1px solid #334155;
  color: #94a3b8;
  font-size: 0.9rem;
}

/* Mobile Navigation */
.mobile-nav-toggle {
  display: none;
  background: var(--primary);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  font-size: 1.5rem;
  cursor: pointer;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  box-shadow: var(--shadow-lg);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .hero-title {
    font-size: 3rem;
  }
  
  .exam-card {
    padding: 30px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 80px 0 40px;
    min-height: auto;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .hero-stats {
    gap: 20px;
  }
  
  .stat-card {
    min-width: 140px;
    padding: 20px;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .category-grid {
    grid-template-columns: 1fr;
  }
  
  .test-grid {
    grid-template-columns: 1fr;
  }
  
  .pyq-carousel {
    padding: 10px 5px;
  }
  
  .pyq-card {
    min-width: 250px;
  }
  
  .cta-title {
    font-size: 2.2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-btn-primary,
  .cta-btn-secondary {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
  
  .mobile-nav-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-badge {
    font-size: 0.85rem;
    padding: 10px 20px;
  }
  
  .stat-number {
    font-size: 2rem;
  }
  
  .exam-card {
    padding: 25px;
  }
  
  .card-header {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
  
  .card-icon {
    margin: 0 auto;
  }
}
