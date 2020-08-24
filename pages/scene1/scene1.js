// pages/scene1/scene1.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagelist: [],
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
    this.getSenceList();
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
  getSenceList: function () {
    var that = this;
    wx.request({
      url: app.config.apiUrl + '/Sence/getSenceList', // 拼接接口地址(前面为公共部分)
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res) {
          that.setData({
            imagelist: res.data,
          }, )
          console.log('next is sence')
          console.log(res.data) // 打印查看是否请求到接口数据
          // 开始获取数据 eg: textBox(获取文字内容)
          textBox: res.data // 根据network查看请求到的接口的结构获取相对应的数据
        } else {
          console.log('没有数据')
        }
      }
    })
  },
})