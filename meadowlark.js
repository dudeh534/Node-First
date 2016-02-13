var express = require('express');
var fortune = require('./lib/fortune.js');

var app = express();
/*라우팅이란 요청받은 콘텐츠를 클라이언트에 보내는 메커니즘이다
  웹 기반 클라이언트/서버 애플리케이션에서는 클라이언트가 원하는 콘텐츠를
  URL에 표시, 즉 경로와 쿼리스트링에 표시한다.*/

// 핸들바 뷰 엔진 설정 - 템플렛 프레임워크
/*이렇게 하면 뷰 엔진이 만들어지고, 익스프레스는 기본적으로 이 엔진을 사용한다.
  */
var handlebars =
  require('express-handlebars').create({defaultLayout:'main'});
  /*핸들바 인스턴스를 만들면서 defaultLayout:'main'으로 기본 레이아웃을 지정했다.
  따로 명시하지 않는다면 모든 뷰에서 이 레이아웃을 쓰겠다는 말이다.*/
app.engine('handlebars', handlebars.engine);
app.set('view engine','handlebars');

app.set('port', process.env.PORT || 3000);

/* app.get 메서드는 라우트를 추가하는 메서드이다.
   매개변수로 경로와 함수를 받는다
   이때 경로 매개변수는 라우트를 정의하며 함수 매개변수는 라우트가 일치할 때 호출되는 함수이다.

*/
app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next){
  res.local.showTests = app.get('env') !== 'production' &&
    req.query.test === '1';
    next();
});

app.get('/', function(req, res){
  res.render('home');
})

app.get('/about', function(req, res){
  res.render('about', {
    fortune: fortune.getFortune(),
    pageTestScript: '/qa/tests-about.js'}
  );
});


/*app.use는 익스프레스에서 미들웨어를 추가할 때 사용되는 메서드로
  라우트와 일치하지 않는 모든 것들을 처리하는 폴백(catch-all) 핸들러라고 생각하면 된다.
*/

/*static 미들웨어는 클라이언트에 전송할 각 정적 파일마다 라우트를 만들고
  그 파일을 반환하는 것과 같은 효과가 있다.*/


//static 미들웨어
app.use(express.static(__dirname + '/public'));

//커스텀 404페이지 (미들웨어)
app.use(function (req, res){
  res.status(404);
  res.render('404');
});

//커스텀 500 페이지 (미들웨어)
app.use(function(err, req, res, next){
  console.error(err, stack);
  res.status(500);
  res.render('500');
})

app.listen(app.get('port'),function(){
  console.log('Express started on http://localhost:' + app.get('port')
  + '; press Ctrl-C to terminate');
});
