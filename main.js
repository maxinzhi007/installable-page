if("serviceWorker" in navigator) {
    navigator.serviceWorker.register('./sw.js');
}

let deferprompt;

const button = document.querySelector('.install');

window.addEventListener('beforeinstallprompt', (e) => {
    const timer = setInterval(() => {
        console.log('正在抓取beforeinstallprompt中...');
        if(e) {
            console.log('抓到它了！！！');
            deferprompt = e;
            button.classList.toggle('hidden');
            clearInterval(timer);
        }
    }, 1000)
})

button.addEventListener('click', () => {
    deferprompt.prompt();
    deferprompt = null;
})
