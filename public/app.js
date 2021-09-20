if("serviceWorker" in navigator) {
    navigator.serviceWorker.register('../serviceworker.js', {scope: '/'})
        .then(registration => {
            console.log("Service Worker Registered!");
            console.log(registration);
        }).catch(error => {
            console.log("Service Worker Failed to Register");
            console.log(error);
        });
}
else{
    console.log('Service Workers are not supported.');
}