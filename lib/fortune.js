var fortuneCookies = [
	"Conquer your fears or they will conquer you.",
	"Rivers need springs.",
	"Do not fear what you don't know.",
	"You will have a pleasant surprise.",
	"Whenever possible, keep it simple.",
];

exports.getFortune = function(){
  var idx = Math.floor(Math.random() * fortuneCookies.length);
  return fortuneCookies[idx];
};
/*무언가를 모듈 밖에서 사용할 수 있게 하려면 exports에 추가해야 한다.
* 이 예제에서는 getFortune 함수를 이 모듈 바깥에서도 쓸 수 있지만,
fortuneCookies 배열은 완벽히 감춰진다.*/
