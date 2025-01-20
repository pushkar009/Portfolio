let docTitle = document.title;

window.addEventListener("blur", () =>{
    document.title = "THANK YOU FOR VISITING :)";
});
window.addEventListener("focus", () => {
    document.title = docTitle;
});

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}
  
function submitForm() {
    clearForm();
    alert("Thank you for your response!");
}
