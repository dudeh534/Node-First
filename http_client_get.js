var http = require('http');

var options = {
    hostname:'localhost',
    port: '8080'
};

function handleResponse(response){//서버의 응답을 받았을 때 발생하는 response 이벤트
    var serverData = '';
    response.on('data', function (chunk){//'data' 이벤트 이름, 타입 , on 메소드는 이벤트를 연결하는 메소드
        serverData += chunk;
    });
    response.on('end', function(){
        console.log("Response Status:", response.statusCode);
        console.log("Response Headers:", response.headers);
        console.log(serverData);
    });
}
/*ClientRequest 객체는 HTTP 클라이언트 구성을 위해 http.request() 호출 시 내부적으로 생성된다.
 * 이 객체는 서버 연결 요청 과정에서 요청 정보를 표현하는데 사용된다.\
 * option - HTTP 요청을 열고 서버에 전송하는 방법에 대한 속성
 * callback 서버 요청이 보내진 후, 서버로 부터 받은 응답을 처리*/
http.request(options, function(response){//1
    handleResponse(response);
}).end();

