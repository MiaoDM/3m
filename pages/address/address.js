// pages/address/address.js
Page({

   /**
   * 页面的初始数据
   */
  data: {
    province:'',
    city:'',
    area:'',
    show:false
  },

  sureSelectAreaListener:function(e){
    var that = this;
    that.setData({
      show: false,
      province: e.detail.currentTarget.dataset.province,
      city: e.detail.currentTarget.dataset.city,
      area: e.detail.currentTarget.dataset.area
    })
  },
  chooseAddress:function(){
    console.log("xuanzedizhi")
    var that = this;
    that.setData({
      show:true
    })
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
    initAreaPicker({
       //hideDistrict: true, // 是否隐藏区县选择栏，默认显示
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  getSelecedData() {
    console.table(getSelectedAreaData());
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
      url: '../home/home'
    })
  },

  goHome: function () {
    wx.reLaunch({
      url: '../index/index'
    })
  },

  
})