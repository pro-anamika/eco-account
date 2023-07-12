function connect() {
    chatSocket = new WebSocket("ws://" + window.location.host + "/ws/chat/" + 'kl' + "/");
    chatSocket.onopen = function(e) {
        console.log("Successfully connected to the WebSocket.");
    }
    chatSocket.onclose = function(e) {
        console.log("WebSocket connection closed unexpectedly. Trying to reconnect in 2s...");
        setTimeout(function() {
            console.log("Reconnecting...");
            connect();
        }, 2000);
    };
    chatSocket.onmessage = function(e) {
        console.log("This is great")
        alert("THis is working")
    };
    chatSocket.onerror = function(err) {
        console.log("WebSocket encountered an error: " + err.message);
        console.log("Closing the socket.");
        chatSocket.close();
    }
}
connect();
