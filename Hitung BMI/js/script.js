document.getElementById('bmiForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  var gender = document.querySelector('input[name="jenis_kelamin"]:checked').value;
  var weight = parseFloat(document.getElementById('berat_badan').value);
  var height = parseFloat(document.getElementById('tinggi_badan').value);
  var age = parseFloat(document.getElementById('usia').value);

  // Validate input
  if (isNaN(weight) || isNaN(height) || isNaN(age)) {
      alert("Masukkan semua nilai dengan benar.");
      return;
  }

  // Calculate BMI
  var bmi = calculateBMI(weight, height);

  // Determine BMI category
  var category = determineCategory(bmi);

  // Display result
  document.getElementById('bmi-value').textContent = bmi.toFixed(1);
  document.getElementById('bmi-category').textContent = category;
  document.getElementById('bmi-advice').textContent = getAdvice(category);
  document.getElementById('hasil-bmi').style.display = 'block';
});

// Function to calculate BMI
function calculateBMI(weight, height) {
  return weight / ((height / 100) * (height / 100));
}

// Function to determine BMI category
function determineCategory(bmi) {
  if (bmi < 18.5) {
      return "Kurus (Kekurangan Berat Badan)";
  } else if (bmi >= 18.5 && bmi < 25) {
      return "Normal";
  } else if (bmi >= 25 && bmi < 30) {
      return "Kegemukan (Overweight)";
  } else {
      return "Obesitas";
  }
}

// Function to get advice based on BMI category
function getAdvice(category) {
  switch (category) {
      case "Kurus (Kekurangan Berat Badan)":
          return "Anda memiliki berat badan kurang. Pastikan untuk makan makanan bergizi dan konsultasikan dengan dokter atau ahli gizi.";
      case "Normal":
          return "Berat badan Anda normal. Pertahankan pola makan sehat dan gaya hidup aktif.";
      case "Kegemukan (Overweight)":
          return "Anda memiliki berat badan berlebih. Kurangi asupan kalori dan tingkatkan aktivitas fisik.";
      case "Obesitas":
          return "Anda mengalami obesitas. Konsultasikan dengan dokter atau ahli gizi untuk perencanaan program penurunan berat badan yang sehat.";
      default:
          return "";
  }
}
