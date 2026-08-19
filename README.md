# NoteFlow — Workspace de Notas & Productividad Personal

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-success?style=flat-square&logo=github&logoColor=white)](https://alxnrocha.github.io/app-notas/)
[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![SQL DDL](https://img.shields.io/badge/SQL-DDL_&_Relational_Schema-00758F?style=flat-square&logo=sqlite&logoColor=white)](https://www.mysql.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

> **Proyecto 06 del Portafolio Profesional** — Aplicación web de productividad personal para captura ágil, organización visual y etiquetado de notas en formato Masonry.  
> 🔗 **Demo en Vivo en GitHub Pages:** [https://alxnrocha.github.io/app-notas/](https://alxnrocha.github.io/app-notas/)

---

## ✨ Características Principales

### 🚀 Experiencia de Usuario & Frontend
- **Layout Dinámico Masonry:** Disposición automática de tarjetas de notas según longitud de contenido con efectos de iluminación ambiental y glassmorphism.
- **Búsqueda Reactiva & Filtrado por Etiquetas:** Filtrado en tiempo real por texto, estado (`Activas`, `Archivadas`), favoritos y múltiples etiquetas (`#tags`).
- **Gestión de Ciclo de Vida de Notas:** Creación modal, edición directa, marcado como favorita, archivado y eliminación con confirmación.
- **Gradientes Hash Automatizados:** Generación determinista de paletas cromáticas por categoría para facilitar la memorización visual.
- **Persistencia en LocalStorage:** Sincronización automática de estado y persistencia sin backend requerido.

---

## 🏛️ Estructura del Proyecto

```text
06-app-notas/
├── index.html
├── src/
│   ├── components/                # NoteCard, NoteModal, FilterSidebar, SearchBar
│   ├── types/                     # Tipos TypeScript
│   ├── App.tsx                    # Componente raíz
│   └── main.tsx                   # Punto de entrada
├── package.json
└── vite.config.ts
```

---

## ⚡ Guía de Inicio Rápido

### 1. Clonar el Repositorio
```bash
git clone https://github.com/alxnrocha/app-notas.git
cd app-notas
```

### 2. Instalar Dependencias y Ejecutar
```bash
npm install
npm run dev
```

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulte el archivo [LICENSE](./LICENSE) para más detalles.
