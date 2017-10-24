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
        // while (data !== currentNode.data) {

           data = data.split("");

           for (i = 0; i < data.length; i ++ ) {

               if (i === "-") {

                   if (!currentNode.left) {

                       currentNode.left = node;

                   }

               } else {


                   if (!currentNode.right) {

                       currentNode.right = node;

                   }




               }

           }









        // }
        //     if (data < currentNode.data) {
        //         if (!currentNode.left) {
        //             currentNode.left = node;
        //             console.log('left');
        //             break;
        //         }
        //         console.log('next left');
        //         currentNode = currentNode.left;
        //     } else if (data > currentNode.data) {
        //         if (!currentNode.right) {
        //             currentNode.right = node;
        //             console.log('right');
        //             break;
        //         }
        //         console.log('next right');
        //         currentNode = currentNode.right;
        //     }
        // }
        console.log('-----------');
    }
}

let btmc = new BinaryTreeMorseCode();

btmc.insert(Object.keys(morseCode)[0]);
btmc.insert(Object.keys(morseCode)[1]);



/// psedo

//



