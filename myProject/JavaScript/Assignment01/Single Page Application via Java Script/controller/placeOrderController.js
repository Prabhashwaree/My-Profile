//---------invoice details-------------
$("#genarateId").text(genarateOrderId());
console.log("#genarateId");

function genarateOrderId(){
    try {
        let lastOId =OrderDB[OrderDB.length - 1].getOrderId();
        let newOId = parseInt(lastOId.substring(1, 4)) + 1;
        if (newOId < 10) {
            $("#genarateId").text("O00" + newOId);
        } else if (newOId < 100) {
            $("#genarateId").text("O0" + newOId);
        } else {
            $("#genarateId").text("O" + newOId);
        }
    } catch (e) {
        $("#genarateId").text("O001");
    }
}





//qty diduck
function qtyReduce(orderQty){
    var available=parseInt(orderQty);
    var orderQuantity=parseInt($("#txtQtyHandItem").val());
    orderQuantity=orderQuantity-available;
    let itemsCode =  $("#cmbItemCode").val(); 
    for(var i in ItemDB){
        if(itemsCode==ItemDB[i].getItemCode()){
            ItemDB[i].setItemQuantity(orderQuantity);
            $("#txtQtyHandItem").val(ItemDB[i].getItemQuantity());
        }
    }


    console.log(orderQuantity);
}

$("#cmbCusId").append("<option> Select ID </option>");


$("#cmbCusId").change(function(){
    // alert("hello");
    let customerId =  $("#cmbCusId").val(); 
    // let cusName= $("#txtCusName").val();
    // let cusAddress=$("#txtCusAddress").val();
    // let cusSalary=$("#txtCusSalary").val();

    for(var i=0;i<CustomerDB.length;i++){
        if(CustomerDB[i].getCusId()==customerId){
            let cusName=CustomerDB[i].getCusName();
            let cusAddress=CustomerDB[i].getCusAddress();
            let cusSalary=CustomerDB[i].getCusSalary();
           
            $("#txtCusName").val(cusName);
            $("#txtCusAddress").val(cusAddress);
            $("#txtCusSalary").val(cusSalary);
        }
    }
});

function setCmbDataCustomer(customerData){
    $("#cmbCusId").append(customerData);
}


//---------item select-------------

$("#cmbItemCode").append("<option> Select Code </option>");

$("#cmbItemCode").click(function(){
    let itemsCode =  $("#cmbItemCode").val(); 
    // let itemsName= $("#txtNameItem").val();
    // let itemsPrice=$("#txtPriceItem").val();
    // let itemsQtyHand=$("#txtQtyHandItem").val();

    for(var i=0;i<ItemDB.length;i++){
        if(ItemDB[i].getItemCode()==itemsCode){
            let itemsName=ItemDB[i].getItemName();
            let itemsPrice=ItemDB[i].getItemPrice();
            let itemsQtyHand=ItemDB[i].getItemQuantity();

            $("#txtNameItem").val(itemsName);
            $("#txtPriceItem").val(itemsPrice);
            $("#txtQtyHandItem").val(itemsQtyHand);
        }
    }
});

function setCmbDataItem(itemData){
    $("#cmbItemCode").append(itemData);
}





//---------view Table-------------

$("#btnAddToCart").click(function () {
    let itemQty= parseInt($("#txtQtyHandItem").val());
    let orderQty=parseInt($("#txtOrderQtyItem").val());

    if($("#txtOrderQtyItem").val() != ''){
        if(itemQty<orderQty){
            alert("The requested quantity is not in stock");
        }else{
            addToCart();
            loadAllCartTable();
            qtyReduce($("#txtOrderQtyItem").val());
            clearAddToCart();
        }
    }else{
        alert("Type your size in these text fields");
    }

    

   
});





 let sub_total = 0;
 let discount = 0;
 let total = 0;

