/**
 * @description Asistente de creación de Nuevas notas
 * @param {Object} tp - Requiere importar el Objeto de Templater
 * @returns {string} la plantilla de la nota nueva
 */

module.exports = async function (tp) {
	const Template = tp.user.NoteTemplate(tp);
	let t = new Template();
	await t.build();
	return t.render();
};