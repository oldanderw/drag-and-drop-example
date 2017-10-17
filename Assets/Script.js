let id = 1;
let position = 0;
const div = document.getElementById('invis');
const drop = document.getElementById('drop_zone');
let tran = 0;
let droppedIn = false;
// add function
$("#addRow").bind("click", function(){
    id++;
    div.innerHTML += '<div id="drop_zone" ondrop="drag_drop(event)" ondragover="return false" class="card"><img src=""></div>';
    //Update();
});
// back function
$("#back").bind("click", function(){
  tran-=218;
  $(div).animate({left: tran + 'px'});
});
// next function
$("#next").bind("click", function(){
  if (tran >= 0){
    console.log(div);
  } else{
    tran+=218;
    $(div).animate({left: tran + 'px'});
  }
});
function _(id){
 return document.getElementById(id);
}
function drag_start(event) {
  // setting up how the object moves
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.setData("text", event.target.getAttribute('id') );
}

function drag_drop(event) {
  const elem_id = event.dataTransfer.getData("text");
  event.preventDefault(); /* Prevent undesirable default behavior while dropping */
  // the object itself
    // checks what objects there were dropped in the container with a id of drag_drop
  if (elem_id == "object1"){
    const tempt = event.target;
    tempt.innerHTML += '<img id="test" class="dropimg" src="Assets/Img/obj1.jpg">';
  }
  if (elem_id == "object2"){
    const tempt = event.target;
    tempt.innerHTML += '<img id="test" class="dropimg" src="Assets/Img/obj2.jpg">';
    }
  if (elem_id == "object3"){
    const tempt = event.target;
    tempt.innerHTML += '<img id="test" class="dropimg" src="Assets/Img/obj3.jpg">';
    }
  if (elem_id == "remove"){
    const tempt = event.target;
    tempt.parentNode.removeChild(tempt);
    console.log("removed");
  }
}
function Update(){
  //moves every card to the right one 1px and then moves the cards left 1px to make sure the new card does not end up in a weird place
  position++;
  div.style.transform = "translateX("+ position +"px)";
  position--;
  div.style.transform = "translateX("+ position +"px)";
}
