//Inside imports of your TS file include
import * as CryptoJS from "crypto-js";

class Security {
  // Declare this key and iv values in declaration
  private static key = CryptoJS.enc.Utf8.parse("4512631236589784");
  private static iv = CryptoJS.enc.Utf8.parse("4512631236589784");

  // Methods for the encrypt and decrypt Using AES
  static encrypt(plainText) {
    const ciphertext = CryptoJS.AES.encrypt(
      JSON.stringify(plainText),
      "secret key 123"
    ).toString();
    return ciphertext;
  }

  static decrypt(ciphertext, plainText) {
    // Decrypt
    const bytes = CryptoJS.AES.decrypt(ciphertext, "secret key 123");
    const originalText = bytes.toString(CryptoJS.enc.Utf8).replace(/"/g, "");
    return originalText == plainText ? true : false;
  }
}

export default Security;
