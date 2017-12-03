/////////////////////
///////// NEW //////
///////////////////
var Node = (function () {
    function Node(value, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.value = value;
        this.left = left;
        this.right = right;
    }
    return Node;
}());
var tree = new Node('ROOT', new Node('e', new Node('i', new Node("s", new Node("h", new Node("5"), new Node("4")), new Node("v")), new Node("u", new Node('f'), new Node(' ', new Node(' '), new Node('2')))), new Node('a', new Node("r", new Node("l"), new Node(" ", new Node("+"))), new Node("w", new Node("p"), new Node("j")))), new Node('t', new Node('n', new Node("d", new Node("b", new Node("6"), new Node("=")), new Node("x", new Node("/"))), new Node("k", new Node("c"), new Node("y"))), new Node('m', new Node("g", new Node("z", new Node("7")), new Node("q")), new Node("o", new Node(" ", new Node("8")), new Node(" ", new Node("9"), new Node("0"))))));
//
// search functionality
//
var result = "";
var er = "sorry, please input a correct morse code!!!";
var incorrectCharacter = function (characters) {
    console.log(">>>>", characters);
    var incorrectCharc = ['.', "-", "_", "/", " ", "+"];
    if (!incorrectCharc.indexOf(characters)) {
        throw er;
    }
};
var locate = function (node, code) {
    if ((code[0] === "/") || (code[0] === "+")) {
        result += node.value + " ";
        return locate(tree, code.substring(1, code.length));
    }
    if (code[0] === " ") {
        result += node.value;
        return locate(tree, code.substring(1, code.length));
    }
    if (code[0] === ".") {
        if (node.left) {
            return locate(node.left, code.substring(1, code.length));
        }
        throw er;
    }
    else if (code[0] === "-" || code[0] === "_") {
        if (node.right) {
            return locate(node.right, code.substring(1, code.length));
        }
        throw er;
    }
    if (!code) {
        if (!node.value) {
            throw er;
        }
        result += node.value;
    }
    return result;
};
var search = function (node, code) {
    incorrectCharacter(code);
    locate(node, code);
    console.log(result);
    return result;
};
search(tree, ".... . .-.. .-.. ---/.-- --- .-. .-.. -..");
