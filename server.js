const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/mate', (req, res) => {
    return app.render(req, res, '/mate', req.query)
  })

  server.get('/googled87b98058c02dda0.html', (req, res) => {
    return res.send('google-site-verification: googled87b98058c02dda0.html')
  })

  server.get('/robots.txt', (req, res) => {
    return res.sendFile('robots.txt', {
      root: __dirname
    })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})