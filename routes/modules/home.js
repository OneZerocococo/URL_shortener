const express = require('express')
const router = express.Router()
const URL = require('../../models/URL')
const generateShortenedURL = require('../../utilities/shorten')


router.get('/', (req, res) => {
  res.render('index')
})


router.post('/', (req, res) => {
  const newURL = req.body.originalURL
  let shortenedURL = ""
  let emptyURL = !newURL
  // 沒輸入網址會有提示
  if (emptyURL) {
    return res.render('index', { emptyURL })
  }
  // 判斷originalURL是否已經存在於資料庫
  return URL.findOne({ originalURL: newURL })
    .lean()
    .then(url => {
      if (!url) {
        shortenedURL = generateShortenedURL()
        URL.create({ originalURL: newURL, shortenedURL: shortenedURL })
      }
      // 尚未存在於資料庫就於資料庫創建一個網址和縮網址
      return res.render('index', { newURL, shortenedURL: shortenedURL ? shortenedURL : url.shortenedURL })
    })
    .catch(error => console.log(error))
})

// 將短網址導回原網址
router.get('/:shortURL', (req, res) => {
  const shortURL = req.params.shortURL
  URL.findOne({ shortenedURL: shortURL })
    .lean()
    .then(url => res.redirect(url.originalURL))
    .catch(error => res.render('error'))
})


module.exports = router