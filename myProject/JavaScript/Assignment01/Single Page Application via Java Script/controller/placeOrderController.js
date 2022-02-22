//---------invoice details-------------

$("#cmbCusId").click(function(){
    let customerId =  $("#cmbCusId").val(); 
    let cusName= $("#txtCusName").val();
    let cusAddress=$("#txtCusAddress").val();
    let cusSalary=$("#txtCusSalary").val();

    for(var i=0;i<CustomerDB.length;i++){
        if(CustomerDB[i].id==customerId){
            cusName=CustomerDB[i].name;
            cusAddress=CustomerDB[i].address;
            cusSalary=CustomerDB[i].salary;

            $("#txtCusName").val(cusName);
            $("#txtCusAddress").val(cusAddress);
            $("#txtCusSalary").val(cusSalary);
        }
    }
});

cmbItemCode


//---------item select-------------
$("#cmbItemCode").click(function(){
    let itemsCode =  $("#cmbItemCode").val(); 
    let itemsName= $("#txtNameItem").val();
    let itemsPrice=$("#txtPriceItem").val();
    let itemsQtyHand=$("#txtQtyHandItem").val();

    for(var i=0;i<ItemDB.length;i++){
        if(ItemDB[i].code==itemsCode){
            itemsName=ItemDB[i].iName;
            itemsPrice=ItemDB[i].price;
            itemsQtyHand=ItemDB[i].quantity;

            $("#txtNameItem").val(itemsName);
            $("#txtPriceItem").val(itemsPrice);
            $("#txtQtyHandItem").val(itemsQtyHand);
        }
    }
});




//---------view Table-------------

$("#btnAddToCart").click(function () {
    // $("#addToCart>tr").off("click");
    addToCart();

});


var itemCode;
var itemName;
var itemPrice;
var itemQuantity;
var orderQty;


function addToCart(){
    // console.log("Enter");

   itemCode = $("#txtItemCode").val();
   itemName = $("#txtItemName").val();
   itemPrice = $("#txtItemPrice").val();
   itemQuantity = $("#txtQtyHandItem").val();
   orderQty = $("#txtOrderQtyItem").val();


   $("#addToCart").empty();


   let row = `<tr><td>${itemCode}</td><td>${itemName}</td><td>${itemPrice}</td><td>${itemQuantity}</td><td>${orderQty}</td></tr>`
   $("#addToCart").append(cartData);

}



