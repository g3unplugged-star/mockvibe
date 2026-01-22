// assets/js/test-portal.js
// Test Portal JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize section navigation
    initSectionNavigation();
    
    // Initialize test cards
    initTestCards();
    
    // Initialize difficulty cards
    initDifficultyCards();
    
    // Initialize exam cards
    initExamCards();
    
    // Initialize mobile navigation
    initMobileNavigation();
    
    // Handle URL parameters
    handleUrlParams();
    
    // Initialize animations
    initPortalAnimations();
});

function initSectionNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.test-section, .exam-tests');
    
    // Show first section by default
    if (sections.length > 0) {
        sections[0].style.display = 'block';
    }
    
    // Navigation click handler
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Show target section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
                
                // Smooth scroll to section
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initTestCards() {
    const startButtons = document.querySelectorAll('.start-btn[data-test]');
    
    startButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
                
                const testType = this.dataset.test;
                const topic = this.dataset.topic;
                const difficulty = this.dataset.difficulty;
                
                showTestModal(testType, topic, difficulty);
            }
        });
    });
}

function initDifficultyCards() {
    const difficultyCards = document.querySelectorAll('.difficulty-card');
    
    difficultyCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.start-btn')) {
                const difficulty = this.classList.contains('easy') ? 'easy' : 
                                 this.classList.contains('medium') ? 'medium' : 'hard';
                const section = getCurrentSection();
                
                showTestModal(`${section}-${difficulty}`, 'all', difficulty);
            }
        });
    });
}

function initExamCards() {
    const examCards = document.querySelectorAll('.exam-card');
    
    examCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = 'var(--shadow-xl)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow-md)';
        });
    });
}

function initMobileNavigation() {
    const mobileToggle = document.getElementById('mobileNavToggle');
    if (!mobileToggle) return;
    
    mobileToggle.addEventListener('click', function() {
        showMobileMenu();
    });
}

function showMobileMenu() {
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu-overlay';
    
    mobileMenu.innerHTML = `
        <div class="mobile-menu">
            <div class="mobile-menu-header">
                <h3><i class="fas fa-chart-line"></i> Section Tests</h3>
                <button class="mobile-menu-close">&times;</button>
            </div>
            
            <div class="mobile-menu-items">
                <a href="#quantitative" class="mobile-menu-item">
                    <i class="fas fa-calculator"></i>
                    <span>Quantitative</span>
                </a>
                <a href="#reasoning" class="mobile-menu-item">
                    <i class="fas fa-brain"></i>
                    <span>Reasoning</span>
                </a>
                <a href="#english" class="mobile-menu-item">
                    <i class="fas fa-language"></i>
                    <span>English</span>
                </a>
                <a href="#gk" class="mobile-menu-item">
                    <i class="fas fa-globe-asia"></i>
                    <span>GK</span>
                </a>
                <a href="#exam-specific" class="mobile-menu-item">
                    <i class="fas fa-graduation-cap"></i>
                    <span>Exam Specific</span>
                </a>
                
                <div class="mobile-menu-divider"></div>
                
                <a href="index.html" class="mobile-menu-item">
                    <i class="fas fa-home"></i>
                    <span>Back to Home</span>
                </a>
            </div>
        </div>
    `;
    
    document.body.appendChild(mobileMenu);
    document.body.style.overflow = 'hidden';
    
    // Close menu
    const closeBtn = mobileMenu.querySelector('.mobile-menu-close');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(mobileMenu);
        document.body.style.overflow = '';
    });
    
    // Close on link click
    mobileMenu.querySelectorAll('.mobile-menu-item').forEach(item => {
        item.addEventListener('click', () => {
            document.body.removeChild(mobileMenu);
            document.body.style.overflow = '';
        });
    });
    
    // Close on escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.body.contains(mobileMenu)) {
            document.body.removeChild(mobileMenu);
            document.body.style.overflow = '';
        }
    });
}

function getCurrentSection() {
    const activeLink = document.querySelector('.nav-link.active');
    if (!activeLink) return 'quantitative';
    
    const href = activeLink.getAttribute('href');
    return href.substring(1);
}

