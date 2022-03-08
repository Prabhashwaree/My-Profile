function Orders(orderId,date,time,cuId,iCode,itemQTY,iDiscount,allTotal){
    var _orderId=orderId;
    var _date=date;
    var _time=time;
    var _cuId=cuId;
    var _iCode=iCode;
    var _itemQTY=itemQTY;
    var _iDiscount=iDiscount;
    var _allTotal=allTotal;

    this.getOrderId=function(){
        return _orderId;
    }
    this.setOrderId=function(orderId){
        _orderId=orderId;
    }

    this.getOrderDate=function(){
        return _date;
    }
    this.setOrderDate=function(date){
        _date=date;
    }

    this.getOrderTime=function(){
        return _time;
    }
    this.setOrderTime=function(time){
        _time=time;
    }

    this.getCuId=function(){
        return _cuId;
    }
    this.setCuId=function(cuId){
        _cuId=cuId;
    }
    this.getItemCode=function(){
        return _iCode;
    }
    this.setItemCode=function(iCode){
        _iCode=iCode;
    }
    this.getIQty=function(){
        return _itemQTY;
    }
    this.setIQty=function(itemQTY){
        _itemQTY=itemQTY;
    }
    this.getItemDiscount=function(){
        return _iDiscount;
    }
    this.setItemDiscount=function(iDiscount){
        _iDiscount=iDiscount;
    }
    this.getAllTotal=function(){
        return _allTotal;
    }
    this.setAllTotal=function(allTotal){
        _allTotal=allTotal;
    }
}