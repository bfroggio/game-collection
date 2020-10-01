var allGameTitles = document.getElementsByClassName("game_title");
for (var j = 0; j < allGameTitles.length; j++) {
  console.log(allGameTitles[j].childNodes[0].innerHTML);
}
var urlParams = new URLSearchParams(window.location.search);
this.document.location = "https://itch.io/bundle/download/es7cSxGEx7cpY7Q0VEgvwaNPTtKfkTWV_rLm7cX6?page="+(parseInt(urlParams.get('page'))+1);
