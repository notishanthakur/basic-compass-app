
if (/iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent)) {
    console.log("This is an iOS device.");
    window.addEventListener("deviceorientation", main, true);
    function main(event){
        document.getElementById("Direction").innerHTML=`${event.webkitCompassHeading} :  ${'deviceorientation' in window}`;
    }
}
else if(navigator.userAgent.includes('Android')) {
    console.log("This is an Android device!");
    window.addEventListener("deviceorientationabsolute", main, true);
    function main(event){
        document.getElementById("Direction").innerHTML=`${event.alpha} :  ${'ondeviceorientationabsolute' in window}`;
    }
    }
else{
    console.log("This is a Windows device!")
    document.getElementById("Direction").innerHTML=`No compass on windows`;
}