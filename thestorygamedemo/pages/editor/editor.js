// pages/editor/editor.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: app.globalData.userInfo,
    text: "osoakdoaksodkasd",
    data: [
      {info:'abc',text:'asdasdaz'},
      {info:'zsa',text:'阿萨的那艘等哈都覅设计大奖哦i上帝啊是氨基酸都骄傲是第几哦i阿散井滴哦艾师傅阿松i电脑四点安排的较为人加我欧派人家破案我都判决按东坡判决按破地方我啊啊外婆都怕我放假哦啊我派飞机迫降安排爱神的箭哦啊搜集擦社交平怕我觉得破案苏东坡按时间都建安费【啊我怕我佛入网癖爱哦譬如高温费你无法'},
      {info:'zsa',text:'阿萨的那艘等哈都覅设计大奖哦i上帝啊是氨基酸都骄傲是第几哦i阿散井滴哦艾师傅阿松i电脑四点安排的较为人加我欧派人家破案我都判决按东坡判决按破地方我啊啊外婆都怕我放假哦啊我派飞机迫降安排爱神的箭哦啊搜集擦社交平怕我觉得破案苏东坡按时间都建安费【啊我怕我佛入网癖爱哦譬如高温费你无法'},
      {info:'zsa',text:'阿萨的那艘等哈都覅设计大奖哦i上帝啊是氨基酸都骄傲是第几哦i阿散井滴哦艾师傅阿松i电脑四点安排的较为人加我欧派人家破案我都判决按东坡判决按破地方我啊啊外婆都怕我放假哦啊我派飞机迫降安排爱神的箭哦啊搜集擦社交平怕我觉得破案苏东坡按时间都建安费【啊我怕我佛入网癖爱哦譬如高温费你无法'},
      {info:'zsa',text:'阿萨的那艘等哈都覅设计大奖哦i上帝啊是氨基酸都骄傲是第几哦i阿散井滴哦艾师傅阿松i电脑四点安排的较为人加我欧派人家破案我都判决按东坡判决按破地方我啊啊外婆都怕我放假哦啊我派飞机迫降安排爱神的箭哦啊搜集擦社交平怕我觉得破案苏东坡按时间都建安费【啊我怕我佛入网癖爱哦譬如高温费你无法'}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.userInfo);
    this.setData({
      userInfo: app.globalData.userInfo
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})