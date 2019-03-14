const express = require('express');
const path = require('path');
const app = express();

app.use(function (req, res, next){
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.get('/', function (req, res) {
    console.log('app.get working..');
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(process.env.PORT || 9090, () => {
  console.log('App listening on 9090!');
});
