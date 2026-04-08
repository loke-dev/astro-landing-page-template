const toggles = [
  {
    btn: document.getElementById('theme-toggle'),
    sun: document.getElementById('sun-icon'),
    moon: document.getElementById('moon-icon'),
  },
  {
    btn: document.getElementById('theme-toggle-mobile'),
    sun: document.getElementById('sun-icon-mobile'),
    moon: document.getElementById('moon-icon-mobile'),
  },
]

const updateAll = () => {
  const isDark = document.documentElement.classList.contains('dark')
  for (const { btn, sun, moon } of toggles) {
    if (!btn || !sun || !moon) continue
    sun.classList.toggle('hidden', !isDark)
    moon.classList.toggle('hidden', isDark)
    btn.setAttribute(
      'aria-label',
      isDark ? 'Switch to light mode' : 'Switch to dark mode'
    )
  }
}

updateAll()

const handleToggle = () => {
  const isDark = document.documentElement.classList.toggle('dark')
  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light'
  localStorage.setItem('theme', isDark ? 'dark' : 'light')
  updateAll()
}

for (const { btn } of toggles) {
  btn?.addEventListener('click', handleToggle)
}
