import { getData } from "/utility.js" 
import {navbar} from "./navbar.js";

let navbar1 = document.getElementById("navbar");
navbar1.innerHTML = navbar



const initialize = () => {
    getData(`http://localhost:3000/posts`).then(res => {
        // console.log(res);
        

            appendData(res);
            
        
        
        
    })
}


const appendData = (data) => {
    let maindiv = document.getElementById("container");
    console.log(data);
    
    
    data.forEach(element => {
        // console.log(element.id);
    let div = document.createElement("div");
    div.setAttribute("id", "card");
    let h1 = document.createElement("h1");
    h1.textContent = element.title;
    h1.style.textAlign = "center";

    let body = document.createElement("p");
    body.textContent = element.body;
    body.style.textAlign = "center";

    let a  = document.createElement("a");
    a.textContent = "view this blog";
    a.style.marginLeft = "30%";
    a.addEventListener("click", function(){
        localStorage.setItem("blog-d", JSON.stringify(element.id))
        location.href = "view.html";
    })

    let deletbtn = document.createElement("button");
    deletbtn.textContent = "Delete this blog";
    deletbtn.style.marginLeft = "30%";
    deletbtn.style.marginTop = "10px";
    deletbtn.addEventListener("click", () => {
        console.log("delete button clicked");
        deleteIt(element.id);

    })

    let editbtn = document.createElement("button");
    editbtn.textContent   = "Edit this blog";
    editbtn.style.marginLeft = "30%";
    editbtn.style.marginTop = "10px";
    editbtn.addEventListener("click", () => {
        console.log("editbutton clicked");
        editBtn(element.id);
    })

    const editBtn = async (id) => {
        localStorage.setItem("editid",JSON.stringify(element.id))
        window.location.href = "./edit.html"

    }

    const deleteIt = async (id) => {
        try {
            await fetch(`http://localhost:3000/posts/${id}`,{
                method:"Delete"
            })
        } catch (error) {
            console.log(error);
            
        }

    }


    
    
    div.append(h1, body,a, deletbtn,editbtn);
    
    maindiv.append(div)
    
    });
    
    
}






initialize();