class LetterNumber {
    constructor() {
        this.charValues = {
            ' ': '01', '!': '02', '@': '03', '£': '04', '$': '05', '%': '06', '^': '07', '&': '08', '*': '09',
            '(': '10', ')': '11', '-': '12', '_': '13', '=': '14', '+': '15', '[': '16', ']': '17', '{': '18',
            '}': '19', ';': '20', ':': '21', "'": '22', '"': '23', '\\': '24', '|': '25', ',': '26', '.': '27',
            '<': '28', '>': '29', '/': '30', '?': '31', '`': '32', '~': '33', '§': '34', '±': '35', '1': '36',
            '2': '37', '3': '38', '4': '39', '5': '40', '6': '41', '7': '42', '8': '43', '9': '44', '0': '45'
        };

        this.reverseCharValues = {};
        for (const key in this.charValues) {
            this.reverseCharValues[this.charValues[key]] = key;
        }
    }

    encrypt(plaintext, key) {
        let encryptedText = "";
        for (const char of plaintext) {
            if (char in this.charValues) {
                const charValue = this.charValues[char];
                let encryptedValue = parseInt(charValue) + key;
                while (encryptedValue < 1) {
                    encryptedValue += 100;
                }
                encryptedText += String(encryptedValue).padStart(2, '0');
            }
        }
        return encryptedText;
    }

    decrypt(ciphertext, key) {
        let decryptedText = "";
        for (let i = 0; i < ciphertext.length; i += 2) {
            const charValue = ciphertext.substring(i, i + 2);
            let decryptedValue = parseInt(charValue) - key;
            while (decryptedValue < 1) {
                decryptedValue += 100;
            }
            const decryptedChar = this.reverseCharValues[String(decryptedValue).padStart(2, '0')];
            decryptedText += decryptedChar;
        }
        return decryptedText;
    }
}

// Test cases
const letterNumber = new LetterNumber();
console.log(letterNumber.encrypt("a", 1));  // "03"
console.log(letterNumber.encrypt("Ed", 4));  // "3609"
console.log(letterNumber.encrypt("Hi, Ed!", 302));  // "37128003340756"

// console.log(letterNumber.decrypt("0681497203762572077292808186837291878577878677459172878672928772928081917275818880779025", 4771));
// console.log(letterNumber.decrypt("21774590777279878686737286777776729287727587857772938872958192807273728677957287867750", 4771));
// console.log(letterNumber.decrypt("0772928081868372077280739477728293919272928077729280818679507299728477929277903584779292779072919374919281929392818786727581888077902572107792459172768772819225", 4771));
