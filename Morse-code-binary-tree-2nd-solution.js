var BinaryTree = (function () {
    function BinaryTree(value, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.value = value;
        this.left = left;
        this.right = right;
    }
    return BinaryTree;
}());
var tree = new BinaryTree('ROOT', new BinaryTree('e', new BinaryTree('i', new BinaryTree("s", new BinaryTree("h", new BinaryTree("5"), new BinaryTree("4")), new BinaryTree("v")), new BinaryTree("u", new BinaryTree('f'))), new BinaryTree('a', new BinaryTree("r", new BinaryTree("l")), new BinaryTree("w", new BinaryTree("p"), new BinaryTree("j")))), new BinaryTree('t', new BinaryTree('n', new BinaryTree("d", new BinaryTree("b", new BinaryTree("6"), new BinaryTree("=")), new BinaryTree("x", new BinaryTree("/"))), new BinaryTree("k", new BinaryTree("c"), new BinaryTree("y"))), new BinaryTree('m', new BinaryTree("g", new BinaryTree("z", new BinaryTree("7")), new BinaryTree("q")), new BinaryTree("o"))));
var treeString = JSON.stringify(tree);
console.log(treeString);
