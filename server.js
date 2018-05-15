var express = require("express");
var fs = require("fs");
var app = express();


app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});

app.get("/api/users", function(req, res){
    let content = fs.readFileSync("clients.json", "utf8");
    console.log(content)
    if(content==''){
        res.send({msg:'empty file'});
        return
    }
    let users = JSON.parse(content);
    res.send(users);
});
