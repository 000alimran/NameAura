const boyNames = {
    a: ["Ayan", "Arjun", "Amit", "Anik", "Aditya", "Abir", "Arif", "Ankur", "Asif", "Arafat"],
    b: ["Babu", "Biplob", "Bijoy", "Borno", "Bikram", "Bashir", "Bilal", "Badrul", "Bikash", "Basit"],
    // ... z পর্যন্ত
  };
  
  const girlNames = {
    a: ["Anika", "Anita", "Arpita", "Anamika", "Asha", "Ayesha", "Anuradha", "Ananya", "Amrita", "Aparna"],
    b: ["Bithi", "Bela", "Bonya", "Bristy", "Bashira", "Borna", "Bithi", "Bulbuli", "Badhan", "Bristi"],
    // ... z পর্যন্ত
  };
  
  document.getElementById("name-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const gender = document.getElementById("gender").value;
    const letter = document.getElementById("letter").value.toLowerCase();
  
    let names;
    if (gender === "boy") {
      names = boyNames[letter];
    } else {
      names = girlNames[letter];
    }
  
    const resultDiv = document.getElementById("result");
  
    if (names && names.length > 0) {
      const randomName = names[Math.floor(Math.random() * names.length)];
      resultDiv.textContent = `Suggested Name: ${randomName}`;
    } else {
      resultDiv.textContent = "No names found for the given criteria.";
    }
  });
  