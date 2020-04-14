const https = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

const options = {
  key: fs.readFileSync('certs/server.key'),
  cert: fs.readFileSync('certs/server.crt')
};

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  https
    .createServer(options, (req, res) => {
      const parsedUrl = parse(req.url, true);

      handle(req, res, parsedUrl);
    })
    .listen(PORT, err => {
      if (err) throw err;
      console.log('> Ready on https://localhost:', PORT);
    });
});
