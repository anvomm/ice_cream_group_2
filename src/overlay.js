(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-window-open]"),
      closeModalBtn: document.querySelector("[data-window-close]"),
      modal: document.querySelector("[data-window]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("modal-hidden");
    }
  })();