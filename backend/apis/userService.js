import log from '../logger.js'
import { readFile } from 'node:fs'

async function userService(req, res) {
  if (!req.body.userId) {
    res.sendStatus(400)
    log(`Bad request: ${JSON.stringify(req.body)}`, './errors.txt')
    return
  }
  readFile('./database/users.json', 'utf8', (err, data) => {
    if (err) log(err, './errors.txt')
    const users = JSON.parse(data)
    const user = users.filter((obj) => obj.id === req.body.userId)
    if (user.length > 0) {
      res.json(user[0])
      log(`user ID: ${req.body.userId} found`)
    } else {
      res.sendStatus(404)
      log(`user ID: ${req.body.userId} not found`, './errors.txt')
    }
  })
}
export default userService
