function chooseColor(event, divName) {
    let x = event.offsetX;
    let y = event.offsetY;
    const colorDiv = document.getElementById(divName);
    if(divName === 'color')
        console.log("("+x+", "+y+")");
    const color_y = Math.floor(y*255/200)
    const color_string = 'rgb(255,'+color_y+',0)'
    colorDiv.innerHTML = color_string
    colorDiv.style.backgroundColor = color_string;
}
function interpolateColor(percent) {

}