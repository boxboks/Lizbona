function AddComment()
{
    let CommentContent = document.getElementById("AddCommentContent").value;
    CommentContent = GetCensoredText(CommentContent);
    fetch("http://localhost:3000/addComment", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            'Accept': "application/json"
        },
        body: JSON.stringify({
            author: document.querySelector(".uzytkownik").value,
            content: document.querySelector(".komentarzuzytkownika").value,
        })
    })
    console.log(CommentContent);
}