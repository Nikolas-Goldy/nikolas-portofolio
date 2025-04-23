document.addEventListener("DOMContentLoaded", function () {
    // Navbar functionality
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.sticky-nav');
    const navLinks = document.querySelectorAll('.sticky-nav ul li a');

    // Function to open the navbar
    function openNav() {
        nav.classList.add('open');
    }

    // Function to close the navbar
    function closeNav() {
        nav.classList.remove('open');
    }

    // Open navbar on hamburger click
    hamburger.addEventListener('click', openNav);

    // Open navbar on hamburger hover
    hamburger.addEventListener('mouseenter', openNav);

    // Close navbar when mouse leaves the nav area
    nav.addEventListener('mouseleave', closeNav);

    // Close navbar when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', closeNav);
    });

    // Close navbar when clicking outside of it
    document.addEventListener('click', (event) => {
        const isClickInside = nav.contains(event.target) || hamburger.contains(event.target);
        if (!isClickInside) {
            closeNav();
        }
    });

    // Typewriter effect
    const texts = ["Computer Science", "Software Engineer"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    let isDeleting = false;
    const typingSpeed = 200;
    const deletingSpeed = 80;
    const delayAfterTyping = 2000;
    const delayAfterDeleting = 1000;

    function type() {
        if (count === texts.length) {
            count = 0; // Reset to the first text when all texts are done
        }

        currentText = texts[count];

        if (isDeleting) {
            letter = currentText.slice(0, --index);
        } else {
            letter = currentText.slice(0, ++index);
        }

        document.querySelector(".typewriter").textContent = letter;

        let typeSpeed = isDeleting ? deletingSpeed : typingSpeed;

        if (!isDeleting && index === currentText.length) {
            typeSpeed = delayAfterTyping;
            isDeleting = true;
        } else if (isDeleting && index === 0) {
            isDeleting = false;
            count++;
            typeSpeed = delayAfterDeleting; // Add delay after deleting
        }

        setTimeout(type, typeSpeed);
    }

    // Start typing after a short delay
    setTimeout(type, 1000);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});