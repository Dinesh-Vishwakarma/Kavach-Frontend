// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const enrollForm = document.querySelector(".enroll-form");
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // --- Form Submission Logic (Existing) ---
    if (enrollForm) {
        enrollForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent actual submission for now

            // Gather form values
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const skills = document.getElementById("skills").value.trim();
            const why = document.getElementById("why").value.trim();

            // Basic validation
            if (!name || !email || !skills || !why) {
                alert("Please fill out all fields before submitting.");
                return;
            }

            // Simulate successful form submission
            alert("Your application has been submitted successfully!\nWe'll get back to you soon.");

            // Optional: Reset form
            enrollForm.reset();
        });
    }

    // --- Theme Toggle Logic (New) ---
    // Function to set the theme
    const setTheme = (theme) => {
        body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        // Update button icon based on theme
        if (theme === 'dark') {
            document.querySelector('.dark-icon').style.display = 'inline-block';
            document.querySelector('.light-icon').style.display = 'none';
        } else {
            document.querySelector('.dark-icon').style.display = 'none';
            document.querySelector('.light-icon').style.display = 'inline-block';
        }
    };

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Default to dark theme if no preference is saved
        setTheme('dark');
    }

    // Toggle theme on button click
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }
});
