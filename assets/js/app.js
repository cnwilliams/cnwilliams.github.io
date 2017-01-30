//sanity check
// alert();

$(document).on('ready', function(){

  var myWorkObject = [
    {name: "example 1",
    picture: "example.jpg",
    description: "This is a sample of my work that was created while learning how to use Bootstrap and jQuery.",
    link: "examplelink.com"
    },

    {name: "example 2",
    picture: "example.jpg",
    description: "Here is another sample of my work.",
    link: "examplelink.com"},

    {name: "example 3",
    picture: "example.jpg",
    description: "Here is another sample of my work.",
    link: "examplelink.com"}
  ];


  for (var i = 0; i < myWorkObject.length; i++){

    var title = myWorkObject[i].name;
    // var image = myWorkObject[i].picture;
    var descr = myWorkObject[i].description;
    var url = myWorkObject[i].link
    //no closing tag
    // var createUrl = "<a href='" + url + "'>"
    // var $div = $("<div>", {"class": "work-box col-md-3 center-block"});

    // var newBoxComplete =
    // "<div class='work-box col-md-3'>" +
    //   createUrl +
    //   "<img src='" + ${myWorkObject[i].picture} + "'></a>" +
    //   "<ul>" +
    //   "<li>" + title +  "</li>" +
    //   "<li>" + descr + "</li> </div>"

    // $(".work-section").append($div);

  $(".work-section").append(`<div class="work-box col-md-3">
        <a href="${myWorkObject[i].link}">
        <img src="${myWorkObject[i].picture}">
        </a>
        <ul>
          <li>${myWorkObject[i].name}</li>
          <li>${myWorkObject[i].description}</li>
        </ul>
      </div>`);
  }
}

