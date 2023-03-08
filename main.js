var screen = document.getElementById("screen");
function btnClick(value){
    screen.value += value;

}

function clearScreen(){
    screen.value = ""; 
}

function findresult(){
    var result = eval(screen.value);
    screen.value = result;
}

function del(){
    screen.value = screen.value.slice(0, -1);

}
