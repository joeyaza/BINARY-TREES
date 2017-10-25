/// TYPE SCRIPT MORSE CODE BINARY SEARCH TREE //

const morseCode = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9'
}

class Node {

    data: string;
    left: string;
    right: string;

    constructor(data) {

        this.data = data;
        this.left = undefined;
        this.right = undefined;

    }

}

class BinaryTreeMorseCode {

    constructor() {

        this.root = undefined;

    }

    insert(data) {

        let node: object = new Node(data);
        // new node constructor

        if(!this.root) {
            this.root = "ROOT";
            return;
        }

        //'-.': 'n',

        let currentNode = this.root;
        console.log("curr>>>", currentNode);


           data = data.split("");

           for ( let i = 0; i < data.length; i ++ ) {

               if ( data[i] === ".") {
                   if (!currentNode.left) {

                       let node: object = new Node(null);
                       currentNode.left = node;

                   }



               } else if ( data[i] === "-") {

                   if (!currentNode.right) {



                   } else {



                   }

               }




           }



        console.log('-----------');
    }
}

let btmc = new BinaryTreeMorseCode();

btmc.insert(Object.keys(morseCode)[1]);
btmc.insert(Object.keys(morseCode)[0]);



/// psedo

//






