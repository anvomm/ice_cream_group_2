(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-window-third-open]"),
      closeModalBtn: document.querySelector("[data-window-third-close]"),
      modal: document.querySelector("[data-window-third]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("modal-hidden");
    }
  })();