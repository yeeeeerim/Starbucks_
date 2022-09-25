const searchEl=document.querySelector('.search');
const searchInputEl=searchEl.querySelector('input');

searchEl.addEventListener('click',function (){
    searchInputEl.focus();
});  

searchInputEl.addEventListener('focus',function(){
     searchEl.classList.add('focused'); //searchInputEl이 포커스가 되면 searchEl리스트의 하위요소에 class focused를 추가한다.
     searchInputEl.setAttribute('placeholder','통합검색');//속성의 이름과 이름의 값을 나타냄, placeholder->힌트속성
});

searchInputEl.addEventListener('blur',function(){ //blur:포커스가 해제되었을때
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});