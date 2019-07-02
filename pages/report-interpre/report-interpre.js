const app = getApp();

Page({
  data: {
    inputValue: '',
    tabs: [
      {
        title: '报告详情',
      },
      {
        title: '解读建议',
      },
    ],
    activeTab: 0,
  },
   handleTabClick({ index }) {
    this.setData({
      activeTab: index,
    });
  },
  handleTabChange({ index }) {
    this.setData({
      activeTab: index,
    });
  },
  handlePlusClick() {
    my.alert({
      content: 'plus clicked',
    });
  },
});
