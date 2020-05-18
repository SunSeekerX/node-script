# Valine - lean-cloud唤醒函数

> 同理：[优雅解决LeanCloud流控问题](https://cloud.tencent.com/developer/article/1628950)



## 配置

```javascript
const config = {
  // 是否打开Qmsg酱
  isOpenQmsg: true,
  // Qmsg酱的key
  qmsgKey: 'xxxxxx',
  // Valine应用
  valines: [
    // SunSeekerX - Doc
    {
      // 应用名
      name: 'xxxxxx',
      // 评论管理地址
      url: 'https://leanapp-sunseekerx.yoouu.cn/comments',
    },
    // SunSeekerX - Ghost
    {
      // 应用名
      name: 'xxxxxx',
      // 评论管理地址
      url: 'https://leanapp-ghost.yoouu.cn/comments',
    },
  ],
}
```



## 部署

1️⃣ 下载`${app}/lean-cloud/index.js`



2️⃣ 服务器安装`nodejs`和`pm2`



3️⃣ 文档放到某个地方

```bash
# 某个地方执行
pm2 start index.js --name leanCloud-wakeUp
```



## 示例

![image-20200518191628588](image-20200518191628588.png)