document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("survey-form");
    const resetButton = document.getElementById("reset-button");
    const submitButton = document.getElementById("submit-button");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("close-popup");
    const popupData = document.getElementById("popup-data");

    // Add a click event listener to the Reset button
    resetButton.addEventListener("click", function () {
        form.reset();
    });

    // Add a click event listener to the Submit button
    submitButton.addEventListener("click", function () {
        if (form.checkValidity()) {
            // Get the form data
            const firstName = document.getElementById("first-name").value;
            const lastName = document.getElementById("last-name").value;
            const dob = document.getElementById("dob").value;
            const country = document.getElementById("country").value;
            const genderElements = document.getElementsByName("gender");
            const selectedGenders = Array.from(genderElements).filter((el) => el.checked).map((el) => el.value);
            const profession = document.getElementById("profession").value;
            const email = document.getElementById("email").value;
            const mobile = document.getElementById("mobile").value;

            // Display the data in a popup
            const popupContent = `
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Date of Birth:</strong> ${dob}</p>
                <p><strong>Country:</strong> ${country}</p>
                <p><strong>Gender:</strong> ${selectedGenders.join(", ")}</p>
                <p><strong>Profession:</strong> ${profession}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mobile Number:</strong> ${mobile}</p>
            `;
            popupData.innerHTML = popupContent;

            // Display the popup
            popup.style.display = "block";
        } else {
            alert("Please fill in all required fields.");
        }
    });

    // Add a click event listener to the Close button in the popup
    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });
});
