<%*
const tipos = ["🟡 Importante", "🟢 Interesante, Frase", "🔵 Notas, Dudas", "🔴 Referencia, Buscar", "⚪ Sobre el Texto"];

const colores = ["yellow", "green", "blue", "red", "gray"];

let color = await tp.system.suggester(tipos, colores, true, "Tipo de Resaltado");

let page = await tp.system.prompt("🔢 Número de Página", "", true);

let highlight = await tp.system.prompt("📗 Texto Resaltado", "", false);

let note = await tp.system.prompt("✏️ Anotación", "", false);
_%>

- [ ] <mark class="hltr-<%* tR += `${color}`; %>">p. <%* tR += `${page}`  %></mark> <%* tR += `${highlight}` %><% tp.file.cursor(0) %>
<%* if (note != "") { tR += "    - "+`${note}\n`; } %>