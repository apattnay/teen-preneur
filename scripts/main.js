// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Application Form Handling
    const applicationForm = document.getElementById('applicationForm');
    if (applicationForm) {
        applicationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                fullName: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                age: document.getElementById('age').value,
                location: document.getElementById('location').value,
                idea: document.getElementById('idea').value,
                cause: document.getElementById('cause').value,
                motivation: document.getElementById('motivation').value,
                submittedAt: new Date().toISOString()
            };

            // Validate age
            if (formData.age < 13 || formData.age > 19) {
                alert('You must be between 13 and 19 years old to apply.');
                return;
            }

            // In a real application, this would send data to a server
            console.log('Application submitted:', formData);
            
            // Save to localStorage for demo purposes
            const applications = JSON.parse(localStorage.getItem('teenPreneurApplications') || '[]');
            applications.push(formData);
            localStorage.setItem('teenPreneurApplications', JSON.stringify(applications));

            // Show success message with custom notification
            showSuccessMessage();
            
            // Reset form
            applicationForm.reset();
            
            // Scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Navbar scroll effect
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
        } else {
            navbar.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
        }
        
        lastScroll = currentScroll;
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and timeline items
    const animatedElements = document.querySelectorAll('.about-card, .timeline-item, .feature-card, .mentor-card, .success-story, .benefit-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // Dynamic stats counter animation
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value + (end >= 1000 ? '+' : '%');
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Stats observer
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const statNumber = entry.target.querySelector('h3');
                const text = statNumber.textContent;
                
                if (text.includes('$')) {
                    // Animate dollar values
                    statNumber.textContent = '$0M+';
                    setTimeout(() => {
                        statNumber.textContent = text;
                    }, 1000);
                } else if (text.includes('%')) {
                    // Animate percentages
                    const endValue = parseInt(text);
                    animateValue(statNumber, 0, endValue, 1500);
                } else {
                    // Animate other numbers
                    const endValue = parseInt(text.replace(/\+/g, ''));
                    const startValue = 0;
                    animateValue(statNumber, startValue, endValue, 1500);
                }
            }
        });
    }, { threshold: 0.5 });

    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => statsObserver.observe(stat));

    // Form validation helpers
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value && !emailRegex.test(this.value)) {
                this.style.borderColor = '#ef4444';
            } else {
                this.style.borderColor = '';
            }
        });
    }

    // Character counter for textareas
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        const maxLength = 500;
        const counter = document.createElement('div');
        counter.style.textAlign = 'right';
        counter.style.fontSize = '0.875rem';
        counter.style.color = '#6b7280';
        counter.style.marginTop = '0.25rem';
        textarea.parentNode.appendChild(counter);
        
        const updateCounter = () => {
            const remaining = maxLength - textarea.value.length;
            counter.textContent = `${remaining} characters remaining`;
            if (remaining < 50) {
                counter.style.color = '#ef4444';
            } else {
                counter.style.color = '#6b7280';
            }
        };
        
        textarea.setAttribute('maxlength', maxLength);
        textarea.addEventListener('input', updateCounter);
        updateCounter();
    });

    // Add active class to current nav item based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Success message function
    function showSuccessMessage() {
        const messageHTML = `
            <div id="successModal" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 10000; animation: fadeIn 0.3s ease;">
                <div style="background: white; padding: 3rem; border-radius: 16px; max-width: 500px; text-align: center; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); animation: slideUp 0.3s ease;">
                    <div style="font-size: 4rem; margin-bottom: 1rem;">🎉</div>
                    <h2 style="color: #1f2937; margin-bottom: 1rem; font-size: 1.75rem;">Application Submitted!</h2>
                    <p style="color: #6b7280; margin-bottom: 1.5rem; line-height: 1.6;">Thank you for applying to Teen Preneur. We'll review your application and get back to you within 2 weeks.</p>
                    <p style="color: #6b7280; margin-bottom: 2rem;">Check your email for next steps!</p>
                    <button onclick="document.getElementById('successModal').remove()" style="background: #6366f1; color: white; border: none; padding: 0.75rem 2rem; border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">Got it!</button>
                </div>
            </div>
            <style>
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
            </style>
        `;
        document.body.insertAdjacentHTML('beforeend', messageHTML);
    }
});

// Console welcome message
console.log('%c🚀 Welcome to Teen Preneur! ', 'background: #667eea; color: white; font-size: 20px; padding: 10px;');
console.log('%cEmpowering teenage entrepreneurs to build businesses that matter.', 'color: #667eea; font-size: 14px;');
console.log('%cInterested in contributing? Visit our GitHub repository!', 'color: #6b7280; font-size: 12px;');
