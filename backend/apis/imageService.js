import log from '../logger.js'
import { readFile } from 'node:fs'

async function imageService(req, res) {
  if (!req.body.imageName) {
    res.sendStatus(400)
    return log(`Bad request: ${JSON.stringify(req.body)}`, './errors.txt')
  }
  readFile('./database/images.json', 'utf8', (err, data) => {
    if (err) log(err, './errors.txt')
    const images = JSON.parse(data)
    const image = images.filter((obj) => obj.imageName === req.body.imageName)
    if (image.length > 0) {
      res.json(image[0])
      log(`Image name: ${req.body.imageName} found`)
    } else {
      res.sendStatus(404)
      log(`Image name: ${req.body.imageName} not found`, './errors.txt')
    }
  })
}
export default imageService
