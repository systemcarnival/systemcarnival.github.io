$(function () {
    $('#demo-form').parsley().on('field:validated', function() {
      var ok = $('.parsley-error').length === 0;
      $('.bs-callout-info').toggleClass('hidden', !ok);
      $('.bs-callout-warning').toggleClass('hidden', ok);
    })
    .on('form:submit', function() {
      return false; // Don't submit form for this demo
    });
    
    $('select').selectize({
      onInitialize: function(){
        $("#select-country-selectized").attr("data-parsley-errors-container", "#errors");
      }
    });
    
    
      var onClass = "on";
    var showClass = "show";
    
    $("input, .selectize-control ").bind("checkval",function(){
      var label = $(this).parent().find('label');
      if(this.value !== ""){
        label.addClass(showClass);
      } else {
        label.removeClass(showClass);
      }
    }).on("keyup",function(){
      $(this).trigger("checkval");
    }).on("focus",function(){
      $(this).prev("label").addClass(onClass);
    }).on("blur",function(){
        $(this).prev("label").removeClass(onClass);
    }).trigger("checkval");
  });