//server객체는 net.createServer() 호출 시 내부적으로 생성된다.
//소켓 서버는 연결을 위한 수신 처리 후 서버 연결을 통한 데이터 송신/수신을 한다.
var net = require('net');
var server = net.createServer(function(client){
    console.log('Client connected');
    client.on('data', function(data){
        console.log('Client sent ' + data.toString());
    });
    client.on('end',function(){
        console.log('Client disconnected');
    }
    );
    client.write('Hello');
});
server.listen(8107, function(){
    console.log('Server listening for connections');
});