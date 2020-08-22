// pages/feedback/feedback.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    problems: [{
        name: "hello"
      },
      {
        name: "world"
      },
      {
        name: "hello"
      },
      {
        name: "world"
      },
      {
        name: "hello"
      },
      {
        name: "world"
      },
    ],
    inputVal: '',
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
    this.getProblems();
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
  bindTextAreaBlur: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  formSubmit: function (e) {
    console.log("the next is input")
    console.log(this.data.inputVal)
    this.addFeedback(this.data.inputVal);
  },
  addFeedback: function (content_data) {
    wx.request({
      url: app.config.apiUrl + '/Feedback/addFeedback', // 拼接接口地址(前面为公共部分)
      method: 'post',
      data: {
        feedback: content_data,
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res) {
          console.log(res.data.sample);
        } else {
          console.log('没有数据');
        }
      }
    })
  },
  getProblems: function () {
    var that = this;
    wx.request({
      url: app.config.apiUrl + '/Problems/getProblems', // 拼接接口地址(前面为公共部分)
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res) {
          //console.log(res.data);
          that.setData({
            problems: res.data,
          });
        } else {
          console.log('没有数据');
        }
      }
    })
  },
})