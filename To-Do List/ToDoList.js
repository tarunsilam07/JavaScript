const inputbox=document.getElementById("input-box")
const listcontainer=document.getElementById("list-container")

function addTask(){
    if(inputbox.value==="")
        {
            alert("Please Do Write Something");
        }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    inputbox.value=""
    savedata();
}

listcontainer.addEventListener("click",(l)=>{
    if(l.target.tagName==='LI')
        {
            l.target.classList.toggle("checked");
            savedata();
        }
    else if(l.target.tagName==='SPAN'){
        l.target.parentElement.remove();
        savedata();
    }
},false)

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showlist(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showlist();