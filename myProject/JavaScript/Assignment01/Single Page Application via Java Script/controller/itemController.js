// <!-- -------------------------- Item jQuery ---------------------------------- -->
// -------------------auto save table data (practice)----------------------


function buttonDisabled(){
  let textFeald=[$("#txtItemCode"),$("#txtItemName"),$("#txtItemPrice"),$("#txtItemQuantity")];
  let result=false;

  for (let index = 0; index < textFeald.length; index++) {
    if(textFeald[index].css('border-color')==="rgb(255, 0, 0)"){
        result = true;
    }
    
  }
  if(result){
    $("#btnItemSave").attr("disabled",true);
    console.log("disabled");
  }else{
    $("#btnItemSave").attr("disabled",false);
    console.log("enabled");
  }

}


 // ----------------------------Item Code-------------------------------------------

var itemCode=/^(I-)[0-9]{4}$/;
$("#txtItemCode").keyup(function(){
  
  setTimeout(function () {
    buttonDisabled();
   }, 150);

  let input=$("#txtItemCode").val();
  
  if(itemCode.test(input)){
    $("#txtItemCode").css('border','1px solid green');
    $("#txtItemName").css('border','1px solid red');
    // $("#errors").text("ID is Correct..");

    $("#txtItemCode").keydown(function(event){
      if(event.key=="Enter"){
        $("#txtItemName").focus();
        $("#txtItemCode").css('border','1px solid green');
        // $("#errors").hide();
      }
  });

  }else{
    $("#txtItemCode").css('border','1px solid red');
    // $("#btnItemSave").attr("disabled",true);
    // $("#errors").text("Customer ID is Incorrect..");
  }

})
 // ----------------------------Item Name-------------------------------------------

var itemName=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/;
$("#txtItemName").keyup(function(){
  

  setTimeout(function () {
    buttonDisabled();
   }, 150);

  let input=$("#txtItemName").val();
  
  if(itemName.test(input)){
    $("#txtItemName").css('border','1px solid green');
    $("#txtItemPrice").css('border','1px solid red');
    // $("#errors1").text("ID is Correct..");

    $("#txtItemName").keydown(function(event){
      if(event.key=="Enter"){
        $("#txtItemPrice").focus();
        $("#txtItemName").css('border','1px solid green');
        // $("#btnItemSave").attr("disabled",false);
        // $("#errors1").hide();

      }
  });

  }else{
    $("#txtItemName").css('border','1px solid red');
    $("#btnItemSave").attr("disabled",true);
    // $("#errors1").text("Customer ID is Incorrect..");

  }

})



// ----------------------------Item Prices-------------------------------------------

var itemPrices=/^[0-9][0-9][0-9][0-9]*([.])[0-9]{2}?$/;
$("#txtItemPrice").keyup(function(){
  
  setTimeout(function () {
    buttonDisabled();
   }, 150);


  let input=$("#txtItemPrice").val();
  
  if(itemPrices.test(input)){
    $("#txtItemPrice").css('border','1px solid green');
    $("#txtItemQuantity").css('border','1px solid red');
    // $("#errors1").text("ID is Correct..");

    $("#txtItemPrice").keydown(function(event){
      if(event.key=="Enter"){
        $("#txtItemQuantity").focus();
        $("#txtItemPrice").css('border','1px solid green');
        // $("#btnItemSave").attr("disabled",false);
        // $("#errors1").hide();

      }
  });

  }else{
    $("#txtItemPrice").css('border','1px solid red');
    $("#btnItemSave").attr("disabled",true);
    // $("#errors1").text("Customer ID is Incorrect..");
  }
})



// ----------------------------Item Quantity-------------------------------------------
var itemQuantity=/^[0-9]{1,20}$/;
$("#txtItemQuantity").keyup(function(){
  

  setTimeout(function () {
    buttonDisabled();
   }, 150);


  let input=$("#txtItemQuantity").val();
  
  if(itemQuantity.test(input)){
    $("#txtItemQuantity").css('border','1px solid green');
    // $("#errors3").text("Name is Correct..");
    
    $("#btnItemSave").attr("disabled",false);
    // $("#errors3").hide();



  }else{
    $("#txtItemQuantity").css('border','1px solid red');
    // $("#btnItemSave").attr("disabled",true);
    // $("#errors3").text("Name is Incorrect..");
  }

})


