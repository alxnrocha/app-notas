# Noteflow: Premium Notes Workspace

Aplicación web moderna y responsiva para gestionar notas locales, con un diseño premium (Dark Mode Masonry) y un modelado relacional completo en SQL.

Diseñé y desarrollé este proyecto para simular un producto SaaS de productividad real. El objetivo fue construir una experiencia orientada a la eficiencia y el diseño de alta fidelidad, cuidando tanto la interfaz (UI/UX) como la estructura técnica de datos subyacente.

## Vista General

Noteflow presenta un panel central de notas organizado en un layout dinámico tipo Masonry, acompañado de una barra lateral para filtros rápidos (categorías, etiquetas, favoritos). La aplicación está pensada para ser rápida, visualmente atractiva (glassmorphism, gradientes autogenerados) y completamente funcional a nivel de frontend, persistiendo los datos de manera local.

## Funcionalidades

- Interfaz premium en Dark Mode con efectos ambientales de luz.
- Panel lateral interactivo con filtros por estado (Active/Archived) y favoritos.
- Layout dinámico de cuadrícula (CSS Grid Masonry style) para las tarjetas de notas.
- Buscador en tiempo real integrado en la barra de navegación superior.
- Categorización automática con colores de gradiente generados por hash.
- Gestión completa de notas: creación, edición, archivado y eliminación.
- Múltiples etiquetas (`#tags`) por nota.
- Persistencia automática de datos usando `localStorage`.
- Diseño responsive para desktop, tablet y móvil.

## Tecnologías

- React 19
- TypeScript
- Tailwind CSS 4.0
- Lucide React (Iconos)
- Vite
- Git & GitHub

## Decisiones de Implementación

El proyecto está construido utilizando React para aprovechar la reactividad del estado de UI al manipular las listas y filtros de notas. Elegí Tailwind CSS para implementar rápidamente los tokens de diseño avanzado (como `backdrop-blur`, gradientes personalizados y tipografía utilitaria) sin abandonar el archivo de componentes.

A diferencia de una SPA estándar, se ha implementado la persistencia de datos local (`localStorage`) mediante un `useEffect` sincronizado con el estado principal de React, simulando el comportamiento de un backend real.

Adicionalmente, he diseñado la capa de base de datos relacional (SQL) que este frontend consumiría en un entorno de producción, demostrando así visión full-stack. El esquema SQL está separado en la carpeta `database/`.

## Accesibilidad

Implementé varias mejoras básicas de accesibilidad adaptadas a una SPA interactiva:

- Navegación lateral con contrastes controlados (AA).
- Uso de `aria-label` en botones sin texto explícito (íconos de acción en las tarjetas).
- Estructura semántica con `<aside>`, `<header>`, `<main>` y `<article>` para las notas.
- Focos visibles en los botones interactivos (hover y focus states en tarjetas).
- Estados interactivos transparentes para reducir carga cognitiva.

## Estructura

```txt
06-app-notas/
├── README.md
├── index.html
├── database/
│   ├── schema.sql
│   ├── seed.sql
│   └── README.md
├── screenshots/
│   ├── desktop.png
│   └── mobile.png
└── src/
    ├── components/
    ├── data/
    ├── types/
    ├── utils/
    ├── App.tsx
    └── main.tsx
```

## Cómo Ejecutarlo

Opción recomendada para entorno de desarrollo:

1. Clonar el repositorio.
2. Abrir la carpeta del proyecto en la terminal.
3. Instalar las dependencias con `npm install`.
4. Ejecutar el servidor de desarrollo con `npm run dev`.

## Screenshots

### Desktop

![Vista desktop de Noteflow](./screenshots/desktop.png?v=20260702-fixed)

### Mobile

![Vista mobile de Noteflow](./screenshots/mobile.png?v=20260702-fixed)

## Deploy

Proyecto configurado para publicación automática vía GitHub Actions:

[https://alxnrocha.github.io/app-notas/](https://alxnrocha.github.io/app-notas/)

## Documentación Técnica

El detalle del modelado de base de datos SQL relacional (Diseño backend conceptual) está documentado en:

[database/README.md](./database/README.md)

## Estado

Aplicación de notas finalizada y publicada como proyecto de portfolio de nivel intermediario-avanzado.

## Autor

Alexandre Rocha
