function restartAnimation() {
  const wrapper = document.querySelector(".animation-wrapper")
  const button = document.querySelector(".restart")

  // Add invisible class to fade out
  wrapper.classList.add("invisible")
  button.style.opacity = "0"

  // Remove and re-add animation after a short delay
  setTimeout(() => {
    wrapper.classList.remove("invisible")
    wrapper.style.animation = "none"
    button.style.animation = "none"

    // Trigger reflow
    void wrapper.offsetWidth

    // Re-apply animations
    wrapper.style.animation = "fadeIn 0.8s ease-in forwards"
    button.style.animation = "fadeInButton 0.5s ease-in 1.5s forwards"
  }, 500)
}
