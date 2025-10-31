/* menu button start */
function openNav() 
{
    document.getElementById("Side-nav").style.width = "100%";
}

function closeNav() 
{
    document.getElementById("Side-nav").style.width = "0";
}
/* menu button end */


/* dropdown button start */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) 
{
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        var currentDisplay = window.getComputedStyle(dropdownContent).display;
        
        if (currentDisplay === "flex") 
        {
            dropdownContent.style.display = "none";
        }
        else 
        {
            dropdownContent.style.display = "flex";
        }
    });
}
/* dropdown button end */

/* search button start */
const searchBtn = document.querySelector(".search-btn");
const btn = document.querySelector(".btn");
const menu = document.getElementById("menu");
const input = document.getElementById("search-input");
const closeBtn = document.querySelector(".close-btn"); 

searchBtn.addEventListener("click", function () {
  if (window.innerWidth <= 750) 
  {
        btn.style.display = "none";
        menu.style.display = "none";
        searchBtn.classList.add("active-search");
        input.classList.add("show-input");
        closeBtn.style.display = "flex";
  }
});

closeBtn.addEventListener("click", function () {

    btn.style.display = "block";
    menu.style.display = "block";
    searchBtn.classList.remove("active-search");
    input.classList.remove("show-input");
    closeBtn.style.display = "none";
});
/* search button end */

/* signup button start */
document.querySelector(".btn").addEventListener("click", function() {
window.location.href = "signup.html";
});
/* signup button end */
