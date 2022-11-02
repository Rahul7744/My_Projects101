



const postData = async () => {
    let creaBlog = {
        title:document.getElementById("title").value,
        body:document.getElementById("body").value,
        date:document.getElementById("date").value,
        author:document.getElementById("author").value

    }

    let body = JSON.stringify(creaBlog);
    try {

        await fetch(`http://localhost:3000/posts`,{
            method:"POST",
            body,
            headers:{
                "Content-Type":"application/json"
            }
           
        })
        location.href = "./main.html"
        
    } catch (error) {
        console.log("Error", error);
        
    }
}