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
//
//
// class Node {
//     data: number;
//     left: number;
//     right: number;
//     constructor(data) {
//         this.data = data;
//         this.left = undefined;
//         this.right = undefined;
//     }
// }
//
// // the root is the most important aspect, if we instantiate.
// class BinarySearchTree {
//     constructor() {
//         this.root = undefined;
//     }
//
//     // this is method called to insert a new Node
//     // at this point we need to check where the node should go, left or right
//     // once the root is inserted, the new Node enters a while loop if it
//     // doesnt === the current node. The while loop has if statements saying
//     // if the new Node is less than the current one, go left, or go to the right
//     // until it finds its place.
//     insert(data) {
//         let node: object = new Node(data);
//         // new node constructor
//         console.log(node.data);
//         if(!this.root) {
//             this.root = node;
//             console.log('initial');
//             console.log('-----------');
//             return;
//         }
//         let currentNode = this.root;
//         while (data !== currentNode.data) {
//             if (data < currentNode.data) {
//                 if (!currentNode.left) {
//                     currentNode.left = node;
//                     console.log('left');
//                     break;
//                 }
//                 console.log('next left');
//                 currentNode = currentNode.left;
//             } else if (data > currentNode.data) {
//                 if (!currentNode.right) {
//                     currentNode.right = node;
//                     console.log('right');
//                     break;
//                 }
//                 console.log('next right');
//                 currentNode = currentNode.right;
//             }
//         }
//         console.log('-----------');
//     }
//
//     // method to search for a Node
//     // we have to get the root first and save under currentNode. That way
//     // we can compare the search to the currentNode.
//     // we traverse the tree either left or right (left if < right if >)
//     // using the while loop, when we get to the point currentNode == searchable node we return it
//     search(data) {
//         let currentNode = this.root;
//         while(currentNode) {
//             if (data == currentNode.data) {
//                 console.log('found: ', currentNode);
//                 console.log('-----------');
//                 return currentNode;
//             } else if (data < currentNode.data) {
//                 currentNode = currentNode.left;
//             } else if (data > currentNode.data) {
//                 currentNode = currentNode.right;
//             }
//         }
//     }
//
//     // log to see if all Node's are in in order.
//     // we need a starting point, which is the root,
//     // then to go through left and right and log the Node's
//     // using function recursive
//     logTree(root) {
//         let currentNode: object = root;
//         if(currentNode) {
//             console.log(currentNode.data);
//             this.logTree(currentNode.left);
//             this.logTree(currentNode.right);
//         }
//     }
//     // the most min is going to be on the left of the one previously, so keep traversing left
//     // and it'll be found.
//     getMin(root) {
//         let currentNode: object = root;
//         while(currentNode.left) {
//             currentNode = currentNode.left;
//         }
//         console.log('Min: ', currentNode.data);
//         console.log('-----------');
//         return currentNode;
//     }
//
//     // the most max is going to be on the right of the one previously, so keep traversing right
//     // and it'll be found.
//     getMax(root) {
//         let currentNode: object = root;
//         while(currentNode.right) {
//             currentNode = currentNode.right;
//         }
//         console.log('Max: ', currentNode.data);
//         console.log('-----------');
//         return currentNode;
//     }
// }
//
// let bst = new BinarySearchTree();
// let addTo: object = [2,4,3,10,19];
// for(i=0;i<addTo.length;i++) {
//     bst.insert(addTo[i]);
// }
//
// bst.search(3);
//
// bst.getMin(bst.root);
// bst.getMax(bst.root);


/////////////////////
///////// NEW //////
///////////////////

class Node {

    public value: String;

    constructor(value, left = null, right = null) {
        this.value = value
        this.left = left
        this.right = right
    }
}

let tree = new Node('ROOT',
    new Node('e',
        new Node('i',
            new Node("s",
                new Node("h",
                    new Node("5"),
                    new Node("4")
                ),
                new Node("v")
            ),
            new Node("u",
                new Node('f')
            )
        ),
        new Node('a',
            new Node("r",
                new Node("l")
            ),
            new Node("w",
                new Node("p"),
                new Node("j")
            )
        )
    ),
    new Node('t',
        new Node('n',
            new Node("d",
                new Node("b",
                    new Node("6"),
                    new Node("=")
                ),
                new Node("x",
                    new Node("/")
                )
            ),
            new Node("k",
                new Node("c"),
                new Node("y")
            )
        ),
        new Node('m',
            new Node("g",
                new Node("z",
                    new Node("7")
                ),
                new Node("q")
            ),
            new Node("o")
        )
    )
);

const treeString = JSON.stringify(tree);
console.log(treeString);


