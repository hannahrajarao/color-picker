function showLocation(event) {
    let x = event.offsetX;
    let y = event.offsetY;
    const colorDiv = document.getElementById('color');
    colorDiv.innerHTML = "("+x+","+y+")";
    colorDiv.style.backgroundColor = 'rgb(255,'+y*255/200+',0)';
}
function interpolateColor(percent) {
    
}