var tree;
let treeArr = [3,8,6,1,9,14]
function setup() {
    noCanvas();
    tree = new Tree();
    // tree.addValue(5);
    treeArr.forEach(val=>{
        tree.addValue(val);
    })
    console.log(tree);
    // console.log("hello there")
}

function draw() {
    
}

class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
    addNode(n){
        if(n.value < this.value){
            if(this.left == null){
                this.left = n;
            }
            this.left.addNode(n);
        }else if(n.value > this.value){
            if(this.right == null){
                this.right = n;
            }
            this.right.addNode(n);
        }
    }
}

class Tree{
    constructor(){
        this.root = null;
    }
    addValue(val){
        let n = new Node(val)
        if(!this.root){
            this.root = n; 
        }else{
            this.root.addNode(n)
        }
    }
}