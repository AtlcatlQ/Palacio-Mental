/**
 * @description Diccionario de Tipos de Notas
 * @returns {Object} Definición de Tipos de Ficheros (Tipos Base)
 */

module.exports = () => {
	const types = {
		/*
		// ㊙️ PERSONAL
		"Personal": {
			"label": "㊙️ Personal",
			"folder": "5-REGISTRO",
			"handler": async (tp, template) => await tp.user.personalHandler(tp, template),
			"sections": [],
			"fields": [],
			"defaults": {
				"tags": "㊙️",
				"publish": false,
			}
		},

		// 📔 P. A. R. A.
		"Area": {
			"label": "🪐 ÁREA",
			"folder": "2-AREAS",
			"handler": async (tp, template) => await tp.user.areaHandler(tp, template),
			"sections": ["tasks", "projects", "areas", "notas", "fuentes"],
			"fields": [],
			"defaults": {
				"tags": "🪐",
				"publish": false
			},
		},
		"Project": {
			"label": "🏹 PROYECTO",
			"folder": "1-PROJECTS",
			"handler": async (tp, template) => await tp.user.projectHandler(tp, template),
			"sections": ["tasks", "projects", "notas", "fuentes"],
			"fields": [],
			"defaults": {
				"tags": "🏹",
				"publish": false,
			},
		},
		*/

		// ♻️ WORKFLOW
		"Documentation": {
			"label": "📃 Documentación Interna",
			"folder": "6-Flujo/6.0-Documentacion-Interna",
			"handler": async (tp, template) => await tp.user.documentationHandler(tp, template),
			"sections": [],
			"fields": [],
			"defaults": {
				"tags": "📃",
			},
		},

		/*
		// ⚙️ CONFIGURATION
		"Classes": {
			"label": "🗂️ Clase",
			"folder": "A-Utility/A.1-Classes",
			"handler": async (tp, template) => await tp.user.classesHandler(tp, template),
			"sections": [],
			"fields": [],
			"default": {
				"extends": "generic",
				"tags": "⚙️/🗂️",
				"mapWithTag": true,
			},
		},
		"Plugin": {
			"label": "🔌 Revisión de Plugin",
			"folder": "A-Utility/A.3-Plugins",
			"handler": async (tp, template) => await tp.user.pluginHandler(tp, template),
			"sections": ["indexCard", "documentation", "settings", "style"],
			"fields": ["url", "version", "uses", "platform"],
			"defaults": {
				"tags": "⚙️/🔌",
				"status": "🔲",
			},
			"status": {
				"Pendiente": "🔲",
				"En Revisión": "🔳",
				"Activo": "✔️",
				"Inactivo": "❌", 
			},
			"uses": {
				"Layout": "💻",
				"Hotkeys": "⌨️",
				"Plugins": "🔌",
				"Gestión de Archivos": "📂",
				"Gestión de Imágenes": "🖼️",
				"Integration": "🧩",
				"Formatting": "🔦",
				"UI": "💄",
				"Metadata": "🔑",
				"Templates": "🃏",
				"Workflow": "♻️",
				"Tareas": "📌",
				"Diary": "📒",
				"Habits": "🔂",
				"Information": "📥",
				"Automation": "🔄️",
			},
		},
		"Theme": {
			"label": "💄 Revisión de Tema",
			"folder": "A-Utility/A.4-Temas",
			"handler": async (tp, template) => await tp.user.themeHandler(tp, template),
			"sections": ["indexCard", "documentation", "settings"],
			"fields": ["url", "version"],
			"defaults": {
				"tags": "⚙️/💄",
			},
		},
		"Snippets": {
			"label": "💄 Revisión de CSS Snippets",
			"folder": "A-Utility/A.5-Snippets",
			"handler": async (tp, template) => await tp.user.snippetsHandler(tp, template),
			"sections": ["indexCard","documentation", "settings"],
			"fields": ["url", "version"],
			"defaults": {
				"tags": "⚙️/💄",
			},
		},

		// ✍️ WRITING
		"Writing": {
			"label": "✍️ Escrito",
			"folder": "7-Crisol-de-Escritura/7.A-Manuscritos",
			"handler": async (tp, template) => await tp.user.writingHandler(tp, template),
			"sections": ["indexCard"],
			"fields": [],
			"defaults": {
				"tags": "✍️",
				"publish": false,
				"status": "📄",
				"authors": "AtlcatlQ"
			},
		},

		// 🗃️ ZETTELKASTEN
		"Capture": {
			"label": "📥 Nota de Captura",
			"folder": "0-INBOX/0.1-Captura",
			"handler": async (tp, template) => await tp.user.captureHandler(tp, template),
			"sections": ["indexCard", "notas"],
			"fields": ["title", "imported"],
			"defaults": {
				"tags": "📥",
				"status": "🌑",
				"priority": "🥈",
				"type": "Otro",
			},
			"status": {
				"Pendiente": "🌑",
				"Leyendo": "🌘",
				"Leído": "🌗",
				"Integrando": "🌖",
				"Procesado": "🌕",
				"Previo": "🌔",
				"Releer": "🌓",
				"Abandonado": "🌒",
				"Permanente": "🌙", 
			},
		},
		"Permanent": {
			"label": "📓 Nota Permanente",
			"folder": "0-INBOX",
			"handler": async (tp, template) => await tp.user.noteHandler(tp, template),
			"sections": [],
			"fields": [],
			"defaults": {
				"tags": "📓",
				"publish": false,
				"status": "🌱"
			},
			"status": {
				"Emergente": "🌱",
				"Leyendo": "🪴",
				"Evergreen": "🌲",
			},
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
			"fields": [],
			"defaults": {},
		},
		*/
	};

	return Object.freeze(types);
};