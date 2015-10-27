// Requires a html <canvas> (with id 'clock') to work

var canvas = document.getElementById("clock"); // Maak van je veld een object aan
canvas.width = 200; // Width of the canvas that is drawn on (needs to be pixels)
canvas.height = canvas.width; // Base the height on the width
canvas.style.width = "100%"; // Actual displayed size, can be in % just like a picture


var ctx = canvas.getContext("2d"); // Creeer een 2D teken object
//ctx.translate(0.5, 0.5); // 'Half-pixel trick', for cleaner lines (see no difference though..)
var radius = canvas.height / 2; // Begin met radius = halve lengte/hoogte
ctx.translate(radius, radius); // Maak daarmee het middelpunt je nulpunt
radius = radius * 0.90 // Maak nu variable radius kleiner dan je breedte/hoogte
setInterval(drawClock, 1000); // Teken de klok met onderstaande functies, elke 1000 milliseconden

function drawClock() { //Teken de klok in 3 stappen (fucties)
  drawFace(ctx, radius); // 1. De klok achtergrond
  drawNumbers(ctx, radius); // 2. De klok nummers
  drawTime(ctx, radius); // 3. De klok wijzerbladen
}

function drawFace(ctx, radius) { // 1. De klok achtergrond
  var grad; // Dit wordt een gradient
  ctx.beginPath();
  var grd = ctx.createRadialGradient(0,0,.5*radius,0,0,radius); // Definieer een circulaire gradient voor de wijzerplaat
  grd.addColorStop(0,"#F0F8FF"); // Binnenste kleur
  grd.addColorStop(.5,"#def"); // Middelste kleur
  grd.addColorStop(1,"#FAEBE1"); // Buitenste kleur
  ctx.arc(0, 0, radius, 0, 2*Math.PI); // Teken een cirkel op 0,0; straal = radius en lopend van 0 tot 360graden
  ctx.fillStyle = grd; // Gebruik de gradient als vulling
  ctx.fill(); // Pas de vulkleur toe
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,radius*.01,radius*1.05); // Definieer een circulaire gradient voor de rand, bijvoorbeeld van .95R tot 1.05R
  grad.addColorStop(0, '#ace');
  grad.addColorStop(0.5, '#FAEBE1');
  grad.addColorStop(1, '#F0F8FF'); // Geef de gradient definities
  ctx.strokeStyle = grad; // Definieer vulling van de stroke als de zojuist gedefinieerde gradient
  ctx.lineWidth = radius*0.16; // Maak de stroke net zo breed als de zojuist gedefinieerde gradient
  ctx.stroke(); // Teken de stroke (en dus de gradient)
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.4, 0, 2*Math.PI); // Definieer een cirkeltje in het midden
  ctx.fillStyle = '#FAEBE1'; // Definieer de vulkleur
  ctx.fill(); // Pas de vulkleur toe
}

