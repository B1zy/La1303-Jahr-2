// Function to generate a random key for encoding
function generateRandomKey() {
    return Math.floor(Math.random() * 26) + 1; // Generates a key between 1 and 26
}

// Encode function with random encode key
function encode() {
    const message = document.getElementById("encodeMessage").value;
    const shift = generateRandomKey(); // Use a random shift for each encoding
    let encodedMessage = '';

    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            encodedMessage += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            encodedMessage += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
        } else {
            encodedMessage += message.charAt(i);
        }
    }

    document.getElementById("encodedMessage").value = encodedMessage;
    document.getElementById("decodeKey").value = shift.toString(); // Display the key used for encoding
}

// Decode function requires the correct key from the user
function decode() {
    const shift = parseInt(document.getElementById("decodeKey").value);
    const encodedMessage = document.getElementById("decodeMessage").value;
    let decodedMessage = '';

    for (let i = 0; i < encodedMessage.length; i++) {
        let charCode = encodedMessage.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            decodedMessage += String.fromCharCode((charCode - 65 - shift + 26) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            decodedMessage += String.fromCharCode((charCode - 97 - shift + 26) % 26 + 97);
        } else {
            decodedMessage += encodedMessage.charAt(i);
        }
    }

    document.getElementById("result").innerText = `Decoded Message: ${decodedMessage}`;
}
