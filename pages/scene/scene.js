// pages/scene/scene.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    currentIndex1: 0,
    currentIndex2: 0,

    imagelist: [],
  },

  //函数
  changeSwiper: function (e) {
    this.setData({
      currentIndex: e.detail.current
    })
  },
  changeSwiper1: function (e) {
    this.setData({
      currentIndex1: e.detail.current
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
  move: function() {
    var datas = this.data.datas;
    /*图片分布*/
    for (var i = 0; i < datas.length; i++) {
      var data = datas[i];
      var animation = wx.createAnimation({
        duration:200
      });
      animation.translateX(data.left).step();
      this.setData({
        ["datas[" + i + "].animation"]: animation.export(),
        ["datas[" + i + "].zIndex"]: data.zIndex,
        ["datas[" + i + "].opacity"]: data.opacity,
      })
    }
  },
  /**左箭头 */
  left: function() {
    //
    var last = this.data.datas.pop(); //获取数组的最后一个
    this.data.datas.unshift(last);//放到数组的第一个
    var orderFirst = this.data.order.shift();
    this.data.order.push(orderFirst);
    this.move();
  },
  /** */
  right: function() {
    var first = this.data.datas.shift(); //获取数组的第一个
    this.data.datas.push(first);//放到数组的最后一个位置
    var orderLast = this.data.order.pop();
    this.data.order.unshift(orderLast);
    this.move();
  },
  /**点击某项 */
  choose: function(e) {
    var that = this;
    var id = e.currentTarget.dataset.id;
    var order = that.data.order;
    var index = 0;
    for(var i = 0; i<order.length;i++){
      if(id == order[i]){
        index = i;
        break;
      }
    }
    if (index < that.data.iCenter) {
      for (var i = 0; i < that.data.iCenter - index; i++){  
        this.data.datas.push(this.data.datas.shift()); //获取第一个放到最后一个
        this.data.order.unshift(this.data.order.pop());   
        // this.right()  
      } 
    } else if (index > that.data.iCenter) {
      for (var i = 0; i < index - that.data.iCenter; i++) {
        this.data.datas.unshift(this.data.datas.pop()); //获取最后一个放到第一个
        this.data.order.push(this.data.order.shift());
        // this.left();
      }
    }
    this.move();
  },
  /**新的排列复制到新的数组中 */
  __set__: function() {
    var that = this;
    var order = that.data.order;
    var datas = that.data.datas;
    for(var i = 0;i<datas.length;i++){
      that.setData({
        ["order["+i+"]"]:datas[i].id
      })
    }
  },
  //手指触发开始移动
  moveStart: function (e) {
    console.log(e);
    var startX = e.changedTouches[0].pageX;
    this.setData({
      startX: startX
    });
  },
  //手指触摸后移动完成触发事件
  moveItem: function (e) {
    console.log(e);
    var that = this;
    var endX = e.changedTouches[0].pageX;
    this.setData({
      endX: endX
    });
    //计算手指触摸偏移剧距离
    var moveX = this.data.startX - this.data.endX;
    //向左移动
    if (moveX > 20) {
      this.left();
    }
    if (moveX < -20) {
      this.right();
    }
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