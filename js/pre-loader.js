function counter() {
  var count = setInterval(function () {
    var c = parseInt($(".counter").text());
    $(".counter").text((++c).toString());

    if (c == 100) {
      clearInterval(count);
      $(".counter").addClass("hide");
      $(".bagcampus-dev-tag").addClass("hide");
      $(".preloader").addClass("active");
    }
  }, 60);
}
counter();

$(document).ready(function () {
  $("#open-my-loader").append(
    '<div class="preloader"> <div class="p-4"></div> <div class="counter">0</div> <div class="bagcampus-dev-tag"> <div class="event_area p-0"> <div class="double_line text-center p-3">BAGCAMPUS <br> POWER CAMP 2021</div> </div> </div> </div>'
  );
});
