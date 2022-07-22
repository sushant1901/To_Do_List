var todoInput=document.querySelector(".todo-input");
var btn=document.querySelector("button");
var todoList=document.querySelector(".todo-list");

btn.onclick=create;
todoList.onclick=checkdelete;

function create(e){
    if(todoInput.value!=""){
    e.preventDefault();

    var newdiv=document.createElement("div");
    newdiv.classList.add("todo");

    var newli=document.createElement("li");
    newli.classList.add("todoItem");
    newli.innerHTML=todoInput.value;
    newdiv.appendChild(newli);

    var completebtn=document.createElement("button");
    completebtn.classList.add("compbtn");
    completebtn.innerHTML='<i class="fa fa-check"></i>';
    newdiv.appendChild(completebtn);

    var deletebtn =document.createElement("button");
    deletebtn.classList.add("delbtn");
    deletebtn.innerHTML='<i class="fa fa-trash"></i>';
    newdiv.appendChild(deletebtn);

    todoList.appendChild(newdiv);
    todoInput.value="";
}
else{
    alert("Input field can't be Empty");
}
}

function checkdelete(e){
    var item=e.target;
    if(item.classList[0]==="delbtn"){
     var parent=item.parentElement;
     parent.remove();
    }

    if(item.classList[0]==="compbtn"){
        var parent=item.parentElement;
        parent.classList.toggle("completed");
       }

}