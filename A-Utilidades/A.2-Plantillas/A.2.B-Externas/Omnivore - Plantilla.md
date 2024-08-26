<%* /* ***VARIABLES*** */ 

/* **UTILIDADES** */ 

const prefixes = ["'", ";", ",", "¿", "¡", "!", "&", "+", "§", "¬", "=", "—", "-", "%", "°", "_"];

const icons = ["🏫", "🎓", "", "❓", "💭", "💡", "🎨", "📚", "📚/📗", "📃", "🔬", "📜", "🗞️", "📹", "🎧", "Otro"];

const types = ["Apuntes de Clase", "Material de Clase", "Curso", "Pregunta", "Pensamiento", "Idea", "Arte", "Libro", "Extracto", "Documentación", "Paper", "Wikipedia", "Artículo", "Vídeo", "Podcast", "Otro"];

const typesText = ["🏫 Apuntes de Clase", "🎓 Material de Clase", "Curso", "❓ Pregunta", "💭 Pensamiento", "💡 Idea", "🎨 Arte", "📚 Libro", "📗 Extracto", "📃 Documentación", "🔬 Paper Científico", "📜 Artículo de Wikipedia", "🗞️ Artículo de Internet", "📹 Vídeo", "🎧 Podcast", "Otro..."];

/* **DOCUMENTO** */

/* **Fuente** */  
let title = `{{title}}`.replace(/: /, " - ");  
let author = "{{{author}}}";  
let link = "{{{originalUrl}}}";  
let description = `{{description}}`.replace(/\n/, " ");  
let published = moment("{{datePublished}}").format("YYYY-MM-DD");

/* **Omnivore** */  
let id = "{{id}}";  
let saved = moment("{{dateSaved}}").format("YYYY-MM-DD"); 
let read = moment("{{dateRead}}").format("YYYY-MM-DD");  
let note = `{{note}}`.replace(/\n/, " ");

