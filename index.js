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
  var nodes = document.querySelector("div#grand-node")
  .querySelectorAll("div");
  
  var deepestChild;
  for( var i = 0; i < nodes.length; i++ ) {
    deepestChild = nodes[i].querySelector("div");
  }
  
  return deepestChild;
}