function showTestModal(testType, topic, difficulty) {
    const testNames = {
        'arithmetic': 'Arithmetic Test',
        'algebra': 'Algebra Test',
        'geometry': 'Geometry Test',
        'di': 'Data Interpretation Test',
        'puzzles': 'Puzzles Test',
        'seating': 'Seating Arrangement Test',
        'syllogism': 'Syllogism Test',
        'coding': 'Coding-Decoding Test',
        'grammar': 'Grammar Test',
        'comprehension': 'Comprehension Test',
        'error': 'Error Detection Test',
        'vocabulary': 'Vocabulary Test',
        'current': 'Current Affairs Test',
        'history': 'History Test',
        'geography': 'Geography Test',
        'polity': 'Polity Test'
    };
    
    const testName = testNames[testType] || `${getCurrentSection()} ${difficulty ? difficulty + ' ' : ''}Test`;
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    
    modal.innerHTML = `
        <div class="modal">
            <div class="modal-header">
                <h3>Start ${testName}</h3>
                <button class="modal-close">&times;</button>
            </div>
            
            <div class="modal-body">
                <div class="test-config">
                    <div class="config-item">
                        <label>Number of Questions</label>
                        <select id="questionCount" class="form-control">
                            <option value="10">10 Questions</option>
                            <option value="25" selected>25 Questions</option>
                            <option value="50">50 Questions</option>
                            <option value="100">100 Questions</option>
                        </select>
                    </div>
                    
                    <div class="config-item">
                        <label>Time Limit</label>
                        <select id="timeLimit" class="form-control">
                            <option value="600">10 Minutes</option>
                            <option value="1800" selected>30 Minutes</option>
                            <option value="3600">60 Minutes</option>
                            <option value="0">No Time Limit</option>
                        </select>
                    </div>
                    
                    <div class="config-item">
                        <label>Question Type</label>
                        <div class="radio-group">
                            <label class="radio-option">
                                <input type="radio" name="questionType" value="all" checked>
                                <span>All Types</span>
                            </label>
                            <label class="radio-option">
                                <input type="radio" name="questionType" value="mcq">
                                <span>Multiple Choice</span>
                            </label>
                            <label class="radio-option">
                                <input type="radio" name="questionType" value="numerical">
                                <span>Numerical</span>
                            </label>
                        </div>
                    </div>
                    
                    <div class="config-item">
                        <label>Additional Options</label>
                        <div class="checkbox-group">
                            <label class="checkbox-option">
                                <input type="checkbox" id="shuffleQuestions" checked>
                                <span>Shuffle Questions</span>
                            </label>
                            <label class="checkbox-option">
                                <input type="checkbox" id="shuffleOptions" checked>
                                <span>Shuffle Options</span>
                            </label>
                            <label class="checkbox-option">
                                <input type="checkbox" id="showTimer" checked>
                                <span>Show Timer</span>
                            </label>
                        </div>
                    </div>
                </div>
                
                <div class="test-summary">
                    <div class="summary-item">
                        <span class="summary-label">Questions</span>
                        <span class="summary-value" id="summaryQuestions">25</span>
                    </div>
                    <div class="summary-item">
                        <span class="summary-label">Time</span>
                        <span class="summary-value" id="summaryTime">30 min</span>
                    </div>
                    <div class="summary-item">
                        <span class="summary-label">Type</span>
                        <span class="summary-value" id="summaryType">MCQ</span>
                    </div>
                </div>
            </div>
            
            <div class="modal-footer">
                <button class="btn btn-outline" id="cancelTest">Cancel</button>
                <button class="btn btn-primary" id="startTest">
                    <i class="fas fa-play"></i> Start Test
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Update summary in real-time
    const questionSelect = modal.querySelector('#questionCount');
    const timeSelect = modal.querySelector('#timeLimit');
    const questionTypeRadios = modal.querySelectorAll('input[name="questionType"]');
    
    function updateSummary() {
        const questions = questionSelect.value;
        const time = timeSelect.value;
        const questionType = Array.from(questionTypeRadios).find(r => r.checked).value;
        
        modal.querySelector('#summaryQuestions').textContent = questions;
        modal.querySelector('#summaryTime').textContent = time === '0' ? 'No Limit' : 
            `${Math.floor(time / 60)} min`;
        modal.querySelector('#summaryType').textContent = 
            questionType === 'all' ? 'All Types' : 
            questionType === 'mcq' ? 'MCQ' : 'Numerical';
    }
    
    questionSelect.addEventListener('change', updateSummary);
    timeSelect.addEventListener('change', updateSummary);
    questionTypeRadios.forEach(radio => {
        radio.addEventListener('change', updateSummary);
    });
    
    updateSummary();
    
    // Close modal
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', closeModal);
    
    modal.querySelector('#cancelTest').addEventListener('click', closeModal);
    
    function closeModal() {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
    }
    
    // Start test
    modal.querySelector('#startTest').addEventListener('click', function() {
        const config = {
            questions: parseInt(questionSelect.value),
            time: parseInt(timeSelect.value),
            questionType: Array.from(questionTypeRadios).find(r => r.checked).value,
            shuffleQuestions: modal.querySelector('#shuffleQuestions').checked,
            shuffleOptions: modal.querySelector('#shuffleOptions').checked,
            showTimer: modal.querySelector('#showTimer').checked,
            testType: testType,
            topic: topic,
            difficulty: difficulty
        };
        
        // Save config and redirect
        localStorage.setItem('testConfig', JSON.stringify(config));
        
        // Show loading state
        this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Starting...';
        this.disabled = true;
        
        // Redirect to test interface
        setTimeout(() => {
            window.location.href = 'test-interface.html';
        }, 1000);
    });
    
    // Close on escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && document.body.contains(modal)) {
            closeModal();
        }
    });
    
    // Close on overlay click
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
}

function handleUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const sectionParam = urlParams.get('section');
    
    if (sectionParam) {
        const sectionMap = {
            'quant': 'quantitative',
            'quantitative': 'quantitative',
            'reasoning': 'reasoning',
            'english': 'english',
            'gk': 'gk',
            'general': 'gk'
        };
        
        const targetSection = sectionMap[sectionParam];
        if (targetSection) {
            // Activate the corresponding nav link
            const targetLink = document.querySelector(`.nav-link[href="#${targetSection}"]`);
            if (targetLink) {
                targetLink.click();
            }
        }
    }
}

function initPortalAnimations() {
    // Animate cards on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all cards
    document.querySelectorAll('.test-category, .topic-card, .difficulty-card, .exam-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}
