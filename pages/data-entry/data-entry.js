const app = getApp();
var ase = require('../../util/public.js');

Page({
  data: {
    checkTime:'',
    hospitalName:'',
    urls:app.globalData.filePath,
    indexArray:[],
    show:true,
    helpList:[
      {
        helpTitle:"item-title1",
        helpContent:"item-content1"
      },
        {
        helpTitle:"item-title2",
        helpContent:"item-content2"
      },
        {
        helpTitle:"item-title3",
        helpContent:"item-content3"
      }
      
    ],
    showIndex:"-1"
  },
  clickHandle(e){
    console.log(e.currentTarget.dataset.index);
    if (e.currentTarget.dataset.index != this.data.showIndex) {
      this.setData({
        showIndex: e.currentTarget.dataset.index
      })
    } else {
      this.setData({
        showIndex: "-1"
      })
    }

  },
  onLoad(){
    this.showResult();
  },
  showResult(){
    var that = this;
    my.request({
      url:'https://www.tonticn.cn:8085/report/analysisphoto',
      method:'post',
      data:{
        photoName:app.globalData.photoName
      },
      dataType: 'json',
      success: function(res) {
        console.log(JSON.parse(ase.Decrypt(res.data)))
        var indexArr = JSON.parse(ase.Decrypt(res.data)).result.data.ocrResult.indexDetailArray;
        console.log(indexArr)
        if(indexArr==null){
          my.alert({
            content: '解析失败',
            buttonText: '确定'
          });
        }else{
          that.setData({
            indexArray:indexArr,
            checkTime:JSON.parse(ase.Decrypt(res.data)).result.data.ocrResult.checkTime,
            hospitalName:JSON.parse(ase.Decrypt(res.data)).result.data.ocrResult.hospitalName
          })
        }
      },
      fail: function(res) {
        
      },
      complete: function(res) {
        my.hideLoading();
      }
    })
  },
  showDate(){
    var that = this;
    my.datePicker({
      format: 'yyyy-MM-dd',
      success: (res) => {
        that.setData({
          date:res.date
        })
      },
    });
  },
  add(){

  },
  previewImg(event){
    var that = this;
    var index = event.currentTarget.dataset.index;
    console.log(that.data.urls)
    my.previewImage({
      urls:that.data.urls,
      current: index,
    })
  }
});
