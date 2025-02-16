const input = document.querySelector("input");
const addbtn = document.querySelector(".add");
const classlist = document.querySelector(".tasklist")
const deleteall = document.querySelector(".deleteall");

addbtn.addEventListener("click", () => {
    const value = input.value;

    const li = document.createElement("li");
    li.innerText = value;
    const delbtn = document.createElement('button')
    delbtn.innerText = 'X'
    delbtn.addEventListener("click", () => {
        li.remove();
    })
    classlist.appendChild(li);
    li.appendChild(delbtn);
    input.value = "";
}); 
deleteall.addEventListener("click",()=>{
    classlist.innerHTML = "";
})