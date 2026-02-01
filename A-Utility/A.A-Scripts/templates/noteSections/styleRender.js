/**
 * @description Renderizador de Sección de Estilo
 * @param {Object} tp - Requiere importar el Objeto de Templater
 * @param {Object} NoteTemplate - NoteTemplate es un Objeto de Plantilla
 * @returns {String} Sección de Estilo renderizada
 */

module.exports = async (tp, template) => {
const HEADING = `# 💄 Estilo`
    var render = [];
render.push(`\n${HEADING}\n`);
    return render.join("\n");
};