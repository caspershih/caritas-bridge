function messageSubmit() {
    preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    //axios to post
    axios( {
        method: "POST",
        url: "http://localhost:3000/Message",
        data: {
            name: name,
            email: email,
            message: message
        }
    }).then((response) => {
        if(response.data.message === "success") {
            alert("Message sent!");
            this.resetform();
        } else if(response.data.message === "fail") {
            alert("Message failed to send!");
        }
    })
};
