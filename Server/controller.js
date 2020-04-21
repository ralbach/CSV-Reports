const convert = require('./convert.js');

module.exports = {
  submit: (req, res) => {
    let csv = convert.jsonToCsv(req.body.data);
    res.writeHead(200)
    res.end(JSON.stringify({data: csv}));
  }
}