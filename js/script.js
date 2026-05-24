/* ==========================================================================
   PREMIUM INTERACTIONS - ZULKEFL REHMAN (AI/ML & NLP DEVELOPER)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    /* --- 1. CORE ELEMENT SELECTORS --- */
    const navbar = document.getElementById('navbar');
    const scrollProgress = document.getElementById('scroll-progress');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const contactForm = document.getElementById('portfolio-contact-form');
    const formNotification = document.getElementById('form-notification');
    const scrollTopBtn = document.getElementById('btn-scroll-top');
    const typewriterTextElement = document.getElementById('typewriter-text');

    /* --- 2. MOBILE MENU NAVIGATION --- */
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Toggle hamburger animation state
            const bars = mobileToggle.querySelectorAll('.bar');
            if (mobileToggle.classList.contains('active')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
        
        // Close menu on clicking a nav link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
                
                const bars = mobileToggle.querySelectorAll('.bar');
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            });
        });
    }

    /* --- 3. DYNAMIC HERO TYPEWRITER --- */
    const taglines = [
        "AI & Machine Learning Developer",
        "Natural Language Processing Specialist",
        "Deep Learning & Neural Net Developer"
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function handleTypewriter() {
        if (!typewriterTextElement) return;
        
        const currentTagline = taglines[wordIndex];
        
        if (isDeleting) {
            // Remove character
            typewriterTextElement.textContent = currentTagline.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Deletes faster
        } else {
            // Add character
            typewriterTextElement.textContent = currentTagline.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100; // Normal typing speed
        }

        // Logic check for word state transitions
        if (!isDeleting && charIndex === currentTagline.length) {
            // Pause at the end of word
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % taglines.length; // Loop to next word
            typingSpeed = 500; // Small delay before next word
        }

        setTimeout(handleTypewriter, typingSpeed);
    }
    
    // Initiate typewriter
    setTimeout(handleTypewriter, 1000);

    /* --- 4. HIGH-PERFORMANCE CANVAS PARTICLES BACKGROUND (NEURAL NET) --- */
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particlesArray = [];
        let mouse = {
            x: null,
            y: null,
            radius: 120 // Proximity interaction boundary
        };

        // Resize handler
        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initCanvasParticles();
        });

        // Mouse motion tracking
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });

        // Clear mouse tracking on leave
        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });

        class Particle {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }
            
            // Draw particle node
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            // Update particle vector state
            update() {
                // Keep particles inside viewport bounds
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }

                // Mouse repel interactions
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius + this.size) {
                    if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                        this.x += 2;
                    }
                    if (mouse.x > this.x && this.x > this.size * 10) {
                        this.x -= 2;
                    }
                    if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                        this.y += 2;
                    }
                    if (mouse.y > this.y && this.y > this.size * 10) {
                        this.y -= 2;
                    }
                }

                // Add standard drift
                this.x += this.directionX;
                this.y += this.directionY;
                
                this.draw();
            }
        }

        // Generate particle network
        function initCanvasParticles() {
            particlesArray = [];
            let numberOfParticles = (canvas.width * canvas.height) / 14000;
            numberOfParticles = Math.min(numberOfParticles, 85); // Cap to preserve CPU frames
            
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2) + 1;
                let x = (Math.random() * ((window.innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((window.innerHeight - size * 2) - (size * 2)) + size * 2);
                let directionX = (Math.random() * 0.4) - 0.2;
                let directionY = (Math.random() * 0.4) - 0.2;
                let color = 'rgba(0, 235, 235, 0.4)'; // Cyan glow nodes
                
                if (Math.random() > 0.5) {
                    color = 'rgba(138, 43, 226, 0.35)'; // Purple drift nodes
                }

                particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }

        // Draw connecting lines between proximal nodes
        function connectParticles() {
            let opacityValue = 1;
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    let dx = particlesArray[a].x - particlesArray[b].x;
                    let dy = particlesArray[a].y - particlesArray[b].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 110) {
                        opacityValue = 1 - (distance / 110);
                        ctx.strokeStyle = `rgba(138, 43, 226, ${opacityValue * 0.12})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        // Animation frame pipeline
        function animateCanvas() {
            requestAnimationFrame(animateCanvas);
            ctx.clearRect(0, 0, innerWidth, innerHeight);

            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
            connectParticles();
        }

        // Trigger Canvas
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initCanvasParticles();
        animateCanvas();
    }

    /* --- 5. INTERSECTION OBSERVER FOR PROFESSIONAL SCROLL REVEALS --- */
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const revealObserverOptions = {
        root: null,
        threshold: 0.12, // Triggers when 12% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Triggers slightly before it enters the viewport
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Trigger Skill Bar progressions if this is the skills section or a skill container
                const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
                if (skillBars.length > 0) {
                    skillBars.forEach(bar => {
                        const targetWidth = bar.getAttribute('data-width');
                        bar.style.width = targetWidth;
                    });
                }
                
                // Keep observer active so scrolling UP and DOWN retains transition behavior
                // (If the user wants absolute one-time reveals, we would unobserve here, but
                // since they requested rich scrolling transitions in both directions, we keep observing).
            } else {
                // Optional: remove .active class to fade elements out when scrolling away
                // This creates a highly responsive experience when scrolling both directions.
                const rect = entry.boundingClientRect;
                if (rect.top > 0) {
                    // Only fade out if scrolling UP (element goes below viewport bottom)
                    entry.target.classList.remove('active');
                    const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
                    if (skillBars.length > 0) {
                        skillBars.forEach(bar => {
                            bar.style.width = '0%';
                        });
                    }
                }
            }
        });
    }, revealObserverOptions);

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    /* --- 6. SCROLL PROGRESS & SCROLL ACTION MANAGEMENT --- */
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        // A. Scroll Progress Bar
        const progressPercentage = (scrollTop / docHeight) * 100;
        if (scrollProgress) {
            scrollProgress.style.width = `${progressPercentage}%`;
        }

        // B. Sticky Navbar Adaptive Class
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // C. Back-to-Top Button Visibility
        if (scrollTop > 600) {
            if (scrollTopBtn) {
                scrollTopBtn.style.opacity = '1';
                scrollTopBtn.style.transform = 'translateY(0)';
            }
        } else {
            if (scrollTopBtn) {
                scrollTopBtn.style.opacity = '0';
                scrollTopBtn.style.transform = 'translateY(15px)';
            }
        }

        // D. Active Navigation Link Highlighting
        let currentSectionId = 'home';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    /* --- 7. DYNAMIC PROJECT GRID FILTERING --- */
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Toggle active filter button states
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    // Reveal matching cards
                    card.classList.remove('hidden');
                    // Small delay to allow opacity/scale entry transitions to animate smoothly
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    // Hide non-matching cards
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        card.classList.add('hidden');
                    }, 400); // Matches CSS transition scale duration
                }
            });
        });
    });

    /* --- 8. GLASS CONTACT FORM SUBMIT HANDLER (AUTOMATIC EMAIL SENDING) --- */
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = document.getElementById('btn-submit-message');
            const originalBtnContent = submitBtn.innerHTML;
            
            // Visual loading feedback state
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <span>Sending Message...</span>
                <i class="fa-solid fa-spinner fa-spin"></i>
            `;
            
            const name = document.getElementById('form-name').value;
            const email = document.getElementById('form-email').value;
            const subject = document.getElementById('form-subject').value;
            const message = document.getElementById('form-message').value;

            try {
                // Send form data to backend server
                const response = await fetch('/api/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        subject,
                        message
                    })
                });

                const data = await response.json();

                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnContent;

                if (data.success) {
                    // Show success message
                    formNotification.className = 'form-notification success';
                    formNotification.innerHTML = `
                        <i class="fa-solid fa-circle-check"></i>
                        <span>✓ Message sent successfully! You'll receive a confirmation email shortly.</span>
                    `;
                    formNotification.style.display = 'block';
                    
                    // Reset form fields
                    contactForm.reset();
                    
                    // Clear success notification after 8 seconds
                    setTimeout(() => {
                        formNotification.style.display = 'none';
                    }, 8000);
                } else {
                    // Show error message
                    formNotification.className = 'form-notification error';
                    formNotification.innerHTML = `
                        <i class="fa-solid fa-circle-exclamation"></i>
                        <span>✗ ${data.error || 'Failed to send message. Please try again.'}</span>
                    `;
                    formNotification.style.display = 'block';
                }
            } catch (error) {
                console.error('Form submission error:', error);
                
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnContent;
                
                // Show error notification
                formNotification.className = 'form-notification error';
                formNotification.innerHTML = `
                    <i class="fa-solid fa-circle-exclamation"></i>
                    <span>✗ Network error. Make sure the server is running on port 3000.</span>
                `;
                formNotification.style.display = 'block';
            }
        });
    }
});
