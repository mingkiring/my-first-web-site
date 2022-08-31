//Body 객체 만드는 것
var Body = {
  //객체에 setColor 추가
  setColor: function(color){
    document.querySelector('body').style.color = color;
  } ,
  //프로퍼티와 프로터피 사이에 콤마 넣어줘야함, 객체에 setBackgroundColor 추가
  setBackgroundColor: function(color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
//Links 객체 만들기
var Links = {
  setColor: function(color){
    var alist= document.querySelectorAll('a');
    var i =0 ;
    while(i<alist.length){
      alist[i].style.color=color;
      i = i+1;
    }
  }
}
function nightDayHandler(self){
  var target=document.querySelector('body');
  if(self.value==='night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value='day';

    Links.setColor('powderblue');
  }else{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value='night';

    Links.setColor('red');
  }
}
