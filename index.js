function userListForm(){

    $("#js-shopping-list-form").submit(function(event){
        event.preventDefault();
        // console.log("submit works");
        const userTextDisplay =$("#shopping-list-entry").val();
        // console.log(userTextDisplay);
        
        $('ul').append(`<li>`+ `<div class="shopping-item">${userTextDisplay} </div>` 
        +`<button class="shopping-item-toggle">check</button>` + " " 
        + `<button class="shopping-item-delete">delete</button>`);
             
    });

    $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
        $(this).parent().parent().remove(); 
     });

    $(".shopping-list").on("click", ".shopping-item-toggle", function(event){
         $(this).parent().parent().find(".shopping-item").toggleClass('shopping-item__checked');
    });

}


$(userListForm);

