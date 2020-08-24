// pages/detail/detail.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDetail(options.id);
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
  getDetail:function(id){
    var that = this;
    wx.request({
      url: app.config.apiUrl + '/Sample/getDetail',
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      data: {
        id: id,
      },
      success(res) {
        if (res) {
          that.setData({
            items: res.data,
          });
          console.log('next is it')
          console.log(that.data.items);
          textBox: res.data 
        } else {
          console.log('没有数据')
        }
      }
    })
  },
})