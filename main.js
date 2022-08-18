if("serviceWorker" in navigator) {
    navigator.serviceWorker.register('./sw.js');
}

var derredprompt;

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    derredprompt = e;
})

const button = document.querySelector('button');
button.addEventListener("click", async() => {
    let nice = derredprompt;
    await nice.prompt();
    derredprompt = null;
});
