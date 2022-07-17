(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-mapfr-open]"),
      closeModalBtn: document.querySelector("[data-mapfr-close]"),
      modal: document.querySelector("[data-mapfr]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("modal-hidden");
    }
  })();