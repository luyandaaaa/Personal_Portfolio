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