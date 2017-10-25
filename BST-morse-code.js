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
        console.log("curr>>>", currentNode);
        data = data.split("");
        for (var i = 0; i < data.length; i++) {
            if (data[i] === ".") {
                if (!currentNode.left) {
                    var node_1 = new Node(null);
                    currentNode.left = node_1;
                }
            }
            else if (data[i] === "-") {
                if (!currentNode.right) {
                }
                else {
                }
            }
        }
        console.log('-----------');
    };
    return BinaryTreeMorseCode;
}());
var btmc = new BinaryTreeMorseCode();
btmc.insert(Object.keys(morseCode)[1]);
btmc.insert(Object.keys(morseCode)[0]);
/// psedo
//
