function showProducts2(minPrice, maxPrice) {
    $("#requests .request-block").hide().filter(function() {
        var price = parseInt($(this).data("price"), 10);
        return price >= minPrice && price <= maxPrice;
    }).show();
}
function showProducts(minPrice, maxPrice) {
    $("#requests .request-block").hide().filter(function() {
        var percents = parseInt($(this).data("percents"), 10);
        return percents >= minPrice && percents <= maxPrice;
        
    }).show();
}
$(function() {
    var options = {
        range: true,
        min: 0,
        max: 100,
        values: [0, 100],
        slide: function(event, ui) {
            var min = ui.values[0],
                max = ui.values[1];

            $("#amount").val(min + "%" + " - " + max + "%");
            showProducts(min, max);
        }
    }, min, max;

    $("#slider-range").slider(options);

    min = $("#slider-range").slider("values", 0);
    max = $("#slider-range").slider("values", 1);

    $("#amount").val(min + "%" + " - " + max + "%");

    showProducts(min, max);
});

$(function() {
    var options = {
        range: true,
        min: 0,
        max: 9999,
        values: [0, 9999],
        slide: function(event, ui) {
            var min = ui.values[0],
                max = ui.values[1];

            $("#percent").val("$" + min + " - $" + max);
            showProducts2(min, max);
        }
    }, min, max;

    $("#slider-range2").slider(options);

    min = $("#slider-range2").slider("values", 0);
    max = $("#slider-range2").slider("values", 1);

    $("#percent").val("$" + min + " - $" + max);

    showProducts2(min, max);
});

$(document).ready(function(){
    $(".reqrow").click(function(){
      $(".hide").animate({height:'toggle',marginBottom:'0'},300);
    });
  });

  var cw = $('.round').width();
  $('.round').css({
      'height': cw + 'px'
  });