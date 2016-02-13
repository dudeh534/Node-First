/*post서버는 폼 형태로 서버에 갱신될 내용을 전송하는데 편리하다
* post 요청을 처리하려면 post 본문 내용을 읽고 내용을 처리하는 요청 핸들러 코드를 구현해야한다
* post 방식(부치기, 제출용)
 * 데이터가 본문(body)에 포함되어 전달됨
 * url에 데이터가 노출되지 않음
 * 캐시되지 않음*/
var http = require('http');
http.createServer(function (req, res){


    var jsonData = "";
    req.on('data', function (chunk){
        jsonData += chunk;
    });

    req.on('end', function(){
        var reqObj = JSON.parse(jsonData);
        var resObj = {
            message : "HELLO " + reqObj.name,
            question: "ARE YOU A GOOD " + reqObj.occupation + "?"
        };
        res.writeHead(200);
        res.end(JSON.stringify(resObj));
    });
}).listen(8080);


