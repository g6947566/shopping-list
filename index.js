$(function(){
    $("#js-shopping-list-form").submit(function(event){
        event.preventDefault();
        const userTextDisplay =$(event.currentTarget).find("#shopping-list-entry");
        $('ul').append(`<li>`+ `<div class="shopping-item">${userTextDisplay.val()} </div>` +`<button><div class="shopping-item-toggle">check</div></button>` + " " + `<button><div class="shopping-item-delete">delete</div></button>`);
        

    });

})


