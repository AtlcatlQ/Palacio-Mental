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
		"tasks": {
			"label": "📌 Agenda",
			"content": async (tp, template) => await tp.user.tasksRender(tp, template)
		},
		"areas": {
			"label": "🪐 Áreas",
			"content": async (tp, template) => await tp.user.areasRender(tp, template)
		},
		"projects": {
			"label": "🏹 Proyectos",
			"content": async (tp, template) => await tp.user.projectsRender(tp, template)
		},
		"notes": {
			"label": "📓 Notas",
			"content": async (tp, template) => await tp.user.notesRender(tp, template)
		},
		
		"jotting": {
			"label": "✏️ Apuntes", 
			"content": async (tp, template) => await tp.user.jottingRender(tp, template)
		},
		"idea": {
			"label": "💡 Idea",
			"content": async (tp, template) => await tp.user.ideaRender(tp, template)
		},
		"question": {
			"label": "❓ Pregunta",
			"content": async (tp, template) => await tp.user.questionRender(tp, template)
		},
		"extract": {
			"label": "📖 Extracto",
			"content": async (tp, template) => await tp.user.extractRender(tp, template)
		},
		"reflection": {
			"label": "💭 Pensamiento",
			"content": async (tp, template) => await tp.user.reflectionRender(tp, template)
		},
		*/
		"thought": {
			"label": "label",
			"content": async (tp, template) => await tp.user.thoughtRender(tp, template)
		},
		"settings": {
			"label": "⚙️ Configuración",
			"content": async (tp, template) => await tp.user.settingsRender(tp, template)
		},
		"documentation": {
			"label": "📃 Documentación",
			"content": async (tp, template) => await tp.user.documentationRender(tp, template)
		},
		"style": {
			"label": "💄 Style",
			"content": async (tp, template) => await tp.user.styleRender(tp, template)
		},
	};

	return Object.freeze(sections);
};