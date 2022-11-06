var tree;
let mid = 0;
let y = 0;
let yr = 0;
let yl = 0;
let treeLength = Math.floor(Math.random()*20)
let i = 0;
let lstep = 100;
let rstep = 100;
function setup() {
    // noCanvas();
    createCanvas(600,400);
    background(51);
    mid = width/2; 
    tree = new Tree();
    // tree.addValue(5);
    // treeArr.forEach(val=>{
    //     tree.addValue(Math.floor(Math.random()*100));
    // })
    // for(let i=0;i<treeLength;i++){
    //     tree.addValue(Math.floor(Math.random()*100));
    // }
    let startGraphing = setInterval(()=>{
        tree.addValue(Math.floor(Math.random()*100));
        tree.traverse();
        i++;
        // console.log(new p5.Delay())
        if(i>treeLength){
            clearInterval(startGraphing);
        }
    },50)
    
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
        this.traversed = false;
    }
    addNode(n){
        if(n.value < this.value){
            // mid = (midPrt - 0)/2;
            if(this.left == null){
                this.left = n;
                this.left.x = this.x-(lstep);
                lstep-=16;
                this.left.y = this.y+20;
            }
            this.left.addNode(n);
        }else if(n.value > this.value){
            // mid =(width/2)+ (width - (width/2))/2;
            if(this.right == null){
                this.right = n;
                this.right.x = this.x+(rstep--);
                rstep-=16;
                this.right.y = this.y+20;
            }
            this.right.addNode(n);
        }
    }
    visit(parent){
        
        if(this.left !== null){
            this.left.visit(this);
            console.log("parent",parent.x)
        }
        console.log(this.value);
        if(!this.traversed){
            fill(255);
            noStroke();
            textAlign(CENTER)
            text(this.value,this.x,this.y);
            stroke(255);
            line(parent.x,parent.y,this.x,this.y);
            noFill();
            ellipse(this.x,this.y,30,30);
            
        }
        this.traversed = true;
        
        if(this.right !== null){
            this.right.visit(this);
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
            this.root.x = width/2;
            y+=16
            yr+=16;
            yl+=16;
            this.root.y = 16;
        }else{
            this.root.addNode(n)
        }
    }
    traverse(){
        this.root.visit(this.root);
    }
    search(val){
        let found = this.root.search(val)
        return found;
    }
}