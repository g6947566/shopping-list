$(function(){
    $("#js-shopping-list-form").submit(function(event){
        event.preventDefault();
        const userTextDisplay =$(event.currentTarget).find("#shopping-list-entry");
        $('ul').append("<li>" + `user text is: ${userTextDisplay.val()}`);
        // userTextDisplay.val("");

    });

})