/* **Etiquetas** */  
let labels = [{{# labels}}"{{{name}}}".replace("_", " "),{{/labels}}];

const etiquetas = function (l) {  
    let e = "";   
    if (l.length !== 0) {e = "[[" + l.join("]], [[") + "]]";}  
    return e;  
};

/* **Resaltados** */  
let highlights = [{{# highlights}}  
    {  
        id: "{{highlightID}}",  
        date: "{{dateHighlighted}}",  
        url: "{{{highlightUrl}}}",  
        color: "{{color}}",  
        text: `{{{text}}}`.replace(/\n/g, "<br/>"),  
        note: `{{{note}}}`.replace(/\n/g, "<br/>"),  
        labels: [{{# labels.length }}{{# labels}}"{{{name}}}", {{/labels}}{{/ labels.length}}]  
    }, {{/ highlights}}];

/* ***ACTUALIZACIÓN*** */ 

/* **PREFIJOS** */  
if (link.includes("wiki")) {prefix = "—";}  
else if (/youtu.?be/.test(link)) {prefix = "%";}  
else if (labels.contains("ARTÍCULO")) {prefix = "-";}  
else if (labels.contains("DOCUMENTACIÓN")) {prefix = "¬";}  
else {prefix = "_";}

/* **ÍCONO Y TIPO** */  
icon = icons[prefixes.indexOf(prefix)];  
type = types[prefixes.indexOf(prefix)];

/* **RENOMBRAR ARCHIVO** */  
if (link.includes("wiki")) {await tp.file.rename(`${prefix} ${read} ${title}`);}  
else {await tp.file.rename(`${prefix} ${read} ${author} - ${title}`);}

/* **METADATOS** */  

/* **Aliases** */

let references;  
let aliases;

references = [`"${title}"`, `"${prefix} ${title}"`, `"↖️ ${title}"`];

if (!link.includes("wiki") && !labels.includes("DOCUMENTACIÓN")) {  
    references.push(`"${author}"`);  
    references.push(`"${prefix} ${author}"`);  
    references.push(`"↖️ ${author}"`);  
    references.push(`"${author} - ${title}"`);  
    references.push(`"${prefix} ${author} - ${title}"`);  
    references.push(`"↖️ ${author} - ${title}"`);  
}

aliases = "\n  - " + references.join("\n  - ");

/* **Status** */

let status = (type == "Vídeo" && !note)? "🌘": "🌗";

let publish = ["Documentación", "Wikipedia", "Artículo", "Vídeo"].includes(type)? "true" : "false";

if (labels.includes("DOCUMENTACIÓN")) {status = "🌙";}

/* **YAML** */

tR += `---\n\n`;  
tR += `status: "${status}"\n`;  
tR += `tags: 📥/${icon}\n`;  
tR += `aliases: ${aliases}\n`;  
tR += `type: "${type}"\n`;  
tR += `publish: "${publish}"\n`;  
tR += `---\n\n`;  
_%>

<%* /* ***NOTA FUENTE*** */ %>

<%* /* **JERARQUÍAS** */ %>

<% tp.file.include("[[Jerarquías]]") %>

<%* /* **FICHA** */ %>

# 📇 Ficha

<%* if (/youtu.?be/.test(link)) { %>![Vídeo](<%* tR += link; %>)<%* } %>

|  (fuente:: [<cite>{{{title}}}</cite>]({{{omnivoreUrl}}})) (referencia:: [🔗](<%* tR += link; %>))  |
|:--------------------------------------------------------------------------------------------------:|
|     <%* if (!(link.includes("wiki"))) { %>**Autor:** (authors:: <%* tR += author; %>)<%* } %>      |
| <%* if (!(link.includes("wiki"))) { %>**Publicado:** (publicado:: <%* tR += published; %>)<%* } %> |
|                         **Guardado:** (guardado:: [[<%* tR += saved; %>]])                         |
|                  **Importado:** (importado:: [[<% tp.date.now("YYYY-MM-DD") %>]])                  |
|                  **Procesado:** (procesado:: [[<% tp.date.now("YYYY-MM-DD") %>]])                  |

{{# description }}**Descripción:** {{{ description }}}{{/ description }}

↖️ (etiquetas:: <%* tR += etiquetas(labels); %>)

<%* /* **CITADO** */ %>

<% tp.file.include("[[0.1.2-Citado]]") -%>

<%* /* **APUNTES** */ _%>

<%* /* **Funciones** */

/* *Etiquetas* */

const tags = function(h) {  
    let tag = "";  
    if (h.note.includes("❓")){tag += "#📥/❓ ";} // Preguntas  
    if (h.note.includes("🔎")){tag += "#🔔/🔎 ";} // Buscar, referencias  
    if (h.note.includes("📕")){tag += "#🔔/📕 ";} // Vocabulario  
    return tag;  
};

/* *Encabezados* */

const heading = function(h) {  
    let nivel = /@h(?<nivel>\d)/.exec(h.note).groups.nivel;  
    let highlight = "#".repeat(parseInt(nivel) + 1) + " ";  
    highlight += `${h.text} \n\n`;  
    highlight += `${tags(h)} \n\n`;  
    highlight += `${h.note.replace(/@h\d/, "")}\n\n---\n\n`;  
    return highlight;  
};

/* *Citas Textuales* */

const quote = function(h) {  
    let highlight = `\n---\n\n`;  
    highlight += `> ${h.text} ([↖️](${h.url}))\n\n`; // Quote  
    highlight += `${etiquetas(h.labels)}\n\n`; // Labels  
    highlight += `${tags(h)}\n\n`;  // Tags  
    highlight += `${h.note.replace("📗", "")}\n\n`; // Note  
    highlight += `\n---\n\n`;  
    return highlight;  
};

/* *Apuntes* */

const apunte = function (h) {  
    let highlight = "";  
    highlight += `- [ ] `; // Task  
    highlight += `${tags(h)}`; // Tags  
    highlight += `[↖️](${h.url}) `; // URL  
    highlight += `<mark class="hltr-${h.color}">`; // Highlight Color  
    highlight += `${h.date} `; // Date  
    highlight += `</mark>: `; // Close Highlight  
    highlight += `${h.text} `; // Text  
    highlight += `^${h.id}\n`; // ID  
    highlight += `    - ${h.note}\n`; // Nota  
    highlight += `    - ${etiquetas(h.labels)} \n`; // Etiquetas   
    return highlight;  
};

/* ==Resaltados== */

const highlight = function(h) {  
    if (/@h\d/.test(h.note)) {return heading(h);}  
    else if (h.note.includes("📗")) {return quote(h);}  
    else {return apunte(h);}  
};
 %>

# ✏️ Apuntes

{{# note }}

 {{{ note }}}

---
 {{/ note }}

<%* for(let h of highlights){tR += highlight(h);} %>

# ❓ Preguntas

# 🔔 Revisar

## 📕 Vocabulario