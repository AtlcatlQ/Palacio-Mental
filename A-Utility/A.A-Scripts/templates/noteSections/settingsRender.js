/**
 * @description Renderizador de Sección de Configuración
 * @param {Object} tp - Requiere importar el Objeto de Templater
 * @param {Object} NoteTemplate - NoteTemplate es un Objeto de Plantilla
 * @returns {String} Sección de Configuración Renderizada
 */

module.exports = async (tp, template) => {
const HEADING = `# ⚙️ Configuración`
    var render = [];
render.push(`\n`);
render.push(HEADING);
render.push(`\n`);
    return render.join("\n");
};