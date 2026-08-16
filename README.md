# NoteFlow — Workspace de Notas & Productividad Personal

[![CI & Deploy](https://github.com/alxnrocha/app-notas/actions/workflows/ci.yml/badge.svg)](https://github.com/alxnrocha/app-notas/actions)
[![Demo GitHub Pages](https://img.shields.io/badge/Demo-GitHub_Pages-22c55e?style=for-the-badge&logo=github&logoColor=white)](https://alxnrocha.github.io/app-notas/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb.svg)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

**NoteFlow** es una aplicación web SaaS de productividad diseñada para la captura ágil, organización visual y etiquetado de notas personales y profesionales. Cuenta con interfaz Dark Mode Masonry, búsqueda reactiva instantánea, filtros multicriterio, persistencia local y diseño relacional SQL adjunto.

- 🌐 **Demo en Vivo (GitHub Pages):** [https://alxnrocha.github.io/app-notas/](https://alxnrocha.github.io/app-notas/)
- 📦 **Repositorio GitHub:** [https://github.com/alxnrocha/app-notas](https://github.com/alxnrocha/app-notas)

---

## ✨ Características Principales

### 🚀 Experiencia de Usuario & Frontend
- **Layout Dinámico Masonry:** Disposición automática de tarjetas de notas según longitud de contenido con efectos de iluminación ambiental y glassmorphism.
- **Búsqueda Reactiva & Filtrado por Etiquetas:** Filtrado en tiempo real por texto, estado (`Activas`, `Archivadas`), favoritos y múltiples etiquetas (`#tags`).
- **Gestión de Ciclo de Vida de Notas:** Creación modal, edición directa, marcado como favorita, archivado y eliminación con confirmación.
- **Gradientes Hash Automatizados:** Generación determinista de paletas cromáticas por categoría para facilitar la memorización visual.
- **Persistencia en LocalStorage:** Sincronización automática de estado y persistencia sin backend requerido.

### 🛡️ Diseño de Datos Relacional (SQL)
- Modelado relacional complementario documentado en [`database/README.md`](./database/README.md) con esquemas DDL (`schema.sql`) y datos de prueba (`seed.sql`).

---

## 🏛️ Estructura del Proyecto

```text
06-app-notas/
├── .github/workflows/ci.yml       # Pipeline de CI y Deploy automático en Pages
├── database/                      # Modelado SQL relacional
│   ├── README.md
│   ├── schema.sql
│   └── seed.sql
├── screenshots/                   # Capturas de pantalla reales
│   ├── desktop.png
│   └── mobile.png
├── src/
│   ├── components/                # Layout, Sidebar, NoteCard y Modal de creación
│   ├── data/                      # Notas iniciales de demostración
│   ├── types/                     # Definiciones de tipos TypeScript
│   ├── utils/                     # Utilidades de color hash y formateo
│   ├── App.tsx                    # Shell principal de la aplicación
│   └── main.tsx                   # Entrada React 19
├── index.html                     # Entrypoint HTML5
└── vite.config.ts                 # Configuración de Vite y Tailwind v4
```

---

## ⚡ Guía de Inicio Rápido

### 1. Clonar e Instalar Dependencias
```bash
git clone https://github.com/alxnrocha/app-notas.git
cd app-notas
npm install
```

### 2. Iniciar en Modo Desarrollo
```bash
npm run dev
```

---

## 🧪 Calidad de Código y Pruebas

```bash
# Compilar para producción
npm run build
```

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulte el archivo [LICENSE](./LICENSE) para más detalles.

**Autor:** [Alexandre Rocha](https://github.com/alxnrocha)
