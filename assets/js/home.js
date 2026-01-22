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
