const directionDisplay = document.getElementById("Direction");

function handleIOS(event){
    const heading = event.webkitCompassHeading;
    const isAvailable = 'ondeviceorientation' in window;
    directionDisplay.innerHTML = `${heading ? heading.toFixed(0) + '°' : 'N/A'} (iOS) — Supported: ${isAvailable}`;
}

function handleAndroid(event){
    const heading = event.alpha;
    const isAvailable = 'ondeviceorientationabsolute' in window;
    directionDisplay.innerHTML = `${heading ? heading.toFixed(0) + '°' : 'N/A'} (Android) — Supported: ${isAvailable}`;
}

const ua = navigator.userAgent;


if(/iPad|iPhone|iPod|Macintosh/.test(ua)){
    if (confirm("Requesting Permissions")) {
        DeviceOrientationEvent.requestPermission?.().then(res => {
            if (res === 'granted') window.addEventListener('deviceorientation', handleIOS);
            else alert("Permission Denied, User direction not available");})
            .catch(err => {
                    console.error("Error requesting permission:", err);
                    alert("Error while requesting permission.");
                });

        } else {
            alert("Permission Denied, User direction not available");
        }
    
} 
    

else if(/Android/i.test(ua)){
    console.log("Android device detected");

    window.addEventListener("deviceorientationabsolute", handleAndroid, true);

} 
else{
    console.log("Non-mobile device detected");
    directionDisplay.innerHTML = `Compass not available`;
}
