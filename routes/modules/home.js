const express = require('express')
const router = express.Router()
const URL = require('../../models/URL')
const generateShortenedURL = require('../../utilities/shorten')


router.get('/', (req, res) => {
  res.render('index')
})


router.post('/', (req, res) => {
  const newURL = req.body.originalURL
  let emptyURL = !newURL
  // 沒輸入網址會有提示
  if (emptyURL) {
    return res.render('index', { emptyURL })
  }

  URL.find()
    .then(urls => {
      // 判斷newURL是否已經存在於資料庫
      const existURL = urls.find(url => url.originalURL === newURL)
      if (existURL) {
        return existURL
      }
      let shortenURL = generateShortenedURL()
      // 若產生的短網址已存在於資料庫就重新產生，避免重複
      while (urls.some(url => url.shortenedURL === shortenURL)) {
        shortenURL = generateShortenedURL()
      }
      return URL.create({ originalURL: newURL, shortenedURL: shortenURL })
    })
    .then(url => {
      return res.render('index', { newURL: url.originalURL, shortenURL: url.shortenedURL })
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