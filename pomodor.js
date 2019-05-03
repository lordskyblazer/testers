//Realiza las cuentas regresivas y despliega los tiempos dinámicamente.
//Además, en caso de presentar valores incorrectos, los setea a valores coherentes.
function outTimer(e) {
    if (wcount === 0 && rcount === 0) {
        wcount = 5;
        rcount = 5;
    }
    console.log(e);
    if (wcount >= 1){
        workTimeSetter();
        console.log(wcount);
        var idinterval = setInterval(function () {
            document.getElementById('boton').disabled = true;
            document.getElementById('logger').style.backgroundColor = "blue";
            document.title = wcount + ' WorkTime Rem';
            wcount--;
            if (wcount === 0) {
                clearInterval(idinterval);
                document.getElementById('boton').disabled = false;
            }
            var remaining = 'Tiempo restante de trabajo: '+ Math.floor(wcount / 60) +" : "+ wcount % 60;
            document.getElementById('logger').innerHTML = remaining;
            console.log(Math.floor(wcount / 60) +" : "+ wcount % 60 + ' segundos.');
        }, 1000);
    } 
    else if (rcount >= 1) {
        restTimeSetter();
        console.log(rcount);
        if (rcount >= 1){
            var idinterval = setInterval(function () {
                document.getElementById('boton').disabled = true;
                document.getElementById('logger').style.backgroundColor = "green";
                document.title = rcount + ' RestTime Rem';
                rcount--;
                if (rcount === 0) {
                    clearInterval(idinterval);
                    document.getElementById('boton').disabled = false;
                }
                var remaining = 'Tiempo restante de descanso: '+ Math.floor(rcount / 60) +" : "+ rcount % 60;
                document.getElementById('logger').innerHTML = remaining;
                console.log(Math.floor(rcount / 60) +" : "+ rcount % 60 + ' segundos.');
            }, 1000);
        } 
    }
    document.title = 'Pomodor V1.0';
}

//Establece el tiempo de trabajo
function workTimeSetter (){
    var timer = document.getElementById('worktimer');
    wcount = timer.value;
    wcount = ((Math.floor(wcount[0]) * 10 + Math.floor(wcount[1])*60)) + 
            (Math.floor(wcount[3])*10 + Math.floor(wcount[4]));
    console.log(wcount);
    document.getElementById('boton').disabled = false;
}

//Establece el tiempo de descanso
function restTimeSetter (){
    var timer = document.getElementById('resttimer');
    rcount = timer.value;
    rcount = ((Math.floor(rcount[0]) * 10 + Math.floor(rcount[1])*60)) + 
            (Math.floor(rcount[3])*10 + Math.floor(rcount[4]));
    console.log(rcount);
    document.getElementById('boton').disabled = false;
}

//Inicialización y establecimiento de event-listener
var wcount = 5;
var rcount = 5;
document.title = 'Pomodor V1.0';
document.getElementById('boton').addEventListener("click", outTimer);
document.getElementById('resttimer').addEventListener("input", restTimeSetter);
document.getElementById('worktimer').addEventListener("input", workTimeSetter);
