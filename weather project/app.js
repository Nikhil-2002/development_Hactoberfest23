const express=require ("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}))

const https = require('node:https');


app.get("/", function(req,res){
   res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req, res){
  console.log();


  const city=req.body.cityName;
  const key="3b8362072ca4d9abaa585c7580812946";
  const metric="metric";
  
  
  const url1="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+key+"&units="+metric;
  https.get(url1, function(response){
    console.log(response.statusCode);
    response.on("data",function(data){
  
  
      const data1=JSON.parse(data);
      const data2=data1.main.temp;
      const data3=data1.weather[0].description;
      const data4=data1.weather[0].icon;
      const imgurl=" https://openweathermap.org/img/wn/"+data4 +"@2x.png";
  
      console.log(data2);
            res.write("<h1>The temp in "+ city+" "+data2+"Degrees</h1>");
            res.write("<h1>In "+ city+" it feels like "+data3+"</h1>");
            res.write("<img src="+imgurl+"></img>")
             res.send();
  
    })
  
  });

  
});


app.listen(3000, function(){
    console.log("Help I have no life");
});