function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}


function sendMessage(e) {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
}