document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver( entries => {
    if (entries[0].isIntersecting) {
      console.log('ya es visible premium')
    } else {
      console.log('no es visible premium')
    }
  })

  observer.observe(document.querySelector('.premium'))
})