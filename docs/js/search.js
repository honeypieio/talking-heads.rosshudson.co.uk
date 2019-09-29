var resultsDiv = document.getElementById("searchResults");

document.getElementById("searchInput").addEventListener("input", function() {
  resultsDiv.innerHTML = "";
  var term = this.value.toLowerCase();
  var results = searchIndex.filter(item => item.indexOf(term) > -1).sort();
  var limit = 5;
  if (results.length < limit) {
    limit = results.length;
  }

  for (i = 0; i < limit; i++) {
    var li = document.createElement("li");
    li.innerHTML =
      "<a href='" +
      searchIndexObj[results[i]].permalink +
      "'>" +
      searchIndexObj[results[i]].title +
      "</a>";
    resultsDiv.appendChild(li);
  }
});
