const app = getApp()
// 云服务
//const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: app.globalData.userInfo,
    text: "osoakdoaksodkasd",
    local_contactInfo:'ta没有公开联系方式O',
    storyData:[],
    currentStoryId:'110'// for testing purpose only
  },
  btnSubmitInfo:function(res){
    var that = this
    var author = app.globalData.userInfo.nickName
    var authorAvatar = app.globalData.userInfo.avatarUrl
    var _openid = app.globalData.openId
    var storyContent = res.detail.value.storyContent
    var contactInfo = that.data.local_contactInfo

    db.collection('story'+that.data.currentStoryId).add({
      data:{
        author:author,
        authorAvatar:authorAvatar,
        storyContent:storyContent,
        _openid:_openid,
        storyContent:storyContent,
        contactInfo:contactInfo
      }
    }).then(res=>{
      console.log(res) //成功
    })
  },

  getAllCurrentStoryContent:function(currentStoryId){
    var that = this
    db.collection('story'+currentStoryId).get({
      success:res=>{
        that.setData({
          storyData:res.data
        })
        console.log(that.data.storyData)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      userInfo: app.globalData.userInfo
    })
    this.getAllCurrentStoryContent(110)
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