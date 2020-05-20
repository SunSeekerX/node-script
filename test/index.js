/**
 * @name:
 * @author: SunSeekerX
 * @Date: 2020-05-18 22:05:46
 * @LastEditors: SunSeekerX
 * @LastEditTime: 2020-05-18 22:25:37
 */

const schedule = require('node-schedule')
const moment = require('moment')
const chalk = require('chalk')
const log = console.log

/**
 * @name 定时任务
 * @description Every 25 minutes, between 07:00 AM and 11:59 PM
 */
schedule.scheduleJob('0-59 * * * * *', () => {
  // 干活~
  log(
    chalk.green(
      `启动成功>>>：${moment(new Date()).format('YYYY-MM-DD HH:mm:ss')}`
    )
  )
})

// 启动提示
log(
  chalk.bgGreen.black(
    `启动成功>>>：${moment(new Date()).format('YYYY-MM-DD HH:mm:ss')}`
  )
)
