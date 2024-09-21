// hiring - 2a & b) validate fucntion for phone formate and age range
function validateForm() {
  const phoneInput = document.getElementById('inputPhoneNumber').value;
  const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

  if (!phonePattern.test(phoneInput)){
    alert("Incorrect phone number pattern. Ex: 123-456-7890");
    return false;
  }
  const ageInput = document.getElementById('inputAge').value;
  const age = Number(ageInput);

  if(age<21 || age>=100){
    alert("cannot be younger than 21 nor older than 99.");
    return false;
  }
}

// hiring 2c) text area w/ char limit countdown
function updateCharacterCount() {
    const textarea = document.getElementById('aboutMe');
    const charCountDisplay = document.getElementById('charCount');
    const maxChars = 30;
    const currentLength = textarea.value.length;
    const remainingChars = maxChars - currentLength;

    charCountDisplay.textContent = `${remainingChars} characters remaining`;
}


document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let person = {
        fname: document.getElementById('inputFirstName').value,
        lname: document.getElementById('inputLastName').value,
        age: Number(document.getElementById('inputAge').value),
        email: document.getElementById('inputEmail').value,
        password: document.getElementById('inputPassword').value,
        phone: document.getElementById('inputPhoneNumber').value,
        address: document.getElementById('inputAddress').value,
        address2: document.getElementById('inputAddress2').value,
        city: document.getElementById('inputCity').value,
        zip: document.getElementById('inputZip').value,
        state: document.getElementById('inputState').value,
        isMarried: document.querySelector('input[name="isMarried"]:checked')?.value,
        favColors: Array.from(document.querySelectorAll('input[name="favColor"]:checked')).map(cb => cb.value),
        aboutMe: document.getElementById('aboutMe').value,
    };
    console.log(person);
    document.getElementById('applicationForm').reset();
});


// menu

