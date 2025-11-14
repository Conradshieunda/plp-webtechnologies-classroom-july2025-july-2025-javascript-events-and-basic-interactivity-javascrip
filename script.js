// =============================================
// 🎉 PART 1: EVENT HANDLING
// Demonstrating various JavaScript events
// =============================================

/**
 * Click Event Handler
 * Demonstrates basic click event handling
 */
document.addEventListener('DOMContentLoaded', function() {
    const clickButton = document.getElementById('clickDemo');
    const clickMessage = document.getElementById('clickMessage');
    
    clickButton.addEventListener('click', function() {
        clickMessage.textContent = '🎊 Button was clicked! Great job!';
        clickMessage.style.color = '#27ae60';
        clickMessage.classList.add('fade-in');
        
        // Reset animation
        setTimeout(() => clickMessage.classList.remove('fade-in'), 300);
    });
});

/**
 * Mouse Event Handlers
 * Demonstrates mouseenter, mouseleave, mousemove events
 */
document.addEventListener('DOMContentLoaded', function() {
    const mouseArea = document.getElementById('mouseArea');
    const mouseMessage = document.getElementById('mouseMessage');
    
    mouseArea.addEventListener('mouseenter', function() {
        mouseMessage.textContent = '🖱️ Mouse entered the area!';
        this.style.transform = 'scale(1.05)';
    });
    
    mouseArea.addEventListener('mouseleave', function() {
        mouseMessage.textContent = '🖱️ Mouse left the area!';
        this.style.transform = 'scale(1)';
    });
    
    mouseArea.addEventListener('mousemove', function(event) {
        const x = event.offsetX;
        const y = event.offsetY;
        mouseMessage.textContent = `🖱️ Mouse moving at: X=${x}, Y=${y}`;
    });
});

/**
 * Keyboard Event Handler
 * Demonstrates keydown, keyup, and input events
 */
document.addEventListener('DOMContentLoaded', function() {
    const keyboardInput = document.getElementById('keyboardInput');
    const keyboardMessage = document.getElementById('keyboardMessage');
    
    keyboardInput.addEventListener('keydown', function(event) {
        keyboardMessage.textContent = `⌨️ Key down: ${event.key} (Code: ${event.code})`;
        keyboardMessage.style.color = '#3498db';
    });
    
    keyboardInput.addEventListener('keyup', function(event) {
        keyboardMessage.textContent = `⌨️ Key up: ${event.key}`;
        keyboardMessage.style.color = '#2c3e50';
    });
    
    keyboardInput.addEventListener('input', function() {
        const charCount = this.value.length;
        keyboardMessage.textContent = `⌨️ Typing... Characters: ${charCount}`;
    });
});

/**
 * Form Input Event Handler
 * Demonstrates real-time input tracking
 */
document.addEventListener('DOMContentLoaded', function() {
    const liveInput = document.getElementById('liveInput');
    const liveMessage = document.getElementById('liveMessage');
    
    liveInput.addEventListener('input', function() {
        const value = this.value;
        if (value) {
            liveMessage.textContent = `📝 You typed: "${value}"`;
            liveMessage.style.color = '#27ae60';
        } else {
            liveMessage.textContent = '📝 Start typing...';
            liveMessage.style.color = '#7f8c8d';
        }
    });
});

// =============================================
// 🎮 PART 2: INTERACTIVE ELEMENTS
// Building dynamic, engaging features
// =============================================

