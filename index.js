function userListForm(){

    $("#js-shopping-list-form").submit(function(event){
        event.preventDefault();
        // console.log("submit works");
        const userTextDisplay =$("#shopping-list-entry").val();
        // console.log(userTextDisplay);
        
        $('ul').append(`<li>`+ `<div class="shopping-item">${userTextDisplay} </div>` 
        +`<button><div class="shopping-item-toggle">check</div></button>` + " " 
        + `<button><div class="shopping-item-delete">delete</div></button>`);
             
    });

    $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
        $(this).parent().parent().remove(); 
     });

    $(".shopping-list").on("click", ".shopping-item-toggle", function(event){
         $(this).parent().parent().find(".shopping-item").toggleClass('shopping-item__checked');
    });

}


$(userListForm);

