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

// function deepestChild() {
//   var nodes = document.getElementById("grand-node").querySelectorAll("div");
  
//   var deepestChild;
//   for( var i = 0; i < nodes.length; i++ ) {
//     deepestChild = nodes[i].querySelector("div");
//   }
  
//   return deepestChild;
// }

function deepestChild() {
  var lis=document.getElementById("grand-node").querySelectorAll("div");
  var test;
  for(let i=0;i<lis.length-1;i++) {
    test=lis[i].querySelector("div");
  }
return test;
}