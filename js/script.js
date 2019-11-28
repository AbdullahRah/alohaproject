$(document).ready(function() {
  // All of your code will go here//
  const elem = document.querySelector(".main-carousel");
  const flkty = new Flickity(elem, {
    // options
    cellAlign: "left",
    wrapAround: true,
    freeScroll: true
  });
  $(".carouse-cell").append('<button class="add-item">Add to Cart</button>');

  $("#subscribe").on("click", function(e) {
    if ($("#your-email").val() == null || $("#your-email").val() == undefined) {
      $("#your-email").focus();
      alert("Please fill the required input at the Email Textbox");
      return;
    } else {
      alert("Email Sent, Thank you for Subscribing!");
    }
  });

  e.preventDefault();
});
