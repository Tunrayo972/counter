var count = 0;

function Add(){
    if (count < 100){ 
    count++;
    document.getElementById("show").innerHTML= count;
    }
}
function minus(){
    if (count > 0){ 
    count--;
    document.getElementById("show").innerHTML= count;
    }
}
function Begin(){
    count = 0
    document.getElementById("show").innerHTML = count;
}
document.getElementById("add").addEventListener("click",Add)
document.getElementById("subtract").addEventListener("click",minus)

document.getElementById("restart").addEventListener("click",Begin)
