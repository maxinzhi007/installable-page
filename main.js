if("serviceWorker" in navigator) {
    navigator.serviceWorker.register('./sw.js');
}

var derredprompt;

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    setTimeout(() =>{
        e.prompt();   
    }, 2000)
});
