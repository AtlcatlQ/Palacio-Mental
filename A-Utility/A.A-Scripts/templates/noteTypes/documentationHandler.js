/**
 * @description Muta un archivo de Plantilla
 * @param {Object} tp - Requiere importar el Objeto de Templater
 * @param {Object} NoteTemplate - NoteTemplate es un Objeto de Plantilla
 * @returns {null} 
 */

module.exports = async (tp, template) => {
    const TYPES = {
        "herramienta": {
            "folder": "6-Flujo/6.0-Documentacion-Interna/6.0.1-Herramientas",
            "frontmatter": {
                "tags": "📃/🔧",
                "url": "",
                "version": "",
                "platform": [],
            },
            "sections": ["indexCard", "settings", "documentation"]
        },
        "default": {
            "frontmatter": {
                "tags": "📃",
                "publish": true,
            },
            "sections": []
        }
    };
    let folder = template.getFolder();
    template.setType((folder.endsWith(TYPES.herramienta.folder))? "herramienta" : "default");

    if (template.getType() === "herramienta") {
        // Documentación de Herramientas es un subtipo de documentación interna
        let platform = {
            "Escritorio": "🖥️",
            "Móvil": "📱",
            "Web": "🌐", 
            "Plugin": "🔌",
        };
        TYPES.herramienta.frontmatter.url = await tp.system.prompt("Enlace", tp.system.clipboard(), false);
        while (Object.keys(platform).length > 0) {
            // El objetivo del bucle es poder elegir varias plataformas
            // formatter-platform es un array de íconos
            // por eso se guardan los emojis, no los nombres.
            let p = await tp.system.suggester(
                Object.entries(platform).map(([k, v]) => `${v} ${k}`),
                Object.keys(platform),
                false, "Plataformas");
            if (!p) {break;}
            TYPES.herramienta.frontmatter.platform.push(platform[p]);
            delete platform[p]; 
        }
        version = await tp.system.prompt("Ingresar versión en uso", "", false);
        TYPES.herramienta.frontmatter.version = version;
    }
    template.setFrontmatter({...TYPES["default"].frontmatter, ...TYPES[template.getType()].frontmatter});
    template.addSection([
        ...(TYPES["default"].sections ?? []), 
        ...(TYPES[template.getType()].sections ?? [])
    ]);
    return template;
};