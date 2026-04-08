const navbar = document.getElementById('navbar')
const toggle = document.getElementById('mobile-toggle')
const menu = document.getElementById('mobile-menu')

if (navbar && toggle && menu) {
  let scrolled = false

  const updateScroll = () => {
    const isScrolled = window.scrollY > 20
    if (isScrolled !== scrolled) {
      scrolled = isScrolled
      navbar.classList.toggle('bg-background/95', scrolled)
      navbar.classList.toggle('backdrop-blur-sm', scrolled)
      navbar.classList.toggle('border-b', scrolled)
    }
  }

  window.addEventListener('scroll', updateScroll, { passive: true })
  updateScroll()

  toggle.addEventListener('click', () => {
    const isOpen = !menu.classList.contains('hidden')
    menu.classList.toggle('hidden')
    toggle.setAttribute('aria-expanded', String(!isOpen))
  })

  menu.querySelectorAll('.mobile-link').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden')
      toggle.setAttribute('aria-expanded', 'false')
    })
  })
}
