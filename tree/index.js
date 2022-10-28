var tree;
function setup() {
    noCanvas();
    tree = new Tree();
    var n = new Node(5);
    tree.addNode(n);
    console.log(tree);
    console.log("hello there")
}

function draw() {
    
}

class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(){
        this.root = null;
    }
    addNode(n){
        if(!this.root){
            this.root = n; 
        }
    }
}