/**
 * Theme Toggle Functionality
 * Switches between light and dark modes
 */
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const themeStatus = document.getElementById('themeStatus');
    const body = document.body;
    
    // Check for saved theme preference or respect OS preference
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    if (savedTheme === 'dark') {
        enableDarkMode();
    }
    
    themeToggle.addEventListener('click', function() {
        if (body.getAttribute('data-theme') === 'dark') {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
    
    function enableDarkMode() {
        body.setAttribute('data-theme', 'dark');
        themeStatus.textContent = 'Dark';
        themeToggle.textContent = '☀️ Switch to Light Mode';
        localStorage.setItem('theme', 'dark');
    }
    
    function disableDarkMode() {
        body.removeAttribute('data-theme');
        themeStatus.textContent = 'Light';
        themeToggle.textContent = '🌙 Switch to Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});

/**
 * Counter Game
 * Interactive counter with increment/decrement functionality
 */
document.addEventListener('DOMContentLoaded', function() {
    const counterValue = document.getElementById('counterValue');
    const increaseBtn = document.getElementById('increaseBtn');
    const decreaseBtn = document.getElementById('decreaseBtn');
    const resetBtn = document.getElementById('resetCounter');
    
    let count = 0;
    
    function updateCounter() {
        counterValue.textContent = count;
        
        // Visual feedback based on count
        if (count > 0) {
            counterValue.style.color = '#27ae60';
        } else if (count < 0) {
            counterValue.style.color = '#e74c3c';
        } else {
            counterValue.style.color = '#3498db';
        }
        
        // Add animation
        counterValue.classList.add('fade-in');
        setTimeout(() => counterValue.classList.remove('fade-in'), 300);
    }
    
    increaseBtn.addEventListener('click', function() {
        count++;
        updateCounter();
    });
    
    decreaseBtn.addEventListener('click', function() {
        count--;
        updateCounter();
    });
    
    resetBtn.addEventListener('click', function() {
        count = 0;
        updateCounter();
    });
    
    // Initialize counter
    updateCounter();
});

/**
 * Interactive FAQ Section
 * Collapsible FAQ items with smooth animations
 */
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = answer.classList.contains('active');
            
            // Close all other answers
            document.querySelectorAll('.faq-answer').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle current answer
            if (!isActive) {
                answer.classList.add('active');
                this.setAttribute('aria-expanded', 'true');
            } else {
                this.setAttribute('aria-expanded', 'false');
            }
        });
    });
});

/**
 * Tabbed Interface
 * Dynamic tab switching functionality
 */
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panels
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Add active class to current button and panel
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
});

// =============================================
// 📋✅ PART 3: FORM VALIDATION
// Comprehensive form validation with real-time feedback
// =============================================

/**
 * Main Form Validation Handler
 * Handles form submission and validates all fields
 */
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('validationForm');
    const successMessage = document.getElementById('formSuccess');
    
    // Real-time validation for each field
    setupRealTimeValidation();
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (validateForm()) {
            // Form is valid - show success message
            successMessage.style.display = 'block';
            form.reset();
            clearValidationStyles();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        } else {
            // Form is invalid - focus on first error
            const firstError = form.querySelector('.invalid');
            if (firstError) {
                firstError.focus();
            }
        }
    });
    
    /**
     * Setup real-time validation for each input field
     */
    function setupRealTimeValidation() {
        const inputs = form.querySelectorAll('input');
        
        inputs.forEach(input => {
            // Validate on input change
            input.addEventListener('input', function() {
                validateField(this);
            });
            
            // Validate on blur (when user leaves field)
            input.addEventListener('blur', function() {
                validateField(this);
            });
        });
    }
    
    /**
     * Validate individual form field
     */
    function validateField(field) {
        const errorElement = document.getElementById(field.name + 'Error');
        let isValid = true;
        let errorMessage = '';
        
        switch (field.name) {
            case 'fullName':
                isValid = validateName(field.value);
                errorMessage = isValid ? '' : 'Please enter a valid full name (min 2 characters)';
                break;
                
            case 'email':
                isValid = validateEmail(field.value);
                errorMessage = isValid ? '' : 'Please enter a valid email address';
                break;
                
            case 'password':
                isValid = validatePassword(field.value);
                errorMessage = isValid ? '' : 'Password must be at least 8 characters with uppercase, lowercase, and number';
                break;
                
            case 'confirmPassword':
                const password = document.getElementById('password').value;
                isValid = validateConfirmPassword(field.value, password);
                errorMessage = isValid ? '' : 'Passwords do not match';
                break;
                
            case 'phone':
                isValid = field.value === '' || validatePhone(field.value);
                errorMessage = isValid ? '' : 'Please enter a valid phone number';
                break;
                
            case 'age':
                isValid = field.value === '' || validateAge(field.value);
                errorMessage = isValid ? '' : 'Please enter a valid age (13-120)';
                break;
                
            case 'terms':
                isValid = field.checked;
                errorMessage = isValid ? '' : 'You must agree to the terms and conditions';
                break;
        }
        
        // Update field styling and error message
        updateFieldValidation(field, isValid, errorMessage, errorElement);
        
        return isValid;
    }
    
    /**
     * Validate entire form
     */
    function validateForm() {
        const fields = form.querySelectorAll('input');
        let isFormValid = true;
        
        fields.forEach(field => {
            const isValid = validateField(field);
            if (!isValid) {
                isFormValid = false;
            }
        });
        
        return isFormValid;
    }
});

