// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-icon');
    
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        menu.classList.add('hidden');
        icon.classList.replace('fa-times', 'fa-bars');
    }
}

// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const progressBar = document.getElementById('scroll-progress');
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${scrollPercent}%`;
});

// Fake Contact Alert
function fakeContact() {
    const msg = document.createElement('div');
    msg.style.cssText = `
        position: fixed; 
        bottom: 30px; 
        right: 30px; 
        background: #00b4d8; 
        color: white; 
        padding: 20px 30px; 
        border-radius: 9999px; 
        box-shadow: 0 20px 25px -5px rgb(0 180 216);
        z-index: 9999;
        font-weight: 500;
    `;
    msg.innerHTML = `✅ Mensaje enviado correctamente!<br><small>El equipo te contactará pronto</small>`;
    document.body.appendChild(msg);
    
    setTimeout(() => {
        msg.style.opacity = '0';
        setTimeout(() => msg.remove(), 500);
    }, 4000);
}

// Initialize when page loads
window.onload = () => {
    console.log('%c🌊 Sitio web ODS Vida Marina cargado correctamente!', 
                'color: #00b4d8; font-size: 16px; font-weight: bold;');
    
    // Animar contadores cuando se vea la sección (opcional)
};