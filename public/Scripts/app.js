/*
    File name: app.js
    Student: Gabriel Dias Tinoco
    StudentID: 301160373
    Date: 10/01/21
*/

(function(){
    //Gets the submit button object, and assigns it the formSubmission funciton to the button.
    let submitButton = $("input")[4];
    submitButton.addEventListener("click", formSubmission);
    
    //Checks the form's validation status, and if valid redirects the user back to the home page.
    function formSubmission() {
        let form = $("form")[0];
        if (form.checkValidity() === true) {
            console.log("Success.")
            window.location.href = "/home";
        }
        else { form.reportValidity(); }
    }
})();