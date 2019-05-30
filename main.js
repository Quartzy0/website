//Variables
var groupNames = ["Nursery(2-4)", "Reception(4-5)", "Year 1(5-6)", "Year 2(6-7)", "Year 3(7-8)", "Year 4(8-9)", "Year 5(9-10)", "Year 6(10-11)", "Year 7(11-12)", "Year 8(12-13)", "Year 9(13-14)"];
var males = [6, 6, 13, 10, 18, 13, 8, 6, 12, 8, 19];
var females = [7, 8, 10, 13, 8, 7, 13, 5, 12, 12, 11];
var siblings = [12, 16, 21, 27, 25, 27, 23, 18, 32, 26, 44];

var nationalitySpain = [true, true, true, true, true, true, true, true, true, true, true];
var nationalityEngland = [false, true, true, true, false, true, true, false, false, false, false];
var nationalityIrland = [false, true, false, false, false, false, false, false, false, false, false];
var nationalityAmerica = [false, false, false, false, false, false, false, false, false, false, false];
var nationalityAustria = [false, false, false, false, false, false, false, false, false, false, false];
var nationalityCanada = [false, false, false, false, false, false, false, false, false, false, false];
var nationalityFrance = [false, false, false, false, true, false, false, false, false, false, false];
var nationalityGermany = [false, false, false, false, false, true, false, false, false, false, false];
var nationalityHungary = [false, false, false, false, false, false, false, false, false, false, false];
var nationalityKuwaiti = [false, false, false, false, false, false, false, false, true, true, false];
var nationalityScotland = [false, false, false, false, false, false, false, false, false, false, false];
var nationalityWhales = [false, false, false, false, false, false, false, false, false, true, false];
var nationalitySlovenia = [false, false, false, false, false, false, false, false, false, true, false];
var nationalityVenezuela = [false, false, false, false, false, false, false, false, true, false, false];
var nationalityMexico = [false, false, false, false, true, false, false, false, false, false, false];
var nationalityRussia = [false, false, false, false, false, false, false, false, false, false, false];

var imgSpain = document.getElementById("spain");
var imgEngland = document.getElementById("england");
var imgIrland = document.getElementById("irland");
var imgAmerica = document.getElementById("america");
var imgAusrtia = document.getElementById("austria");
var imgCanada = document.getElementById("canada");
var imgFrance = document.getElementById("france");
var imgGermany = document.getElementById("germany");
var imgHungary = document.getElementById("hungary");
var imgKuwaiti = document.getElementById("kuwaiti");
var imgScotland = document.getElementById("scottish");
var imgWhales = document.getElementById("whales");
var imgSlovenia = document.getElementById("slovenia");
var imgVenezuela = document.getElementById("venezuela");
var imgMexico = document.getElementById("mexico");
var imgRussia = document.getElementById("russia");

var analisys = "For most classes|new|there are more female|new|students than male|new|with the exception|new|of Year 9.";

var maxAmmount = 1;
for (var i = 0; i < males.length; i++) {
    if (males[i] > maxAmmount) {
        maxAmmount = males[i];
    }
}
for (var i = 0; i < females.length; i++) {
    if (females[i] > maxAmmount) {
        maxAmmount = females[i];
    }
}
maxAmmount += 5;

