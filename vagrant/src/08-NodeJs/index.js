const { RSA_NO_PADDING } = require('constants')
const express = require('express')
const app = express()
const port = 3000

let temperature=null

const fs = require('fs')
fs.readFile('./temp1.sensor','utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
  temperature=Number(data)
});
fs.watchFile('./temp1.sensor', (eventype, filename) => {
  if(filename){
  console.log(' file Changed')
 temperature=Number(fs.readFileSync('./temp1.sensor','utf8'))

  }
  
});
app.get('/', (req, res) => {
  res.send({temp: temperature})
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

