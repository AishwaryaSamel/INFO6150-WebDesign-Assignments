/* DOM -
<body id="content">
<div id="div-1" class="mainContainer">
    <span id="span-1" class="note"></span>
    <span id="span-2"></span>
    <div id="div-2" class="subContainer1">
        <p id="para-1" class="sub1-p1 note"></p>
        <span id="span-3" class="sub1-span3"></span>
    </div>
    <div id="div-3" class="subContainer2">
        <section id="sec-1">
            <label id="lbl-1"></label>
        </section>
    </div>
    <div id="div-4">
        <span id="span-4" class="mania"></span>
        <span id="span-5" class="note mania"></span>
    </div>
</div>
<span id="span-6" class="randomSpan"></span>
</body>
*/

  /**
  * Returns descendent nodes matching the selector. Selector can be 
  * a tag name or a CSS class name.
  * 
  * For example: 
  * 
  * 1.
  * <div> 
  *   <span id="span-1"></span>
  *   <span id="span-2"></span>
  *   <div>
  *     <span id="span-3"></span>
  *   </div>
  * </div>
  * Selector `span` should return 3 span nodes in this order
  * span-1 -> span-2 -> span-3.
  *
  * 2.
  * <div> 
  *   <span id="span-1" class="note"></span>
  *   <span id="span-2"></span>
  *   <div>
  *     <span id="span-3"></span>
  *   </div>
  * </div>
  * Selector `.note` should return one span node with `note` class.
  * 
  * @param {string} the selector string.
  * @returns {Array} Array of descendent nodes.
  * @public
  */

 class Node {

  constructor(id,tag, children, classes) {
    // Tag name of the node.
    this.tag = tag;
    //id 
    this.id = id; 
    // Array of CSS class names (string) on this element.
    this.classes = classes;
    // Array of children nodes.
    this.children = children; // All children are of type Node
  }

  search(selector) {
    if(parent == 0){
      parent = 1;
      parentNode = this.id;
    }
    for(let i = 0; i < this.children.length; i++){
      first = 1;
      this.children[i].search(selector);
    }

    if(first == 1 && this.id != parentNode){
      if(this.tag == selector){
        arr.push(this.id);
      }
      else{
        if(this.id != parentNode){
          for(let j = 0; j < this.classes.length; j++){
            let temp = selector.replace(".","");
            if(this.classes[j].includes(temp)){
              arr.push(this.id);
            }
          }
        }
      }
    }
    return arr;

  }
}

//Variables initialization
let first = 0;
let parentNode = "";
let parent = 0;
let arr = [];

//sample DOM tree
let span1 = new Node("span-1","span",[],["note"]);
let span2 = new Node("span-2","span",[],[]);
let span3 = new Node("span-3","span",[],["sub1-span3"]);
let span4 = new Node("span-4","span",[],["mania"]);
let span5 = new Node("span-5","span",[],["note","mania"]);
let randomNode = new Node("span-6","span",[],["randomSpan"]);


let pNode1 = new Node("para-1","p",[],["sub1-p1","note"]);
let labelNode = new Node("lbl-1","label",[],[]);
let secNode = new Node("sec-1","section",[labelNode],[]);

let divNode2 = new Node("div-2","div",[pNode1,span3],["subContainer1"]);
let divNode3 = new Node("div-3","div",[secNode],["subContainer2"]);
let divNode4 = new Node("div-4","div",[span4,span5],[]);
let divNode1 = new Node("div-1","div",[span1,span2,divNode2,divNode3,divNode4],["mainContainer"]);

let body = new Node("content","body",[divNode1,randomNode],"");

//test case implementation

try{

// Testing
console.log("Started...");

//searches for the span nodes inside divnode1
// Test case 1 -
//console.log(divNode1.search("span"));
//OUTPUT - [ 'span-1', 'span-2', 'span-3', 'span-4', 'span-5' ]

//searches for .note class under divnode1
// Test case 2 - 
//console.log(divNode1.search(".note"));
//OUTPUT - [ 'span-1', 'para-1', 'span-5' ]

//searches for label node
// Test case 3 -
//console.log(divNode1.search("label"));
//OUTPUT - [ 'lbl-1' ]

//search for .note class in p tag
// Test case 4 - 
//console.log(pNode1.search(".note"));
//OUTPUT - []

//search for div tag within divNode1
// Test case 5 -
//console.log(divNode1.search("div"));
//OUTPUT - [ 'div-2', 'div-3', 'div-4' ]

//search for div using random node
// Test case 6 - 
//console.log(randomNode.search("div"));
//OUTPUT - []

//searching for section tag that is not present in divNode2
// Test case 7 -
//console.log(divNode2.search("section"));
//OUTPUT - []

//handling invalid input
// Test case 8 -
//console.log(body.search());
//OUTPUT - Invalid Input

//searches for section tag in the body
// Test case 9 -
//console.log(body.search("section"));
//OUTPUT - [ 'sec-1' ]

//searches for random node outside the divNode1
// Test case 10 -
console.log(divNode1.search(".randomSpan"));
//OUTPUT - []

}
//handling exceptions
catch(exception){
  console.log("Invalid Input");
}







