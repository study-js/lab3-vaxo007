var price = prompt('ფასი: ');

var isUSD = price.includes("$");
var isGEL = price.includes("L");


if(isUSD){
    document.write(parseInt(price.substr(1)) * 2.6);
}else if(isGEL){
    document.write(parseInt(price.substr(1)) / 2.6);
}