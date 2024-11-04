const crypto = require('crypto');
 
// Define the key and IV as UTF-8 strings
const keyString = '45265742424250734526574242425073'; // 32-byte key for AES-256
const ivString = '4526574242425073'; // This will need to be padded
 
// Convert the key to a buffer
const key = Buffer.from(keyString, 'utf8'); // UTF-8 to buffer
 
// Ensure the IV is exactly 16 bytes
let iv = Buffer.from(ivString, 'utf8'); // Convert IV to buffer
 
if (iv.length < 16) {
    // Pad with zeros if it's less than 16 bytes
    const padding = Buffer.alloc(16 - iv.length); // Create buffer of zeros
    iv = Buffer.concat([iv, padding]); // Concatenate to make it 16 bytes
} else if (iv.length > 16) {
    // If the IV is longer than 16 bytes, truncate it (not typical but for safety)
    iv = iv.slice(0, 16);
}
 
// Define the plaintext
const plaintext = 'uday@gmail.com';
 
// Encrypt function using AES-256-CBC
function encrypt(text) {
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}
 
// Decrypt function using AES-256-CBC
function decrypt(encryptedData) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
 
// Encrypt the plaintext
const encryptedText = encrypt(plaintext);
console.log('Encrypted Text:', encryptedText);
 
// Decrypt the data
const decryptedText = decrypt(encryptedText);
console.log('Decrypted Text:', decryptedText);