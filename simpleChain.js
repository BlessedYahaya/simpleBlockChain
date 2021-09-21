
const SHA256 = require('crypto-js/sha256')
/* ===== Block Class ===================================
|  Class with a constructor for block data model       |
|  ====================================================*/

class Block{
		constructor(data){
        	this.hash = ""
   			this.height = 0,
   			this.blockBody = data,
             this.time = 0 ,
             this.previousBlockHash = ""        
        }
}

/* ===== Blockchain ===================================
|  Class with a constructor for blockchain data model  |
|  with functions to support:                          |
|     - createGenesisBlock()                           |
|     - getLatestBlock()                               |
|     - addBlock()                                     |
|     - getBlock()                                     |
|     - validateBlock()                                |
|     - validateChain()                                |
|  ====================================================*/

class Blockchain{
	constructor(){
    	this.chain = [];
      	this.addBlock(new Block("First block in the chain"));
      
    }
  
  //add new block method
  
  addBlock(newBlock){
    newBlock.height = this.chain.length;
    newBlock.time = new Date().getTime().toString().slice(0, -3)
    //checking for previous block hash
    if(this.chain.length>0){
    	newBlock.previousBlockHash = this.chain[this.chain.length - 1].hash;
    }
    //creating a block hash 
    newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
    //adding new block to the chain
  	this.chain.push(newBlock);
  }

}



