var addbtn = document.getElementById('addbtn');

addbtn.onclick = function (){
    var addedstring = prompt("Write your new string here.")
    if(addedstring){
        var ol = document.getElementById('myList');
        var li = document.createElement('li');
        li.innerHTML = addedstring;
        ol.appendChild(li);
        }
}

delbtn.onclick = function(){
    var ol = document.getElementById('myList');
    var lastLi = ol.lastChild;
    while (lastLi && lastLi.nodeType != 1){
        lastLi = lastLi.previousSibling;
        console.log(lastLi)
     }
     if (lastLi){
         lastLi.parentNode.removeChild(lastLi);//удаляем пункт списка, 
         //если конечно в списке еще что-то осталось
       }
}/// Checking for changes