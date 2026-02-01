/**
 * @description Renderizador de Sección Jerarquía
 * @param {Object} tp - Requiere importar el Objeto de Templater
 * @param {Object} draft - Draft es un Objeto de Plantilla
 * @returns {string} Sección de Jerarquía Renderizada
 */

module.exports = async (tp, draft) => {
    var render = [];
    render.push(`\n`);
    render.push(`⬆️ (categorías:: )`);
    render.push("↔️ (relacionado:: )");
    render.push("---");
    render.push("< (previas::) | (siguientes:: ) >");
    render.push(`\n`);
    
    return render.join("\n\n");
};