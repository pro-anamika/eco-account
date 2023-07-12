console.log("Sanity check passed")
const socket = new WebSocket('ws://localhost:8000/ws/chat/kl/'); // Replace with your WebSocket URL

socket.onopen = function() {
  console.log('WebSocket connection established.');
};

socket.onmessage = function(event) {
  const message = event.data;
  console.log('Received message:', message);
  // Handle the received message as needed
};

socket.onclose = function(event) {
  console.log('WebSocket connection closed with code:', event.code);
};

socket.onerror = function(error) {
  console.error('WebSocket error:', error);
};
