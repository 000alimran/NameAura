document.getElementById("name-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const gender = document.getElementById("gender").value;
    const letter = document.getElementById("letter").value.toUpperCase();
  
    const boyNames = ["Ayan", "Arjun", "Ryan", "Samir", "Tuhin"];
    const girlNames = ["Anika", "Riya", "Sanjana", "Tina", "Trisha"];
  
    let filteredNames;
  
    if (gender === "boy") {
      filteredNames = boyNames.filter(name => name.startsWith(letter));
    } else {
      filteredNames = girlNames.filter(name => name.startsWith(letter));
    }
  
    const resultDiv = document.getElementById("result");
  
    if (filteredNames.length > 0) {
      const randomName = filteredNames[Math.floor(Math.random() * filteredNames.length)];
      resultDiv.textContent = `Suggested Name: ${randomName}`;
    } else {
      resultDiv.textContent = "No names found for the given criteria.";
    }
  });
  