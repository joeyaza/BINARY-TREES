var Node = (function () {
    function Node(left, right, value) {
        this.left = left;
        this.right = right;
        if (this.left == null || this.right == null) {
        }
        else {
            this.value = value;
        }
    }
    return Node;
}());
var tree = new Node(new Node(new Node(null, null, "C"), null, "A"), new Node(null, null, "B"), "START");
console.log(tree);
