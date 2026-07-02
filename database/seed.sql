-- seed.sql
-- Datos de prueba para el modelado de la base de datos

-- Insertar usuario de demostración
INSERT INTO users (id, email, password_hash)
VALUES ('11111111-1111-1111-1111-111111111111', 'demo@appnotas.com', '$2y$10$demoHashLumina2026xxxx');

-- Insertar categorías del usuario
INSERT INTO categories (id, user_id, name)
VALUES 
    ('c1111111-1111-1111-1111-111111111111', '11111111-1111-1111-1111-111111111111', 'Trabajo'),
    ('c2222222-2222-2222-2222-222222222222', '11111111-1111-1111-1111-111111111111', 'Personal'),
    ('c3333333-3333-3333-3333-333333333333', '11111111-1111-1111-1111-111111111111', 'Ideas');

-- Insertar etiquetas (Tags)
INSERT INTO tags (id, user_id, name)
VALUES 
    ('t1111111-1111-1111-1111-111111111111', '11111111-1111-1111-1111-111111111111', 'frontend'),
    ('t2222222-2222-2222-2222-222222222222', '11111111-1111-1111-1111-111111111111', 'react'),
    ('t3333333-3333-3333-3333-333333333333', '11111111-1111-1111-1111-111111111111', 'reunion');

-- Insertar Notas
INSERT INTO notes (id, user_id, category_id, title, content, is_favorite)
VALUES 
    (
        'n1111111-1111-1111-1111-111111111111', 
        '11111111-1111-1111-1111-111111111111', 
        'c1111111-1111-1111-1111-111111111111', 
        'Revisión de componentes UI', 
        'Necesitamos refactorizar el NoteFilters para usar estado global.',
        true
    ),
    (
        'n2222222-2222-2222-2222-222222222222', 
        '11111111-1111-1111-1111-111111111111', 
        'c3333333-3333-3333-3333-333333333333', 
        'Idea para portafolio', 
        'Crear una visualización en forma de grilla tipo masonry.',
        false
    );

-- Asociar notas con etiquetas (Relación N:M)
INSERT INTO note_tags (note_id, tag_id)
VALUES 
    ('n1111111-1111-1111-1111-111111111111', 't1111111-1111-1111-1111-111111111111'),
    ('n1111111-1111-1111-1111-111111111111', 't2222222-2222-2222-2222-222222222222');
