var students = [];

for (var i = 0; i < 2; i++){
    var saxeli = prompt("შეიყვანეთ სახელი: ");
    students.push(saxeli);
}

var search =  prompt('მოძებნე: ');
var result = students.filter(function(name){
    return name === search; 
})[0];

document.write(result);