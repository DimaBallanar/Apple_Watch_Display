
function Watch() {
    const date = new Date();
    const hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
    const minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
    const seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    document.querySelector('.watch').innerHTML = hours + ':' + minutes + ':' + seconds;
    document.querySelector('.date').innerHTML = date.getFullYear();
}

document.querySelector(".block");
setInterval(Watch, 1000);