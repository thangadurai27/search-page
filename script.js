document.getElementById("searchForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const input = document.getElementById("userInput").value;

  // Save to local storage
  let previousSearches = JSON.parse(localStorage.getItem("searches")) || [];
  previousSearches.push(input);
  localStorage.setItem("searches", JSON.stringify(previousSearches));

  document.getElementById("status").innerText = "Search saved locally!";
  document.getElementById("userInput").value = "";
});
