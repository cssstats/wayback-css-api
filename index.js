const { send } = require('micro')
const isBlank = require('is-blank')
const waybackCss = require('wayback-css')
const getParam = require('get-query-param')

module.exports = async (req, res) => {
  const url = getParam('url', req.url)
  const timestamp = getParam('timestamp', req.url)

  if (isBlank(url) || isBlank(timestamp)) {
    send(res, 406, { status: 406, message: 'You must provide a url and timestamp' })
  }

  try {
    const css = await waybackCss(url, timestamp)

    send(res, 200, css)
  } catch (error) { send(res, 406, { status: 406, error }) }
}
