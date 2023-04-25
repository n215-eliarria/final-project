export var wordArray = ["home", "about", "tours", "offers", "blog", "contact", "israel", "usa", "australia", "new-zealand", "france", "egypt", "japan", "canada", "uae"];

export function routes(){
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#","");

    if(pageID !=""){
        $.get(`${pageID}.html`, function (data){
            console.log("data" + data);
            $("#app").html(data);
        })
        console.log(pageID);
    }else{
        $.get(`home.html`, function (data){
            console.log("data" + data);
            $("#app").html(data);
        });
        console.log ("home");

    }

    if(pageID == "home"){
        $("nav a").css("color", "white");
        $(".logob img").attr("src","images/images/logo/logo-white.png");
        $('.nav-holder nav').css('border-bottom', 'solid white');
    } else{
        $("nav a").css("color", "black");
        $(".logob img").attr("src","images/images/logo/logo-black.png");
        $('.nav-holder nav').css('border-bottom', 'solid black');

    }

}
