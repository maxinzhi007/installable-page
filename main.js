if("serviceWorker" in navigator) {
    navigator.serviceWorker.register('./sw.js');
}

const button = document.querySelector('button');
let derferprompt;

window.addEventListener("beforeinstallprompt", (e) => {
    if(button.classList.contains("hidden")) {
        button.classList.remove("hidden");
    }
    derferprompt = e;
})

button.addEventListener("click", () => {
    derferprompt.prompt();
    derferprompt = null;
})
