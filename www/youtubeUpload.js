var youtubeUpload = new Vue({
    el: '#youtubeUpload',
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
            if (this.selectedFilePaths.length <= 0){
                this.outText = '请选择需要上传文件'
                return
            }
            this.outText = "正在上传 请耐心等待，文件和账号越多，时间越长，慢慢等待"
            var data = {"filePathList":this.selectedFilePaths}
            this.$http.post('http://192.168.40.62:8080/youtubeUpload',data).then(response => response.json()).then( json=>{
                this.outText = '上传完成'
            },function(res){
                this.outText = '请求失败处理';
            });
        },
        selectAllVideo:function(){
            var cks = document.getElementsByName('videoCheckbox');
            for (var j=0;j<this.filePaths.length;j++){
                var filePath = this.filePaths[j].path;
                this.selectedFilePaths.push(filePath);
            }
            for (var i=0;i<cks.length;i++){
                cks[i].checked = true;
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