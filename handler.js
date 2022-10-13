var querystring = require('querystring');

module.exports = {
    home: function(response){
        console.log("Executing Home function");
        var htmlcode = 
          '<html>'+
          '<body>'+
          '<form action = "/review" method = "post">'+
          '<textarea name="text" rows="20" cols="60"></textarea>'+
          '<input type="submit" value="Submit Text">'+
          '</form></body></html>';

          response.writeHead(200,{"Content-Type":"text/html"});
          response.write(htmlcode);
          response.end();

    },
    review: function(response,reviewData){
        console.log("Executing Review function");
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("Your data is \n"+ querystring.parse(reviewData).text);
        response.end();
    }
};