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
    Node.prototype.search = function (data, bt) {
        var currentNode;
        var len = data.length;
        for (var i = 0; i < data.length; i++) {
            if (data[i] === ".") {
            }
            else {
            }
        }
    };
    return Node;
}());
var tree = new Node('ROOT', new Node('e', new Node('i', new Node("s", new Node("h", new Node("5"), new Node("4")), new Node("v")), new Node("u", new Node('f'))), new Node('a', new Node("r", new Node("l")), new Node("w", new Node("p"), new Node("j")))), new Node('t', new Node('n', new Node("d", new Node("b", new Node("6"), new Node("=")), new Node("x", new Node("/"))), new Node("k", new Node("c"), new Node("y"))), new Node('m', new Node("g", new Node("z", new Node("7")), new Node("q")), new Node("o"))));
tree.search(".-", tree);
