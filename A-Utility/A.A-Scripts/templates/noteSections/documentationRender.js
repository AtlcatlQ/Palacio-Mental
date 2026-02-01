/**
 * @description Renderizador de Sección de Documentación
 * @param {Object} tp - Requiere importar el Objeto de Templater
 * @param {Object} NoteTemplate - NoteTemplate es un Objeto de Plantilla
 * @returns {String} Sección de Documentación Renderizada
 */

module.exports = async (tp, template) => {
const HEADING = `# 📃 Documentación`
    var render = [];
    
    render.push(`\n${HEADING}\n`);
    return render.join("\n");
};