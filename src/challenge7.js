class LetterNumber {


    constructor(key,moveBy){
        this.key = key;
        this.moveBy = moveBy;
    }
    static createObject() {
        let map =
            ` , 1
a, 2
b, 3
c, 4
d, 5
e, 6
f, 7
g, 8
h, 9
i, 10
j, 11
k, 12
l, 13
m, 14
n, 15
o, 16
p, 17
q, 18
r, 19
s, 20
t, 21
u, 22
v, 23
w, 24
x, 25
y, 26
z, 27
A, 28
B, 29
C, 30
D, 31
E, 32
F, 33
G, 34
H, 35
I, 36
J, 37
K, 38
L, 39
M, 40
N, 41
O, 42
P, 43
Q, 44
R, 45
S, 46
T, 47
U, 48
V, 49
W, 50
X, 51
Y, 52
Z, 53
!, 54
@, 55
£, 56
$, 57
%, 58
^, 59
&, 60
*, 61
(, 62
), 63
-, 64
_, 65
=, 66
+, 67
[, 68
], 69
{, 70
}, 71
;, 72
:, 73
', 74
", 75
\, 76
|, 77
,, 78
., 79
<, 80
>, 81
/, 82
?, 83
\`, 84
~, 85
§, 86
±, 87
1, 88
2, 89
3, 90
4, 91
5, 92
6, 93
7, 94
8, 95
9, 96
0, 97`;
        let indiviMap = map.split("\n");
        const obj = {};
        indiviMap.forEach(element => {
            const es = element.split(", ");
            const key = es[0];
            const value = parseInt(es[1]);
            obj[key] = value
        });
        return obj;
    }

    encrypt(){
        let out = "";
        const obj = LetterNumber.createObject();
        const char = this.key.split("");
        
        char.forEach(element => {
            let added = Number(obj[element]) + Number(this.moveBy);
            if(added > 99){
                added = added % 99;
                if(added < 10){
                    added = "0" + added
                }
                out = out + added;
            }
            else{
                if(added < 10){
                    added = "0" + added
                }
                out = out + added;
            }
            
        });
    
        return out;
    }
    
        static getKeyByValue(object, value) {
            return Object.keys(object).find(key => object[key] === value);
        }


        decrypt(number){
            const obj = LetterNumber.createObject();
            const pairs = number.match(/.{2}/g); 
            let out = "";
            pairs.forEach(element => {
                const realVal = Math.abs(element - this.moveBy) % 97;
                let temp = LetterNumber.getKeyByValue(obj, realVal);
                out = out + temp;

            });

            return out;
        }

 

}                   

                  
const letterNumber = new LetterNumber("a", 4000);
console.log(letterNumber.encrypt());


console.log(letterNumber.decrypt("0772928081868372077280739477728293919272928077729280818679507299728477929277903584779292779072919374919281929392818786727581888077902572107792459172768772819225", 4771) );