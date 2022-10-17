function loginlogout (element) {

    if (element.innerText == "Logout") {
        element.innerText = "Login"
    } else {
        element.innerText = "Logout";
    }
}
function remove (element) {
element.remove();
}
function like (element) {
    alert("Ninja was liked");
    }
