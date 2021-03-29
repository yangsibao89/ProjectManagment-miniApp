// app.js

// 声明一个worker
const worker = wx.createWorker('workers/request/index.js')

App({
  onLaunch () {
    // 展示本地存储能力
    wx.setStorageSync('logs', [])

    const logs = wx.getStorageSync('logs') || []
    // console.log(logs.length)
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: (res) => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })

    // 调用worker
    worker.postMessage({
      msg: 'test worker',
      a: 11,
      b: 22
    })

    worker.onMessage((result) => {
      console.log('类型和国家', result)
    })
  },
  globalData: {
    userInfo: null
  }
})
