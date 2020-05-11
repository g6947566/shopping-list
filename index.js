function userListForm(){

 $("#js-shopping-list-form").submit(function(event){
    event.preventDefault();
    const userVal = $("#shopping-list-entry").val();
    const outUser = `
    <li>
    <span class="shopping-item">${userVal}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
       </button>
    </div>
  </li>
    `;

    $("ul").append(outUser);
  });

   $(".shopping-list").on("click", ".shopping-item-toggle", function(e){
     $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
    });
    
   $(".shopping-list").on("click", ".shopping-item-delete", function(e){
    $(this).closest("li").remove();
     });
  

}

$(userListForm);

