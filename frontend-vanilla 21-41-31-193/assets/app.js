function revealInit() {
    const els = Array.from(document.querySelectorAll('.reveal'));
    function onScroll() {
      const h = window.innerHeight;
      els.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < h - 60) el.classList.add('visible');
      });
    }
    onScroll();
    window.addEventListener('scroll', onScroll);
  }
  document.addEventListener('DOMContentLoaded', revealInit);
  
  function setNavAuthState() {
    const btnLogin = document.getElementById('btnLogin');
    const btnLogout = document.getElementById('btnLogout');
    if (!btnLogin || !btnLogout) return;
    const logged = !!localStorage.getItem('access');
    btnLogin.style.display = logged ? 'none' : 'inline-block';
    btnLogout.style.display = logged ? 'inline-block' : 'none';
  }
  document.addEventListener('DOMContentLoaded', setNavAuthState);