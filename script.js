const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-open');
        });

        let slideIndex = 1;
        showSlides(slideIndex);

        function moveSlide(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            let slides = document.querySelectorAll(".slide");
            let dots = document.querySelectorAll(".dot");

            if (n > slides.length) slideIndex = 1;
            if (n < 1) slideIndex = slides.length;

            slides.forEach(slide => slide.style.display = "none");
            dots.forEach(dot => dot.className = dot.className.replace(" active", ""));

            slides[slideIndex - 1].style.display = "flex";
            dots[slideIndex - 1].className += " active";
        }
