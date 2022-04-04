
// var picscreen=document.getElementById("picscreen")
var g =document.getElementById("gaming");
var h= document.getElementById("headset");
var pri=document.getElementById("printer");
var pro=document.getElementById("processor");


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



g.onclick = function(){
    picscreen.style.backgroundImage="url(img/hp-pavilion-gaming-desktop-review-hero1589983682725190.jpg)"
}
h.onclick = function(){
    picscreen.style.backgroundImage="url(img/HP_Wired_On-Ear_Headphone_200_2VB08AA_-_From_TPSTech_-_Main_Banner.webp)"
}
pri.onclick = function(){
    picscreen.style.backgroundImage="url(img/CTSS-Neverstop-Laser-Desktop.jpg)"
}
pro.onclick = function(){
    picscreen.style.backgroundImage="url(img/zdnet+764683b0-b7b5-4803-b901-f7b6e6431bdb.png)"
}

function popup(){
    var text=document.getElementById("inp").value;
    if(text==0){
        alert("type something in searchbar")
    }
    else{
        alert("your search :"+text+"is currently unavailable please try later")
    }
    
}





