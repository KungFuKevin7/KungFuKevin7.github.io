function reveal() //Reveals Elements on scroll
{
  var reveals = document.querySelectorAll(".reveal");
  for(let i = 0; i < reveals.length; i++){
    let Height = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < Height - elementVisible) {
      reveals[i].classList.add("active"); //add active to the classes of the element
    } else {
      reveals[i].classList.remove("active"); //remove active from classes of the element
    }
  }
}

window.addEventListener("scroll", reveal);
