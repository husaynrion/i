function home(){
    // Card Disappear
    var card = document.getElementById("card");
    card.className= "cardDisappear";
    // Wolf appear
    var wolf = document.getElementById("wolf");
    wolf.className= "wolfAppear";
}


function gmail() {
    // copying gmail address
    var text = "husayn.buet@gmail.com";
    navigator.clipboard.writeText(text);
    alert("Copied the text: " +text);
    }
function about(){
    // Card Appear
    var card = document.getElementById("card");
    card.className= "cardAppear";
    // About Blinking off
    var about = document.getElementById("about");
    about.style.animation = "none";
    // Wolf disappear
    var wolf = document.getElementById("wolf");
    wolf.className= "wolfDisappear";
}
