function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

function sendMessage(e) {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
}
