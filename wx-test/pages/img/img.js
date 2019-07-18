// pages/img/img.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.chooseImage({
      count: 3,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        // http://192.168.0.230:9990/oa-school-recruit/recruit/web/uploadimg
        // https://zzzs.jyjyapp.com/recruit/web/uploadimg
        wx.showLoading({
          title: '上传中',
        })
        wx.uploadFile({
          url: "http://192.168.0.230:9990/oa-school-recruit/recruit/web/uploadimg",
          method: "post",
          filePath: res.tempFilePaths[0],
          name: 'file',
          formData: {},
          header: {
            'content-type': 'multipart/form-data'
          },
          success: res => {
            var imgs = [];
            wx.hideLoading()
            if (wx.getStorageSync('imgs')) {
              imgs = wx.getStorageSync('imgs');
            }
            if (imgs.length >= 3) {
              wx.navigateBack({
                delta: 1
              })
              return
            }
            imgs.push(JSON.parse(res.data).data)
            wx.setStorageSync('imgs', imgs)
            // wx.setStorageSync('src', JSON.parse(res.data).data)
            wx.navigateBack({
              delta: 1
            })
            // var data = JSON.parse(res.data);
            // this.setData({
            //   src: data.data
            // })
          }
        })
      },
    })
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

  }
})