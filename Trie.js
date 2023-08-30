class Node {

    constructor() {

      this.children = {};

      this.isWordEnd = false;

    }

}
  
class Trie {

    constructor() {

        this.root = new Node();

    }

    insert(word) {

        let currentNode = this.root;

        for (let i = 0; i < word.length; i++) {

            const charToInsert = word[i];

            if (!(charToInsert in currentNode.children)) {

                currentNode.children[charToInsert] = new Node();

            }

            currentNode = currentNode.children[charToInsert];

        }

        currentNode.isWordEnd = true;

    }

    contains(word) {

        let currentNode = this.root;

        for (let i = 0; i < word.length; i++) {

            const charToFind = word[i];

            if (!(charToFind in currentNode.children)) {

                return false;

            }

            currentNode = currentNode.children[charToFind];

        }

        return currentNode.isWordEnd;

    }

    startsWithPrefix(prefix) {

        let currentNode = this.root;

        for (let i = 0; i < prefix.length; i++) {

            const charToFind = prefix[i];

            if (!(charToFind in currentNode.children)) {

                return false;

            }

            currentNode = currentNode.children[charToFind];

        }

        return true;

    }

}
  
// ===========Test Cases=========== 

const trie = new Trie();

trie.insert("athul");

trie.insert("athulya");

console.log(trie.contains("athul"));

console.log(trie.startsWithPrefix("ath"));
