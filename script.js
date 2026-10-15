document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Menú Desplegable en Dispositivos Móviles
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // 2. Filtro Interactivo de Productos / Colección
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        if (filterValue === 'all' || item.classList.contains(filterValue)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 3. Envío del Formulario de Cita VIP
  const contactForm = document.getElementById('contactForm');
  const modal = document.getElementById('successModal');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nombre = document.getElementById('nombre').value;
      const fecha = document.getElementById('fecha').value;
      const servicio = document.getElementById('servicio').value;
      const modalMessage = document.getElementById('modalMessage');

      if (modalMessage) {
        modalMessage.innerText = `Estimado/a ${nombre}, hemos recibido su solicitud para el servicio de "${servicio}" el día ${fecha}. Nuestro Concierge se comunicará en breve para confirmar su cita.`;
      }
      
      if (modal) {
        modal.style.display = 'flex';
      }

      contactForm.reset();
    });
  }
});

// Función para cerrar la ventana modal
function closeModal() {
  const modal = document.getElementById('successModal');
  if (modal) {
    modal.style.display = 'none';
  }
}