var radar = new Vue({
    el: '#radar',
    data: {
        messionStorage: 40,
        messionStorageMax:45,
        newMessionTime:'00:03:20',
        energy:70,
        energyMax:75,
        marchingQueue:0,
        marchingQueueMax:3,
        smallVITCapsules:4,
        largeVITCapsules:3,

        repeat:1,
        // retry
        retry:0,
        retryMax:10,

        optionActive:false,
        // priorty
        isPriorityActive:false,
        messionsType:[
            {'name':'aaa'},
            {'name':'bbb'},
            {'name':'ccc'},
        ],
        dragging: null,
        // fill energy
        autoSmallVIT:false,
        autoLargeVIT:false,

        // 不管是否升级，领取奖励
        autoGetReward:false,

    },
    methods: {
        optionsBtnClicked:function(){
            this.optionActive = !this.optionActive;
        },
        dragStart:function(e,item){
            this.dragging = item;
        },
        dragEnd:function(e,item){
            this.dragging = null;
        },
        dragOver:function(e){
            e.dataTransfer.dropEffect = 'move';
        },
        dragEnter:function(e,item){
            e.dataTransfer.effectAllowed = 'move';
            if (item === this.dragging) {
                return;
            }
            const newItems = [...this.messionsType];
            const src = newItems.indexOf(this.dragging);
            const dst = newItems.indexOf(item);
            newItems.splice(dst,0,...newItems.splice(src,1))
            this.messionsType = newItems;
            // TODO: save
        }
    }
})