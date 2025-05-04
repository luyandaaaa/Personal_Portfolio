document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const subject = `New message from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    window.location.href = `mailto:lloyiswa2003@mail.com?subject=${subject}&body=${body}`;
    
    // Optional: Show success message
    alert('Your message has been prepared. Please send it from your email client.');
    this.reset();
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