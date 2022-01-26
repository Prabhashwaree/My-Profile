document.getElementById("Btn1PlaceOrder").addEventListener("click",function(){
    document.getElementsByClassName("PlaceOrder")[0].style.display="block"
    document.getElementsByClassName("ItemDetails")[0].style.display="none"
    document.getElementsByClassName("CustomerDetails")[0].style.display="none"
});


document.getElementById("Btn2ItemDetails").addEventListener("click",function(){
    document.getElementsByClassName("PlaceOrder")[0].style.display="none"
    document.getElementsByClassName("ItemDetails")[0].style.display="block"
    document.getElementsByClassName("CustomerDetails")[0].style.display="none"
});


document.getElementById("Btn3CustomerDetails").addEventListener("click",function(){
    document.getElementsByClassName("PlaceOrder")[0].style.display="none"
    document.getElementsByClassName("ItemDetails")[0].style.display="none"
    document.getElementsByClassName("CustomerDetails")[0].style.display="block"
});