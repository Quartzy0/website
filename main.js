function tryMeMan() {
    document.write("Lol!");
}

//Variables
var groupNames = ["Nursery(2-4)", "Reception(4-5)", "Year 1(5-6)", "Year 2(6-7)"];
var males = [6, 6, 13, 10];
var females = [7, 8, 10, 13];
var siblings = [12, 16, 21, 27];
var nationalitySpain = [true, true, true, true];
var nationalityEngland = [false, true, true, true];
var nationalityIrland = [false, true, false, false];

var imgSpain = document.getElementById("spain");
var imgEngland = document.getElementById("england");
var imgIrland = document.getElementById("irland");

var analisys = "From what we can see\n the older the students\n in the class are,\n the more female students\n there are. For\n male students\n we can se similar\n resoults.";

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
ctx.fillText(analisys, canvas.width / 2 + 610, 50);

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
    if (nationalitySpain[i]) {
        ctx.drawImage(imgSpain, canvas.width / 2 - 605 - 200, ((canvas.height - 65) - spaceBetweenNumber * i) - 50, 40, 30);
    }
    if (nationalityEngland[i]) {
        ctx.drawImage(imgEngland, canvas.width / 2 - 605 - 150, ((canvas.height - 65) - spaceBetweenNumber * i) - 50, 40, 30);
    }
    if (nationalityIrland[i]) {
        ctx.drawImage(imgIrland, canvas.width / 2 - 605 - 100, ((canvas.height - 65) - spaceBetweenNumber * i) - 50, 40, 30);
    }
}

for (var i = 0; i < maxAmmount; i++) {
    ctx.fillText(i, ((canvas.width / 2) - 20) - i * spaceBetweenNumber2, canvas.height - 30);
}

for (var i = 0; i < maxAmmount; i++) {
    ctx.fillText(i, ((canvas.width / 2) + 10) + i * spaceBetweenNumber2, canvas.height - 30);
}
