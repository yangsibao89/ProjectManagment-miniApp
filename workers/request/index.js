const utils = require('./utils')

// 在 Worker 线程执行上下文会全局暴露一个 worker 对象，直接调用 worker.onMessage/postMessage 即可
worker.onMessage((result) => {
  const sum = utils.add(result.a, result.b)
  //   console.log(result.a)
  // result =
  console.log('sum', sum)
  //   console.log(result)

  console.log(result.msg)
})

worker.postMessage({
  categeories: 'High Heel',
  country: 'Japan'
})

worker.postMessage({
  url: 'www.baidu.com'
})
