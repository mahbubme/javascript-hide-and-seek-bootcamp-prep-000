function getFirstSelector(selector) {
  return document.querySelector(selector); 
}

function nestedTarget() {
  return document.querySelector("#nested .target");  
}

function increaseRankBy(n) {
  var rankedList = document.querySelectorAll(".ranked-list li"); 
  
  for( let i = 0; i < rankedList.length; i++ ) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + parseInt(n);
  }
}

function deepestChild() {
  var deepestChild;
  var nodes = document.getElementById("grand-node").querySelectorAll("div");
  
  for( let i = 0; i < nodes.length-1; i++ ) {
    deepestChild = nodes[i].querySelector("div");
  }
  
  return deepestChild;
}