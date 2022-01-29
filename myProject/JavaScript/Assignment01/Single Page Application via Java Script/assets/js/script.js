
document.getElementById("btnLogin").addEventListener("click",function(){
    document.getElementsByClassName("login")[0].style.display="none"
    document.getElementsByClassName("PlaceOrder")[0].style.display="block"
    document.getElementsByClassName("ItemDetails")[0].style.display="none"
    document.getElementsByClassName("CustomerDetails")[0].style.display="none"
    document.getElementsByClassName("nav")[0].style.display="block"
});


document.getElementById("Home").addEventListener("click",function(){
    document.getElementsByClassName("login")[0].style.display="block"
    document.getElementsByClassName("PlaceOrder")[0].style.display="none"
    document.getElementsByClassName("ItemDetails")[0].style.display="none"
    document.getElementsByClassName("CustomerDetails")[0].style.display="none"
    document.getElementsByClassName("nav")[0].style.display="none"
});


document.getElementById("Btn1PlaceOrder").addEventListener("click",function(){
    document.getElementsByClassName("login")[0].style.display="none"
    document.getElementsByClassName("PlaceOrder")[0].style.display="block"
    document.getElementsByClassName("ItemDetails")[0].style.display="none"
    document.getElementsByClassName("CustomerDetails")[0].style.display="none"
    document.getElementsByClassName("nav")[0].style.display="block"
});


document.getElementById("Btn2ItemDetails").addEventListener("click",function(){
    document.getElementsByClassName("login")[0].style.display="none"
    document.getElementsByClassName("PlaceOrder")[0].style.display="none"
    document.getElementsByClassName("ItemDetails")[0].style.display="block"
    document.getElementsByClassName("CustomerDetails")[0].style.display="none"
    document.getElementsByClassName("nav")[0].style.display="block"
});


document.getElementById("Btn3CustomerDetails").addEventListener("click",function(){
    document.getElementsByClassName("login")[0].style.display="none"
    document.getElementsByClassName("PlaceOrder")[0].style.display="none"
    document.getElementsByClassName("ItemDetails")[0].style.display="none"
    document.getElementsByClassName("CustomerDetails")[0].style.display="block"
    document.getElementsByClassName("nav")[0].style.display="block"
});