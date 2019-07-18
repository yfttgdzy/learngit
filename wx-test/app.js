//app.js
App({
  onLaunch: function () {
    var _self = this;
    const userid = "569190"
    const schoolguid = "3a6eb0e6233411e7a8ec00155d00d20a"
    wx.request({
      url: _self.baseUrl + "/appcommon/getapptoken.htm",
      method: "post",
      header: {
        'content-type': 'application/x-www-form-urlencoded' 
      },
      data: {
        'jyjyuserid': userid,
        'schoolguid': schoolguid
      },
      success: res => {
        console.log(res);
      },
      fail: err => {

      }
    })
  },
  globalData: {
    userInfo: null,
    list: [],
    src: '',
    baseUrl: "http://192.168.0.217:3088/oa-room-booking"
  },
  baseUrl: "http://192.168.0.217:3088/oa-room-booking"
})