# Proyecto 06: App de Notas (Noteflow)

Aplicación web moderna y responsiva para gestionar notas locales, con un diseño premium inspirado en las últimas tendencias de interfaces (Dark Mode, layout en rejilla uniforme, Glassmorphism). Además del Frontend, incluye documentación de un modelado real en SQL.

## ✨ Características

- **Interfaz Premium:** Layout oscuro con barra lateral de navegación y sistema de tarjetas uniformes.
- **Buscador en Tiempo Real:** Filtrado instantáneo por título, contenido y etiquetas.
- **Gestión Completa:** Crear, editar, marcar como favorita, archivar o eliminar notas.
- **Categorización y Etiquetas:** Asignación de categorías (con colores vibrantes autogenerados) y múltiples etiquetas (`#tags`) por nota.
- **Persistencia Local:** Los datos se guardan automáticamente en el `localStorage` del navegador.
- **Bonus SQL:** Carpeta `database/` con esquema, diagrama relacional (MER) e inserciones de prueba (seeds) en PostgreSQL, demostrando capacidad de arquitectura de datos.

## 🛠️ Tecnologías Utilizadas

- **Frontend:** React 19, TypeScript, Vite
- **Estilos:** Tailwind CSS 4.0, Lucide React (Íconos)
- **Base de Datos (Concepto):** PostgreSQL (Documentación)
- **Deploy:** GitHub Pages (CI/CD Automático)

## 🚀 Despliegue (Deploy)

Este proyecto cuenta con integración continua a través de GitHub Actions. Cada vez que se hace push a la rama `main`, la aplicación se compila y se despliega automáticamente en GitHub Pages.

🔗 **[Visitar la Aplicación en Vivo](https://alxnrocha.github.io/app-notas/)**

## 📦 Instalación Local

1. Clona el repositorio:
```bash
git clone https://github.com/alxnrocha/app-notas.git
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## 🗄️ Modelado de Datos (SQL)

Aunque la aplicación frontend usa `localStorage` para facilitar las pruebas en vivo sin necesidad de un backend, el proyecto incluye un diseño completo de base de datos relacional para escalar a un producto real:

- `database/schema.sql`: Definición de tablas (`users`, `notes`, `categories`, `tags`) y sus relaciones.
- `database/seed.sql`: Datos de prueba pre-cargados.
- `database/README.md`: Diagrama Entidad-Relación (Mermaid).
