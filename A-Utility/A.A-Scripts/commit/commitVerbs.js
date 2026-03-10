/**
 * @description Diccionario de Verbos globales de mis commits
 * @returns {Object} Lista de verbos generales para los commits
*/

module.exports = () => {
	let verbs = {
		"ADD": "Añadir un elemento nuevo (genérico)",
		"FIX": "Corregir algo que no funcionaba",
		"IMPORT": "Agregar elemento que estaba presente en la vault anterior (Previo al seguimiento con Git)",
		"REFINE": "Mejora en explicación",
		"RENAME": "Cambio de nombre de fichero",
		"REFACTOR": "Reorganización de la información sin cambiar su significado",
		"LINT": "Corrección de formato (Usando Linter)",
		"REMOVE": "Eliminar algo (genérico)",
		"REVERT": "Regresar algo a una versión anterior",
		"MOVE": "Cambiar un fichero de carpeta (Genérico)",
		"UPDATE": "",
		"MERGE": ""
	};
	return verbs;
}