// Abstract controller

function Controller(router){
    this.router = router;
}

Controller.prototype.get=function(id){
    return "Mongo go get ID and cast it to certain type";
}
Controller.prototype.getAll = function(arrayIDs){
    return "Mongo go get all IDs and cast all of them to object type";
}
Controller.prototype.create = function(){
    return "Mongo do what ever business logic u need to do b4 create"
}
Controller.prototype.update = function(){
    return "Mongo do what ever business logic u need to do b4 update"
}
Controller.prototype.delete = function(){
    return "Mongo do what ever business logic u need to do b4 delete"
}


module.exports = Controller;