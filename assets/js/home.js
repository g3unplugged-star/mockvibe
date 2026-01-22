// assets/js/home.js
// Homepage specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize homepage features
    initExamCards();
    initStatsCounter();
    initTestimonials();
    initNewsletter();
    
    // Smooth scroll for anchor links
    initSmoothScroll();
    
    // Initialize animations
    initHomeAnimations();
});

function initExamCards() {
    const examCards = document.querySelectorAll('.exam-card');
    
    examCards.forEach(card => {
        card.addEventListener('click', function() {
            const examType = this.dataset.exam;
            window.location.href = `test-portal.html?exam=${examType}`;
        });
        
        // Add hover effect
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

function initStatsCounter() {
    const statElements = document.querySelectorAll('.hero-stat-number');
    
    statElements.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
        const suffix = stat.textContent.replace(/[0-9]/g, '');
        
        animateCounter(stat, target, suffix);
    });
}

function animateCounter(element, target, suffix) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 20);
}

function initTestimonials() {
    const testimonialContainer = document.getElementById('testimonials');
    if (!testimonialContainer) return;
    
    // Mock testimonials data
    const testimonials = [
        {
            name: "Rahul Sharma",
            role: "SSC CGL Aspirant",
            text: "MockVibe helped me improve my score by 40%. The section-wise tests are exactly what I needed!",
            rating: 5
        },
        {
            name: "Priya Patel",
            role: "Banking PO Aspirant",
            text: "Best platform for practice tests. The detailed solutions helped me understand my mistakes.",
            rating: 5
        },
        {
            name: "Amit Kumar",
            role: "UPSC Aspirant",
            text: "The test interface is so realistic. It prepared me perfectly for the actual exam environment.",
            rating: 4
        }
    ];
    
    // Create testimonials
    testimonials.forEach(testimonial => {
        const testimonialElement = document.createElement('div');
        testimonialElement.className = 'testimonial-card';
        
        let stars = '';
        for (let i = 0; i < 5; i++) {
            stars += i < testimonial.rating ? '★' : '☆';
        }
        
        testimonialElement.innerHTML = `
            <div class="testimonial-content">
                <p>"${testimonial.text}"</p>
            </div>
            <div class="testimonial-author">
                <div class="author-info">
                    <h4>${testimonial.name}</h4>
                    <span>${testimonial.role}</span>
                </div>
                <div class="testimonial-rating">
                    ${stars}
                </div>
            </div>
        `;
        
        testimonialContainer.appendChild(testimonialElement);
    });
}

function initNewsletter() {
    const newsletterForm = document.getElementById('newsletterForm');
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        if (!Utils.validateEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Mock subscription
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showNotification('Successfully subscribed to newsletter!', 'success');
            this.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initHomeAnimations() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, observerOptions);
    
    // Observe feature cards
    document.querySelectorAll('.feature-card, .exam-card').forEach(card => {
        observer.observe(card);
    });
    
    // Initialize typewriter effect for hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        typewriterEffect(heroTitle);
    }
}

function typewriterEffect(element) {
    const text = element.textContent;
    element.textContent = '';
    
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, 50);
}

// Featured Tests Carousel
function initFeaturedTests() {
    const featuredContainer = document.getElementById('featuredTests');
    if (!featuredContainer) return;
    
    const tests = [
        {
            title: "SSC CGL Tier 1",
            description: "Complete mock test with 100 questions",
            questions: 100,
            time: 60,
            url: "exams/ssc/test-cgl-tier1.html"
        },
        {
            title: "Banking PO Prelims",
            description: "Quantitative Aptitude, Reasoning & English",
            questions: 100,
            time: 60,
            url: "exams/banking/test-ibps-po.html"
        },
        {
            title: "UPSC CSAT",
            description: "Comprehension, Reasoning & Decision Making",
            questions: 80,
            time: 120,
            url: "exams/upsc/test-prelims-csat.html"
        }
    ];
    
    tests.forEach(test => {
        const testCard = document.createElement('div');
        testCard.className = 'featured-test-card';
        
        testCard.innerHTML = `
            <div class="featured-test-header">
                <h3>${test.title}</h3>
                <span class="test-badge">Featured</span>
            </div>
            <p class="test-description">${test.description}</p>
            <div class="test-meta">
                <span><i class="fas fa-question-circle"></i> ${test.questions} Questions</span>
                <span><i class="fas fa-clock"></i> ${test.time} Minutes</span>
            </div>
            <a href="${test.url}" class="btn btn-primary btn-block">
                <i class="fas fa-play"></i> Start Test
            </a>
        `;
        
        featuredContainer.appendChild(testCard);
    });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFeaturedTests);
} else {
    initFeaturedTests();
}
