(() => {
  const refs = {
    openModalBtn: document.querySelector('.about__read-more-btn'),
    closeModalBtn: document.querySelector('.read-more__close-btn'),
    modal: document.querySelector('.read-more'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
