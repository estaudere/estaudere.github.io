$(document).ready(function() {

  $.getScript("", function(){

    alert("Script loaded and executed.");
    if (window.console) console.log('foo');
    console.log(data);
  });

});