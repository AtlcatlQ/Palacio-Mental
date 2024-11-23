<%*
let title = tp.file.title;

const prefixes = ["}", "@", ""];

const typesText = ["✏️ Apunte", "👤 Persona", "📓 Nota"];

const types = ["Apunte", "Persona", "Nota"];

const icons = ["/✏️", "/👤"];

var type, icon, prefix;

if (prefixes.includes(title.charAt(0))){

type = await types[prefixes.indexOf(title.charAt(0))];

icon = await icons[types.indexOf(type)];

} else {

type = await tp.system.suggester(typesText, types, true, "📓 Tipo de Nota", 9);

icon = await icons[types.indexOf(type)];

prefix = await prefixes[types.indexOf(type)];

if (type != "Nota") {

await tp.file.rename(`${prefix} ${title}`);

}

}

tR += "---\n";

if(!prefixes.includes(tp.file.title.charAt(0))){
tR += "tags: 📓\n";

tR += `status: 🌱\n`;

} else {tR += `tags: 📓${icon}\n`;}

tR += `aliases: ["${title}"]\n`;

if (tp.file.title.charAt(0) == "@") {tR += "icon: 👤\n"; }

tR += "---\n";

tR += "\n↖ (fuente::)\n\n";
_%>

<% tp.file.include("[[Jerarquías]]") %>

<%* if (tp.file.title.charAt(0) == "@") { _%>

# ¿Quién es?

- <% tp.file.cursor(0) %>
- Lo conocí: 
# Intereses Compartidos

# 📥 Obras

```dataview
LIST WHERE contains(categorías, [[]]) OR contains(autores, [[]]) SORT type ASC
```

<%* } _%>