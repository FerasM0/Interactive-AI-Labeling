function updateView() {
  const role = document.getElementById("role").value;
  const output = document.getElementById("label-output");

  if (role === "basic") {
    output.innerHTML = "<p><strong>Label (einfach):</strong><br>Effizienz: A<br>Verbrauch: niedrig</p>";
  } else {
    output.innerHTML = "<p><strong>Label (detailliert):</strong><br>Effizienz: A<br>Verbrauch: 0.42 kWh<br>Robustheit: 0.89<br>Accuracy: 93%</p>";
  }
}
