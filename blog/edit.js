
const id = localStorage.getItem("editid");
console.log(id);


const updateData = async () => {
    console.log("clicked");
    const blog = {
        title:document.getElementById("title").value,
        body:document.getElementById("body").value,
        author:document.getElementById("author").value

    }

    const body = JSON.stringify(blog)
    

try {
    await fetch(`http://localhost:3000/posts/${id}`,{
        method:"PATCH",
        body,
        headers : {
            'Content-Type':'application/json'

        }
       
    })
window.location.href = "./main.html"

} catch (error) {
    console.log(error);
}

}