function item(code,name,price,quantity){
    var _itemCode=code;
    var _itemName=name;
    var _itemPrice=price;
    var _itemQuantity=quantity;

    this.getCusId=function(){
        return itemCode;
    }
    this.setCusId=function(itemCode){
        _itemCode=itemCode;
    }

    this.getCusName=function(){
        return _itemName;
    }
    this.setCusName=function(itemName){
        _itemName=itemName;
    }

    this.getCusAddress=function(){
        return _itemPrice;
    }
    this.setCusAddress=function(itemPrice){
        _itemPrice=itemPrice;
    }

    this.getCusSalary=function(){
        return _itemQuantity;
    }
    this.setCusSalary=function(itemQuantity){
        _itemQuantity=itemQuantity;
    }
}