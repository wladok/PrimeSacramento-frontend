/*document.getElementById('telegramForm').addEventListener('submit', function() {
  document.getElementById('formStatus').textContent = 'Отправка...';
});*/
// phone formatting
const phoneInput = document.getElementById("phone");

        phoneInput.addEventListener("input", (e) => {
        let value = e.target.value.replace(/\D/g, "");

        if (value.length > 10) {
            value = value.slice(0, 10);
        }

        let formatted = "";

        if (value.length > 0) {
            formatted = "(" + value.substring(0, 3);
        }

        if (value.length >= 4) {
            formatted += ")" + value.substring(3, 6);
        }

        if (value.length >= 7) {
            formatted += "-" + value.substring(6, 10);
        }

        e.target.value = formatted;
        });


// form sending
const form = document.getElementById("telegramForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    status.textContent = "Sending...";
    status.style.color = "#444";

    const formData = new FormData(form);

    try {
        const response = await fetch("https://primesacramento-backend.onrender.com/send", {
            method: "POST",
            body: formData
        });

        const message = await response.text();

        if (response.ok) {
            status.textContent = "✅ Your request has been sent successfully!";
            status.style.color = "green";

            form.reset();
        } else {
            status.textContent = message;
            status.style.color = "red";
        }

    } catch (error) {
        console.error(error);

        status.textContent = "Something went wrong. Please try again.";
        status.style.color = "red";
    }
});
