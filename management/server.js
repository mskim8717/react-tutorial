const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/hello', function(req,res) {
    res.send({message:'hello express!!'});
});

app.get('/api/customers', (req, res) => {
    res.send([
        {
        'id': 1,
        'image': 'https://placeimg.com/64/64/any',
        'name': '홍길동',
        'birthday':'2020-20-20',
        'gender':'남자',
        'job':'직장인'
      },
      {
        'id': 2,
        'image': 'https://placeimg.com/64/64/1',
        'name': '김민수',
        'birthday':'2020-11-20',
        'gender':'남자',
        'job':'직장인'
      },
      {
        'id': 3,
        'image': 'https://placeimg.com/64/64/2',
        'name': '김민영',
        'birthday':'2020-11-20',
        'gender':'여자',
        'job':'자영업'
      }
    ]);
});

app.listen(port, function() {
    console.log('server is running!');
})