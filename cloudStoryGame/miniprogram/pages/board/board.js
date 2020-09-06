const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gridCol:2,
    skin: false,
    scroll:0,
    //登录信息
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

  },

  navigateTo_game:function(){
    wx.navigateTo({
      url: '/pages/explore/explore',
    })
  },

  navigateTo_user:function(){
    wx.navigateTo({
      url: '/pages/user/user',
    })
  },

  scrollSteps() {
    this.setData({
      scroll: this.data.scroll == 9 ? 0 : this.data.scroll + 1
    })
  },
  scrollStepsBack() {
    if(this.data.scroll>1){
      this.setData({
        scroll: this.data.scroll == 9 ? 0 : this.data.scroll - 1
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
   // 获取用户信息
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      console.log(app.globalData.userInfo)
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
   app.globalData.userInfo = that.data.userInfo
   
  },
  getUserInfo: function(e) {
    var that = this
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    console.log("成功"+app.globalData.userInfo.nickName)
    // 登录后默认已经阅读完第一页
    this.setData({
      scroll: this.data.scroll == 9 ? 0 : this.data.scroll + 1
    })

    // 获取用户手机属性
    wx.getSystemInfo({
      success: function (res) {
        let clientWinHeight = res.windowHeight;
        let clientWinWidth = res.windowWidth
        app.globalData.clientWinWidth = clientWinWidth
        app.globalData.clientWinHeight = clientWinHeight
        console.log("用户手机信息获取成功：width:"+app.globalData.clientWinWidth+" height:"+app.globalData.clientWinHeight)
      }
    });
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