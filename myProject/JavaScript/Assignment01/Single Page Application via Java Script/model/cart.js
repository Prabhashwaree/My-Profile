function cart(cartICode,cartIName,cartIPrice,orderQty,cartTotal) {
    var __cartICode=cartICode;
    var __cartIName=cartIName;
    var __orderQty=orderQty;
    var __cartIPrice=cartIPrice;
    var __total=cartTotal;
    
    this.getcartICode=function () {
        return __cartICode;
    }
    this.setcartICode=function (iCode) {
        __cartICode=iCode;
    }
    this.getcartIName=function () {
        return __cartIName;
    }
    this.setcartIName=function (iName) {
        __cartIName=iName;
    }
    this.getcartIPrice=function () {
        return __cartIPrice;
    }
    this.setcartIPrice=function (iPrice) {
        __cartIPrice=iPrice;
    }
    this.getcartOQty=function () {
        return __orderQty;
    }
    this.setcartOQty=function (qty) {
        __orderQty=qty;
    }
    this.getTotal=function () {
        return __total;
    }
    this.setTotal=function (total) {
        __total=total;
    }
}