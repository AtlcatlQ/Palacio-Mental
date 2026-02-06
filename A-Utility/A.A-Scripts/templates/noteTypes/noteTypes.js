/**
 * @description Diccionario de Tipos de Notas
 * @returns {Object} Definición de los distintos Tipos de Notas
 */

module.exports = () => {
	const types = {
		/*
		// ㊙️ PERSONAL
		"personal": {
			"label": "㊙️ Personal",
			"folder": "5-REGISTRO",
			"handler": async (tp, template) => await tp.user.personalHandler(tp, template),
			"sections": [],
		},

		// 📔 P. A. R. A.
		"area": {
			"label": "🪐 ÁREA",
			"folder": "2-AREAS",
			"handler": async (tp, template) => await tp.user.areaHandler(tp, template),
			"sections": ["tasks", "projects", "areas", "notas", "fuentes"],
		},
		"project": {
			"label": "🏹 PROYECTO",
			"folder": "1-PROJECTS",
			"handler": async (tp, template) => await tp.user.projectHandler(tp, template),
			"sections": ["tasks", "projects", "notas", "fuentes"],
		},
		*/

		// ♻️ WORKFLOW
		"documentation": {
			"label": "📃 Documentación Interna",
			"folder": "6-Flujo/6.0-Documentacion-Interna",
			"handler": async (tp, template) => await tp.user.documentationHandler(tp, template),
			"sections": [],
		},

		/*
		// ⚙️ CONFIGURATION
		"classes": {
			"label": "🗂️ Clase",
			"folder": "A-Utility/A.1-Classes",
			"handler": async (tp, template) => await tp.user.classesHandler(tp, template),
			"sections": [],
		},
		"plugin": {
			"label": "🔌 Revisión de Plugin",
			"folder": "A-Utility/A.3-Plugins",
			"handler": async (tp, template) => await tp.user.pluginHandler(tp, template),
			"sections": ["indexCard", "documentation", "settings", "style"],
		},
		"theme": {
			"label": "💄 Revisión de Tema",
			"folder": "A-Utility/A.4-Temas",
			"handler": async (tp, template) => await tp.user.themeHandler(tp, template),
			"sections": ["indexCard", "documentation", "settings", "style"],
		},
		"snippets": {
			"label": "💄 Revisión de CSS Snippets",
			"folder": "A-Utility/A.5-Snippets",
			"handler": async (tp, template) => await tp.user.snippetsHandler(tp, template),
			"sections": ["indexCard"],
		},

		// ✍️ WRITING
		"writing": {
			"label": "✍️ Escrito",
			"folder": "7-Crisol-de-Escritura/7.A-Manuscritos",
			"handler": async (tp, template) => await tp.user.writingHandler(tp, template),
			"sections": [],
		},

		// 🗃️ ZETTELKASTEN
		"capture": {
			"label": "📥 Nota de Captura",
			"folder": "0-INBOX/0.1-Captura",
			"handler": async (tp, template) => await tp.user.captureHandler(tp, template),
			"sections": ["indexCard", "notas"],
		},
		"permanent": {
			"label": "📓 Nota Permanente",
			"folder": "0-INBOX",
			"handler": async (tp, template) => await tp.user.noteHandler(tp, template),
			"sections": [],
		},
		"default": {
			// Este tipo es especial porque en realidad es un subtipo de nota de captura
			// Pero lo voy a hacer el default y moverlo a la carpeta de captura en el handler
			// Ya que una nota rápida en Zettelkasten no es una nota permanente
			// Y aunque no tenga referencia, me ayuda a sacar mis pensamientos rápido
			"label": "✏️ Apunte Rápido",
			"folder": "",
			"handler": async (tp, template) => await tp.user.captureHandler(tp, template),
			"sections": [],
		},
		*/
	};

	return Object.freeze(types);
};