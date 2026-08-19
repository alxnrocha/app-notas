# NoteFlow — Workspace de Notas & Productividad Personal

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-success?style=flat-square&logo=github&logoColor=white)](https://alxnrocha.github.io/app-notas/)
[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

> **Proyecto 06 del Portafolio Profesional** — Aplicación web de productividad personal para captura ágil, organización visual y etiquetado de notas en formato Masonry.  
> 🔗 **Demo en Vivo en GitHub Pages:** [https://alxnrocha.github.io/app-notas/](https://alxnrocha.github.io/app-notas/)

---

## 🌟 Visión General & Propuesta de Valor

**NoteFlow** es una aplicación de toma de notas ágil con disposición dinámica Masonry inspirada en los mejores entornos de trabajo de productividad.

Ofrece filtrado reactivo en tiempo real por etiquetas (`#tags`), gestión de notas favoritas y archivadas, gradientes de color automáticos por categoría y almacenamiento local seguro en el navegador.

---

## ✨ Características Principales

- **Layout Dinámico Masonry:** Disposición automática de tarjetas según longitud de contenido con efectos de iluminación ambiental y glassmorphism.
- **Búsqueda Reactiva & Filtrado por Etiquetas:** Filtrado en tiempo real por texto, estado (`Activas`, `Archivadas`), favoritos y etiquetas.
- **Gestión Completa de Notas:** Creación modal, edición directa, marcado como favorita, archivado y eliminación con confirmación.
- **Gradientes Hash Automatizados:** Generación determinista de paletas cromáticas por categoría para facilitar la identificación visual.
- **Persistencia en LocalStorage:** Sincronización automática de estado en el navegador sin dependencias de backend.

---

## 🏛️ Arquitectura del Proyecto

```text
06-app-notas/
├── index.html
├── src/
│   ├── components/                # NoteCard, NoteModal, FilterSidebar, SearchBar
│   ├── types/                     # Tipos TypeScript
│   ├── App.tsx                    # Componente raíz
│   └── main.tsx                   # Punto de entrada
├── LICENSE
├── package.json
└── vite.config.ts
```

---

## 🚀 Instalación y Puesta en Marcha

### Prerrequisitos
- Node.js `>= 20.0.0`
- npm `>= 10.0.0`

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/alxnrocha/app-notas.git
   cd app-notas
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

4. **Compilar para producción:**
   ```bash
   npm run build
   ```

---

## 🛡️ Calidad de Código & Testing

- **Seguridad de Tipos:** Interfaces TypeScript estrictas para el ciclo de vida de las notas.
- **Accesibilidad (a11y):** Diálogos modales accesibles y navegación por teclado (WCAG 2.1 AA).

---

## 📄 Licencia

Este proyecto se encuentra bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
