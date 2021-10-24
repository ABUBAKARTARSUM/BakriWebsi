// style javascript untuk gallery
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('gallery-item')) {
      const src = e.target.getAttribute('src');
      document.querySelector('.modal-img').src = src;
      const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
      myModal.show();
    }
  });

  // Script for contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbxC2m34jQdQB9XqTNAcJdR_y91Aq5y6mkUdCj1zEFbNaH9T-ArQyjBSRrGss1fcNn5i/exec';
const form = document.forms['project-contact-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // ketika tombol submit di kirim
  // tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      // tampilkan alert
      myAlert.classList.toggle('d-none');
      // reset formnya
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});
