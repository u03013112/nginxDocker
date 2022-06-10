var app = new Vue({
    el: '#app',
    data: {
        notReady: false,
        hotkeys: [
            { text: 'Escape : Skip the battle' },
            { text: 'Escape : Quit from some menu' },
            { text: 'q : Quick deploy in battle' },
            { text: 'Enter: Start battle' }
        ],
        goldMine: {
            buildingLevel: 10,
            mergeLevel: 12,
            buildMax: 10,
            statusStrs: [
                { text: 'Level 58 count:10' },
                { text: 'Level 58 count:10' },
                { text: 'Level 58 count:10' },
            ]
        },
        barrack: {
            buildingLevel: 11,
            mergeLevel: 15,
            buildMax: 16,
            statusStrs: [
                { text: 'Level 58 count:11' },
                { text: 'Level 58 count:12' },
                { text: 'Level 58 count:13' },
            ]
        },
        shipyard: {
            buildingLevel: 11,
            mergeLevel: 15,
            buildMax: 16,
            statusStrs: [
                { text: 'Level 58 count:11' },
                { text: 'Level 58 count:12' },
                { text: 'Level 58 count:13' },
            ]
        },
        radar: {
            countMax: 1,
            interval: 30,
            retryInterval: 10,
            retryCountMax: 3,
            logStrs: ['1', '2', '3'],
        }
    }
})


if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('sw.js')
    .then(() => { console.log('Service Worker Registered'); });
}

window.addEventListener('beforeinstallprompt', (e) => {
    console.log('beforeinstallprompt');
    // Prevent Chrome 67 and earlier from automatically showing the prompt

    // addBtn.addEventListener('click', () => {
    //     // hide our user interface that shows our A2HS button
    //     addBtn.style.display = 'none';
    //     // Show the prompt
    //     deferredPrompt.prompt();
    //     // Wait for the user to respond to the prompt
    //     deferredPrompt.userChoice.then((choiceResult) => {
    //         if (choiceResult.outcome === 'accepted') {
    //             console.log('User accepted the A2HS prompt');
    //         } else {
    //             console.log('User dismissed the A2HS prompt');
    //         }
    //         deferredPrompt = null;
    //     });
    // });
});