// Requires <script src="http://localhost:4000/socket.io/socket.io.js"></script> on pages that need realtime
function connectSocket() {
    const host = API_BASE.replace('/api','');
    return io(host, { transports: ['websocket'] });
  }