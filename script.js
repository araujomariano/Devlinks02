function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  // pegar a tag img
  const img = document.querySelector('#profile img')
  // substituir a imagem

  if (html.classList.contains('light')) {
    // se tiver light mode, adicionar imagem verde
    img.setAttribute('src', './assets/black-theme.jpeg')
  } else {
    // se tiver sem light mode, imagem black-theme
    img.setAttribute('src', './assets/photo-perfil.jpg')
  }

  //   html.classList.remove('light')
  //   html.classList.add('light')
  // }
}
