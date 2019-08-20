$("ul").on("click", "li",function(){
    //EASY WAY TO DO
    $(this).toggleClass("completed");

    //HARD WAY TO DO 
    // if( $(this).css("color") === "rgb(128, 128, 128)" ){
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     });
    // }else{
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     });
    // }
    
});


//Click on X to delete Todo
$("ul").on("click", "span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove()
    });
    event.stopPropagation();
});

$("input[type='text']").keypress((event)=>{
    if(event.which === 13){
        var todoText = $("input[type='text']").val();
        $("input[type='text']").val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +"</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})

