import { getData } from "./utility.js"

    let localData = localStorage.getItem("blog-d");
    let parentElement = document.getElementById("card");

    getData(`http://localhost:3000/posts/${localData}`).then(res => {
        console.log(res);
        appendData(parentElement, res);
        

           
            
        
        
        
    })


const appendData = (parentElement, res) => {
    const card = `
        
        <div class="title">Title:${res.title}</div>
        <div class="body">Body:${res.body}</div>
        <div class="author">Author:${res.author}</div>
        
    
    `

    parentElement.innerHTML = card;
}






