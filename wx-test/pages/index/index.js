//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    src: '',
    imgs: []
  },
  onLoad: function () {
  },
  onShow: function () {
    var _self = this;
    // if (app.src) {
    //   this.setData({
    //     src: app.src
    //   })
    // }
    if (wx.getStorageSync('src')) {
      _self.setData({
        src: wx.getStorageSync('src')
      })
    }
    if (wx.getStorageSync('imgs')) {
      _self.setData({
        imgs: wx.getStorageSync('imgs')
      })
    }
  },
  chooseImg: function () {
    wx.navigateTo({
      url: '../img/img'
    })
  },
  preview: function (e) {
    var _self = this
    console.log(_self.data.imgs)
    console.log(_self.data.imgs[0])
    wx.previewImage({
      urls: _self.data.imgs,
      current: _self.data.imgs[e.currentTarget.dataset.index],
      success: res => {
        console.log(res)
      },
      error: err => {
        console.log(err)
      }
    })
  },
  remove: function (e) {
    this.data.imgs.splice(e.currentTarget.dataset.index,1)
    this.setData({
      imgs: this.data.imgs
    })
    wx.setStorageSync('imgs', this.data.imgs)
  }
})
