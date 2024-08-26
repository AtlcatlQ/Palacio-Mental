<%* /* ***VARIABLES*** */ 

/* **UTILIDADES** */ 

const prefixes = ["'", ";", ",", "¿", "¡", "!", "&", "+", "§", "¬", "=", "—", "-", "%", "°", "_"];

const icons = ["🏫", "🎓", "", "❓", "💭", "💡", "🎨", "📚", "📚/📗", "📃", "🔬", "📜", "🗞️", "📹", "🎧", "Otro"];

const types = ["Apuntes de Clase", "Material de Clase", "Curso", "Pregunta", "Pensamiento", "Idea", "Arte", "Libro", "Extracto", "Documentación", "Paper", "Wikipedia", "Artículo", "Vídeo", "Podcast", "Otro"];

const typesText = ["🏫 Apuntes de Clase", "🎓 Material de Clase", "Curso", "❓ Pregunta", "💭 Pensamiento", "💡 Idea", "🎨 Arte", "📚 Libro", "📗 Extracto", "📃 Documentación", "🔬 Paper Científico", "📜 Artículo de Wikipedia", "🗞️ Artículo de Internet", "📹 Vídeo", "🎧 Podcast", "Otro..."];

/* **DOCUMENTO** */

/* **Fuente** */

let title = `{{ title | replace(": ", ", ") }}`;  
let short = `{{ shortTitle | replace(": ", ", ") }}`;  
let date = tp.date.now("YYYY-MM-DD");  
let type = "{{ itemType }}";
let authors = [
    {% for c in creators %}{% if c.creatorType === "author" %}
    {first: `{{ c.firstName }}`, last: `{{ c.lastName }}` }{% if not loop.last %}, {% endif %}{% endif %}{% endfor %}]; 

const cite = function(name){
    let c = [];
    for(n of name){ c.push(`${n.last}`); }
    return c.join(" & ");
};

/* **Zotero** */

let url = "{{ desktopURI }}";

/* **Etiquetas** */

const etiquetas = function (l) {  
    let e = "";   
    if (l.length !== 0) {e = "[[" + l.join("]], [[") + "]]";}  
    return e;  
};

/* **Metadatos** */

/* **Anotaciones** */

let annotations = [{% for a in annotations %}
    {
    id: "{{ a.id }}",   
    type: "{{ a.type }}",  
    color: `{{ a.colorCategory | lower }}`,  
    url: `{{ a.desktopURI }}`,  
    date: `{{ a.date | format("YYYY-MM-DD[T]HH:mm") }}`,  
    page: `{{ a.pageLabel }}`,  
    image: `{{ a.imageBaseName }}`,
    text: `{{ a.annotatedText | nl2br }}`,  
    note: `{{ a.comment | nl2br }}`,
    labels: [{% for t in a.tags %}"{{ t.tag }}"{% if not loop.last %}, {% endif %}{% endfor %}]
    }{% if not loop.last %}, {% endif %}{% endfor %}];

/* ***ACTUALIZACIÓN*** */  
    
/* **ÍCONO Y TIPO** */  

switch (type) {
    case "book": type = "Libro"; break;
    case "Journal Article": type = "Paper"; break;
    case "Web Page": type = "Otro"; break;
    case "document": type = "Otro"; break;
    default: type = await tp.system.suggester(typesText, types, true, title + "({{itemType}})", 6);
}

let prefix = prefixes[types.indexOf(type)];  
let icon = icons[types.indexOf(type)];

/* **RENOMBRAR ARCHIVO** */  

if(short){await tp.file.rename(`${prefix} ${date} ${cite(authors)} - ${short}`);  
} else if(type == "Libro") {await tp.file.rename(`${prefix} ${cite(authors)} - ${title}`);  
} else {await tp.file.rename(`${prefix} ${date} ${cite(authors)} - ${title}`);}  

/* **METADATOS** */  

/* **Aliases** */  

let references;
let aliases;

references = [
    `"${title}"`,  
    `"${prefix} ${title}"`,  
    `"↖️ ${title}"`,  
    `"${cite(authors)}"`,  
    `"${prefix} ${cite(authors)}"`,  
    `"↖️ ${cite(authors)}"`,  
    `"${cite(authors)} - ${title}"`,  
    `"${prefix} ${cite(authors)} - ${title}"`  
    ];

if (short) {  
    references.push(`"${short}"`);  
    references.push(`"${prefix} ${short}"`);  
    references.push(`"↖️ ${short}"`);  
    references.push(`"${cite(authors)} - ${short}"`);  
    references.push(`"${prefix} ${cite(authors)} - ${short}"`);  
}

