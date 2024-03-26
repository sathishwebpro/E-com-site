var sidenav = document.querySelector(".slide-navbar");
var productContainer = document.getElementById("products");
var search = document.getElementById("search");
var productlist = productContainer.querySelectorAll("div");

function showNavbar(){
    sidenav.style.left="0"
}

function closeNavbar(){
    sidenav.style.left="-60%"
}

search.addEventListener("keyup", function(){
    var enterValue = event.target.value.toUpperCase();

    for(var count = 0; count < productlist.length; count = count + 1){
        var productName = productlist[count].querySelector("p").textContent;

        if(productName.toUpperCase().indexOf(enterValue) < 0){
            productlist[count].style.display = "none";
        }
        else{
            productlist[count].style.display = "block";
        }
    }
});

