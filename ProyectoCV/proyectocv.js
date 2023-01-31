//configuramos "button" para imprimir la pág. web.
document.getElementById("print").addEventListener('click', function print() {
    window.print();
});

document.getElementById('down1').addEventListener('click', function bajar() {
    document.getElementById('aparecer1').style.display = 'block';
    document.getElementById('down1').style.display = 'none';
    document.getElementById('up1').style.display = 'block';
});

document.getElementById('up1').addEventListener('click', function subir() {
    document.getElementById('aparecer1').style.display = 'none';
    document.getElementById('up1').style.display = 'none';
    document.getElementById('down1').style.display = 'block';
});

document.getElementById('down2').addEventListener('click', function () {
    document.getElementById('aparecer2').style.display = 'block';
    document.getElementById('down2').style.display = 'none';
    document.getElementById('up2').style.display = 'block';
});

document.getElementById('up2').addEventListener('click', function () {
    document.getElementById('aparecer2').style.display = 'none';
    document.getElementById('up2').style.display = 'none';
    document.getElementById('down2').style.display = 'block';
});

document.getElementById('down3').addEventListener('click', function () {
    document.getElementById('aparecer3').style.display = 'block';
    document.getElementById('down3').style.display = 'none';
    document.getElementById('up3').style.display = 'block';
});

document.getElementById('up3').addEventListener('click', function () {
    document.getElementById('aparecer3').style.display = 'none';
    document.getElementById('up3').style.display = 'none';
    document.getElementById('down3').style.display = 'block';
});

document.getElementById('down4').addEventListener('click', function () {
    document.getElementById('aparecer4').style.display = 'block';
    document.getElementById('down4').style.display = 'none';
    document.getElementById('up4').style.display = 'block';
});

document.getElementById('up4').addEventListener('click', function () {
    document.getElementById('aparecer4').style.display = 'none';
    document.getElementById('up4').style.display = 'none';
    document.getElementById('down4').style.display = 'block';
});

document.getElementById('down5').addEventListener('click', function () {
    document.getElementById('aparecer5').style.display = 'block';
    document.getElementById('down5').style.display = 'none';
    document.getElementById('up5').style.display = 'block';
});

document.getElementById('up5').addEventListener('click', function () {
    document.getElementById('aparecer5').style.display = 'none';
    document.getElementById('up5').style.display = 'none';
    document.getElementById('down5').style.display = 'block';
});


document.getElementById('down6').addEventListener('click', function () {
    document.getElementById('aparecer6').style.display = 'block';
    document.getElementById('down6').style.display = 'none';
    document.getElementById('up6').style.display = 'block';
});

document.getElementById('up6').addEventListener('click', function () {
    document.getElementById('aparecer6').style.display = 'none';
    document.getElementById('up6').style.display = 'none';
    document.getElementById('down6').style.display = 'block';
});


