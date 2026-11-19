# OCASO — tragos de verano en lata

Marca ficticia de tragos de verano en lata y su landing de scroll interactivo: el cielo cambia como un atardecer, la lata gira entre los cuatro sabores y las palabras aparecen de a poco.

**Ver online:** https://mica-fuentes.github.io/ocaso/

## Qué hice

- Identidad de marca y etiquetas de las cuatro latas (Spritz, Tinto de verano, Blue lagoon y Piña colada)
- Diseño de la landing en Figma
- Desarrollo con HTML, CSS y JavaScript, prototipado con Claude Code

## Tecnología

Sitio estático, sin build ni dependencias que instalar.

- [GSAP](https://gsap.com/) + ScrollTrigger para las animaciones al scroll
- [Lenis](https://lenis.darkroom.engineering/) para el scroll suave
- Tipografías: Anton y DM Sans (Google Fonts)

## Estructura

```
index.html   → estructura de la página
styles.css   → estilos
main.js      → animaciones y escenas de cada sabor
img/         → latas y fotos (.webp)
```

## Ver en local

Abrir `index.html` en el navegador, o levantar un servidor simple desde esta carpeta:

```bash
npx serve .
```

---

Diseñado y desarrollado por [Mica Fuentes](https://mica-fuentes.github.io/).
