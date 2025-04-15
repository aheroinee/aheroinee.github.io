function jumpscare() {
  var jumpscare = document.getElementById("jumpscare-img");
  jumpscare.classList.remove("hidden");
  
  var audio = document.getElementById("jumpscare-noise");
  audio.play();

  setTimeout(function() {
    jumpscare.classList.add("hidden");
  }, 3000);
}
