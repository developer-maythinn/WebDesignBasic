// $(document).ready(function() {
//     $("button").click(function() {
//         $(this).hide();
//     })
// })

// $(document).ready(function() {
//     $("#btn").dblclick(function() {
//         // $("p").css("background", "red")
//         $("p").css({
//             "background": "violet",
//             "display": "inline"
//         })
//     })
// })

$(document).ready(function () {
  $("button").on({
    click: function () {
      $(this).css("background", "red");
    },
    mouseenter: function () {
      $(this).css("background", "yellow");
    },
  });
});
