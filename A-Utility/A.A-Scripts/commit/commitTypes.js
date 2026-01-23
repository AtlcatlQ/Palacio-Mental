/**
 * Diccionario de Convención de Commits
 * @returns {Object} Orquestador de convención
 */ 

module.exports = () => {
	const types = {
		"zettelkasten": {
			"label": "🗃️ Zettelkasten",
			"defaultScope": "notes",
			"defaultVerb": "DISTILL",
			"scopes": {
				"notes": {
					"label": "📓 Notes",
					"defaultVerb": "REFINE",
					"verbs": {
						"DISTILL": "Añadir contenido a una Permanent note, a partir de una Nota de Captura",
						"SPLIT": "Dividir una nota en dos notas más específicas (mayor atomicidad)",
						"MERGE": "Combinar dos notas de temas similares en una misma (mayor claridad)"
					}
				},
				"capture": {
					"label": "📥 Capture",
					"defaultVerb": "MANUAL",
					"verbs": {
						"ARCHIVE": "Mueve notas de captura ya procesadas al archivo de P. A. R. A."
					}
				}
			},
			"verbs": {}
		},
		"modules": {
			"label": "📦 Modules",
			"defaultScope": "record",
			"defaultVerb": "UPDATE",
			"scopes": {
				"record": {
					"label": "📒 RECORD",
					"verbs": {}
				},
				"projects": {
					"label": "🏹 PROJECTS",
					"verbs": {}
				},
				"areas": {
					"label": "🪐 AREAS",
					"verbs": {}
				},
				"writing": {
					"label": "✍️ Writing",
					"verbs": {}
				}
			},
			"verbs": {
				"UPDATE": "Actualizar el modulo"
			}
		},
		"config": {
			"label": "⚙️ Config",
			"defaultScope": "desktop",
			"defaultVerb": "SET",
			"scopes": {
				"desktop": {
					"label": "💻 Desktop",
					"verbs": {}
				},
				"mobile": {
					"label": "📱 Mobile",
					"verbs": {}
				},
				"hotkeys": {
					"label": "⌨️ Hotkeys",
					"verbs": {}
				},
				"vim": {
					"label": "⌨️ Hotkeys-vim",
					"verbs": {}
				},
				"ignore": {
					"label": "⛔ gitignore",
					"verbs": {}
				},
				"style": {
					"label": "💄 Style",
					"verbs": {}
				},
				"ui": {
					"label": "💄 Style-UI",
					"verbs": {}
				},
				"snippets": {
					"label": "💄 Style-Snippets",
					"verbs": {}
				},
				"plugins": {
					"label": "🔌 Plugins",
					"verbs": {}
				}
			},
			"verbs": {
				"SET": "Cambiar opciones de configuración (Set 'x' to 'y')",
				"ASSIGN": "Configurar un atajo de teclado",
				"ENABLE": "Habilitar (principalmente plugins)",
				"DISABLE": "Deshabilitar (principalmente plugins)"
			}
		},
		"workflow": {
			"label": "♻️ Workflow",
			"defaultScope": "docs",
			"defaultVerb": "ADD",
			"scopes": {
				"docs": {
					"label": "📃 Docs",
					"defaultVerb": "REFINE",
					"verbs": {}
				},
				"templates": {
					"label": "🃏 Templates",
					"defaultVerb": "FIX",
					"verbs": {}
				},
				"fileclasses": {
					"label": "🗂️ FileClasses",
					"defaultVerb": "UPDATE",
					"verbs": {}
				}
			},
			"verbs": {}
		}
	};
	return types;
}