const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
const penColor = document.querySelector('input[name="penColor"]')
const penWidth = document.querySelector('input[name="penWidth"]')
const saver = document.querySelector('#saver')

ctx.strokeStyle = '#000000'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = '5'

let pen = {
    x: 0,
    y: 0,
    down: false
}