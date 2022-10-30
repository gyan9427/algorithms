var tree;
let mid = 0;
let y = 0;
let yr = 0;
let yl = 0;
let treeArr = [3,8,6,1,9,14]
function setup() {
    // noCanvas();
    createCanvas(600,400);
    background(51);
    mid = width/2; 
    tree = new Tree();
    // tree.addValue(5);
    treeArr.forEach(val=>{
        tree.addValue(Math.floor(Math.random()*100));
    })
    tree.traverse()
    // console.log(tree);
    if(tree.search(8)){
        console.log("found");
    }
    else{
        console.log("not found");
    }
    // console.log("hello there")
}

function draw() {
    
}

class Node{
    constructor(val,x,y){
        this.value = val;
        this.left = null;
        this.right = null;
        this.x = x;
        this.y = y;
    }
    addNode(n,midPrt){
        if(n.value < this.value){
            mid = (midPrt - 0)/2;
            if(this.left == null){
                this.left = n;
                this.left.x = mid;
                yl+=16;
                this.left.y = yl;
            }
            this.left.addNode(n,mid);
        }else if(n.value > this.value){
            mid =(width/2)+ (width - (width/2))/2;
            if(this.right == null){
                this.right = n;
                this.right.x = mid;
                yr+=16;
                this.right.y = yr;
            }
            this.right.addNode(n,mid);
        }
    }
    visit(){
        if(this.left !== null){
            this.left.visit();
        }
        console.log(this.value);
        fill(255);
        noStroke();
        text(this.value,this.x,this.y);
        if(this.right !== null){
            this.right.visit();
        }
    }
    search(val){
        if(this.value === val){
            return this;
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
            this.root.x = mid;
            y+=16
            yr+=16;
            yl+=16;
            this.root.y = y;
        }else{
            this.root.addNode(n,mid)
        }
    }
    traverse(){
        this.root.visit();
    }
    search(val){
        let found = this.root.search(val)
        return found;
    }
}