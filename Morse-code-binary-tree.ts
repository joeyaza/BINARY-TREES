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
                new Node('f'),
                new Node(' ',
                    new Node(' '),
                    new Node('2')
                )
            )
        ),
        new Node('a',
            new Node("r",
                new Node("l"),
                new Node(" ",
                    new Node("+")
                )
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
            new Node("o",
                new Node(" ",
                    new Node("8")
                ),
                new Node(" ",
                    new Node("9"),
                    new Node("0")
                )
            )
        )
    )
);

// search functionality

let search = (node: object, str: string) => {

    const er: string = "sorry, please input a correct morse code!!!";
    let i: number;
    let result = "";

    for (i = 0; i < str.length; i++) {

        if ((str[i] != ".") && (str[i] != "-") && (str[i] != "_") && (str[i] != "/")) {

            throw er;

        }
    }

    if (!str) {

        if (!node.value) {

            throw er;

        }

        result = result + node.value;

        console.log(result);
        return result;

    }

    if (str[0] === "/") {

        result = result + " ";

            return search(tree, str.substring(1,str.length));


    }

    if (str[0] === ".") {

        if (node.left) {

            return search(node.left, str.substring(1,str.length));

        }

        throw er;

    } else if (str[0] === "-" || str[0] === "_") {

        if (node.right) {

            return search(node.right, str.substring(1,str.length));

        }

        throw er;

    }

    throw er;

};

search(tree, ".-./.-.");

