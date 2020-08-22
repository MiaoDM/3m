// pages/collect/collect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {
        ID: '3', 
        ProductName:'hello', 
        ProductPic: 'http://47.101.147.253:2000/uploads/p1.jpg',
        Point:'88',
      },
      {
        ID: '3', 
        ProductName:'hello', 
        ProductPic: 'http://47.101.147.253:2000/uploads/p1.jpg',
        Point:'88',
      },
      {
        ID: '3', 
        ProductName:'hello', 
        ProductPic: 'http://47.101.147.253:2000/uploads/p1.jpg',
        Point:'88',
      },
      {
        ID: '3', 
        ProductName:'hello', 
        ProductPic: 'http://47.101.147.253:2000/uploads/p1.jpg',
        Point:'88',
      },
      {
        ID: '3', 
        ProductName:'hello', 
        ProductPic: 'http://47.101.147.253:2000/uploads/p1.jpg',
        Point:'88',
      }
    ], // 数据列表
    points:'',//积分数
    activity:{},//头试图信息
    color:'',//立即兑换按钮颜色
    cell:{},//每个cell
    userInfo: {},
    hasUserInfo: false,
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo')

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  goBack: function () {
    wx.reLaunch({
      url: '../index/index'
    })
  },

  goHome: function () {
    wx.reLaunch({
      url: '../index/index'
    })
  },
})