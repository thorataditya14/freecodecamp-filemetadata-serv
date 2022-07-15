var express = require('express');
var cors = require('cors');
require('dotenv').config()
var multer = require('multer');
var upload = multer({dest: '/uploads'});

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post("/api/fileanalyse", upload.single('upfile'), (req, res) => {
  console.log(req.file);
  res.json({
    name: req.file.fieldname,
    type: req.file.mimetype,
    size: req.file.size
  });
});
             
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('Your app is listening on port ' + PORT)
});
