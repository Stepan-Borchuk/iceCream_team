(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal--ourlocation-open]'),
    closeModalBtn: document.querySelector('[modal--ourlocation-close]'),
    modal: document.querySelector('[modal--ourlocation]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
