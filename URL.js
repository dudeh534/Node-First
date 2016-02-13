//아래는 URL 문자열을 파싱해 객체로 만든 후 다시 문자열로 변환하는 예이다.
var url = require('url');
var urlStr = 'http://user:pass@host.com:80/resource/path?query=string#hash';
var urlObj = url.parse(urlStr, true, false);
/*url.parse에서 2번째 인자는 URL의 질의 문자열이 문자열 객체로 파싱된 경우
* Boolean값 true를 갖는다.
* 3번째 인자는 URL경로 값이 각각의 객체로 저장되는 경우 true를 갖는다.*/
urlString = url.format(urlObj)
//url.format을 통해 URL 오브젝트를 문자열 객체로 변환 가능하다.

