console.log("Cafe System Loaded");

// INSTALL APP

let deferredPrompt;

const installBtn =
document.getElementById("installBtn");

window.addEventListener(
'beforeinstallprompt',
(e)=>{

    e.preventDefault();

    deferredPrompt = e;

});

installBtn.addEventListener(
'click',
async ()=>{

    if(deferredPrompt){

        deferredPrompt.prompt();

        deferredPrompt = null;

    }

});

// SERVICE WORKER

if('serviceWorker' in navigator){

    window.addEventListener('load',()=>{

        navigator.serviceWorker
        .register('sw.js');

    });

}