function calculateTotal(orderQty,itemPrice,discounts){
    sub_total+=orderQty *itemPrice;
    discount+=(orderQty*itemPrice*discounts) /100;
    total=sub_total-discount;  
    
    $("#totalLbl").text(total);
    $("#SubtotalLbl").text(sub_total);
}




$("#cartTable").empty();


function addToCart(){
    // console.log("Enter");
    let itemCode1 = $("#cmbItemCode").val();
    let itemName1 = $("#txtNameItem").val();
    let orderQty1 = $("#txtOrderQtyItem").val();
    let itemPrice1 = $("#txtPriceItem").val();
    let qtyOnHand = $("#txtQtyHandItem").val();
    let discounts=$("#txtDiscount").val();
    let total=itemPrice1*orderQty1;
    
    calculateTotal($("#txtOrderQtyItem").val(),$("#txtPriceItem").val(),$("#txtDiscount").val());

    for(var i in cartDB){
        if(cartDB[i].getcartICode()==itemCode1){
            var newQty=+cartDB[i].getcartOQty()+ +orderQty1;
            var newTotal=itemPrice1*newQty;
            cartDB[i].setcartOQty(newQty);
            cartDB[i].setTotal(newTotal);
            return;
        }

    }

    cartDB.push(new cart(itemCode1,itemName1,itemPrice1,orderQty1,total,discounts));
    console.log("itemCode1,itemName1,orderQty1,itemPrice1,total");

}


$("#cartTable>tr").click(function(){

    let itemId=$(this).children(":eq(0)").text();
    let itemName=$(this).children(":eq(1)").text();
    let orderQty=$(this).children(":eq(4)").text();
    let itemPrice=$(this).children(":eq(2)").text();
    
    


    $("#cmbItemCode").val(itemId);
    $("#txtNameItem").val(itemName);
    $("#txtOrderQtyItem").val(orderQty);
    $("#txtPriceItem").val(itemPrice);
    
    
});

