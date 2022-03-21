var facebookUpload = new Vue({
    el: '#facebookUpload',
    data: {
        searchName: "",
        searchLang: "",
        searchSize: "",
        selectedAdAccounts: [],
        adAccounts: [],
        filePaths: [],
        selectedFilePaths: [],
        outText: ""
    },
    methods: {
        reflushAdAccountBtnClick:function(){
            this.$http.get('http://192.168.40.62:8080/facebookAccounts').then(response => response.json()).then( json=>{
                this.adAccounts = json;
            },function(){
                this.outText = '请求失败处理';
            });
            
        },
        searchBtnClick:function(){
            if (this.searchName == "") {
                this.outText = "需要名字，不然文件太多，会死机的！"
                return
            }
            var names = this.searchName.split(" ");
            var data = {name:names}

            if (this.searchLang != "") {
                var langs = this.searchLang.split(" ");
                data.lang=langs
            }
            if (this.searchSize != "") {
                var sizes = this.searchSize.split(" ");
                data.size=sizes
            }
            console.log(data)
            
            this.outText = "正在搜索 请耐心等待，大约30秒"
            this.$http.post('http://192.168.40.62:8080/searchFromWarehouse',data).then(response => response.json()).then( json=>{
                this.filePaths = json
            },function(res){
                this.outText = '请求失败处理';
            });
        }
    }
})