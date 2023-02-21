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
    // Set ABOUT text in the card
    aboutText = document.getElementById("aboutText");
    aboutText.style.display = "flex";
    missionText = document.getElementById("missionText");
    missionText.style.display = "none";
    // Show Social Icons
    document.getElementById("link").style.display = "block";

    // Getting Back Card Size, Picture and Name
    document.getElementById("pic").style.display = "flex";
    document.getElementById("name").innerHTML = "HOSSAIN RION";
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

    // Removing Card Size, Picture and Name
    document.getElementById("pic").style.display = "none";
    document.getElementById("name").innerHTML = "Before I Die";
    // Hide Social Icons
    document.getElementById("link").style.display = "none";
}