$("#search1").keyup(function(event){
  var searchItemId=$("#search1").val();
  var responceId=searchItem(searchItemId);

  if(event.key=="Enter"){
   
    if(responceId){
      $("#txtItemCode").val(responceId.getItemCode());
        $("#txtItemName").val(responceId.getItemName());
        $("#txtItemPrice").val(responceId.getItemPrice());
        $("#txtItemQuantity").val(responceId.getItemQuantity());

    }else{
      // alert("hi");
    }

  }
})


function searchItem(code){
  for(let i=0;i<ItemDB.length;i++){
    if(ItemDB[i].getItemCode()==code){
      return ItemDB[i];
    }
  }
}


function saveItem(){
  var itemCode =  $("#txtItemCode").val();
  var itemName=   $("#txtItemName").val();
  var itemPrice =  $("#txtItemPrice").val();
  var itemQuantity =  $("#txtItemQuantity").val();



    ItemDB.push(new item(itemCode,itemName,itemPrice,itemQuantity));
    setCmbDataItem("<option>" + itemCode + "</option>");
    console.log(itemCode);
}




function loadAllItem(){
  $("#selecterowItem").empty();
    for(var i of ItemDB){

  let itemData=`<tr><td>${i.getItemCode()}</td>
    <td>${i.getItemName()}</td>
    <td>${i.getItemPrice()}</td>
    <td>${i.getItemQuantity()}</td>
    <td><button  type="button" class="btn-sm border btn-primary updateItems" id="updateItems" style="height: 9%;"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          width="20" height="20"
          viewBox="0 0 172 172"
          style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M86,17.2c-20.51564,0 -38.98161,9.01966 -51.6,23.31406v-12.99406c0.02542,-1.85848 -0.7021,-3.6482 -2.01701,-4.96184c-1.3149,-1.31364 -3.10532,-2.03944 -4.96378,-2.01223c-3.79707,0.05565 -6.83116,3.17694 -6.77922,6.97406v34.4h10.48125c0.7868,0.13806 1.59164,0.13806 2.37844,0h21.54031c2.48118,0.03509 4.78904,-1.2685 6.03987,-3.41161c1.25083,-2.1431 1.25083,-4.79369 0,-6.93679c-1.25083,-2.1431 -3.55869,-3.4467 -6.03987,-3.41161h-8.98297c10.01878,-10.58167 24.16927,-17.2 39.94297,-17.2c29.44303,0 53.27622,22.96072 54.87203,51.97625c0.1065,2.47514 1.5354,4.70194 3.74106,5.83009c2.20566,1.12815 4.84752,0.98346 6.91679,-0.37882c2.06927,-1.36228 3.24643,-3.7318 3.08199,-6.20377c-1.98867,-36.15871 -31.97938,-64.98375 -68.61187,-64.98375zM24.45625,82.46594c-1.94157,-0.0575 -3.81699,0.70832 -5.16334,2.10843c-1.34636,1.40011 -2.03821,3.30406 -1.90478,5.24189c1.98867,36.15871 31.97938,64.98375 68.61188,64.98375c20.51337,0 38.982,-9.01928 51.6,-23.31406v12.99406c-0.03509,2.48118 1.2685,4.78904 3.41161,6.03987c2.1431,1.25083 4.79369,1.25083 6.93679,0c2.1431,-1.25083 3.4467,-3.55869 3.41161,-6.03987v-34.4h-10.62235c-0.69905,-0.10845 -1.41064,-0.10845 -2.10969,0h-21.66797c-2.48118,-0.03509 -4.78904,1.2685 -6.03987,3.41161c-1.25083,2.1431 -1.25083,4.79369 0,6.93679c1.25083,2.1431 3.55869,3.4467 6.03987,3.41161h8.97625c-10.01773,10.58035 -24.1646,17.2 -39.93625,17.2c-29.44303,0 -53.27622,-22.96072 -54.87203,-51.97625c-0.14695,-3.60973 -3.06058,-6.49108 -6.67172,-6.59781z"></path></g></g></svg></button>
                        
          <button type="button" class="btn-sm border btn-danger deleteItem" style="background-color: red;"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
          width="20" height="20"
          viewBox="0 0 172 172"
          style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M66.01172,0c-3.70059,-0.00235 -6.92765,2.51479 -7.82629,6.10461l-3.84754,15.39539h-29.8197c-6.16742,-0.00642 -11.54473,4.19278 -13.03333,10.17786l-3.34363,13.35876c-0.20044,0.80299 -0.01973,1.65355 0.48988,2.30568c0.50961,0.65213 1.29126,1.03309 2.11889,1.0327h10.97046l10.52954,121.17371c0.12275,1.39132 1.29079,2.4567 2.6875,2.45129h91.375c1.48427,0 2.6875,-1.20323 2.6875,-2.6875c0,-1.48427 -1.20323,-2.6875 -2.6875,-2.6875h-88.90796l-10.28284,-118.25h117.75659l-10.5033,120.70129c-0.06544,0.71421 0.15731,1.42494 0.61868,1.97404c0.46137,0.5491 1.12307,0.89102 1.83787,0.94966c0.07694,0.00392 0.15402,0.00392 0.23096,0c1.39671,0.0054 2.56475,-1.05998 2.6875,-2.45129l10.52954,-121.17371h10.97046c0.82763,0.00039 1.60928,-0.38057 2.11889,-1.0327c0.50961,-0.65213 0.69032,-1.50269 0.48988,-2.30568l-3.34363,-13.35876c-1.48859,-5.98508 -6.86591,-10.18428 -13.03332,-10.17786h-29.8302l-3.83704,-15.39539c-0.89865,-3.58982 -4.1257,-6.10697 -7.82629,-6.10461zM65.93823,5.375c0.02449,-0.00033 0.04899,-0.00033 0.07349,0h39.97656c1.23404,-0.00058 2.3099,0.83932 2.60876,2.03662l3.5221,14.08838h-52.23828l3.5221,-14.08838c0.29188,-1.17116 1.32873,-2.00408 2.53528,-2.03662zM24.51819,26.875h122.96362c3.69864,0.00005 6.92287,2.51669 7.82104,6.10461l2.50379,10.02039h-143.61328l2.50378,-10.02039c0.89817,-3.58793 4.12241,-6.10456 7.82105,-6.10461zM50.95752,64.50525c-0.17165,0.00154 -0.3432,0.00855 -0.51441,0.021c-4.43765,0.34336 -7.75758,4.21779 -7.41687,8.65564l5.375,69.875c0.33852,4.19193 3.83072,7.42637 8.03625,7.44311c0.20425,0 0.40963,-0.00206 0.62463,-0.02625c4.43765,-0.34336 7.75758,-4.21779 7.41687,-8.65564l-5.375,-69.875c-0.34438,-4.23221 -3.90048,-7.47899 -8.14648,-7.43787zM85.76379,64.50525c-4.35825,0.12774 -7.82533,3.69713 -7.82629,8.05725v69.875c0,4.4528 3.6097,8.0625 8.0625,8.0625c4.4528,0 8.0625,-3.6097 8.0625,-8.0625v-69.875c-0.00048,-2.17896 -0.88289,-4.26495 -2.44623,-5.78279c-1.56333,-1.51785 -3.67446,-2.3383 -5.85248,-2.27446zM121.2262,64.58923c-4.29031,-0.15611 -7.95046,3.0771 -8.32495,7.35388l-5.375,69.875c-0.16358,2.13204 0.5265,4.24174 1.91842,5.86499c1.39192,1.62325 3.37166,2.62707 5.5037,2.79065c0.20962,0.01613 0.41514,0.021 0.61939,0.021c4.20352,-0.01946 7.69266,-3.25319 8.03101,-7.44311l5.375,-69.875c0.14333,-2.17403 -0.59931,-4.31352 -2.05878,-5.93119c-1.45947,-1.61768 -3.51151,-2.57582 -5.68878,-2.65621zM50.85779,69.875h0.21521c1.40547,-0.00758 2.57391,1.08035 2.66651,2.48279l5.3855,69.875c0.05645,0.7124 -0.17316,1.41795 -0.63808,1.96067c-0.46491,0.54273 -1.12684,0.87794 -1.83946,0.93154h-0.20996c-1.40786,0.00409 -2.58027,-1.07901 -2.6875,-2.48279l-5.375,-69.875c-0.05641,-0.71324 0.17391,-1.41954 0.63994,-1.96242c0.46603,-0.54288 1.12929,-0.87752 1.84285,-0.92979zM86.07874,69.875c1.45343,0.0426 2.60939,1.23345 2.60876,2.6875v69.875c0,1.48427 -1.20323,2.6875 -2.6875,2.6875c-1.48427,0 -2.6875,-1.20323 -2.6875,-2.6875v-69.875c-0.00031,-0.72662 0.29362,-1.42241 0.81478,-1.92874c0.52116,-0.50633 1.22514,-0.78005 1.95145,-0.75876zM120.89026,69.875c0.01575,-0.00014 0.03149,-0.00014 0.04724,0h0.21521c0.71168,0.05492 1.37227,0.3907 1.83607,0.93328c0.4638,0.54258 0.6927,1.24738 0.63622,1.95893l-5.375,69.875c-0.10723,1.40378 -1.27964,2.48688 -2.6875,2.48279h-0.20996c-0.71262,-0.0536 -1.37455,-0.38881 -1.83946,-0.93154c-0.46491,-0.54273 -0.69453,-1.24827 -0.63808,-1.96067l5.375,-69.875c0.09194,-1.39234 1.2449,-2.47654 2.64026,-2.48279z"></path></g></g></svg></button></td></tr>`;
          
          $('#selecterowItem').append(itemData);


  }
  $(".updateItems").click(function(){

    alert("hello");
   let iCode=$("#txtItemCode").val();
   let itName=$("#txtItemName").val();
   let iPrice=$("#txtItemPrice").val();
   let iQuantity=$("#txtItemQuantity").val();

   for(var i=0;i<ItemDB.length;i++){
     
     if($("#txtItemCode").val()==ItemDB[i].getItemCode()){
       
       ItemDB[i].setItemCode(iCode);
       ItemDB[i].setItemName(itName);
       ItemDB[i].setItemPrice(iPrice);
       ItemDB[i].setItemQuantity(iQuantity);
     }

   }
   loadAllItem();

 
});
}


