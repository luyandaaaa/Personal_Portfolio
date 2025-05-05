document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const form = event.target;
    const formData = new FormData(form);
    const statusDiv = document.getElementById("formStatus");
    
    try {
        // Show loading state
        statusDiv.innerText = "Sending your message...";
        
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST", 
            body: formData 
        });
        
        if (response.ok) {
            // Display success message and reset the form
            statusDiv.innerText = "Your message was sent successfully!";
            form.reset(); 
            
            // Clear status message after 3 seconds
            setTimeout(() => {
                statusDiv.innerText = ""; 
            }, 3000);
        } else {
            statusDiv.innerText = "Something went wrong. Please try again.";
        }
    } catch (error) {
        statusDiv.innerText = "Error: " + error.message;
    }
});
///////////////////////////////////////////menu bar///////////////////////////////////////
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

// Mobile menu setup
function setupMobileMenu() {
    if (window.innerWidth < 768) {
        menu.addEventListener('click', openSidebar);
        close.addEventListener('click', closeSidebar);
    } else {
        menu.removeEventListener('click', openSidebar);
        close.removeEventListener('click', closeSidebar);
        sideBar.classList.remove('open-sidebar', 'close-sidebar');
    }
}

function openSidebar() {
    sideBar.classList.remove('close-sidebar');
    sideBar.classList.add('open-sidebar');
}

function closeSidebar() {
    sideBar.classList.remove('open-sidebar');
    sideBar.classList.add('close-sidebar');
}

// Smooth scrolling and active link highlighting
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Close sidebar if mobile
        if (window.innerWidth < 768) {
            closeSidebar();
        }
        
        // Smooth scroll to section
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Update active link based on scroll position
function updateActiveLink() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Initialize
setupMobileMenu();
window.addEventListener('resize', setupMobileMenu);
window.addEventListener('scroll', updateActiveLink);

// Set home as active by default if at top of page
if (window.pageYOffset === 0) {
    document.querySelector('a[href="#home"]').classList.add('active');
}
// Chatbot Toggle Functionality
const chatbotContainer = document.querySelector('.chatbot-container');
const chatbotToggle = document.querySelector('.chatbot-toggle');

chatbotToggle.addEventListener('click', function() {
  chatbotContainer.classList.toggle('active');
});

// Close when clicking outside
document.addEventListener('click', function(e) {
  if (!chatbotContainer.contains(e.target)) {
    chatbotContainer.classList.remove('active');
  }
});