"use strict";

function User(obj){
    this.username = "";
    this.score = "";
    this.decks = [];
    this.srs = {};
    this.history = [];
    this.type = "user";
    for (var prop in obj) this[prop] = obj[prop];
}



module.exports = User