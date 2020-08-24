// pages/register/register.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone:"",
    name:"",
    code:"",
    company:"",
    openid:"",
    /*按钮*/
    btn_disabled:true,
    
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

  // 拿到手机号
  getPhone: function (e) {
    var val = e.detail.value
    this.setData({
        phone: val
    });
  },

   // 拿到用户名
   getName: function (e) {
    var val = e.detail.value
    this.setData({
        name: val
    });
  },

   // 拿到验证码
   getVCode: function (e) {
    var val = e.detail.value
    this.setData({
        code: val
    });
  },

   // 拿到公司名
   getCompany: function (e) {
    var val = e.detail.value
    this.setData({
        company: val
    });
  },

  getVC: function () {
    var _this = this;
    var myreg = /^(14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$$/;
    if (this.data.phone == "") {
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none',
        duration: 1000
      })
      return false;
    } 
    else if (!myreg.test(this.data.phone)) {
      wx.showToast({
        title: '请输入正确的手机号',
        icon: 'none',
        duration: 1000
      })
      return false;
    }
    else{
      this.GetVerificationCode(this.data.phone);
    } 
  },
  //获取样品系列名称列表
  GetVerificationCode: function (tel) {
    var that = this;
    wx.request({
      url: app.config.apiUrl + '/Account/GetVerificationCode', // 拼接接口地址(前面为公共部分)
      method: 'post',
      data: {
        telephone: tel,
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res) {
          if (res.data.status == 200)
          {
            wx.showToast({
            title:"手机验证码发送成功",
            })
          }
          else
          {
            wx.showToast({
              title:"手机验证码发送失败",
              })
          }
       } else {
        wx.showToast({
          title:"手机验证码发送失败",
          })
        }
      }
    })
  },


  UserRegister:function()
  {  
    this.UserRegReq(this.data.phone, this.data.name, this.data.company, this.data.code, 'this.data.openid');
  },

  UserRegReq: function (user_tel, user_name, user_company, user_code, use_openid) {
    var that = this;
    wx.request({
      url: app.config.apiUrl + '/Account/RegUserInfo', // 拼接接口地址(前面为公共部分)
      method: 'post',
      data: {
        tel: user_tel,
        name: user_name,
        company: user_company,
        code: user_code,
        openid: use_openid,
        
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res) {
          if (res.data.res == 0)
          {
            wx.showToast({
            title:"用户注册成功",
            })
            //跳转到首页
            wx.reLaunch({
              url: '/pages/index/index'
            })
          }
          else
          {
            console.log(res.data);
            wx.showToast({
              title:"用户注册失败",
              })
          }
       } else {
        wx.showToast({
          title:"用户注册失败",
          })
        }
      }
    })
  },

  /**相关协议 法律文件 */
  /**是否同意协议 */
  checkbox: function (e) {
    //console.log(e.detail.value);
    const values = e.detail.value
    if (values.length == 2)
    {
      this.setData({
        btn_disabled : false
      })
    }
    else{
      this.setData({
        btn_disabled : true
      })
    }
  },

  policy1: function () {
    wx.reLaunch({
      url: '/pages/policy/policy'
    })
  },
  policy2: function () {
    wx.reLaunch({
      url: '/pages/agreement/agreement'
    })
  },
})