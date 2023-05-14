const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");

//THIS FUNCTION FOR INPUT IN TO DO LIST 
function addTask()
{
    if(inputBox.value ===''){
         alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML =  inputBox.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    inputBox.value="";
    savedata();
}
//THIS IS FOR ADD THE LIST
listContainer.addEventListener("click",function(e){
  if(e.target.tagName ==="LI"){
    e.target.classList.toggle("checked");
    savedata();
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    savedata();

  }
},false);

// FOR SAVE THE DATE WHEN WE REFRESHE IT CANNOT DELETE

function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML =localStorage.getItem("data");
}
showTask();