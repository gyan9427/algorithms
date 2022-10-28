var tree;
let treeArr = [3,8,6,1,9,14]
function setup() {
    noCanvas();
    tree = new Tree();
    // tree.addValue(5);
    treeArr.forEach(val=>{
        tree.addValue(val);
    })
    tree.traverse()
    // console.log(tree);
    tree.search(8)
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
    visit(){
        if(this.left !== null){
            this.left.visit();
        }
        console.log(this.value);
        if(this.right !== null){
            this.right.visit();
        }
    }
    search(val){
        if(this.value === val){
            return val;
        }else if(val < this.value && this.left != null){
            return this.left.search(val);
        }else if(val > this.value && this.right != null){
            return this.right.search(val);

        }
        return null
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
    traverse(){
        this.root.visit();
    }
    search(val){
        let found = this.root.search(val)
        console.log("FOUND...",found);
    }
}