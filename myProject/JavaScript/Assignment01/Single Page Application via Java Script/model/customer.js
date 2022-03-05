function customer(id,name,address,salary){
    var _cusId=id;
    var _cusName=name;
    var _cusAddress=address;
    var _cusSalary=salary;

    this.getCusId=function(){
        return _cusId;
    }
    this.setCusId=function(cusId){
        _cusId=cusId;
    }

    this.getCusName=function(){
        return _cusName;
    }
    this.setCusName=function(cusName){
        _cusName=cusName;
    }

    this.getCusAddress=function(){
        return _cusAddress;
    }
    this.setCusAddress=function(cusAddress){
        _cusAddress=cusAddress;
    }

    this.getCusSalary=function(){
        return _cusSalary;
    }
    this.setCusSalary=function(cusSalary){
        _cusSalary=cusSalary;
    }
}