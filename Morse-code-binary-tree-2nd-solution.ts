
class BinaryTree {

    constructor(value, left = null, right = null) {
        this.value = value
        this.left = left
        this.right = right
    }

    // [Symbol.iterator]() {
    //
    //     let tree = [this.value, this.left, this.right]
    //
    //         next() {
    //             let node = tree.shift();
    //             console.log(node);
    //             if (node instanceof BinaryTree) {
    //                 console.log('here');
    //                 tree.splice(0, 0, node.value, node.left, node.right);
    //                 return this.next()
    //             }
    //             else if (node === null) {
    //                 return this.next()
    //             }
    //             else if (node !== undefined) {
    //                 return { value: node }
    //             }
    //             return { done: true }
    //         }
    //
    // }
}

let tree = new BinaryTree('ROOT',
    new BinaryTree('e',
        new BinaryTree('i',
            new BinaryTree("s",
                new BinaryTree("h",
                    new BinaryTree("5"),
                    new BinaryTree("4")
                ),
                new BinaryTree("v")
            ),
            new BinaryTree("u",
                new BinaryTree('f')
            )
        ),
        new BinaryTree('a',
            new BinaryTree("r",
                new BinaryTree("l")
            ),
            new BinaryTree("w",
                new BinaryTree("p"),
                new BinaryTree("j")
            )
        )
    ),
    new BinaryTree('t',
        new BinaryTree('n',
            new BinaryTree("d",
                new BinaryTree("b",
                    new BinaryTree("6"),
                    new BinaryTree("=")
                ),
                new BinaryTree("x",
                    new BinaryTree("/")
                )
            ),
            new BinaryTree("k",
                new BinaryTree("c"),
                new BinaryTree("y")
            )
        ),
        new BinaryTree('m',
            new BinaryTree("g",
                new BinaryTree("z",
                    new BinaryTree("7")
                ),
                new BinaryTree("q")
            ),
            new BinaryTree("o")
        )
    )
);


const treeString = JSON.stringify(tree);
console.log(treeString);