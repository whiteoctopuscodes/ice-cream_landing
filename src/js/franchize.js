(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-franchize-open]"),
    closeModalBtn: document.querySelector("[data-franchize-close]"),
    modal: document.querySelector("[data-franchize]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is_hidden");
  }
})();