aliases = "\n  - " + references.join("\n  - ");

/* **YAML** */

tR += `---\n`;  
tR += `status: "🌘"\n`;  
tR += `tags: "📥/${icon}"\n`;  
tR += `aliases: ${aliases}\n`;  
tR += `type: "${type}"\n`;  
tR += `publish: false\n`;  
tR += `---\n\n`;  
_%> 

<%* /* ***NOTA FUENTE*** */ %>

<%* /* **JERARQUÍAS** */ %>

<% tp.file.include("[[Jerarquías]]") %>


# ✏️ Apuntes

<%* /* **Anotaciones** */ _%>

<%* /* **Funciones** */

/* *Etiquetas* */

const tags = function(h){
    let tag = "";  
    if (h.note.includes("❓")){tag += "#📥/❓ ";} // Preguntas  
    if (h.note.includes("🔎")){tag += "#🔔/🔎 ";} // Buscar, referencias  
    if (h.note.includes("📕")){tag += "#🔔/📕 ";} // Vocabulario  
    return tag;
};

/* *Encabezados* */
    
const heading = function(h){
    let nivel = /@h(?<nivel>\d)/.exec(h.note).groups.nivel;  
    let head = "#".repeat(parseInt(nivel) + 1) + " ";  
    head += `${h.text} \n\n`;  
    head += `${tags(h)} \n\n`;  
    head += `${h.note.replace(/@h\d/, "")}\n\n`;  
    return head;
};

/* *Citas Textuales* */

const quote = function(h){
    let q = `\n---\n\n`;  
    q += `> ${h.text} ([↖️ (p. ${h.page})](${h.url}))\n\n`; // Quote  
    q += `${etiquetas(h.labels)}\n\n`; // Labels  
    q += `${tags(h)}\n\n`;  // Tags  
    q += `${h.note.replace("📗", "")}\n\n`; // Note  
    q += `\n---\n\n`;  
    return q;
};
    
/* *Texto Resaltado* */
    
const highlight = function(h){
    let hili = "";  
    hili += `- [ ] `; // Task  
    hili += `${tags(h)}`; // Tags  
    hili += `[↖️](${h.url}) `; // URL  
    hili += `<mark class="hltr-${h.color}">`; // Highlight Color  
    hili += `${h.date} (p. ${h.page})`; // Date & Page  
    hili += `</mark>: `; // Close Highlight  
    hili += `${h.text} `; // Text  
    hili += `^${h.id}\n`; // ID  
    hili += `    - ${h.note}\n`; // Nota  
    hili += `    - ${etiquetas(h.labels)} \n`; // Etiquetas   
    return hili;  
};

/* *Capturas* */
    
const image = function(h){
    let img = "";  
    img += `- [ ] `; // Task  
    img += `${tags(h)}`; // Tags  
    img += `[↖️](${h.url}) `; // URL  
    img += `<mark class="hltr-${h.color}">`; // Highlight Color   
    img += `${h.date} (p. ${h.page})`; // Date & Page  
    img += `</mark>: `; // Close Highlight  
    img += `![[${h.image}|400]]`; // Image  
    img += `^${h.id}\n`; // ID  
    img += `    - ${h.note}\n`; // Nota  
    img += `    - ${etiquetas(h.labels)} \n`; // Etiquetas   
    return img;
};

/* *note* */
    
const note = function(h){
    let nt = "";  
    nt += `- [ ] `; // Task  
    nt += `${tags(h)}`; // Tags  
    nt += `[↖️](${h.url}) `; // URL  
    nt += `<mark class="hltr-${h.color}">`; // Highlight Color  
    nt += `${h.date} (p. ${h.page})`; // Date & Page  
    nt += `</mark>: `; // Close Highlight  
    nt += `✏️ `; // Nota
    nt += `^${h.id}\n`; // ID  
    nt += `    - ${h.note}\n`; // Nota  
    nt += `    - ${etiquetas(h.labels)} \n`; // Etiquetas   
    return nt;
};

/* ==Apuntes== */

const apunte = function(h){
    if (/@h\d/.test(h.note)) {return heading(h);}  
    else if (h.note.includes("📗")) {return quote(h);}  
    else if (h.type == "image") {return image(h);}  
    else if (h.type == "note") {return note(h);}  
    else {return highlight(h);}
};

_%>

<%* for(let a of annotations){tR += apunte(a);} %>
