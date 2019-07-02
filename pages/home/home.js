const app = getApp();
var ase = require('../../util/public.js');

Page({
  data: {
    inputValue: '',
    showCover:false
  },
  navTo(){
    my.navigateTo({
      url: '/pages/data-entry/data-entry'
    })
  },
  chooseImage() {
    my.chooseImage({
       chooseImage: 1,
      success: res => {
        console.log('aaa')
        // console.log(res)
        // console.log(ase.Decrypt(res.apFilePaths[0]))
        const path = res.apFilePaths[0];
         my.uploadFile({
          url: 'https://www.tonticn.cn:8085/report/updatePhysicalReport',
          fileType: 'image',
          fileName: 'file',
          filePath: path,
          success: (res) => {
            var pathImg = path;
            
            var imgPath = JSON.parse(ase.Decrypt(res.data)).result;
            app.globalData.filePath.push(pathImg);
            if(app.globalData.photoName.length==0){
              app.globalData.photoName = imgPath.concat(";");
            }else{
              app.globalData.photoName = app.globalData.photoName.concat(imgPath).concat(";");
            }
            console.log(app.globalData.photoName)
            console.log(app.globalData.filePath)
            this.setData({
              showCover:true,
            })
          },
      });
      }
    })

  },
  hideCover(){
    this.setData({
      showCover:false
    })
  }
  
});
