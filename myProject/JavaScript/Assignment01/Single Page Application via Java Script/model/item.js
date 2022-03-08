function item(code,name,price,quantity){
    var _itemCode=code;
    var _itemName=name;
    var _itemPrice=price;
    var _itemQuantity=quantity;

    this.getItemCode=function(){
        return _itemCode;
    }
    this.setItemCode=function(itemCode){
        _itemCode=itemCode;
    }

    this.getItemName=function(){
        return _itemName;
    }
    this.setItemName=function(itemName){
        _itemName=itemName;
    }

    this.getItemPrice=function(){
        return _itemPrice;
    }
    this.setItemPrice=function(itemPrice){
        _itemPrice=itemPrice;
    }

    this.getItemQuantity=function(){
        return _itemQuantity;
    }
    this.setItemQuantity=function(itemQuantity){
        _itemQuantity=itemQuantity;
    }
}