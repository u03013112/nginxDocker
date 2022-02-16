var goldMine = new Vue({
    el: '#goldMine',
    data: {
        buildingLevel:10,
        mergeLevel:12,
        buildMax:10,
        statusStrs:[
            {text:'Level 58 count:10'},
            {text:'Level 58 count:10'},
            {text:'Level 58 count:10'},
        ]
    }
})

var barrack = new Vue({
    el: '#barrack',
    data: {
        buildingLevel:11,
        mergeLevel:15,
        buildMax:16,
        statusStrs:[
            {text:'Level 58 count:11'},
            {text:'Level 58 count:12'},
            {text:'Level 58 count:13'},
        ]
    }
})

var shipyard = new Vue({
    el: '#shipyard',
    data: {
        buildingLevel:11,
        mergeLevel:15,
        buildMax:16,
        statusStrs:[
            {text:'Level 58 count:11'},
            {text:'Level 58 count:12'},
            {text:'Level 58 count:13'},
        ]
    }
})


var hotkey = new Vue({
    el: '#hotkey',
    data: {
        hotkeys:[
            {text:'Escape : Skip the battle'},
            {text:'Escape : Quit from some menu'},
            {text:'q : Quick deploy in battle'},
            {text:'Enter: Start battle'}
        ]
    }
})