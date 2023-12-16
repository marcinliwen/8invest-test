window.onload = () => {
  /**
   * modals
   */
  const triggers = document.getElementsByClassName("modal-trigger");
  const triggerArray = Array.from(triggers).entries();
  const modals = document.getElementsByClassName("modal");
  const closeButtons = document.getElementsByClassName("modal-close");
  for (let [index, trigger] of triggerArray) {
    const toggleModal = () => {
      modals[index].classList.toggle("modal--is-open");
      document.body.classList.toggle("overflow-hidden")
    };
    trigger.addEventListener("click", toggleModal);
    closeButtons[index].addEventListener("click", toggleModal);
  }
}