const btnInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  window.deferredPrompt = event;
  btnInstall.style.visibility = 'visible';
});

btnInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  if(!promptEvent) return;

  promptEvent.prompt();
  window.deferredPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
    window.deferedPrompt = null;
    // butInstall.style.visibility = 'hidden';
});
