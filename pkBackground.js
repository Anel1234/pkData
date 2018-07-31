var port = chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name == "background");
    
    port.onDisconnect.addListener(function(event) {
        console.log('disconnected!');
        // alert('ahhh');
    });
})

// chrome.port.onDisconnect.addListener(function(event) {
//     console.log('disconnected!');
// });