# Blueprint - App de Notas

## Objetivo

Construir una aplicacion frontend responsive para gestionar notas con datos
locales persistidos en el navegador y modelado SQL documentado. El proyecto
debe demostrar CRUD local, busqueda, categorias, etiquetas y criterio de datos.

## Usuario objetivo

Persona que necesita capturar ideas, apuntes de estudio o informacion de
trabajo sin crear una cuenta ni depender de un backend.

## Alcance funcional

- crear notas;
- editar titulo, contenido, categoria y etiquetas;
- marcar notas como favoritas o archivadas;
- eliminar notas;
- filtrar por categoria, etiqueta, favorito y estado;
- buscar por texto;
- mostrar resumen de notas activas, archivadas y favoritas;
- persistir datos en `localStorage`;
- documentar un modelo SQL equivalente.

## Modelo inicial de nota

```ts
type Note = {
  id: string
  title: string
  content: string
  category: string
  tags: string[]
  isFavorite: boolean
  isArchived: boolean
  createdAt: string
  updatedAt: string
}
```

## Interfaz prevista

- cabecera con nombre del producto y navegacion;
- formulario de nota;
- lista de notas con estados visibles;
- filtros por categoria, etiqueta y estado;
- busqueda textual;
- panel de resumen;
- estados vacios;
- mensajes de validacion.

## Modelado SQL previsto

La aplicacion funcionara en frontend con `localStorage`, pero el proyecto
incluira una carpeta `database/` con:

- `schema.sql`;
- `seed.sql`;
- `README.md`;
- diagrama DER exportado desde MySQL Workbench.

## Criterios de calidad

- mobile first;
- sin desbordamiento horizontal desde 320 px;
- foco visible;
- controles con nombres accesibles;
- validacion clara;
- persistencia local fiable;
- modelo SQL coherente;
- build de produccion validado.

## Plan de issues

1. estructura inicial del proyecto;
2. modelo de datos y utilidades de notas;
3. layout principal;
4. formulario de creacion y edicion;
5. lista y acciones de nota;
6. filtros, busqueda y resumen;
7. persistencia con `localStorage`;
8. modelado SQL y semillas;
9. pulido responsive y accesibilidad;
10. documentacion, capturas y deploy.