//-------DeleteItem---------
$("#selecterowItem").on('click','.deleteItem',function(){
  var index=0;
  for(var i=0;i<ItemDB.length;i++){
    if($("#txtCustomerId").val()==ItemDB[i].getItemCode()){
      index=i;
    }
  }

  ItemDB.splice(index,1);

      $("#txtItemCode").val("");
      $("#txtItemName").val("");
      $("#txtItemPrice").val("");
      $("#txtItemQuantity").val("");

      $(this).closest('tr').remove();
})




//-------UpdateItem---------




 $("#btnItemSave").click(function () {

      $("#selecterowItem>tr").off("click");

      saveItem();
      loadAllItem();

    $("#txtItemCode").css('border','black');
    $("#txtItemName").css('border','black');
    $("#txtItemPrice").css('border','black');
    $("#txtItemQuantity").css('border','black');

    // ----select table row data move to text feald-----

    $("#selecterowItem>tr").click(function(){
      var code = $(this).find("td:eq(0)").text();
      var name = $(this).find("td:eq(1)").text();
      var price = $(this).find("td:eq(2)").text();
      var quantity = $(this).find("td:eq(3)").text();



    console.log(code,name,price,quantity);

    $("#txtItemCode").val(code);
    $("#txtItemName").val(name);
    $("#txtItemPrice").val(price);
    $("#txtItemQuantity").val(quantity);

    })


    });



    // ----clear text feald data------

    $("#btnItemSave").click(function () {
      $("#txtItemCode").val('');
      $("#txtItemName").val('');
      $("#txtItemPrice").val('');
      $("#txtItemQuantity").val('');

}); 

