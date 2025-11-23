// Main JavaScript for HopeLink Mahama Website

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initStatsCounter();
    initForms();
    initServiceCards();
});

// Navigation functionality
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            // Animate hamburger icon
            const bars = document.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.toggle('active'));
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
}

// Animated stats counter
function initStatsCounter() {
    const statElements = document.querySelectorAll('.stat-number');
    
    if (statElements.length > 0) {
        // Set target values (these would typically come from a database)
        const targetValues = {
            'food-distributed': 1250,
            'children-educated': 890,
            'safety-reports': 320,
            'youth-trained': 540
        };
        
        // Animation function
        function animateValue(element, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                element.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
        
        // Check if element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
        
        // Check if stats have been animated already
        let statsAnimated = false;
        
        // Scroll event listener
        window.addEventListener('scroll', function() {
            if (!statsAnimated && isInViewport(document.querySelector('.stats'))) {
                statElements.forEach(element => {
                    const id = element.id;
                    if (targetValues[id]) {
                        animateValue(element, 0, targetValues[id], 2000);
                    }
                });
                statsAnimated = true;
            }
        });
        
        // Trigger on page load if stats are already in view
        if (isInViewport(document.querySelector('.stats'))) {
            statElements.forEach(element => {
                const id = element.id;
                if (targetValues[id]) {
                    animateValue(element, 0, targetValues[id], 2000);
                }
            });
            statsAnimated = true;
        }
    }
}

// Form handling
function initForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });
            
            if (isValid) {
                // Show success message
                showNotification('Form submitted successfully! We will get back to you soon.', 'success');
                
                // In a real application, you would send the form data to a server here
                // For demonstration, we'll just reset the form
                form.reset();
            } else {
                showNotification('Please fill in all required fields.', 'error');
            }
        });
    });
}

// Service cards interaction
function initServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.classList.contains('btn')) {
                // If button was clicked, let the link handle navigation
                return;
            }
            
            // Otherwise, navigate to the service page
            const link = card.querySelector('a.btn');
            if (link) {
                window.location.href = link.href;
            }
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 10000;
                min-width: 300px;
                max-width: 500px;
                border-radius: 4px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                animation: slideIn 0.3s ease-out;
            }
            
            .notification.success {
                background-color: #d4edda;
                color: #155724;
                border: 1px solid #c3e6cb;
            }
            
            .notification.error {
                background-color: #f8d7da;
                color: #721c24;
                border: 1px solid #f5c6cb;
            }
            
            .notification.info {
                background-color: #d1ecf1;
                color: #0c5460;
                border: 1px solid #bee5eb;
            }
            
            .notification-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 16px;
            }
            
            .notification-close {
                background: none;
                border: none;
                font-size: 18px;
                cursor: pointer;
                margin-left: 10px;
            }
            
            @keyframes slideIn {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', function() {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    });
}

// Language switcher (for future implementation)
function initLanguageSwitcher() {
    // This would be implemented when multilingual support is added
    console.log('Language switcher initialized');
}

// Emergency contact functionality
function initEmergencyContact() {
    const emergencyBtn = document.querySelector('.btn-emergency');
    
    if (emergencyBtn) {
        emergencyBtn.addEventListener('click', function(e) {
            // In a real implementation, this would trigger an emergency protocol
            // For now, we'll just show a confirmation
            if (confirm('Are you sure you want to call the emergency hotline? This should only be used for urgent situations.')) {
                // The phone link will handle the actual call
                return true;
            } else {
                e.preventDefault();
            }
        });
    }
}

// Initialize emergency contact on page load
document.addEventListener('DOMContentLoaded', initEmergencyContact);