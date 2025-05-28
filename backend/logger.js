import { appendFile } from 'node:fs'

function log(message, file = null) {
  const msNow = new Date()
  const timestamp = `${msNow.getFullYear()}-${
    msNow.getMonth() < 9 ? `0${msNow.getMonth() + 1}` : msNow.getMonth() + 1
  }-${msNow.getDate()} ${msNow.getHours()}:${msNow.getMinutes()}:${msNow.getSeconds()}`
  if (file) {
    appendFile(file, `\r\n${timestamp} : ${message}`, (err) => {
      if (err) console.err(`Logging unsuccessful: ${err}`)
    })
  } else {
    console.log(`${timestamp} : ${message}`)
  }
}
export default log
