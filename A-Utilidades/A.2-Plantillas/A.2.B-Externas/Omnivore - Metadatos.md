<%* /* ***VARIABLES*** */ 

/* **UTILIDADES** */ 

const prefixes = ["'", ";", ",", "¿", "¡", "!", "&", "+", "§", "¬", "=", "—", "-", "%", "°", "_"];

const icons = ["🏫", "🎓", "", "❓", "💭", "💡", "🎨", "📚", "📚/📗", "📃", "🔬", "📜", "🗞️", "📹", "🎧", "Otro"];

const types = ["Apuntes de Clase", "Material de Clase", "Curso", "Pregunta", "Pensamiento", "Idea", "Arte", "Libro", "Extracto", "Documentación", "Paper", "Wikipedia", "Artículo", "Vídeo", "Podcast", "Otro"];

/* **DOCUMENTO** */

/* **Fuente** */  
let title = `{{title}}`.replace(/: /, " - ");  
let author = "{{{author}}}";  
let link = "{{{originalUrl}}}";  
let read = moment("{{dateRead}}").format("YYYY-MM-DD");  
let note = `{{note}}`.replace(/\n/, " ");
let labels = [{{# labels.length }}{{# labels}}"{{{name}}}", {{/labels}}{{/ labels.length}}];

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

if (labels.includes("DOCUMENTACIÓN")) {status = "🌙";}

/* **YAML** */

tR += `status: "${status}"\n`;  
tR += `tags: 📥/${icon}\n`;  
tR += `aliases: ${aliases}\n`;  
tR += `type: "${type}"\n`;  
_%>
