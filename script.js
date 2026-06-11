/*document.getElementById('telegramForm').addEventListener('submit', function() {
  document.getElementById('formStatus').textContent = 'Отправка...';
});*/

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
            formatted += ") " + value.substring(3, 6);
        }

        if (value.length >= 7) {
            formatted += "-" + value.substring(6, 10);
        }

        e.target.value = formatted;
        });
