var byte = 0;
var clickAmount = 1;
var costChipOne = 16;
var amountChipOne = 0;

function updateByte() {
    "use strict";
    if (byte === 1) {
        document.getElementById("bytes").innerHTML = byte.toString().concat(" Byte");
    } else {
        document.getElementById("bytes").innerHTML = byte.toString().concat(" Bytes");
    }
}

function addByte() {
    "use strict";
    byte = byte + clickAmount;
    updateByte();
}

function tick() {
    "use strict";
    updateByte();
    byte = byte + amountChipOne;
    document.getElementById("cost_one_hz_chip").innerHTML = "Cost: ".concat(costChipOne.toString());
}

var tickOnce = setInterval(tick, 1000);

function buyChipOne() {
    "use strict";
    if (byte >= costChipOne) {
        amountChipOne = amountChipOne + 1;
        byte = byte - costChipOne;
        costChipOne = costChipOne * 2;
    }
}