var facebookTest = new Vue({
    el: '#facebookTest',
    data: {
        checked: false,
        outText: ""
    },
    methods: {
        checkBtnClick:function(){
            console.log('checkBtnClick')
            this.outText = '正在进行第一步，请耐心等待，大概需要5分钟左右'
            this.$http.get('http://192.168.40.62:8080/facebookTestCheck').then(response => response.json()).then( json=>{
                console.log(json)
                this.outText = json['reason']
                if (json['status'] == true) {
                    this.checked = true
                }
            },function(){
                this.outText = '请求失败处理';
            });
        },
        createBtnClick:function(){
            if ( !this.checked ){
                this.outText = "第一步还未完成，无法进行第二步"
                return    
            }
            this.outText = "正在进行第二步，请耐心等待，大概需要5分钟左右"
            this.$http.get('http://192.168.40.62:8080/facebookTestMain').then(response => response.json()).then( json=>{
                console.log(json)
                this.outText = json['reason']
                if (json['status'] == true) {
                    this.checked = true
                }
            },function(){
                this.outText = '请求失败处理';
            });
        }
    }
})