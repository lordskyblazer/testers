function outTimer(e) {
    console.log(e);
    console.log(i);
    var idinterval = setInterval(function () {
        x = 'Quedan '+ Math.floor(i / 60) +":"+ i % 60 + ' segundos.';
        console.log(x);
        document.getElementById('logger').innerHTML = x;
        console.log(Math.floor(i / 60) +":"+ i % 60 + ' segundos.');
        i--;
        if (i === 0) {
            clearInterval(idinterval);
        }
    }, 1000);
}
function timeSetter (){
    var timer = document.getElementById('timer');
    i = timer.value;
    i = ((Math.floor(i[0]) * 10 + Math.floor(i[1])*60)) + 
            (Math.floor(i[3])*10 + Math.floor(i[4]));
    console.log(i);
}
var i;
document.getElementById('boton').addEventListener("click", outTimer)
document.getElementById('timer').addEventListener("input", timeSetter)
