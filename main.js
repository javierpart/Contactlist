const input_name = document.getElementById("Iname");
const input_lastname = document.getElementById("Ilname");
const input_phone = document.getElementById("Iphone");
const add_btn = document.querySelector(".btn-add");
const ul = document.querySelector("div");
const n_contacts = document.querySelector("h2");

add_btn.addEventListener("click", (e) => {
    e.preventDefault();
    const nametext = input_name.value;
    const lnametext = input_lastname.value;
    const phonetext = input_name.value;
    
    if (nametext !== "" & lnametext !== "" & phonetext !== ""){
        const ul2 = document.createElement("ul");
        ul2.className = "list-group ";
        const liname = document.createElement("li");
        liname.className = "list-group-item";
        liname.textContent = nametext;
        const lilname = document.createElement("li");
        lilname.className = "list-group-item";
        lilname.textContent = lnametext;
        const liphone = document.createElement("li");
        liphone.className = "list-group-item";
        liphone.textContent = phonetext;
        

        ul2.appendChild(liname);
        ul2.appendChild(lilname);
        ul2.appendChild(liphone);
        ul2.appendChild(deleteContact());
        ul.appendChild(ul2);
        input_name.value = "";
        input_lastname.value = "";
        input_phone.value = "";
        const contacts = document.querySelectorAll("ul")
        n_contacts.innerHTML = `Contact List (${contacts.length})`
    }
})

function deleteContact (){
    const del_btn = document.createElement("button");
    del_btn.className= "del-btn btn btn-primary btn-lg btn-block";
    del_btn.textContent = "X";

    del_btn.addEventListener("click", (e)=>{
        e.preventDefault();
        const item = e.target.parentElement;
        ul.removeChild(item);
        const contacts = document.querySelectorAll("ul")
        n_contacts.innerHTML = `Contact List (${contacts.length})`
    })
    return del_btn;
}
