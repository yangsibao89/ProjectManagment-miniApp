// index.js
// 获取应用实例
// const app = getApp()

Page({
  data: {
    hello: '欢迎来到项目管理小程序端',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },

  // onReady () {
  //   console.log(hello)
  // }
  changeText () {
    this.setData({
      hello: '草泥马'
    })
  },

  onShow () {
    console.log(this.data.hello) // this指向Page()实例
  }

})
