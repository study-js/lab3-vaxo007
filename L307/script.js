
var list1  = [];
var list2  = [];

for(var i = 0; i < 2 ; i++){
   var saxeli = prompt('სახელი: ');
   list1.push(saxeli);
}

for(var i = 0; i < 2 ; i++){
    var saxeli = prompt('სახელი: ');
    list2.push(saxeli);
 }
 

 for(var i = 0; i < list2.length; ++i){
     var  current = list2[i];

    if(list1.indexOf(current) == -1){
      list1.push(current);
    }
 }

document.write(list1);