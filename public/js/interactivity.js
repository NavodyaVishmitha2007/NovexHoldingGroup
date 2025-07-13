// Client-side JavaScript for mobile menu and dropdowns

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const mobileMenu = document.getElementById("mobile-menu")
  const mobileMenuOverlay = document.getElementById("mobile-menu-overlay")

  if (mobileMenuButton && mobileMenu && mobileMenuOverlay) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("-translate-x-full")
      mobileMenuOverlay.classList.toggle("hidden")
    })

    mobileMenuOverlay.addEventListener("click", () => {
      mobileMenu.classList.add("-translate-x-full")
      mobileMenuOverlay.classList.add("hidden")
    })
  }

  // Mobile Subsidiaries Dropdown
  const mobileSubsidiariesTrigger = document.getElementById("mobile-subsidiaries-trigger")
  const mobileSubsidiariesContent = document.getElementById("mobile-subsidiaries-content")

  if (mobileSubsidiariesTrigger && mobileSubsidiariesContent) {
    mobileSubsidiariesTrigger.addEventListener("click", (event) => {
      event.preventDefault()
      mobileSubsidiariesContent.classList.toggle("hidden")
      mobileSubsidiariesTrigger.querySelector("svg").classList.toggle("rotate-180")
    })
  }

  // Desktop Subsidiaries Dropdown
  const desktopSubsidiariesTrigger = document.getElementById("desktop-subsidiaries-trigger")
  const desktopSubsidiariesContent = document.getElementById("desktop-subsidiaries-content")

  if (desktopSubsidiariesTrigger && desktopSubsidiariesContent) {
    let timeout
    desktopSubsidiariesTrigger.parentElement.addEventListener("mouseenter", () => {
      clearTimeout(timeout)
      desktopSubsidiariesContent.classList.remove("hidden")
      desktopSubsidiariesTrigger.querySelector("svg").classList.add("rotate-180")
    })

    desktopSubsidiariesTrigger.parentElement.addEventListener("mouseleave", () => {
      timeout = setTimeout(() => {
        desktopSubsidiariesContent.classList.add("hidden")
        desktopSubsidiariesTrigger.querySelector("svg").classList.remove("rotate-180")
      }, 200) // Small delay to allow moving mouse over content
    })

    desktopSubsidiariesContent.addEventListener("mouseenter", () => {
      clearTimeout(timeout)
    })

    desktopSubsidiariesContent.addEventListener("mouseleave", () => {
      timeout = setTimeout(() => {
        desktopSubsidiariesContent.classList.add("hidden")
        desktopSubsidiariesTrigger.querySelector("svg").classList.remove("rotate-180")
      }, 200)
    })
  }
})
