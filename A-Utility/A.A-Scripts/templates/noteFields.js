/**
 * @description Diccionario de Campos
 * @param {Object} tp - Requiere importar el Objeto de Templater
 * @returns {Object} Diccionario de Campos disponibles
 */

module.exports = () => {
    const noteFields = {
        "title": {
            "label": "🔡 Título Original",
            "index": false
        },
        "url": {
            "label": "↖️",
            "index": false
        },
        "version": {
            "label": "Versión",
            "index": true
        },
        "platform": {
            "label": "Plataforma",
            "index": true
        },
    };

    return Object.freeze(noteFields);
};