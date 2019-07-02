const app = getApp();

Page({
  data: {
    inputValue: '',
    swipeIndex: null,
    list: [
      { right: [{ type: 'delete', text: '删除'}]},
      { right: [ { type: 'delete', text: '删除' }] },
      { right: [{ type: 'delete', text: '删除' }] },
    ],
  },

  onLoad() {
      // my.request({
      //   url:'192.168.31.165:8085/report/getUserID',
      //   method:'post',
      //   data:{openId:''}
        
      // })
  },

  onRightItemClick(e) {
    const { type } = e.detail;
    my.confirm({
      title: '温馨提示',
      content: `${e.index}-${e.extra}-${JSON.stringify(e.detail)}`,
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      success: (result) => {
        const { list } = this.data;
        if (result.confirm) {
          if (type === 'delete') {
            list.splice(this.data.swipeIndex, 1);
            this.setData({
              list: list,
            });
          }

          my.showToast({
            content: '确定 => 执行滑动删除还原',
          });
          e.done();
        } else {
          my.showToast({
            content: '取消 => 滑动删除状态保持不变',
          });
        }
      },
    });
  },
  onItemClick(e) {
    my.alert({
      content: `dada${e.index}`,
    });
  },
  onSwipeStart(e) {
    this.setData({
      swipeIndex: e.index,
    });
  },
});
