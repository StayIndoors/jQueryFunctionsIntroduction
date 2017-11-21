
$( document ).ready(function() {
    console.log( "document loaded" );

    $("#click button").click(function() {
        console.log("You clicked it like Adam Sandler!");
    });
    
    $("#hide button").click(function() {
        $("#hide p").hide();
    });
    
    $("#show button").click(function() {
        $("#show p").show();
    });
    
    $("#toggle button").click(function() {
        $("#toggle p").toggle();
    });
    
    $("#slideDown button").click(function() {
        $("#slideDown p").slideDown();
    });
    
    $("#slideUp button").click(function() {
        $("#slideUp p").slideUp();
    });
    
    $("#slideToggle button").click(function() {
        $("#slideToggle p").slideToggle();
    });
    
    $("#fadeIn button").click(function() {
        $("#fadeIn p").fadeIn();
    });
    
    $("#fadeOut button").click(function() {
        $("#fadeOut p").fadeOut();
    });
    
    $("#addClass button").click(function() {
        $("#addClass p").addClass("red");
    });
    
    $("#before button").click(function() {
        $("#before p").before("<p>some junk</p>");
    });
    
    $("#after button").click(function() {
        $("#after p").after("<p>some junk</p>");
    });
    
    $("#append button").click(function() {
        $("#append p").append("some junk");
    });
    
    $("#html button").click(function() {
        $("#html p").html("<h1>Yikes! I'm huge!</h1>");
    });
    
    $("#attribute button").click(function() {
        alert($("#attribute a").attr("href"))
    });

    $("#value button").click(function() {
        $("#value input:text").val("Wow. This works.")
    });

    $("#text button").click(function() {
        $("#text p").text("I guess it wasn't that important.")
    });

    $("#data #button1").click(function() {
        $("#data").data("warning", "Your computer will self-destruct in 30 seconds. You better hide, Tom Cruise.")
    });

    $("#data #button2").click(function() {
        alert($("#data").data("warning"))
    });
});