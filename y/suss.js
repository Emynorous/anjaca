document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const trophyList = document.getElementById("trophyList");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Get input values
      const gameTitle = document.getElementById("gameTitle").value;
      const trophyTitle = document.getElementById("trophyTitle").value;
      const difficulty = document.getElementById("difficulty").value;
      const achievementDate = document.getElementById("achievementDate").value;
  
      // Create a new list item
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        Game: ${gameTitle}, Trophy: ${trophyTitle}, Difficulty: ${difficulty}, Date: ${achievementDate}
        <button class="delete-button">Delete</button>
      `;
  
      // Append the new item to the list
      trophyList.appendChild(listItem);
  
      // Clear the form inputs
      form.reset();
    });
  
    trophyList.addEventListener("click", function(event) {
      if (event.target.classList.contains("delete-button")) {
        // Delete the clicked achievement
        event.target.parentElement.remove();
      }
    });
  
    // Sort achievements by difficulty
    document.getElementById("sortDifficulty").addEventListener("click", function() {
      const items = Array.from(trophyList.querySelectorAll("li"));
      items.sort((a, b) => {
        const difficultyA = a.textContent.split("Difficulty: ")[1];
        const difficultyB = b.textContent.split("Difficulty: ")[1];
        return difficultyA.localeCompare(difficultyB);
      });
      trophyList.innerHTML = "";
      items.forEach((item) => trophyList.appendChild(item));
    });
  
    // Sort achievements by date
    document.getElementById("sortDate").addEventListener("click", function() {
      const items = Array.from(trophyList.querySelectorAll("li"));
      items.sort((a, b) => {
        const dateA = new Date(a.textContent.split("Date: ")[1]);
        const dateB = new Date(b.textContent.split("Date: ")[1]);
        return dateA - dateB;
      });
      trophyList.innerHTML = "";
      items.forEach((item) => trophyList.appendChild(item));
    });
  });
  