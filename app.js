/**
 * Created by JakeSchreiber on 10/23/15.
 */
var peopleArray = ["Dana", "Pui", "Kelly", "Sam"];

var indexTracker = 0;

var firstTime = true;

$(document).ready(function(){
    createCarousel(peopleArray);
    updateIndexPoints();
    $("#next").on('click', nextSlide);
    $("#prev").on('click', prevSlide);

});

function createCarousel(array){


    $("#lecture").append("<div class='main'></div>");
    var $el = $("#lecture").children().last();
    createNavButtons($el);
    createIndexPoints(array, $el)
}

function createIndexPoints(array, $el){ //function in function carousel is Nerdery Assessment
    for(var i=0;i<array.length;i++){
        $el.append("<div class='index-point' id='index" + i + "'></div>"); //.append takes a string
    }
}

function createNavButtons($el){
    $el.append("<div id='prev' class='nav-button'>Left</div>"); //ID uses camel case, Class uses dash-
    $el.append("<div id='next' class='nav-button'>Right</div>");
}

function updateIndexPoints(){
    for(var i=0;i<peopleArray.length;i++){
            $("#index" + i).removeClass("index-point-active");

        if(i == indexTracker){
            $("#index" + i).addClass("index-point-active");
        }
    }

    if(firstTime == true) {
        $("#mainContent").append("<p>" + peopleArray[indexTracker] + "</p>");
        console.log("When True: " , firstTime);
        firstTime = false;
    } else {
        $("#mainContent").find("p").text(peopleArray[indexTracker]);

        console.log("When False: " ,firstTime);
    }
}

function nextSlide(){
    indexTracker++;
    if(indexTracker >= peopleArray.length){
        indexTracker = 0;
    }
    updateIndexPoints();
}

function prevSlide(){
    indexTracker--;
    if(indexTracker < 0){
        indexTracker = peopleArray.length -1;
    }
    updateIndexPoints();
}

//
//$(document).ready(function(){
//    $("#lecture").on('click', '.deleteButton', function(){
//        $(this).parent().remove();
//    })
//
//    //$("#lecture").text("<p>Some Stuff</p>");
//    //$("#lecture").text("Some Stuff");
//    appendDom(peopleArray);
//
//
//
//});
//
//function appendDom(array){
//    for(var i=0;i<array.length;i++){
//        $("#lecture").append("<div class='person'></div>");
//        var $el = $("#lecture").children().last();
//        $el.append("<p>" + array[i] + "</p>");
//        $el.append("<button class='deleteButton'>Delete</button>");
//
//    }
//
//
//}