var inputBox = document.getElementById("input-box");
var listContainer = document.getElementById("List-Container");



function addTask(){
  if(inputBox.value === ''){
 alert("you must write ssomthing");
  }

 else{

    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);


 }

 inputBox.value="";
 saveData()


}

// for checked

listContainer.addEventListener("click",function(e){

if(e.target.tagName ==="LI"){
e.target.classList.toggle("checked");
saveData()
}
else if (e.target.tagName === "SPAN"){
   e.target.parentElement.remove();
   saveData()

}

// save data
}, false)

function saveData(){
    
    localStorage.setItem("data", listContainer.innerHTML);

}

function showTask(){

 listContainer.innerHTML = localStorage.getItem("data");


}

showTask();