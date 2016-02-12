var byte = 0.0;
var clickValue = 1;
var amountChipOne = 0;
var costChipOne = 16;
var displayByte = byte.toFixed(0);

function updateByte() {
    "use strict";
    if (byte === 1) {
        document.getElementById("bytes").innerHTML = displayByte.toString().concat(" Byte");
    } else {
        document.getElementById("bytes").innerHTML = displayByte.toString().concat(" Bytes");
    }
}

function addByte() {
    "use strict";
    byte = byte + clickValue;
    updateByte();
}

function tick() {
    "use strict";
    byte = byte + amountChipOne / 10;
    document.getElementById("cost_one_hz_chip").innerHTML = "Cost: ".concat(costChipOne.toString());
    updateByte();
    displayByte = byte.toFixed(0);
}

var tickOnce = setInterval(tick, 100);

function buyChipOne() {
    "use strict";
    if (byte >= costChipOne) {
        amountChipOne = amountChipOne + 1;
        byte = byte - costChipOne;
        costChipOne = costChipOne * 2;
    }
}