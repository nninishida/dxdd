function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
    
function aleatorio(){
    var num = rand(1,8);
    const img = document.getElementById("divaleatorio");
    if(num == 1 ){
        img.innerHTML="<img src=\"img/pacificasombra.png\">";
    }else if(num == 2){
        img.innerHTML="<img src=\"img/sombramabel.png\">";
    }else if(num == 3){
        img.innerHTML="<img src=\"img/billtransp.png\">";
    }else if(num == 4){
        img.innerHTML="<img src=\"img/sombradipper.png\">";
    }else if(num == 5){
        img.innerHTML="<img src=\"img/robbiesombra.png\">";
    }else if(num == 6){
        img.innerHTML="<img src=\"img/wendysombra.png\">";
    }else if(num == 7){
        img.innerHTML="<img src=\"img/stanleysombra.png\">";
    }else if(num ==8){
        img.innerHTML="<img src=\"img/sombrawaddles.png\">";
    }

}
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drag1(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drag2(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drag3(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function drag4(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drag5(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drag6(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drag7(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
} 

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
