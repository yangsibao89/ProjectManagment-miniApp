// components/cancel/cancel.js

//  注意!!自定义components的路径是从根目录下的绝对路径
Component({
  /**
   * Component properties
   */
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value'
    }

  },

  /**
   * Component initial data
   */
  data: {
    // 这里是一些组件内部数据
    someData: {
      actorName: '深田永美'
    }
  },

  /**
   * Component methods
   */
  methods: {
    // 这里是一个自定义方法
    customMethod () {
      this.actorName = 'JULIA'
    }
  }
})
