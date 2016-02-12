var byte = 0.0;
var displayByte = byte.toFixed(0); //remove decimals (whats half a byte)
var clickValue = 1;

var amountChip1Hz = 0;
var costChip1Hz = 16;

var amountRam1kB = 0;
var costRam1kB = 4;

function updateByte() {
    "use strict";
    if (byte === 1) {
        document.getElementById("bytes").innerHTML = displayByte.toString().concat(" Byte"); //Displays 1 Byte
    } else {
        document.getElementById("bytes").innerHTML = displayByte.toString().concat(" Bytes"); // Displays n Bytes
    }
}

function addByte() {
    "use strict";
    byte += clickValue;
    updateByte();
}

function tick() {
    "use strict";
    byte += amountChip1Hz / 10; //divide 10 due to interval being 10 times faster
    updateByte();
    displayByte = byte.toFixed(0); //remove decimals (whats half a byte)
}

var tickOnce = setInterval(tick, 100); //sets tick() interval

function buyChip1Hz() {
    "use strict";
    if (byte >= costChip1Hz) {
        amountChip1Hz += 1;
        byte -= costChip1Hz;
        costChip1Hz *= 2;
        document.getElementById("cost_one_hz_chip").innerHTML = "Cost: ".concat(costChip1Hz.toString()); //change displayed cost
    }
}

function buyRam1kB() {
    "use strict";
    if (byte >= costRam1kB) {
        amountRam1kB += 1;
        clickValue += 1;
        byte -= costRam1kB;
        costRam1kB *= 2;
        document.getElementById("cost_one_kb_ram").innerHTML = "Cost: ".concat(costRam1kB.toString()); //change displayed cost
    }
}