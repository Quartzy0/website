function tryMeMan() {
    document.write("Lol!");
}

//Variables
var groupNames = ["Nursery(2-4)", "Reception(4-5)"];
var males = [6, 6];
var females = [7, 8];
var siblings = [12, 16];
var nationalitySpain = [13, 12];
var nationalityEngland = [0, 1];
var nationalityIrland = [0, 1];

var maxAmmount = 20;

var canvas = document.getElementById("myCanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "#FFFFFF";
ctx.strokeStyle = "#6e6e6e";
ctx.lineWidth = 10;
ctx.beginPath();
ctx.moveTo(canvas.width / 2, 50);
ctx.lineTo(canvas.width / 2, canvas.height - 50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(canvas.width / 2 - 605, canvas.height - 50);
ctx.lineTo(canvas.width / 2 + 605, canvas.height - 50);
ctx.stroke();

ctx.font = "15px Arial";
var spaceBetweenNumber = (canvas.height - 100) / groupNames.length;
var spaceBetweenNumber2 = (((canvas.width / 2 + 605) - (canvas.width / 2 - 605) - 10) / 2) / maxAmmount;
for (var i = 0; i < groupNames.length; i++) {
    ctx.fillStyle = "#FF6600";
    if(i!=0){
      ctx.fillRect(canvas.width / 2 - (spaceBetweenNumber2 * males[i]) - 15, (canvas.height - 65) - (spaceBetweenNumber * (i + 1)), ((canvas.width / 2) - (canvas.width / 2 - (spaceBetweenNumber2 * males[i]))) + 10, Math.abs((spaceBetweenNumber*(i+1))-(spaceBetweenNumber*i)));
    }else{
      ctx.fillRect(canvas.width / 2 - (spaceBetweenNumber2 * males[i]) - 15, (canvas.height - 65) - (spaceBetweenNumber * (i + 1)), ((canvas.width / 2) - (canvas.width / 2 - (spaceBetweenNumber2 * males[i]))) + 10, (canvas.height - 50)-((canvas.height - 65) - (spaceBetweenNumber * (i + 1)))-5);
    }
    ctx.fillStyle = "#009DFF";
    if(i!=0){
      ctx.fillRect(canvas.width / 2 + 5, (canvas.height - 65) - (spaceBetweenNumber * (i + 1)), Math.abs(((canvas.width / 2) - (canvas.width / 2 + (spaceBetweenNumber2 * females[i]))) + 5) + 15, Math.abs((spaceBetweenNumber*(i+1))-(spaceBetweenNumber*i)));
    }else{
      ctx.fillRect(canvas.width / 2 + 5, (canvas.height - 65) - (spaceBetweenNumber * (i + 1)), Math.abs(((canvas.width / 2) - (canvas.width / 2 + (spaceBetweenNumber2 * females[i]))) + 5) + 15, (canvas.height - 50)-((canvas.height - 65) - (spaceBetweenNumber * (i + 1)))-5);
    }
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(groupNames[i], canvas.width / 2 - 605, (canvas.height - 65) - spaceBetweenNumber * i);
}

for (var i = 0; i < maxAmmount; i++) {
    ctx.fillText(i, ((canvas.width / 2) - 20) - i * spaceBetweenNumber2, canvas.height - 30);
}

for (var i = 0; i < maxAmmount; i++) {
    ctx.fillText(i, ((canvas.width / 2) + 10) + i * spaceBetweenNumber2, canvas.height - 30);
}
