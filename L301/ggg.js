var sheyvana= prompt("შეიყვანე რიცხვი");
var isCorrect = sheyvana.indexOf ("რეკლამა") == -1 && sheyvana.indexOf ("მარკეტინგი") == -1 && sheyvana.indexOf ("ვირუსი") == -1;

if(isCorrect){
    alert ("sworia");


}
else {
    alert("araswori");
}