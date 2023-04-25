import * as MODEL from "../model/model.js";


function initURLListener(){
    $(window).on("hashchange", MODEL.routes);
    MODEL.routes();
}

$(document).ready(function(){
    console.log(MODEL.wordArray);
    initURLListener();
});