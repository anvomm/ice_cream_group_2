(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-cursormodal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-cursormodal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('modal-hidden');
  }
})();
