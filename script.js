$(document).ready(function() {
  $.getJSON("https://raw.githubusercontent.com/estaudere/estaudere.github.io/master/data.json", function(data) {
    addSocials(data.socials);
    addCurrently(data.currently['2022'], '2022');
    addCurrently(data.currently['2021'], '2021');
  })
});

function addSocials(socials) {
  $.each(socials, function(i, val) {
    $("#connect > ul").append("<li><a href='" + val.link + "'><i class='" + val.icon + "'></i>" + val.title + "</a></li>");
  })
}

function addCurrently(currently_year, year) {
  $.each(currently_year, function(i, val) {
    text = val.title + "<span class='company'>" + val.company + "</span>";
    if (val.link) {
      $("#" + year + " + ul").append("<li><a href='" + val.link + "'>" + text + "<i class='fa fa-arrow-right-long'></i></a></li>");
    }
    else {
      $("#" + year + " + ul").append("<li>" + text + "</li>");
    }
  })
}

function addProjects(projects) {
  $.each(projects, function(i, val) {
    link = ""
    gh_link = ""

    if (val['link']) {
      link = `<a href=${val.link}><i class="fa fa-arrow-up-right-from-square></i></a>`;
    }
    if (val['gh-link']) {
      gh_link = `<a href=${val['gh-link']}><i class="fa-brands fa-github"></i></a>`;
    }

    text = `<li class='project'><h4>${val.title}${link}${gh_link}</h4><p>${val.description}</li>`;
    $("#projects > ul").append(text);
  })
}