var sheyvana= prompt("შეიყვანე რიცხვი");

if(sheyvana.length <= 15){
    alert(sheyvana);
}
else{
    var s = sheyvana.substr(0, 15) + '...';
    alert(s)
}