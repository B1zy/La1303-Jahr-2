function encode(message, shift) {
    let encodedMessage = '';

    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            // Uppercase letters
            encodedMessage += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            // Lowercase letters
            encodedMessage += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
        } else {
            // Non-alphabetic characters remain unchanged
            encodedMessage += message.charAt(i);
        }
    }

    return { encodedMessage, key: shift };
}