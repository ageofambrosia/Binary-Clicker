var byte = 0.0;
var displayByte = byte.toFixed(0); //remove decimals (whats half a byte)
var clickValue = 1;
var buyAmt = 1;

var amtChip1Hz = 0;
var costChip1Hz = 16;

var amtRam1kB = 0;
var costRam1kB = 4;

function fixDisplay() {
    "use strict";
    document.getElementById("cost_one_hz_chip").innerHTML = "Cost: ".concat(costChip1Hz).toString(); //change displayed cost
    document.getElementById("amount_one_hz_chip").innerHTML = amtChip1Hz;
    document.getElementById("cost_one_kb_ram").innerHTML = "Cost: ".concat(costRam1kB).toString(); //change displayed cost
    document.getElementById("amount_one_kb_ram").innerHTML = amtRam1kB;
    if (clickValue !== 1) {
        document.getElementById("click_value").innerHTML = "Bytes+".concat(clickValue).toString();
    }
}

function save() {
    "use strict";
    var saveData = {
        bytes: byte,
        clickValue: clickValue,
        amtChip1Hz: amtChip1Hz,
        costChip1Hz: costChip1Hz,
        amtRam1kB: amtRam1kB,
        costRam1kB: costRam1kB
    };
    localStorage.setItem("saveData", JSON.stringify(saveData));
}

function load() {
    "use strict";
    var loadData = JSON.parse(localStorage.getItem("saveData"));
    if (typeof loadData.bytes !== "undefined") {byte = loadData.bytes; }
    if (typeof loadData.clickValue !== "undefined") {clickValue = loadData.clickValue; }
    if (typeof loadData.amtChip1Hz !== "undefined") {amtChip1Hz = loadData.amtChip1Hz; }
    if (typeof loadData.costChip1Hz !== "undefined") {costChip1Hz = loadData.costChip1Hz; }
    if (typeof loadData.amtRam1kB !== "undefined") {amtRam1kB = loadData.amtRam1kB; }
    if (typeof loadData.costRam1kB !== "undefined") {costRam1kB = loadData.costRam1kB; }
    fixDisplay();
}

function delSave() {
    "use strict";
    localStorage.removeItem("saveData");
}

function updateByte() {
    "use strict";
    displayByte = byte.toFixed(0); //remove decimals (whats half a byte)
    if (byte >= 0.5 && byte < 1.5) { //due to rounding from .toFixed()
        document.getElementById("bytes").innerHTML = displayByte.toString().concat(" Byte"); //Displays 1 Byte
    } else {
        document.getElementById("bytes").innerHTML = displayByte.toString().concat(" Bytes"); // Displays n Bytes
    }
    if (amtChip1Hz > 0) {
        document.getElementById("bytes_per_second").innerHTML = " +".concat(amtChip1Hz.toString(), "/s");
        document.getElementById("bytes_per_second").style.visibility = "visible";
    }
}

function addByte() {
    "use strict";
    byte += clickValue;
    updateByte();
}

function tick() {
    "use strict";
    byte += amtChip1Hz / 10; //divide 10 due to interval being 10 times faster
    updateByte();
}

var tickOnce = setInterval(tick, 100); //sets tick() interval

function buyChip1Hz(amt) {
    "use strict";
    if (byte >= (costChip1Hz * (Math.pow(2, amt) - 1))) {
        byte -= (costChip1Hz * (Math.pow(2, amt) - 1));
        amtChip1Hz += amt;
        costChip1Hz *= Math.pow(2, amt);
        fixDisplay();
    }
}

function buyRam1kB(amt) {
    "use strict";
    if (byte >= (costRam1kB * (Math.pow(2, amt) - 1))) {
        byte -= (costRam1kB * (Math.pow(2, amt) - 1));
        amtRam1kB += amt;
        clickValue += amt;
        costRam1kB *= Math.pow(2, amt);
        fixDisplay();
    }
}