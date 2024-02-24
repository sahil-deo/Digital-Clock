


function setDate(){

    const now = new Date();
    const hour = now.getHours().toString().padStart(2,0);
    const min = now.getMinutes().toString().padStart(2,0);
    const sec = now.getSeconds().toString().padStart(2,0);
    
    const time = `${hour}:${min}:${sec}`
    document.getElementById("clock").innerHTML = time;

}

setDate();
setInterval(setDate, 1000);
