function toggleDropdown() {
    const dropdown = document.getElementById("dropdownList");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }

  function selectOption(value) {
    document.getElementById("consultaInput").value = value;
    document.getElementById("dropdownList").style.display = "none";
  }

  // Fecha o dropdown ao clicar fora
  window.addEventListener("click", function(e) {
    const container = document.querySelector(".consulta-container");
    if (!container.contains(e.target)) {
      document.getElementById("dropdownList").style.display = "none";
    }
  });