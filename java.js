        // Create animated particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 30;
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                // Random properties
                const size = Math.random() * 10 + 2;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const animationDuration = Math.random() * 20 + 10;
                const animationDelay = Math.random() * 5;
                const hue = Math.random() * 360;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${posX}%`;
                particle.style.top = `${posY}%`;
                particle.style.animationDuration = `${animationDuration}s`;
                particle.style.animationDelay = `${animationDelay}s`;
                particle.style.backgroundColor = `hsla(${hue}, 80%, 60%, 0.7)`;
                particle.style.boxShadow = `0 0 ${size * 2}px hsla(${hue}, 80%, 60%, 0.8)`;
                particlesContainer.appendChild(particle);
            }
        }
        // Header scroll effect
        function handleHeaderScroll() {
            const header = document.getElementById('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }
        // Smooth scrolling for navigation links
        function smoothScrolling() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }
        // Theme toggle
        function initThemeToggle() {
            const themeToggle = document.getElementById('theme-toggle');
            const themeIcon = themeToggle.querySelector('i');
            // Check time of day for default theme
            const hour = new Date().getHours();
            const isDayTime = hour >= 6 && hour < 18;
            if (isDayTime) {
                document.body.classList.add('light-mode');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
            themeToggle.addEventListener('click', () => {
                document.body.classList.toggle('light-mode');
                if (document.body.classList.contains('light-mode')) {
                    themeIcon.classList.remove('fa-moon');
                    themeIcon.classList.add('fa-sun');
                } else {
                    themeIcon.classList.remove('fa-sun');
                    themeIcon.classList.add('fa-moon');
                }
            });
        }
        // Animated typing effect for hero heading
        function initTypingEffect() {
            const text = "Helping the World See Ideas — in Code, Classrooms, and Communication";
            const headingElement = document.getElementById('animated-heading');
            let i = 0;
            function typeWriter() {
                if (i < text.length) {
                    headingElement.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50); // Adjust typing speed here
                }
            }
            // Start typing effect after a delay
            setTimeout(typeWriter, 1000);
        }
        // Initialize animations with GSAP
        function initAnimations() {
            // Hero text animation
            gsap.from('.hero p', {
                duration: 1,
                y: 30,
                opacity: 0,
                delay: 0.4,
                ease: 'power3.out'
            });
            gsap.from('.hero-btns', {
                duration: 1,
                y: 30,
                opacity: 0,
                delay: 0.6,
                ease: 'power3.out'
            });
            // Parallax elements
            gsap.to('.parallax-1', {
                scrollTrigger: {
                    trigger: '.hero',
                    scrub: true,
                    start: 'top bottom',
                    end: 'bottom top'
                },
                y: -100,
                rotation: 360,
                ease: 'none'
            });
            gsap.to('.parallax-2', {
                scrollTrigger: {
                    trigger: '.hero',
                    scrub: true,
                    start: 'top bottom',
                    end: 'bottom top'
                },
                y: 150,
                x: -100,
                rotation: -360,
                ease: 'none'
            });
            gsap.to('.parallax-3', {
                scrollTrigger: {
                    trigger: '.hero',
                    scrub: true,
                    start: 'top bottom',
                    end: 'bottom top'
                },
                y: -200,
                x: 150,
                rotation: 360,
                ease: 'none'
            });
            // Section animations
            gsap.utils.toArray('section').forEach((section, i) => {
                if (section.id !== 'home') {
                    gsap.from(section, {
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 80%',
                        },
                        duration: 1,
                        y: 50,
                        opacity: 0,
                        delay: i * 0.1,
                        ease: 'power3.out'
                    });
                }
            });
            // Card hover animations with 3D rotation
            gsap.utils.toArray('.skill-card, .project-card, .stat-item').forEach(card => {
                card.addEventListener('mouseenter', () => {
                    gsap.to(card, {
                        duration: 0.5,
                        rotationY: 10,
                        rotationX: 10,
                        y: -10,
                        ease: 'power2.out'
                    });
                });
                card.addEventListener('mouseleave', () => {
                    gsap.to(card, {
                        duration: 0.5,
                        rotationY: 0,
                        rotationX: 0,
                        y: 0,
                        ease: 'power2.out'
                    });
                });
            });
            // Social media icon 3D effect
            gsap.utils.toArray('.social-links a').forEach(icon => {
                icon.addEventListener('mouseenter', () => {
                    gsap.to(icon, {
                        duration: 0.3,
                        rotationX: 20,
                        y: -5,
                        ease: 'power2.out'
                    });
                });
                icon.addEventListener('mouseleave', () => {
                    gsap.to(icon, {
                        duration: 0.3,
                        rotationX: 0,
                        y: 0,
                        ease: 'power2.out'
                    });
                });
            });
            // Profile image 3D effect
            const profileImg = document.querySelector('.profile-img');
            profileImg.addEventListener('mousemove', (e) => {
                const rect = profileImg.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateY = (x - centerX) / 20;
                const rotateX = (centerY - y) / 20;
                gsap.to('.profile-img img', {
                    duration: 0.5,
                    rotationY: rotateY,
                    rotationX: rotateX,
                    transformStyle: 'preserve-3d',
                    ease: 'power2.out'
                });
            });
            profileImg.addEventListener('mouseleave', () => {
                gsap.to('.profile-img img', {
                    duration: 0.5,
                    rotationY: 0,
                    rotationX: 0,
                    ease: 'power2.out'
                });
            });
        }
        // Initialize everything when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            createParticles();
            handleHeaderScroll();
            smoothScrolling();
            initThemeToggle();
            initTypingEffect();
            // Initialize GSAP animations after a short delay to ensure everything is loaded
            setTimeout(() => {
                initAnimations();
            }, 1000);
        });