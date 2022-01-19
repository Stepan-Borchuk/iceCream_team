(() => {
  const refs = {
    openModalBtn: document.querySelector('[modal--buynow-open--hero]'),
    closeModalBtn: document.querySelector('[modal--buynow-close--hero]'),
    modal: document.querySelector('[modal--buynow--hero]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
