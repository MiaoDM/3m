// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_detail_tp: '',
    items: [{
        name: "hello"
      },
      {
        name: "ss"
      },
      {
        name: "hellssso"
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.image);
    console.log(options.id);
    this.setData({
      img_detail_tp: options.image,
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
  tapfavourite: function () {
    console.log("tapfavourite");
  },
  tapshop: function () {
    console.log("tapshop");
  },
  tapshow: function () {
    console.log("tapshow");
  },
})