function gmail() {
    navigator.clipboard.writeText("husayn.buet@gmail.com");
    alert("Copied the text: " + copyText.value);
    }
function opacity1(){
    var k= document.getElementById("card");
    //k.style.opacity = "1.0";
    k.className= "anim";

    
    var ab = document.getElementById("about");
    ab.style.animation = "none";
}
function opacity0(){
    var k2=document.getElementById("card");
    //k2.style.opacity = "0.0";
    k2.className= "anim2";
}
var a = 0;
function mission(){
    if(a==0){
        document.getElementById("mission").innerHTML = "U.S.A.";
        a=1;
    }else{
        document.getElementById("mission").innerHTML = "MISSION";
        a=0;
    }
}
