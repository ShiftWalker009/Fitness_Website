// JavaScript for BMI, Caloric Deficit, and BMR Calculators

document.addEventListener('DOMContentLoaded', () => {
  // BMI Calculator
  const bmiForm = document.getElementById('bmiForm');
  if (bmiForm) {
    bmiForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const weight = parseFloat(document.getElementById('weight').value);
      const heightCm = parseFloat(document.getElementById('height').value);
      const heightM = heightCm / 100;
      if (weight > 0 && heightM > 0) {
        const bmi = weight / (heightM * heightM);
        const bmiResult = document.getElementById('bmiResult');
        bmiResult.textContent = `Your BMI is ${bmi.toFixed(2)}.`;
      }
    });
  }

  // Caloric Deficit Calculator
  const calorieForm = document.getElementById('calorieForm');
  if (calorieForm) {
    calorieForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const bmr = parseFloat(document.getElementById('bmrInput').value);
      const deficit = parseFloat(document.getElementById('deficit').value);
      if (bmr > 0 && deficit > 0) {
        const dailyCalories = bmr - deficit;
        const calorieResult = document.getElementById('calorieResult');
        calorieResult.textContent = `To achieve your deficit, aim for ${dailyCalories.toFixed(0)} calories per day.`;
      }
    });
  }

  // BMR Calculator using Harris-Benedict equations
  const bmrCalcForm = document.getElementById('bmrCalcForm');
  if (bmrCalcForm) {
    bmrCalcForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const gender = document.getElementById('gender').value;
      const age = parseFloat(document.getElementById('age').value);
      const weight = parseFloat(document.getElementById('weightBMR').value);
      const height = parseFloat(document.getElementById('heightBMR').value);
      let bmr;
      if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
      } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
      }
      const bmrResult = document.getElementById('bmrResult');
      bmrResult.textContent = `Your BMR is ${bmr.toFixed(2)} calories/day.`;
    });
  }
});