function drawNumbers(ctx, radius) { // 2. De klok nummers en streepjes
  var ang; // Definieer een variable voor de hoek
  var num; // Definieer een variable voor de nummers
  ctx.fillStyle = '#000'; // Kleur van de nummers
  ctx.strokeStyle ='#432'; // Kleur van de streepjes
  ctx.font = radius*0.25 + "px helvetica"; // String (lees het als "10px arial"), wordt het lettertype en grootte
  ctx.textBaseline="middle";
  ctx.textAlign="center"; // Met deze 2 regels is het ankerpunt van de tekst vertikaal en horizontaal in het midden
  for(num = 1; num <= 12; num++){ // Itereer van 1 tot 12 (met stappen van 1)
    ang = num * Math.PI / 6; // Cirkelomtrek = 2*PI*R = 2*Math.PI dus dit is daar 1/12 van
    
    //ctx.shadowColor = '#333'; // stringColor of the shadow;  RGB, RGBA, HSL, HEX, and other inputs are valid.
    //ctx.shadowOffsetX = 1; // integerHorizontal distance of the shadow, in relation to the text.
    //ctx.shadowOffsetY = 1; // integerVertical distance of the shadow, in relation to the text.
    //ctx.shadowBlur = 1; // integerBlurring effect to the shadow, the larger the value, the greater the blur.
    
    ctx.rotate(ang); // Roteer over hoek
    ctx.translate(0, -radius*0.75); // Transleer naar nummer lokatie
    ctx.rotate(-ang); // Roteer terug over hoek (om tekst recht te zetten)
    ctx.fillText(num.toString(), 0, 0); // Plaats de variabele 'num' nu als string
    ctx.rotate(ang); // Roteer weer over hoek
    ctx.translate(0, radius*0.75); // Transleer terug naar nulpunt
    ctx.rotate(-ang); // Roteer terug over hoek (zodat ook orientatie weer terug is bij af)
  }
  for(num = 1; num <= 4; num++){ // Itereer van 1 tot 4 (met stappen van 1)
    ang = num * Math.PI / 2; // Cirkelomtrek = 2*PI*R = 2*Math.PI dus dit is daar 1/4 van
    ctx.rotate(ang); // Roteer over hoek
    ctx.translate(0, -radius*0.95); // Transleer naar marker lokatie
    drawMark(ctx, radius*.1, radius*.1); // Functie voor de markering/strepen (ctx, lengte, breedte)
    ctx.translate(0, radius*0.95); // Transleer terug naar nulpunt
    ctx.rotate(-ang); // Roteer terug over hoek (zodat ook orientatie weer terug is bij af)
  }
  for(num = 1; num <= 12; num++){ // Itereer van 1 tot 12 (met stappen van 1)
    ang = num * Math.PI / 6; // Cirkelomtrek = 2*PI*R = 2*Math.PI dus dit is daar 1/12 van
    ctx.rotate(ang); // Roteer over hoek
    ctx.translate(0, -radius*0.95); // Transleer naar marker lokatie
    drawMark(ctx, radius*.075, radius*.05); // Functie voor de markering/strepen (ctx, lengte, breedte)
    ctx.translate(0, radius*0.95); // Transleer terug naar nulpunt
    ctx.rotate(-ang); // Roteer terug over hoek (zodat ook orientatie weer terug is bij af)
  }
  for(num = 1; num <= 60; num++){ // Itereer van 1 tot 60 (met stappen van 1)
    ang = num * Math.PI / 30; // Cirkelomtrek = 2*PI*R = 2*Math.PI dus dit is daar 1/60 van
    ctx.rotate(ang); // Roteer over hoek
    ctx.translate(0, -radius*0.95); // Transleer naar marker lokatie
    drawMark(ctx, radius*.05, radius*.025); // Functie voor de markering/strepen (ctx, lengte, breedte)
    ctx.translate(0, radius*0.95); // Transleer terug naar nulpunt
    ctx.rotate(-ang); // Roteer terug over hoek (zodat ook orientatie weer terug is bij af)
  }
}

function drawMark(ctx, length, width) { // ctx = 2D tekenobject, lengte van de lijn en breedte
    ctx.beginPath(); // 'Begin te tekenen'
    ctx.lineWidth = width; // Stel lijnbreedte in
    ctx.lineCap = "round"; // Stel lijn uiteinde vorm in
    ctx.moveTo(0,0); // Begin bij nulpunt
    ctx.lineTo(0, -length); // Definieer vanuit hier en onder deze hoek een lijn, 0 opzij en -length' omhoog
    ctx.stroke(); // Plaats de lijn
}

function drawTime(ctx, radius){ // 3. De klok wijzerbladen
    var now = new Date(); // Neem de tijd
    var hour = now.getHours(); // Pak daaruit de uren (0-24)
    var minute = now.getMinutes(); // Pak de minuten (0-60)
    var second = now.getSeconds(); // Pak de seconden (0-60)
    
    hour=hour%12; // Dit maakt de uren (0-12)
    hour=(hour*Math.PI/6)+ // 'hour' wordt nu een hoek, aan de hand van 12uur per 360graden (2*PI*R/12), 
    (minute*Math.PI/(6*60))+ // 60min per uur: 360graden/12 (2*PI*R/(12*60))
    (second*Math.PI/(360*60)); // 60sec per minuut: (360graden/12)/60 (2*PI*R/(12*60*60))
    ctx.strokeStyle = '#999'; // Defineer de kleur van de urenwijzer
    drawHand(ctx, hour, radius*0.5, radius*0.07); // Teken een lijn a.d.h.v. de functie drawHand (urenwijzer)
    ctx.strokeStyle = '#666'; // Defineer de kleur van de minutenwijzer
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.65, radius*0.07); // Teken een lijn a.d.h.v. de functie drawHand (minutenwijzer)
    ctx.strokeStyle = '#333'; // Defineer de kleur van de secondenwijzer
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.8, radius*0.02); // Teken een lijn a.d.h.v. de functie drawHand (secondenwijzer)
}

function drawHand(ctx, pos, length, width) { // ctx = 2D tekenobject, pos = de hoek/positie, lengte van de lijn en breedte
    ctx.beginPath(); // 'Begin te tekenen'
    ctx.lineWidth = width; // Stel lijnbreedte in
    ctx.lineCap = "round"; // Stel lijn uiteinde vorm in
    ctx.moveTo(0,0); // Definieer het nulpunt
    ctx.rotate(pos); // Roteer over hoek pos (moet dus worden opgegeven/ingevuld wanneer de formule wordt aangeroepen)
    ctx.lineTo(0, -length); // Definieer vanuit hier en onder deze hoek een lijn, 0 opzij en -length' omhoog
    ctx.stroke(); // Plaats de lijn
    ctx.rotate(-pos); // Roteer terug naar 0
}