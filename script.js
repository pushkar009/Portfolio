let docTitle = document.title;

window.addEventListener("blur", () =>{
    document.title = "THANK YOU FOR VISITING :)";
});
window.addEventListener("focus", () => {
    document.title = docTitle;
});