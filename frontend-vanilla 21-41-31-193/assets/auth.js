async function login(email, password) {
    const res = await apiPost('/auth/login', { email, password });
    localStorage.setItem('access', res.access);
    localStorage.setItem('refresh', res.refresh);
    localStorage.setItem('user', JSON.stringify(res.user));
    return res.user;
  }
  
  async function register(name, email, password) {
    const res = await apiPost('/auth/register', { name, email, password });
    localStorage.setItem('access', res.access);
    localStorage.setItem('refresh', res.refresh);
    localStorage.setItem('user', JSON.stringify(res.user));
    return res.user;
  }
  
  function logout() {
    const refresh = localStorage.getItem('refresh');
    if (refresh) apiPost('/auth/logout', { refresh }).catch(()=>{});
    localStorage.removeItem('access'); localStorage.removeItem('refresh'); localStorage.removeItem('user');
    location.href = 'index.html';
  }
  
  function requireAuthOrRedirect() {
    if (!localStorage.getItem('access')) location.href = 'login.html';
  }
  
  function currentUser() {
    try { return JSON.parse(localStorage.getItem('user') || '{}'); } catch { return {}; }
  }