var canvas = document.getElementById("myCanvas");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
var ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#FFFFFF";
ctx.strokeStyle = "#6e6e6e";
ctx.lineWidth = 10;
ctx.beginPath();
ctx.moveTo(canvas.width / 2, 35);
ctx.lineTo(canvas.width / 2, canvas.height - 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(canvas.width / 2 - 605, canvas.height - 50);
ctx.lineTo(canvas.width / 2 + 605, canvas.height - 50);
ctx.stroke();

ctx.font = "15px Arial";

ctx.fillText("Male", (canvas.width / 2 - 605) + 605 / 2, 20);
ctx.fillText("Female", (canvas.width / 2 + 605) - 605 / 2, 20);

var analySp = analisys.split("|new|");

ctx.font = "25px Arial";
ctx.fillText("Analisys:", canvas.width / 2 + 610, 100);
for (var i = 0; i < analySp.length; i++) {
    ctx.fillText(analySp[i], canvas.width / 2 + 610, 150 + (i * 27));
}

ctx.font = "15px Arial";

var spaceBetweenNumber = (canvas.height - 100) / groupNames.length;
var spaceBetweenNumber2 = (((canvas.width / 2 + 605) - (canvas.width / 2 - 605) - 10) / 2) / maxAmmount;
for (var i = 0; i < groupNames.length; i++) {
    ctx.fillStyle = "#FF6600";
    if (i != 0) {
        ctx.fillRect(canvas.width / 2 - (spaceBetweenNumber2 * males[i]) - 15, (canvas.height - 65) - (spaceBetweenNumber * (i + 1)), ((canvas.width / 2) - (canvas.width / 2 - (spaceBetweenNumber2 * males[i]))) + 10, Math.abs((spaceBetweenNumber * (i + 1)) - (spaceBetweenNumber * i)));
    } else {
        ctx.fillRect(canvas.width / 2 - (spaceBetweenNumber2 * males[i]) - 15, (canvas.height - 65) - (spaceBetweenNumber * (i + 1)), ((canvas.width / 2) - (canvas.width / 2 - (spaceBetweenNumber2 * males[i]))) + 10, (canvas.height - 50) - ((canvas.height - 65) - (spaceBetweenNumber * (i + 1))) - 5);
    }
    ctx.fillStyle = "#009DFF";
    if (i != 0) {
        ctx.fillRect(canvas.width / 2 + 5, (canvas.height - 65) - (spaceBetweenNumber * (i + 1)), Math.abs(((canvas.width / 2) - (canvas.width / 2 + (spaceBetweenNumber2 * females[i]))) + 5) + 15, Math.abs((spaceBetweenNumber * (i + 1)) - (spaceBetweenNumber * i)));
    } else {
        ctx.fillRect(canvas.width / 2 + 5, (canvas.height - 65) - (spaceBetweenNumber * (i + 1)), Math.abs(((canvas.width / 2) - (canvas.width / 2 + (spaceBetweenNumber2 * females[i]))) + 5) + 15, (canvas.height - 50) - ((canvas.height - 65) - (spaceBetweenNumber * (i + 1))) - 5);
    }
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(groupNames[i], canvas.width / 2 - 605, (canvas.height - 65) - spaceBetweenNumber * i);
    ctx.fillText("Total number of siblings: " + siblings[i] + "----", canvas.width / 2 - 605 - 200, (canvas.height - 65) - spaceBetweenNumber * i);
    var imgXCount = 0;
    if (nationalitySpain[i]) {
        ctx.drawImage(imgSpain, canvas.width / 2 - 605 - (200 - (50 * imgXCount)), ((canvas.height - 65) - spaceBetweenNumber * i) - 50, 40, 30);
        imgXCount++;
    }
    if (nationalityEngland[i]) {
        ctx.drawImage(imgEngland, canvas.width / 2 - 605 - (200 - (50 * imgXCount)), ((canvas.height - 65) - spaceBetweenNumber * i) - 50, 40, 30);
        imgXCount++;
    }
    if (nationalityIrland[i]) {
        ctx.drawImage(imgIrland, canvas.width / 2 - 605 - (200 - (50 * imgXCount)), ((canvas.height - 65) - spaceBetweenNumber * i) - 50, 40, 30);
        imgXCount++;
    }
    if (nationalityAmerica[i]) {
        ctx.drawImage(imgIAmerica, canvas.width / 2 - 605 - (200 - (50 * imgXCount)), ((canvas.height - 65) - spaceBetweenNumber * i) - 50, 40, 30);
        imgXCount++;
    }
    if (nationalityAustria[i]) {
        ctx.drawImage(imgAustria, canvas.width / 2 - 605 - (200 - (50 * imgXCount)), ((canvas.height - 65) - spaceBetweenNumber * i) - 50, 40, 30);
        imgXCount++;
    }
    if (nationalityCanada[i]) {
        ctx.drawImage(imgCanada, canvas.width / 2 - 605 - (200 - (50 * imgXCount)), ((canvas.height - 65) - spaceBetweenNumber * i) - 50, 40, 30);
        imgXCount++;
    }
    if (nationalityFrance[i]) {
        ctx.drawImage(imgFrance, canvas.width / 2 - 605 - (200 - (50 * imgXCount)), ((canvas.height - 65) - spaceBetweenNumber * i) - 50, 40, 30);
        imgXCount++;
    }
    if (nationalityGermany[i]) {
        ctx.drawImage(imgGermany, canvas.width / 2 - 605 - (200 - (50 * imgXCount)), ((canvas.height - 65) - spaceBetweenNumber * i) - 50, 40, 30);
        imgXCount++;
    }
    if (nationalityHungary[i]) {
        ctx.drawImage(imgHungary, canvas.width / 2 - 605 - (200 - (50 * imgXCount)), ((canvas.height - 65) - spaceBetweenNumber * i) - 50, 40, 30);
        imgXCount++;
    }
    if (nationalityKuwaiti[i]) {
        ctx.drawImage(imgKuwaiti, canvas.width / 2 - 605 - (200 - (50 * imgXCount)), ((canvas.height - 65) - spaceBetweenNumber * i) - 50, 40, 30);
        imgXCount++;
    }
    if (nationalityScotland[i]) {
        ctx.drawImage(imgScotland, canvas.width / 2 - 605 - (200 - (50 * imgXCount)), ((canvas.height - 65) - spaceBetweenNumber * i) - 50, 40, 30);
        imgXCount++;
    }
    if (nationalityVenezuela[i]) {
        ctx.drawImage(imgVenezuela, canvas.width / 2 - 605 - (200 - (50 * imgXCount)), ((canvas.height - 65) - spaceBetweenNumber * i) - 50, 40, 30);
        imgXCount++;
    }
    if (nationalityWhales[i]) {
        ctx.drawImage(imgWhales, canvas.width / 2 - 605 - (200 - (50 * imgXCount)), ((canvas.height - 65) - spaceBetweenNumber * i) - 50, 40, 30);
        imgXCount++;
    }
    if (nationalitySlovenia[i]) {
        ctx.drawImage(imgSlovenia, canvas.width / 2 - 605 - (200 - (50 * imgXCount)), ((canvas.height - 65) - spaceBetweenNumber * i) - 50, 40, 30);
        imgXCount++;
    }
    if (nationalityMexico[i]) {
        ctx.drawImage(imgMexico, canvas.width / 2 - 605 - (200 - (50 * imgXCount)), ((canvas.height - 65) - spaceBetweenNumber * i) - 50, 40, 30);
        imgXCount++;
    }
    if (nationalityRussia[i]) {
        ctx.drawImage(imgRussia, canvas.width / 2 - 605 - (200 - (50 * imgXCount)), ((canvas.height - 65) - spaceBetweenNumber * i) - 50, 40, 30);
        imgXCount++;
    }
}

for (var i = 0; i < maxAmmount; i++) {
    ctx.fillText(i, ((canvas.width / 2) - 20) - i * spaceBetweenNumber2, canvas.height - 30);
}

for (var i = 0; i < maxAmmount; i++) {
    ctx.fillText(i, ((canvas.width / 2) + 10) + i * spaceBetweenNumber2, canvas.height - 30);
}
