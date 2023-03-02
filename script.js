function home(){
    // Card Disappear
    var card = document.getElementById("card");
    card.className= "cardDisappear";
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
    var about = document.getElementById("about");
    about.style.animation = "none";
}
