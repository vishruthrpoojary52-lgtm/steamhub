// Welcome Message

window.onload = () => {
    setTimeout(() => {
        alert("Welcome to Steam Hub Cafe 🍜");
    }, 500);
};

// Smooth Scroll

document.querySelectorAll("a[href^='#']").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({
            behavior:"smooth"
        });

    });

});