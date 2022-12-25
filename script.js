function about(){
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
    // Set ABOUT text in the card
    aboutText = document.getElementById("aboutText");
    aboutText.style.display = "flex";
    missionText = document.getElementById("missionText");
    missionText.style.display = "none";
    // Show Social Icons
    document.getElementById("link").style.display = "block";
}
var missionBool = 0;
function mission(){
    // Swapping 'MISSION' & 'U.S.A.'
    if(missionBool==0){
        document.getElementById("mission").innerHTML = "U.S.A.";
        missionBool =1;
    }else{
        document.getElementById("mission").innerHTML = "MISSION";
        missionBool =0;
    }
    // Set MISSION text in the card
    aboutText = document.getElementById("aboutText");
    aboutText.style.display = "none";
    missionText = document.getElementById("missionText");
    missionText.style.display = "flex";
    // Hide Social Icons
    document.getElementById("link").style.display = "none";
}
