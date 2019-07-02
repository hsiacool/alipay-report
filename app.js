App({
  todos: [
    { text: 'Learning Javascript', completed: true },
    { text: 'Learning ES2016', completed: true },
    { text: 'Learning 支付宝小程序', completed: false },
  ],

  userInfo: null,
   onLaunch(options) {
    my.getAuthCode({
        scopes: ['auth_user'],
        success: authcode => {
          console.info(authcode);
          my.request({
            url:'https://192.168.31.165:8085/report/getUserID',
            method:'post',
            data:{id:authcode.authCode},
            success:res=> {
              console.log(res)
            },
            fail:()=>{

            }
            
          })
          my.getAuthUserInfo({
            success: res => {
              console.log(res)
              this.globalData.userInfo = res;

            },
            fail: () => {
              reject({});
            },
          });
        },
        fail: () => {
          reject({});
        },
      });
  },
  // getUserInfo() {
  //   return new Promise((resolve, reject) => {
  //     if (this.userInfo) resolve(this.userInfo);

  //     my.getAuthCode({
  //       scopes: ['auth_user'],
  //       success: authcode => {
  //         console.info(authcode);

  //         my.getAuthUserInfo({
  //           success: res => {
  //             console.log(res)
  //             this.userInfo = res;
  //             resolve(this.userInfo);
  //           },
  //           fail: () => {
  //             reject({});
  //           },
  //         });
  //       },
  //       fail: () => {
  //         reject({});
  //       },
  //     });
  //   });
  // },
   globalData:{
    photoName:'',
    openId:'',
    userInfo:[],
    filePath:[]
   },
});
