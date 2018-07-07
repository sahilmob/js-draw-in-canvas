const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const penColor = document.querySelector('input[name="penColor"]');
const penWidth = document.querySelector('input[name="penWidth"]');
const saver = document.querySelector('#saver');
const rangeText = document.querySelector('#range_text')

ctx.strokeStyle = '#000000';
ctx.lineJoin = 'round'
ctx.lineCap = 'round';
ctx.lineWidth = '5';
rangeText.value = penWidth.value

let pen = {
    x: 0,
    y: 0,
    down: false
};

saver.addEventListener('click', saveFile);
canvas.addEventListener('mousedown', penDown);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', penUp);
canvas.addEventListener('mouseout', penUp);
penWidth.addEventListener('change', penWidthChanged)
rangeText.addEventListener('change', rangeTextChanged)

function saveFile() {
    let a = document.createElement('a');
    a.setAttribute('download', 'image.png');
    a.setAttribute('href', canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream'));
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click()
    document.body.removeChild(a)
}

function penDown(e) {
    pen.down = true;
    [pen.x, pen.y] = [e.offsetX, e.offsetY];
}

function draw(e) {
    if (!pen.down) return;
    ctx.lineWidth = penWidth.value;
    ctx.strokeStyle = penColor.value;
    ctx.beginPath();
    ctx.moveTo(pen.x, pen.y);
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke();
    [pen.x, pen.y] = [e.offsetX, e.offsetY];
}

function penUp() {
    pen.down = false;
}

function penWidthChanged(e) {
    rangeText.value = e.target.value
}

function rangeTextChanged(e) {
    penWidth.value = e.target.value
}