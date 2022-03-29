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
                this.outText = '刷新完成'
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
            
            this.outText = "正在搜索 请耐心等待，大约30秒"
            this.$http.post('http://192.168.40.62:8080/searchFromWarehouse',data).then(response => response.json()).then( json=>{
                this.filePaths = json
                this.outText = '搜索完成'
            },function(res){
                this.outText = '请求失败处理';
            });
        },
        uploadBtnClick:function(){
            if (this.selectedAdAccounts.length <= 0){
                this.outText = '请选择需要上传账号'
                return
            }
            if (this.selectedFilePaths.length <= 0){
                this.outText = '请选择需要上传文件'
                return
            }
            this.outText = "正在上传 请耐心等待，文件和账号越多，时间越长，慢慢等待"
            var data = {"accountIds":this.selectedAdAccounts,"filePathList":this.selectedFilePaths}
            this.$http.post('http://192.168.40.62:8080/facebookUpload',data).then(response => response.json()).then( json=>{
                this.outText = '上传完成，有时候FB反应略慢，等几秒刷新FB页面就有了'
            },function(res){
                this.outText = '请求失败处理';
            });
        },
        selectAllVideo:function(){
            var cks = document.getElementsByName('videoCheckbox');
            for (var i=0;i<cks.length;i++){
                cks[i].checked = true;
                for (var j=0;j<this.filePaths.length;j++){
                    var filePath = this.filePaths[j].path;
                    this.selectedFilePaths.push(filePath);
                }
                
            }
        },
        unselectAllVideo:function(){
            var cks = document.getElementsByName('videoCheckbox');
            for (var i=0;i<cks.length;i++){
                cks[i].checked = false;
                this.selectedFilePaths=[];
            }
        }
    }
})