function loadAllCartTable(){
    $("#cartTable").empty();
      for(var i of cartDB){
          
        let row = `<tr><td>${i.getcartICode()}</td><td>${i.getcartIName()}</td><td>${i.getcartOQty()}</td><td>${i.getcartIPrice()}</td><td>${i.getTotal()}</td>
        <td><button type="button" class="btn-sm border btn-danger deleteCart" style="background-color: red;"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               width="20" height="20"
               viewBox="0 0 172 172"
               style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M66.01172,0c-3.70059,-0.00235 -6.92765,2.51479 -7.82629,6.10461l-3.84754,15.39539h-29.8197c-6.16742,-0.00642 -11.54473,4.19278 -13.03333,10.17786l-3.34363,13.35876c-0.20044,0.80299 -0.01973,1.65355 0.48988,2.30568c0.50961,0.65213 1.29126,1.03309 2.11889,1.0327h10.97046l10.52954,121.17371c0.12275,1.39132 1.29079,2.4567 2.6875,2.45129h91.375c1.48427,0 2.6875,-1.20323 2.6875,-2.6875c0,-1.48427 -1.20323,-2.6875 -2.6875,-2.6875h-88.90796l-10.28284,-118.25h117.75659l-10.5033,120.70129c-0.06544,0.71421 0.15731,1.42494 0.61868,1.97404c0.46137,0.5491 1.12307,0.89102 1.83787,0.94966c0.07694,0.00392 0.15402,0.00392 0.23096,0c1.39671,0.0054 2.56475,-1.05998 2.6875,-2.45129l10.52954,-121.17371h10.97046c0.82763,0.00039 1.60928,-0.38057 2.11889,-1.0327c0.50961,-0.65213 0.69032,-1.50269 0.48988,-2.30568l-3.34363,-13.35876c-1.48859,-5.98508 -6.86591,-10.18428 -13.03332,-10.17786h-29.8302l-3.83704,-15.39539c-0.89865,-3.58982 -4.1257,-6.10697 -7.82629,-6.10461zM65.93823,5.375c0.02449,-0.00033 0.04899,-0.00033 0.07349,0h39.97656c1.23404,-0.00058 2.3099,0.83932 2.60876,2.03662l3.5221,14.08838h-52.23828l3.5221,-14.08838c0.29188,-1.17116 1.32873,-2.00408 2.53528,-2.03662zM24.51819,26.875h122.96362c3.69864,0.00005 6.92287,2.51669 7.82104,6.10461l2.50379,10.02039h-143.61328l2.50378,-10.02039c0.89817,-3.58793 4.12241,-6.10456 7.82105,-6.10461zM50.95752,64.50525c-0.17165,0.00154 -0.3432,0.00855 -0.51441,0.021c-4.43765,0.34336 -7.75758,4.21779 -7.41687,8.65564l5.375,69.875c0.33852,4.19193 3.83072,7.42637 8.03625,7.44311c0.20425,0 0.40963,-0.00206 0.62463,-0.02625c4.43765,-0.34336 7.75758,-4.21779 7.41687,-8.65564l-5.375,-69.875c-0.34438,-4.23221 -3.90048,-7.47899 -8.14648,-7.43787zM85.76379,64.50525c-4.35825,0.12774 -7.82533,3.69713 -7.82629,8.05725v69.875c0,4.4528 3.6097,8.0625 8.0625,8.0625c4.4528,0 8.0625,-3.6097 8.0625,-8.0625v-69.875c-0.00048,-2.17896 -0.88289,-4.26495 -2.44623,-5.78279c-1.56333,-1.51785 -3.67446,-2.3383 -5.85248,-2.27446zM121.2262,64.58923c-4.29031,-0.15611 -7.95046,3.0771 -8.32495,7.35388l-5.375,69.875c-0.16358,2.13204 0.5265,4.24174 1.91842,5.86499c1.39192,1.62325 3.37166,2.62707 5.5037,2.79065c0.20962,0.01613 0.41514,0.021 0.61939,0.021c4.20352,-0.01946 7.69266,-3.25319 8.03101,-7.44311l5.375,-69.875c0.14333,-2.17403 -0.59931,-4.31352 -2.05878,-5.93119c-1.45947,-1.61768 -3.51151,-2.57582 -5.68878,-2.65621zM50.85779,69.875h0.21521c1.40547,-0.00758 2.57391,1.08035 2.66651,2.48279l5.3855,69.875c0.05645,0.7124 -0.17316,1.41795 -0.63808,1.96067c-0.46491,0.54273 -1.12684,0.87794 -1.83946,0.93154h-0.20996c-1.40786,0.00409 -2.58027,-1.07901 -2.6875,-2.48279l-5.375,-69.875c-0.05641,-0.71324 0.17391,-1.41954 0.63994,-1.96242c0.46603,-0.54288 1.12929,-0.87752 1.84285,-0.92979zM86.07874,69.875c1.45343,0.0426 2.60939,1.23345 2.60876,2.6875v69.875c0,1.48427 -1.20323,2.6875 -2.6875,2.6875c-1.48427,0 -2.6875,-1.20323 -2.6875,-2.6875v-69.875c-0.00031,-0.72662 0.29362,-1.42241 0.81478,-1.92874c0.52116,-0.50633 1.22514,-0.78005 1.95145,-0.75876zM120.89026,69.875c0.01575,-0.00014 0.03149,-0.00014 0.04724,0h0.21521c0.71168,0.05492 1.37227,0.3907 1.83607,0.93328c0.4638,0.54258 0.6927,1.24738 0.63622,1.95893l-5.375,69.875c-0.10723,1.40378 -1.27964,2.48688 -2.6875,2.48279h-0.20996c-0.71262,-0.0536 -1.37455,-0.38881 -1.83946,-0.93154c-0.46491,-0.54273 -0.69453,-1.24827 -0.63808,-1.96067l5.375,-69.875c0.09194,-1.39234 1.2449,-2.47654 2.64026,-2.48279z"></path></g></g></svg></button></td></tr>`;
     
        $("#cartTable").append(row);
        console.log(row);
     
      }
  }


  // Confirm order
  $("#confirmOrder").click(function(){
    // $("#genarateId").text(genarateOrderId());
    genarateOrderId();
    saveConfirmOrder();
    loadAllConfirmOrder();
    cartDB=[];
    clearAll();
     $("#cartTable").empty();

  });

 
    
  

  function saveConfirmOrder(){
    let order_Id=$("#genarateId").text();
    let date=$("#iDate").val();
    let time=$("#selectTime").val();
    let cusId=$("#cmbCusId").val();
    let itemCode1 = $("#cmbItemCode").val();
    let itemQty=$("#txtOrderQtyItem").val();
    let itemDiscount=$("#txtDiscount").val();
    let allTotal=$("#totalLbl").text();

  
    OrderDB.push(new Orders(order_Id,date,time,cusId,itemCode1,itemQty,itemDiscount,allTotal));
    
  }


  function loadAllConfirmOrder(){
    $("#orderTable").empty();
    for(var i of OrderDB){
      let row = `<tr>
      <td>${i.getOrderId()}</td>
      <td>${i.getOrderDate()}</td>
      <td>${i.getOrderTime()}</td>
      <td>${i.getCuId()}</td>
      <td>${i.getItemCode()}</td>
      <td>${i.getIQty()}</td>
      <td>${i.getItemDiscount()}</td>
      <td>${i.getAllTotal()}</td>
      <td>
          <button type="button" class="btn-sm border btn-danger deleteOrder" style="background-color: red;"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               width="20" height="20"
               viewBox="0 0 172 172"
               style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M66.01172,0c-3.70059,-0.00235 -6.92765,2.51479 -7.82629,6.10461l-3.84754,15.39539h-29.8197c-6.16742,-0.00642 -11.54473,4.19278 -13.03333,10.17786l-3.34363,13.35876c-0.20044,0.80299 -0.01973,1.65355 0.48988,2.30568c0.50961,0.65213 1.29126,1.03309 2.11889,1.0327h10.97046l10.52954,121.17371c0.12275,1.39132 1.29079,2.4567 2.6875,2.45129h91.375c1.48427,0 2.6875,-1.20323 2.6875,-2.6875c0,-1.48427 -1.20323,-2.6875 -2.6875,-2.6875h-88.90796l-10.28284,-118.25h117.75659l-10.5033,120.70129c-0.06544,0.71421 0.15731,1.42494 0.61868,1.97404c0.46137,0.5491 1.12307,0.89102 1.83787,0.94966c0.07694,0.00392 0.15402,0.00392 0.23096,0c1.39671,0.0054 2.56475,-1.05998 2.6875,-2.45129l10.52954,-121.17371h10.97046c0.82763,0.00039 1.60928,-0.38057 2.11889,-1.0327c0.50961,-0.65213 0.69032,-1.50269 0.48988,-2.30568l-3.34363,-13.35876c-1.48859,-5.98508 -6.86591,-10.18428 -13.03332,-10.17786h-29.8302l-3.83704,-15.39539c-0.89865,-3.58982 -4.1257,-6.10697 -7.82629,-6.10461zM65.93823,5.375c0.02449,-0.00033 0.04899,-0.00033 0.07349,0h39.97656c1.23404,-0.00058 2.3099,0.83932 2.60876,2.03662l3.5221,14.08838h-52.23828l3.5221,-14.08838c0.29188,-1.17116 1.32873,-2.00408 2.53528,-2.03662zM24.51819,26.875h122.96362c3.69864,0.00005 6.92287,2.51669 7.82104,6.10461l2.50379,10.02039h-143.61328l2.50378,-10.02039c0.89817,-3.58793 4.12241,-6.10456 7.82105,-6.10461zM50.95752,64.50525c-0.17165,0.00154 -0.3432,0.00855 -0.51441,0.021c-4.43765,0.34336 -7.75758,4.21779 -7.41687,8.65564l5.375,69.875c0.33852,4.19193 3.83072,7.42637 8.03625,7.44311c0.20425,0 0.40963,-0.00206 0.62463,-0.02625c4.43765,-0.34336 7.75758,-4.21779 7.41687,-8.65564l-5.375,-69.875c-0.34438,-4.23221 -3.90048,-7.47899 -8.14648,-7.43787zM85.76379,64.50525c-4.35825,0.12774 -7.82533,3.69713 -7.82629,8.05725v69.875c0,4.4528 3.6097,8.0625 8.0625,8.0625c4.4528,0 8.0625,-3.6097 8.0625,-8.0625v-69.875c-0.00048,-2.17896 -0.88289,-4.26495 -2.44623,-5.78279c-1.56333,-1.51785 -3.67446,-2.3383 -5.85248,-2.27446zM121.2262,64.58923c-4.29031,-0.15611 -7.95046,3.0771 -8.32495,7.35388l-5.375,69.875c-0.16358,2.13204 0.5265,4.24174 1.91842,5.86499c1.39192,1.62325 3.37166,2.62707 5.5037,2.79065c0.20962,0.01613 0.41514,0.021 0.61939,0.021c4.20352,-0.01946 7.69266,-3.25319 8.03101,-7.44311l5.375,-69.875c0.14333,-2.17403 -0.59931,-4.31352 -2.05878,-5.93119c-1.45947,-1.61768 -3.51151,-2.57582 -5.68878,-2.65621zM50.85779,69.875h0.21521c1.40547,-0.00758 2.57391,1.08035 2.66651,2.48279l5.3855,69.875c0.05645,0.7124 -0.17316,1.41795 -0.63808,1.96067c-0.46491,0.54273 -1.12684,0.87794 -1.83946,0.93154h-0.20996c-1.40786,0.00409 -2.58027,-1.07901 -2.6875,-2.48279l-5.375,-69.875c-0.05641,-0.71324 0.17391,-1.41954 0.63994,-1.96242c0.46603,-0.54288 1.12929,-0.87752 1.84285,-0.92979zM86.07874,69.875c1.45343,0.0426 2.60939,1.23345 2.60876,2.6875v69.875c0,1.48427 -1.20323,2.6875 -2.6875,2.6875c-1.48427,0 -2.6875,-1.20323 -2.6875,-2.6875v-69.875c-0.00031,-0.72662 0.29362,-1.42241 0.81478,-1.92874c0.52116,-0.50633 1.22514,-0.78005 1.95145,-0.75876zM120.89026,69.875c0.01575,-0.00014 0.03149,-0.00014 0.04724,0h0.21521c0.71168,0.05492 1.37227,0.3907 1.83607,0.93328c0.4638,0.54258 0.6927,1.24738 0.63622,1.95893l-5.375,69.875c-0.10723,1.40378 -1.27964,2.48688 -2.6875,2.48279h-0.20996c-0.71262,-0.0536 -1.37455,-0.38881 -1.83946,-0.93154c-0.46491,-0.54273 -0.69453,-1.24827 -0.63808,-1.96067l5.375,-69.875c0.09194,-1.39234 1.2449,-2.47654 2.64026,-2.48279z"></path></g></g></svg></button>

      </td></tr>`;
   
      $("#orderTable").append(row);
      console.log(row);
   
    }
  }


  $("#orderTable").on('click','.deleteOrder',function(){
  
        var index=0;
        for(var i=0;i<OrderDB.length;i++){
          if($("#genarateId").val()==OrderDB[i].getOrderId()){
            index=i;
          }
        }
    $(this).closest('tr').remove();

});



