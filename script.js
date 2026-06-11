/*var swiper = new Swiper('.swiper-container', {
  loop: true,
  speed: 1000,
  parallax: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  simulateTouch: true,
  allowTouchMove: true,
});*/


document.getElementById('telegramForm').addEventListener('submit', function() {
  document.getElementById('formStatus').textContent = 'Отправка...';
});

/*
document.getElementById('telegramForm').addEventListener('submit', function(e) {
  e.preventDefault();

  document.getElementById('formStatus').textContent = 'Отправка...';

  this.submit(); // ← вот это важно
});
*/

/*
document.getElementById('telegramForm').addEventListener('submit', function(e) {
  e.preventDefault();

  /*
  const name = this.name.value.trim();
  const phone = this.phone.value.trim();
  const message = this.message.value.trim();

  const data = {
    name,
    phone,
    message
  };

  */
/*
  const formData = new FormData(this);
  

  fetch('https://script.google.com/macros/s/AKfycby16UGOLkVXkpDPhVzD-6YPdpkv4qbGfWhiLpJqFzOzr-aYfaMolnuJrtoea1aQYtAiRw/exec', {
    method: 'POST',
    body: formData, //JSON.stringify(data),
    /*headers: {
      'Content-Type': 'application/json',
    }*/
  /*})
  .then(response => {
    if (response.ok) {
      document.getElementById('formStatus').textContent = 'Заявка отправлена!';
      //this.reset();
    } else {
      document.getElementById('formStatus').textContent = 'Ошибка отправки.';
    }
  })
  .catch(err => {
    document.getElementById('formStatus').textContent = '⚠️ Не удалось отправить.';
    console.error(err);
  });
});
*/
