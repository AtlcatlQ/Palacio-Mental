/**
 * @description Diccionario de Secciones de notas
 * @returns {Object} Secciones de Notas
 */ 

module.exports = () => {
	const sections = {
		"frontmatter": {
			"label": "YAML Frontmatter",
			"content": async (tp, template) => await tp.user.frontmatterRender(tp, template)
		},
		"hierarchy": {
			"label": "Jerarquías",
			"content": async (tp, template) => await tp.user.hierarchyRender(tp, template)
		},
		"mapOfContent": {
			"label": "🗺️ Mapa de Contenido",
			"content": async (tp, template) => await tp.user.mapOfContentRender(tp, template)
		},
		"indexCard": {
			"label": "📇 Ficha",
			"content": async (tp, template) => await tp.user.indexcardRender(tp, template)
			},	
		/*
		"documentation": {
			"label": "📃 Documentación",
			"content": async (tp, template) => await tp.user.documentationRender(tp, template)
		},
		"settings": {
			"label": "⚙️ Configuración",
			"content": async (tp, template) => await tp.user.settingsRender(tp, template)
			},
		"style": {
			"label": "💄 Style",
			"content": async (tp, template) => await tp.user.styleRender(tp, template)
		},
		"apuntes": {
			"label": "✏️ Apuntes", 
			"content": async (tp, template) => await tp.user.apuntesRender(tp, template)
		},
		*/
	};
	return Object.freeze(sections);
};