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
            countMax:1,
            interval:30,
            retryInterval:10,
            retryCountMax:3,
            logStrs:['1','2','3'],
        }
    }
})