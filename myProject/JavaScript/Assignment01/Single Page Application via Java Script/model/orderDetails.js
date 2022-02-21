$("#cmbCusId").click(function(){
    console.log("Enter");
    for(var i of CustomerDB){
        let cusIdValue=`<option>${i.id}</option>`;

        $("#cmbCusId").append(cusIdValue);
    }
    
});