function messageSubmit() {
    preventDefault();
    const mailto = document.getElementById("mailto").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    //axios to post
    axios( {
        method: "POST",
        url: "http://localhost:3000/Message",
        data: {
            mailto: mailto,
            subject: subject,
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
