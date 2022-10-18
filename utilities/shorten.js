function shorten() {
  let randomIndex = Math.random().toString(36).substring(2, 7)
  return randomIndex
}

module.exports = shorten