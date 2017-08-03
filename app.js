
// Require Modules ======================== //////
const express = require('express');
const loremIpsum = require('lorem-ipsum')
  , output     = loremIpsum({
       count: 3  ,
       units: 'paragraphs',
       format: 'html'
  });



const app = express();


app.get('/lorem', function(req,res){
   
    res.send(output);
})


// Start Server ======================== //////
app.listen(3000, function(){
    console.log('Server listening on port 3000');
});