/**
 * Validation Functions
 * Individual validation rules for each field type
 */

// Name validation: At least 2 characters, letters and spaces only
function validateName(name) {
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    return nameRegex.test(name.trim());
}

// Email validation: Standard email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

// Password validation: At least 8 chars, with uppercase, lowercase, and number
function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
}

// Confirm password validation: Must match password field
function validateConfirmPassword(confirmPassword, password) {
    return confirmPassword === password && confirmPassword !== '';
}

// Phone validation: Various phone formats accepted
function validatePhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$|^[\+]?[(]?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Age validation: Between 13 and 120
function validateAge(age) {
    const ageNum = parseInt(age);
    return !isNaN(ageNum) && ageNum >= 13 && ageNum <= 120;
}

/**
 * Utility Functions for Form Validation
 */

// Update field appearance based on validation
function updateFieldValidation(field, isValid, errorMessage, errorElement) {
    if (field.value.trim() === '' && field.name !== 'terms') {
        // Empty field (not yet validated)
        field.classList.remove('valid', 'invalid');
        errorElement.textContent = '';
    } else {
        // Field has content - show validation state
        field.classList.remove('valid', 'invalid');
        field.classList.add(isValid ? 'valid' : 'invalid');
        errorElement.textContent = errorMessage;
    }
}

// Clear all validation styles
function clearValidationStyles() {
    const fields = document.querySelectorAll('#validationForm input');
    const errorMessages = document.querySelectorAll('.error-message');
    
    fields.forEach(field => {
        field.classList.remove('valid', 'invalid');
    });
    
    errorMessages.forEach(message => {
        message.textContent = '';
    });
}

/**
 * Additional Interactive Features
 * Enhanced user experience
 */

// Add some random confetti effect for successful form submission
function showConfetti() {
    // Simple confetti effect
    const colors = ['#3498db', '#e74c3c', '#27ae60', '#f39c12', '#9b59b6'];
    const container = document.createElement('div');
    container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1000;
    `;
    
    document.body.appendChild(container);
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: absolute;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            top: -10px;
            left: ${Math.random() * 100}%;
            border-radius: 2px;
            animation: fall linear forwards;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fall {
                to {
                    transform: translateY(100vh) rotate(${Math.random() * 360}deg);
                    opacity: 0;
                }
            }
        `;
        
        document.head.appendChild(style);
        container.appendChild(confetti);
        
        // Randomize animation
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
    }
    
    // Remove confetti after animation
    setTimeout(() => {
        container.remove();
        style.remove();
    }, 5000);
}

// Add confetti to form success
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('validationForm');
    form.addEventListener('submit', function(event) {
        if (validateForm()) {
            setTimeout(showConfetti, 100);
        }
    });
});