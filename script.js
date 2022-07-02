$(document).ready(function() {
  $.getJSON("https://raw.githubusercontent.com/estaudere/estaudere.github.io/master/data.json", function(data) {
    addSocials(data.socials);
  })
});

function addSocials(socials) {
  $.each(socials, function(i, val) {
    $("#connect > ul").append("<li><a href='" + val.link + "'><i class='" + val.icon + "'></i>" + val.title + "</a></li>");
  })
}