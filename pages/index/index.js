//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: false,

    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // Banner数据
    banner_list: [],

    sample_list: [],

    currentIndex: 0,
    currentIndex1: 0,
    currentIndex2: 0,
    posterList: [{
        id: 0,
        url: "http://47.101.147.253:2000/uploads/building.jpg"
      },
      {
        id: 1,
        url: "http://47.101.147.253:2000/uploads/office.jpg"
      },
      {
        id: 2,
        url: "http://47.101.147.253:2000/uploads/bedroom.jpg"
      },
      
    ],


    // 弹出式菜单特效  start
    isShow: false, //是否已经弹出
    animMain: {}, //旋转动画
    animAdd: {}, //item位移,透明度
    animDelLots: {}, //item位移,透明度
    // 弹出式菜单特效  end

    //Banner  start
    // 是否显示面板指示点
    indicatorDots: true,
    // 滑动方向是否为纵向
    vertical: false,
    // 自动切换
    autoplay: true,
    // 采用衔接滑动
    circular: true,
    // 自动切换时间间隔2s
    interval: 2000,
    // 滑动动画时长0.5s
    duration: 500,
    // 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
    previousMargin: 0,
    // 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
    nextMargin: 0,

    Hei: "", //这是swiper要动态设置的高度属性
    //Banner  end
    showSampleList: true,
    showMenu: false,
    showImgSearch:true,
  },

  //函数
  swiperChange(event) {
    let {
      current
    } = event.detail;
    this.setData({
      currentIndex: current
    })
  },

  imgH: function () {
    var winWid = wx.getSystemInfoSync().windowHeight / 4 + 'px'; //获取当前屏幕的宽度
    this.setData({
      Hei: winWid //设置高度
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow: function () {
    this.GetBannerList();
    this.GetSampleList();
    this.getRecommend();
  },
  //获取推荐花色
  getRecommend: function(){
    var that = this;
    wx.request({
      url: app.config.apiUrl + '/Sample/getRecommend', // 拼接接口地址(前面为公共部分)
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res) {
          that.setData({
            posterList: res.data,
          }, )
          console.log('next is recommend')
          console.log(res.data) // 打印查看是否请求到接口数据
          // 开始获取数据 eg: textBox(获取文字内容)
          textBox: res.data // 根据network查看请求到的接口的结构获取相对应的数据
        } else {
          console.log('没有数据')
        }
      }
    })
  },
  //获取banner列表
  GetBannerList: function () {
    var that = this;
    wx.request({
      url: app.config.apiUrl + '/Banner/GetBannerList', // 拼接接口地址(前面为公共部分)
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res) {
          that.setData({
            banner_list: res.data.banner,
          }, )
          console.log(res.data.banner) // 打印查看是否请求到接口数据
          // 开始获取数据 eg: textBox(获取文字内容)
          textBox: res.data.banner // 根据network查看请求到的接口的结构获取相对应的数据
        } else {
          console.log('没有数据')
        }
      }
    })
  },

  //获取热门花色列表
  GetHotSample: function () {},

  //获取样品系列名称列表
  GetSampleList: function () {
    var that = this;
    wx.request({
      url: app.config.apiUrl + '/Sample/GetSampleList', // 拼接接口地址(前面为公共部分)
      method: 'post',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res) {
          that.setData({
            sample_list: res.data.sample,
          }, )
          console.log(res.data.sample) // 打印查看是否请求到接口数据
          // 开始获取数据 eg: textBox(获取文字内容)
          textBox: res.data.sample // 根据network查看请求到的接口的结构获取相对应的数据
        } else {
          console.log('没有数据')
        }
      }
    })
  },
  tapsub: function(e){
    console.log(e.currentTarget.dataset.flag);
    this.GetSubSampleList(e.currentTarget.dataset.flag);
    this.setData({
      showSampleList: (!this.data.showSampleList)
    })
  },
  //获取样品系列名称列表
  GetSubSampleList: function (sample_id) {
    var that = this;
    wx.request({
      url: app.config.apiUrl + '/Sample/GetSubSampleList', // 拼接接口地址(前面为公共部分)
      method: 'post',
      data: {
        sample_id: sample_id,
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res) {
          that.setData({
            posterList: res.data.sample,
          }, )
          console.log(res.data.sample) // 打印查看是否请求到接口数据
          // 开始获取数据 eg: textBox(获取文字内容)
          textBox: res.data // 根据network查看请求到的接口的结构获取相对应的数据
        } else {
          console.log('没有数据')
        }
      }
    })
  },
  onLoad: function () {
    this.imgH()
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function(res) {

              /*wx.reLaunch({
                url: '/pages/register/register'
              })*/

              // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
              // 根据自己的需求有其他操作再补充
              // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
              wx.login({
                success: res => {
                // 获取到用户的 code 之后：res.code
                console.log("用户的code:" + res.code);
                // 可以传给后台，再经过解析获取用户的 openid
                // 或者可以直接使用微信的提供的接口直接获取 openid ，方法如下：
                wx.request({
                    // 自行补上自己的 APPID 和 SECRET
                    url: 'https://api.weixin.qq.com/sns/jscode2session?appid=自己的APPID&secret=自己的SECRET&js_code=' + res.code + '&grant_type=authorization_code',
                    success: res => {
                    // 获取到用户的 openid
                    console.log("用户的openid:" + res.data.openid);
                    //this.GetRegUserInfo(res.data.openid);
                    }
                    
                 });
                }
              });

              //用openid获取用户信息，获取不到则跳转注册页面，获取到则直接显示首页面
            }
          });
        } else {
          // 用户没有授权
          // 改变 isHide 的值，显示授权页面
          that.setData({
            isHide: true
          });
        }
      }
    })
  },

  GetRegUserInfo: function (use_openid) {
    var that = this;
    wx.request({
      url: app.config.apiUrl + '/Account/GetUserInfo', // 拼接接口地址(前面为公共部分)
      method: 'post',
      data: {
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
            title:"获取用户信息成功",
            })
            //跳转到首页
          }
          else
          {
            wx.showToast({
              title:"获取用户信息失败",
              })
            //跳转到注册页面
          }
       } else {
        wx.showToast({
          title:"获取用户信息失败",
          })
        }
      }
    })
  },

  bindGetUserInfo: function(e) {
    if (e.detail.userInfo) {
     //用户按了允许授权按钮
     var that = this;
     // 获取到用户的信息了，打印到控制台上看下
     console.log("用户的信息如下：");
     console.log(e.detail.userInfo);
     //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
     that.setData({
      isHide: false
     });
    } else {
     //用户按了拒绝按钮
     wx.showModal({
      title: '警告',
      content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
      showCancel: false,
      confirmText: '返回授权',
      success: function(res) {
       // 用户没有授权成功，不需要改变 isHide 的值
       if (res.confirm) {
        console.log('用户点击了“返回授权”');
       }
      }
     });
    }
   },

  //点击弹出或者收起
  showOrHide: function () {
    console.log("fjfjfj");
    var that = this;
    that.setData({
      showMenu: (!that.data.showMenu)
    })
    console.log(that.data.showMenu);

  },
  

  selectSample: function () {
    var that = this;
    that.setData({
      showSampleList: (!that.data.showSampleList)
    })
  },


  home: function () {
    wx.reLaunch({
      url: '/pages/home/home'
    })
  },
  scene: function () {
    wx.reLaunch({
      url: '/pages/scene/scene'
    })
  },

  shopcar: function () {
    wx.reLaunch({
      url: '/pages/shopcar/shopcar'
    })
  },

  toComplaint: function () {
    wx.showModal({
      title: 'toComplaint',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  tapdetail: function (e) {
    //console.log(e.currentTarget.dataset.flag);
    wx.navigateTo({
       url: '/pages/detail/detail?image=' + e.currentTarget.dataset.flag.url + '&id=' + e.currentTarget.dataset.flag.id,
   });
  },
  changeSwiper1: function (e) {
    this.setData({
      currentIndex1: e.detail.current
    })
  },
  tapCloce:function(){
    this.setData({
      showSampleList: (!this.data.showSampleList)
    })
  },
  searchFirst:function(){
    this.setData({
      showImgSearch: (!this.data.showImgSearch)
    })
  },
  searchSecond:function(){
    this.setData({
      showImgSearch: (!this.data.showImgSearch)
    })
  },
})
