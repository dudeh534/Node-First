/*동적으로 GET 요청을 처리하려면 클라이언트의 요청에 대한 동적 데이터 구성에 필요한 요청
핸들러를 구현하고 응답 데이터를 작성한다.
* GET - (가져오기, 조회용) 어떤 정보를 가져올 때 URL에 변수를 포함시켜 요청
* 데이터가 헤더에 포함되어 전달된다.
* URL에 데이터가 노출되고 길이 제한이 있다.
* 캐시될 수 있다.
* 서버에서 어떤 데이터를 가져와서 보여주는 정도(게시판)
* EX) URL?변수명1=값1&변수명2=값2&변수명3=값3&… , /hello/test.php?name1=value1&name2=value2
 */
var http = require('http');
var messages = [
    'Hello World',
    'From a basic Node.js Server',
    'Take Luck'];

/*HTTP Server는 지정된 포트에서 수신하고 요청을 받은 후 연결된 클라이언트에 응답을 보낸다
 * Server 객체는 EventEmitter를 구현해 이벤트를 방출한다.
 * request - 서버가 클라이언트 요청 수신 시 매번 발생하며 클라이언트의 요청을 표현하는
 * IncomingMessage객체와 전송할 응답에 관한 ServerResponse객체를 담은 콜백을 가진다
 * connection - 새로운 TCP 연결 수립 시 발생
 * close - 서버 종료 시 발생 */

/*http.createServer([requestListener]) 함수를 사용해 server객체를 생성하고 반환하게 된다.
 * requestListener 는 IncomingMessager 객체와 응답을 구성하고 전송하는 ServerResponse 객체를 가진다.
 * ServerResponse 객체는 request 이벤트 수신시 ServerResponse객체를 내부적으로 생성하고 이 객체를 이용해서
 * 클라이언트 요청에 대한 응답을 정형화해 보낸다.*/

http.createServer(function (req, res){
    res.setHeader("Content-Type", "text/html");//req에 대한 res 전송
    res.writeHead(200);//statusCode의 이유
    res.write('<html><head><title>Simple HTTP Server</title></head>');
    res.write('<body>');
    for(var idx in messages){
        res.write('\n<h1>' + messages[idx] + '</h1>');//messages 객체를 for문을 통해 반복
    }
    res.end('\n</body></html>');//응답 마무리
}).listen(8080);//서버 객체를 생성한 후 listen() 함수를 호출해 요청을 수신한다.