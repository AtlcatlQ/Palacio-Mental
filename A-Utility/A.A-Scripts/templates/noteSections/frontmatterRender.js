/**
 * @description Renderiza un Encabezado YAML a partir de un Objeto Draft
 * @param {Object} tp - Requiere importar el Objeto de Templater
 * @param {Draft} draft - Objeto a Modificar
 * @returns {string} Frontmatter Renderizado
 */

module.exports = async (tp, draft) => {
    const separator = "---";
    const frontmatter = draft.frontmatter ?? {};
    const render = [];

    render.push(separator)
    for (const [k,v] of Object.entries(frontmatter)) {
        if (v === undefined) { continue; }
        if (v === null) { 
            render.push(`${k}: `); 
            continue;
        }
        switch(typeof v) {
            case "string": 
                render.push(`${k}: "${String(v)}"`);
                break;
            case "boolean":
            case "number":
                render.push(`${k}: ${v}`);
                break;
            case "object":
                if(Array.isArray(v)){
                    render.push(`${k}:`);
                    for (const item of v){
                        render.push(`  - "${item}"`);
                    }
                }
                break;
            default: 
                // Todos los tipos, de momento, no soportados se ignoran
                break;
        }
    }
    // El orden es corregido por Linter
    // No me interesa poner el orden dentro del programa por eso
    // Además, procuraré tener los handlers ordenados
    render.push(separator);

    return render.join("\n");
};