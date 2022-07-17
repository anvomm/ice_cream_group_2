(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-window-second-open]"),
      closeModalBtn: document.querySelector("[data-window-second-close]"),
      modal: document.querySelector("[data-window-second]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("modal-hidden");
    }
  })();