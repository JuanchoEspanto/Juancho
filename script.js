document.addEventListener('DOMContentLoaded', function() {
    
    // CONTADOR EXPERIENCIA AUTOMÁTICO
    function updateExperienceCounter() {
        const years = new Date().getFullYear() - 2006;
        const counter = document.getElementById('experienceCounter');
        if (counter) {
            counter.innerHTML = 
                `Especialista en <strong>TIC para educación</strong> con <strong>${years}+ años</strong> de experiencia profesional en desarrollo web, diseño 3D y herramientas de IA generativa.`;
        }
    }
    
    // INICIALIZAR
    updateExperienceCounter();
    setInterval(updateExperienceCounter, 60000);
    
    // ANIMACIONES HOVER AVANZADAS
    const hoverElements = document.querySelectorAll('.skill-badge, .edu-card, .profile-photo, .contact-item, .timeline-item');
    
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.transition = 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // ANIMACIÓN SCROLL
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // OBSERVAR ELEMENTOS
    document.querySelectorAll('.sidebar-card, .main-card, .timeline-item, .edu-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(el);
    });
});
