
class Node {

    public value: String;

    constructor(private left: any, private right: any, value: String)  {

        if (this.left == null || this.right == null) {


        } else  {
            this.value = value;
        }
    }
}


let tree = new Node(
    new Node(
        new Node(
            null,
            null,
            "C"
        ),
        null, "A"),
    new Node(null, null, "B"),
    "START"
);

console.log(tree);
