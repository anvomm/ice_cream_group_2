(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-mobmodal-open]"),
      closeModalBtn: document.querySelector("[data-mobmodal-close]"),
      modal: document.querySelector("[data-mobmodal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("modal-hidden");
    }
  })();