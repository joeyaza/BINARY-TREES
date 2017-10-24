/// TYPE SCRIPT MORSE CODE BINARY SEARCH TREE //
var morseCode = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9'
};
var Node = (function () {
    function Node(data) {
        this.data = data;
        this.left = undefined;
        this.right = undefined;
    }
    return Node;
}());
var BinaryTreeMorseCode = (function () {
    function BinaryTreeMorseCode() {
        this.root = undefined;
    }
    BinaryTreeMorseCode.prototype.insert = function (data) {
        var node = new Node(data);
        // new node constructor
        if (!this.root) {
            this.root = "ROOT";
            return;
        }
        //'-.': 'n',
        var currentNode = this.root;
        // while (data !== currentNode.data) {
        data = data.split("");
        console.log(data);
        for (i = 0; i < data.length; i++) {
            console.log(data[i]);
            if (data[i] === "-") {
                if (!currentNode.left) {
                    currentNode.left = node;
                    break;
                }
                currentNode = currentNode.left;
            }
            else if (data[i] === ".") {
                if (!currentNode.right) {
                    currentNode.right = node;
                    break;
                }
                currentNode = currentNode.right;
            }
        }
        // }
        //     if (data < currentNode.data) {
        //         if (!currentNode.left) {
        //             currentNode.left = node;
        //             console.log('left');
        //             break;
        //         }
        //         console.log('next left');
        //         currentNode = currentNode.left;
        //     } else if (data > currentNode.data) {
        //         if (!currentNode.right) {
        //             currentNode.right = node;
        //             console.log('right');
        //             break;
        //         }
        //         console.log('next right');
        //         currentNode = currentNode.right;
        //     }
        // }
        console.log('-----------');
    };
    return BinaryTreeMorseCode;
}());
var btmc = new BinaryTreeMorseCode();
btmc.insert(Object.keys(morseCode)[0]);
btmc.insert(Object.keys(morseCode)[1]);
/// psedo
//