//search Order
$("#search9").keyup(function(event){
    //alert("hi");
  if($("#search9").val() != ""){
    $("#orderTable").empty();

    let searchId=$("#search9").val();
    for(var i in OrderDB){
        if(OrderDB[i].getOrderId()===searchId){
            let row =`<tr>
                      <td>${OrderDB[i].getOrderId()}</td>
                      <td>${OrderDB[i].getOrderDate()}</td>
                      <td>${OrderDB[i].getOrderTime()}</td>
                      <td>${OrderDB[i].getCuId()}</td>
                      <td>${OrderDB[i].getItemCode()}</td>
                      <td>${OrderDB[i].getIQty()}</td>
                      <td>${OrderDB[i].getItemDiscount()}</td>
                      <td>${OrderDB[i].getAllTotal()}</td>
                      <td>
                      <button type="button" class="btn-sm border btn-danger deleteOrder" style="background-color: red;"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                           width="20" height="20"
                           viewBox="0 0 172 172"
                           style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M66.01172,0c-3.70059,-0.00235 -6.92765,2.51479 -7.82629,6.10461l-3.84754,15.39539h-29.8197c-6.16742,-0.00642 -11.54473,4.19278 -13.03333,10.17786l-3.34363,13.35876c-0.20044,0.80299 -0.01973,1.65355 0.48988,2.30568c0.50961,0.65213 1.29126,1.03309 2.11889,1.0327h10.97046l10.52954,121.17371c0.12275,1.39132 1.29079,2.4567 2.6875,2.45129h91.375c1.48427,0 2.6875,-1.20323 2.6875,-2.6875c0,-1.48427 -1.20323,-2.6875 -2.6875,-2.6875h-88.90796l-10.28284,-118.25h117.75659l-10.5033,120.70129c-0.06544,0.71421 0.15731,1.42494 0.61868,1.97404c0.46137,0.5491 1.12307,0.89102 1.83787,0.94966c0.07694,0.00392 0.15402,0.00392 0.23096,0c1.39671,0.0054 2.56475,-1.05998 2.6875,-2.45129l10.52954,-121.17371h10.97046c0.82763,0.00039 1.60928,-0.38057 2.11889,-1.0327c0.50961,-0.65213 0.69032,-1.50269 0.48988,-2.30568l-3.34363,-13.35876c-1.48859,-5.98508 -6.86591,-10.18428 -13.03332,-10.17786h-29.8302l-3.83704,-15.39539c-0.89865,-3.58982 -4.1257,-6.10697 -7.82629,-6.10461zM65.93823,5.375c0.02449,-0.00033 0.04899,-0.00033 0.07349,0h39.97656c1.23404,-0.00058 2.3099,0.83932 2.60876,2.03662l3.5221,14.08838h-52.23828l3.5221,-14.08838c0.29188,-1.17116 1.32873,-2.00408 2.53528,-2.03662zM24.51819,26.875h122.96362c3.69864,0.00005 6.92287,2.51669 7.82104,6.10461l2.50379,10.02039h-143.61328l2.50378,-10.02039c0.89817,-3.58793 4.12241,-6.10456 7.82105,-6.10461zM50.95752,64.50525c-0.17165,0.00154 -0.3432,0.00855 -0.51441,0.021c-4.43765,0.34336 -7.75758,4.21779 -7.41687,8.65564l5.375,69.875c0.33852,4.19193 3.83072,7.42637 8.03625,7.44311c0.20425,0 0.40963,-0.00206 0.62463,-0.02625c4.43765,-0.34336 7.75758,-4.21779 7.41687,-8.65564l-5.375,-69.875c-0.34438,-4.23221 -3.90048,-7.47899 -8.14648,-7.43787zM85.76379,64.50525c-4.35825,0.12774 -7.82533,3.69713 -7.82629,8.05725v69.875c0,4.4528 3.6097,8.0625 8.0625,8.0625c4.4528,0 8.0625,-3.6097 8.0625,-8.0625v-69.875c-0.00048,-2.17896 -0.88289,-4.26495 -2.44623,-5.78279c-1.56333,-1.51785 -3.67446,-2.3383 -5.85248,-2.27446zM121.2262,64.58923c-4.29031,-0.15611 -7.95046,3.0771 -8.32495,7.35388l-5.375,69.875c-0.16358,2.13204 0.5265,4.24174 1.91842,5.86499c1.39192,1.62325 3.37166,2.62707 5.5037,2.79065c0.20962,0.01613 0.41514,0.021 0.61939,0.021c4.20352,-0.01946 7.69266,-3.25319 8.03101,-7.44311l5.375,-69.875c0.14333,-2.17403 -0.59931,-4.31352 -2.05878,-5.93119c-1.45947,-1.61768 -3.51151,-2.57582 -5.68878,-2.65621zM50.85779,69.875h0.21521c1.40547,-0.00758 2.57391,1.08035 2.66651,2.48279l5.3855,69.875c0.05645,0.7124 -0.17316,1.41795 -0.63808,1.96067c-0.46491,0.54273 -1.12684,0.87794 -1.83946,0.93154h-0.20996c-1.40786,0.00409 -2.58027,-1.07901 -2.6875,-2.48279l-5.375,-69.875c-0.05641,-0.71324 0.17391,-1.41954 0.63994,-1.96242c0.46603,-0.54288 1.12929,-0.87752 1.84285,-0.92979zM86.07874,69.875c1.45343,0.0426 2.60939,1.23345 2.60876,2.6875v69.875c0,1.48427 -1.20323,2.6875 -2.6875,2.6875c-1.48427,0 -2.6875,-1.20323 -2.6875,-2.6875v-69.875c-0.00031,-0.72662 0.29362,-1.42241 0.81478,-1.92874c0.52116,-0.50633 1.22514,-0.78005 1.95145,-0.75876zM120.89026,69.875c0.01575,-0.00014 0.03149,-0.00014 0.04724,0h0.21521c0.71168,0.05492 1.37227,0.3907 1.83607,0.93328c0.4638,0.54258 0.6927,1.24738 0.63622,1.95893l-5.375,69.875c-0.10723,1.40378 -1.27964,2.48688 -2.6875,2.48279h-0.20996c-0.71262,-0.0536 -1.37455,-0.38881 -1.83946,-0.93154c-0.46491,-0.54273 -0.69453,-1.24827 -0.63808,-1.96067l5.375,-69.875c0.09194,-1.39234 1.2449,-2.47654 2.64026,-2.48279z"></path></g></g></svg></button>
            
                  </td>
                      <td></td></tr>`;
                      $("#orderTable").append(row);
        }
        
    }
  }
  })
 


function clearAddToCart(){
    // $("#cmbItemCode").val("");
    $("#txtNameItem").val("");
    $("#txtPriceItem").val("");
    $("#txtQtyHandItem").val("");
 //$("#txtOrderQtyItem").val("");
 //$("#txtDiscount").val("");
    }

    
    
function clearAll(){
   $("#iDate").val("");
   $("#selectTime").val("");
//    $("#cmbCusId").val("");
   $("#txtCusName").val("");
   $("#txtCusAddress").val("");
   $("#txtCusSalary").val("");
   $("#totalLbl").text("");
   $("#SubtotalLbl").text("");
}


$("#cartTable").on('click','.deleteCart',function(){
    $(this).closest('tr').remove();
});




$(".updateCart").click(function(){

    alert("hello");
    itemCode1=$("#cmbItemCode").val();
    orderQty1=$("#txtOrderQtyItem").val();

   addToCart();

 
});


// function total() {
//     let qty = $("#txtOrderQtyItem").val();
//     let price = $("#txtPriceItem").val()
//     $(".totalLbl").val(qty * price)
// };