var byte = 0;

function addByte() {
    "use strict";
    byte = byte + 1;
    if (byte === 1) {
        document.getElementById("bytes").innerHTML = byte.toString().concat(" Byte");
    } else {
        document.getElementById("bytes").innerHTML = byte.toString().concat(" Bytes");
    }
}