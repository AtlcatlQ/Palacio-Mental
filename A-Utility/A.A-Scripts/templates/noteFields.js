/**
 * @description Diccionario de Campos
 * @param {Object} tp - Requiere importar el Objeto de Templater
 * @returns {Object} Diccionario de Campos disponibles
 */

module.exports = () => {

    const noteFields = {

        /* ───────────── META ───────────── */
        "name": {
            "label": "🔡 Nombre del Fichero",
            "category": "meta",
            "type": "text",
        },
        "prefix": {
            "label": "Prefijo",
            "category": "meta",
            "type": "text",
        },
        "folder": {
            "label": "📂 Carpeta",
            "category": "meta",
            "type": "text",
        },

        /* ─────────── FRONTMATTER ─────────── */
        "type": {
            "label": "🗂️ Tipo de Fichero (Texto)",
            "category": "frontmatter",
            "type": "text",
        },
        "tags": {
            "label": "🗂️ Tipo de Fichero (Etiqueta)",
            "category": "frontmatter",
            "type": "multi"
        },
        "aliases": {
            "label": "🔡 Títulos Alternativos",
            "category": "frontmatter",
            "type": "array",
        },
        "publish": {
            "label": "📰 Publicar",
            "category": "frontmatter",
            "type": "boolean",
        },
        "status": {
            "label": "🚥 Estado",
            "category": "frontmatter",
            "type": "cycle",
        },
        "priority": {
            "label": "🎖️ Prioridad",
            "category": "frontmatter",
            "type": "select",
            "options": { 
                "Alta": "🥇", 
                "Media": "🥈", 
                "baja": "🥉"
            },
        },
        "cssclasses": {
            "label": "Clases de CSS",
            "category": "frontmatter",
            "type": "array",
        },
        "icon": {
            "label": "Ícono",
            "category": "frontmatter",
            "type": "text",
        },

        "created": {
            "label": "📆 Creado",
            "category": "frontmatter",
            "type": "date",
        },
        "modified": {
            "label": "📆 Modificado",
            "category": "frontmatter",
            "type": "date",
        },

        "language": {
            "label": "🌎 Lenguaje Original",
            "category": "frontmatter",
            "type": "text",
        },

        /* ─────────── HIERARCHY ─────────── */
        "categories": {
            "label": "⬆️ Categorías",
            "category": "hierarchy",
            "type": "array",
        },
        "related": {
            "label": "↔️ Relacionado",
            "category": "hierarchy",
            "type": "array",
        },
        "previous": {
            "label": "⬅️ Previas",
            "category": "hierarchy",
            "type": "array",
        },
        "next": {
            "label": "➡️ Siguientes",
            "category": "hierarchy",
            "type": "array",
        },

        /* ───────────── HEAD ───────────── */


        "title": {
            "label": "🔡 Título Original",
            "category": "head",
            "type": "text",
        },
        "shortTitle": {
            "label": "🔡 Título Corto",
            "category": "frontmatter",
            "type": "text",
        },
        "url": {
            "label": "🔗 Enlace",
            "category": "head",
            "type": "link",
        },
        "serie": {
            "label": "📚 Serie (Colección)",
            "category": "head",
            "type": "text",
        },
        "number": {
            "label": "#️⃣ Número de Colección",
            "category": "head",
            "type": "number",
        },
        "seasons": {
            "label": "🔢 Temporadas",
            "category": "head",
            "type": "number",
        },

        /* ───────────── EXTRA ───────────── */

        "genres": {
            "label": "Géneros",
            "category": "extra",
            "type": "multi"
        },
        "desc": {
            "label": "🔤 Descripción",
            "category": "extra",
            "type": "text",
        },
        "reason": {
            "label": "Razón",
            "category": "extra",
            "type": "text",
        },
        "comment": {
            "label": "💬 Comentario",
            "category": "extra",
            "type": "text",
        },
        "notes": {
            "label": "✏️ Notas Adicionales (Apuntes)",
            "category": "extra",
            "type": "text",
        },

        /* ───────────── INDEX CARD ───────────── */
        "authors": {
            "label": "👤 Autores",
            "category": "card",
            "type": "array",
        },
        "translator": {
            "label": "🌎 Traductores",
            "category": "card",
            "type": "array",
        },
        "compilers": {
            "label": "Compiladores",
            "category": "card",
            "type": "array",
        },
        "directors": {
            "label": "🎬 Directores",
            "category": "card",
            "type": "array",
        },
        "producers": {
            "label": "🎥 Productores",
            "category": "card",
            "type": "array",
        },
        "writers": {
            "label": "✍️ Guionista",
            "category": "card",
            "type": "array",
        },
        "creators": {
            "label": "📺 Creadores",
            "category": "card",
            "type": "array",
        },
        "showrunners": {
            "label": "📺 Showrunner",
            "category": "card",
            "type": "array",
        },
        "developers": {
            "label": "🎮 Desarrollador",
            "category": "card",
            "type": "array",
        },
        "publishers": {
            "label": "📰 Editorial",
            "category": "card",
            "type": "array",
        },

        "imported": {
            "label": "📥 Fecha de Importación",
            "category": "card",
            "type": "date",
        },
        "published": {
            "label": "📆 Fecha de Publicación",
            "category": "card",
            "type": "date",
        },
        "processed": {
            "label": "📆 Fecha de Inicio de Lectura",
            "category": "card",
            "type": "date",
        },

        "doi": {
            "label": "🔢 Identificador de Objeto en Línea",
            "category": "card",
            "type": "text",
        },
        "duration": {
            "label": "🕰️ Duración",
            "category": "card",
            "type": "time",
        },
        "version": {
            "label": "Versión",
            "category": "card",
            "type": "text",
        },
        "uses": {
            "label": "Uso",
            "category": "card",
            "type": "multi"
        },
        "platform": {
            "label": "Plataforma",
            "category": "card",
            "type": "multi",
            "options": { 
                "Escritorio": "🖥️", 
                "Móvil": "📱", 
                "Web": "🌐", 
                "Plugin": "🔌", 
            },
        },
    };

    return Object.freeze(noteFields);
};