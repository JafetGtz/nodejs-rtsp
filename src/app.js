
    //Camera Authentication
    var ip_address = "10.0.17.11"
    //camera username and password
    var username = "admin";
    var password="admin";

    //A channel of camera stream
    Stream = require('node-rtsp-stream');
    stream = new Stream({
        streamUrl: 'rtsp://192.168.0.5:554/live.sdp',
        wsPort: 9999    
    });
