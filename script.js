const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const ans = document.getElementById('answer');

    if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
        ans.innerHTML = "Please enter a valid height and weight";
    } else {
        const bmi = weight / ((height * height) / 10000);
        const bmians = getBMICategory(bmi);
        if(bmians == "Underweight"){
            ans.innerHTML = `Your BMI is ${bmi.toFixed(2)}, you are ${bmians}`;
            ans.style.color = "blue";    
        }else if(bmians == "Normal weight"){
            ans.innerHTML = `Your BMI is ${bmi.toFixed(2)}, you are ${bmians}`;
        }else if(bmians == "Overweight"){
            ans.innerHTML = `Your BMI is ${bmi.toFixed(2)}, you are ${bmians}`;
            ans.style.color = "yellow";    
        }else{
            ans.innerHTML = `Your BMI is ${bmi.toFixed(2)}, you are ${bmians}`;
            ans.style.color = "red";    
        }
    }
});

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}