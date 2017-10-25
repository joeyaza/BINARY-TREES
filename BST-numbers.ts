class Node {
    data: number;
    left: number;
    right: number;
    constructor(data) {
        this.data = data;
        this.left = undefined;
        this.right = undefined;
    }
}

// the root is the most important aspect, if we instantiate.
class BinarySearchTree {
    constructor() {
        this.root = undefined;
    }

    // this is method called to insert a new Node
    // at this point we need to check where the node should go, left or right
    // once the root is inserted, the new Node enters a while loop if it
    // doesnt === the current node. The while loop has if statements saying
    // if the new Node is less than the current one, go left, or go to the right
    // until it finds its place.
    insert(data) {
        let node: object = new Node(data);
        // new node constructor
        console.log(node.data);
        if(!this.root) {
            this.root = node;
            console.log('initial');
            console.log('-----------');
            return;
        }
        let currentNode = this.root;
        while (data !== currentNode.data) {
            if (data < currentNode.data) {
                if (!currentNode.left) {
                    currentNode.left = node;
                    console.log('left');
                    break;
                }
                console.log('next left');
                currentNode = currentNode.left;
            } else if (data > currentNode.data) {
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
    }

    // method to search for a Node
    // we have to get the root first and save under currentNode. That way
    // we can compare the search to the currentNode.
    // we traverse the tree either left or right (left if < right if >)
    // using the while loop, when we get to the point currentNode == searchable node we return it
    search(data) {
        let currentNode = this.root;
        while(currentNode) {
            if (data == currentNode.data) {
                console.log('found: ', currentNode);
                console.log('-----------');
                return currentNode;
            } else if (data < currentNode.data) {
                currentNode = currentNode.left;
            } else if (data > currentNode.data) {
                currentNode = currentNode.right;
            }
        }
    }

    // log to see if all Node's are in in order.
    // we need a starting point, which is the root,
    // then to go through left and right and log the Node's
    // using function recursive
    logTree(root) {
        let currentNode: object = root;
        if(currentNode) {
            console.log(currentNode.data);
            this.logTree(currentNode.left);
            this.logTree(currentNode.right);
        }
    }
    // the most min is going to be on the left of the one previously, so keep traversing left
    // and it'll be found.
    getMin(root) {
        let currentNode: object = root;
        while(currentNode.left) {
            currentNode = currentNode.left;
        }
        console.log('Min: ', currentNode.data);
        console.log('-----------');
        return currentNode;
    }

    // the most max is going to be on the right of the one previously, so keep traversing right
    // and it'll be found.
    getMax(root) {
        let currentNode: object = root;
        while(currentNode.right) {
            currentNode = currentNode.right;
        }
        console.log('Max: ', currentNode.data);
        console.log('-----------');
        return currentNode;
    }
}

let bst = new BinarySearchTree();
let addTo: object = [2,4,3,10,19];
for(i=0;i<addTo.length;i++) {
    bst.insert(addTo[i]);
}

bst.search(3);

bst.getMin(bst.root);
bst.getMax(bst.root);

