/**
 * @description Renderizador de Mapa de Contenido
 * @param {Object} tp - Requiere importar el Objeto de Templater
 * @param {Object} NoteTemplate - NoteTemplate es un Objeto de Plantilla
 * @returns {string} Sección Mapa de Contenido
 */

module.exports = async (tp, template) => {
    const HEADING = "# 🗺️ Mapa de Contenido";
    var render = [];

    render.push(`\n${HEADING}\n`);
    return render.join("\n");
};