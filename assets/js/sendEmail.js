function sendMail(contactForm) {
    emailjs.send("rosie", "template_q9do1eg", {
        "name_from": contactForm.name.value,
        "from_email": contactForm.email.value,
        "project_request": contactForm.projectsummary.value,
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED,error");
            });
    return false;
}
