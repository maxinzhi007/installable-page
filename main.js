if("serviceWorker" in navigator) {
    navigator.serviceWorker.register('./sw.js');
}

let derredprompt;

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    derredprompt = e;
})

const button = document.querySelector('button');
button.addEventListener("click", async() => {
    derredprompt.prompt();
    derredprompt = null;
});
