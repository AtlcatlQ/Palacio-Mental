/**
 * @description Renderizador de la Ficha
 * @param {Object} tp - Requiere importar el Objeto de Templater
 * @param {Object} NoteTemplate - NoteTemplate es un Objeto de Plantilla
 * @returns {String} Return description
 */

module.exports = async (tp, template) => {
    const FIELDS = Object.fromEntries(
        Object.entries(tp.user.noteFields() ?? {})
        .filter(([k, v]) => v.index));
    const HEADING = "# 📇 Ficha";
    const EXTRA = { 
        "description": {"label": "🔤 Descripción", "content": ""}, 
        "comment": {"label": "💬 Comentario", "content": ""}, 
        "reason": {"label": "Razón", "content": ""}, 
        "notes": {"label": "✏️ Notas", "content": ""}
    };

    var render = [];

    // Wrapper para renderizar de forma literal la inline query de dataview
    var dvquery = (q) => `\`dv=${q}\``;
    
    // Permite renderizar campos que contengan dashes o espacios, es más límitado, pero directo
    var dvfield = (f) => dvquery(`this[${JSON.stringify(f)}]`); 

    // Validación de datos
    const head = () => {
        var h = "";
        if (template.frontmatter.url) {
            let titleLink = `elink(this.url, this.title)`; 
            let nameLink = (template.getType() === "plugin")?  
                `elink(this.url, this.file.name+ " (Repositorio de GitHub)")`:
                `elink(this.url, this.file.name)`; 
        
            h = (template.frontmatter.title) ? 
                `↖️ <cite>${dvquery(titleLink)}</cite>` : 
                `🔗 ${dvquery(nameLink)}`;
        } else if (template.frontmatter.title) {
            h = `🔡 <cite>${dvfield("title")}</cite>`;
        } else {
            h = `🔡 ${dvquery("this.file.name")}`;
        }
        return h;
    };

    // Renderizado
    render.push(HEADING);
    render.push(`| ${head()} |`);
    render.push("| --- |");
    for (const [k, v] of Object.entries(FIELDS)) {
        if (template.frontmatter[k] === undefined) {continue;}
        render.push(`| **${v.label}:** ${dvfield(k)} |`);
    }
    render.push(`\n`);

    for (const [k, v] of Object.entries(EXTRA)){
        let add = await tp.system.suggester(
            ["✔️ Sí", "❌ No"], 
            [true, false], 
            false, `¿Incluir "${v.label}"?`);
        if(add){
            EXTRA[v.label] = JSON.stringify(
                await tp.system.prompt(`${v.label}`, "", false));
            render.push(`**${v.label}** (${k}:: ${v.content})\n`)
        }
    }

    if (template.getType() === "plugin" || template.getType() === "herramienta"){ 
        render.push(`\n## Alternativas\n`);
    }
    return render.join(`\n`);
};