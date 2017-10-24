// class Node {
//
//     private left: Node;
//     private right: Node;
//     private value: any;
//
//     constructor(private value: any, left: Node, right: Node) {
//         this.value = value;
//         this.left = string;
//         this.right = string;
//     }
// }
//
//
// class MorseCode {
//
//     add(value: any) {
//
//     }
//
//     search(value: any) {
//
//     }
// }
//
//
// const morsecode = new MorseCode();
//////////////////////////////////////
//
// class Node {
//
//     public value: String;
//
//     constructor(private left: any, private right: any, value: String)  {
//
//         if (this.left == null || this.right == null) {
//
//             console.log("THIS VALUE", value);
//             console.log("END")
//
//         } else  {
//
//             this.value = value;
//
//             console.log("THIS VALUE", this.value);
//
//             console.log("LEFT", this.left.value);
//             console.log("RIGHT",this.right.value);
//
//         }
//     }
// }
//
//
// new Node(
//     new Node(
//         new Node(
//             null,
//             null,
//             "C"
//         ),
//         null, "A"),
//     new Node(null, null, "B"),
//     "START"
// );
///////////////////////////////////////
// let Node = {
//     value: 'Start',
//     left: null,
//     right: null
// }
/////////////////////////////////////
var Node = (function () {
    function Node(data) {
        this.data = data;
        this.left = undefined;
        this.right = undefined;
    }
    return Node;
}());
// the root is the most important aspect, if we instantiate.
var BinarySearchTree = (function () {
    function BinarySearchTree() {
        this.root = undefined;
    }
    // this is method called to insert a new Node
    // at this point we need to check where the node should go, left or right
    // once the root is inserted, the new Node enters a while loop if it
    // doesnt === the current node. The while loop has if statements saying
    // if the new Node is less than the current one, go left, or go to the right
    // until it finds its place.
    BinarySearchTree.prototype.insert = function (data) {
        var node = new Node(data);
        // new node constructor
        console.log(node.data);
        if (!this.root) {
            this.root = node;
            console.log('initial');
            console.log('-----------');
            return;
        }
        var currentNode = this.root;
        while (data !== currentNode.data) {
            if (data < currentNode.data) {
                if (!currentNode.left) {
                    currentNode.left = node;
                    console.log('left');
                    break;
                }
                console.log('next left');
                currentNode = currentNode.left;
            }
            else if (data > currentNode.data) {
                if (!currentNode.right) {
                    currentNode.right = node;
                    console.log('right');
                    break;
                }
                console.log('next right');
                currentNode = currentNode.right;
            }
        }
        console.log('-----------');
    };
    // method to search for a Node
    // we have to get the root first and save under currentNode. That way
    // we can compare the search to the currentNode.
    // we traverse the tree either left or right (left if < right if >)
    // using the while loop, when we get to the point currentNode == searchable node we return it
    BinarySearchTree.prototype.search = function (data) {
        var currentNode = this.root;
        while (currentNode) {
            if (data == currentNode.data) {
                console.log('found: ', currentNode);
                console.log('-----------');
                return currentNode;
            }
            else if (data < currentNode.data) {
                currentNode = currentNode.left;
            }
            else if (data > currentNode.data) {
                currentNode = currentNode.right;
            }
        }
    };
    // log to see if all Node's are in in order.
    // we need a starting point, which is the root,
    // then to go through left and right and log the Node's
    // using function recursive
    BinarySearchTree.prototype.logTree = function (root) {
        var currentNode = root;
        if (currentNode) {
            console.log(currentNode.data);
            this.logTree(currentNode.left);
            this.logTree(currentNode.right);
        }
    };
    // the most min is going to be on the left of the one previously, so keep traversing left
    // and it'll be found.
    BinarySearchTree.prototype.getMin = function (root) {
        var currentNode = root;
        while (currentNode.left) {
            currentNode = currentNode.left;
        }
        console.log('Min: ', currentNode.data);
        console.log('-----------');
        return currentNode;
    };
    // the most max is going to be on the right of the one previously, so keep traversing right
    // and it'll be found.
    BinarySearchTree.prototype.getMax = function (root) {
        var currentNode = root;
        while (currentNode.right) {
            currentNode = currentNode.right;
        }
        console.log('Max: ', currentNode.data);
        console.log('-----------');
        return currentNode;
    };
    return BinarySearchTree;
}());
var bst = new BinarySearchTree();
var addTo = [2, 4, 3, 10, 19];
for (i = 0; i < addTo.length; i++) {
    bst.insert(addTo[i]);
}
bst.search(3);
bst.getMin(bst.root);
bst.getMax(bst.root);
/////////////////////
///////// NEW //////
///////////////////
//
// class Node {
//
//     public value: String;
//
//     constructor(private left: any, private right: any, value: String)  {
//
//
//         if (this.left == null || this.right == null) {
//
//             console.log("THIS VALUE", value);
//             console.log("END")
//
//         } else  {
//
//             this.value = value;
//
//             console.log("THIS VALUE", this.value);
//
//             console.log("LEFT", this.left.value);
//             console.log("RIGHT",this.right.value);
//
//         }
//     }
// }
//
// new Node(
//
//     new Node(
//
//         new Node(
//             null,
//             null,
//             "C"
//         ),
//         null, "A"),
//
//
//     new Node(null, null, "B"),
//     "START"
// );
