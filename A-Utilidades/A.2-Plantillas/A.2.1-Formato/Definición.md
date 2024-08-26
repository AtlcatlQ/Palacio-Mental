<%* 
let term = await tp.system.prompt("¿Definición de?", tp.file.title, true, false);
let id = await tp.system.prompt("Block-ID", "Def", true, false);
let def = await tp.system.prompt("Definición", "", true, false);
_%>

> [!Def]+ <%* tR += term; %>
> > (<%* if (id != "") { %><%* tR += id; %><%* } else { -%><%* tR += term; -%><%* } -%>:: <%* tR += def; %><% tp.file.cursor(0) -%>)

^<%* if (id != "") { -%><%* tR += id; -%><%* } else { -%><%* tR += "Def"; -%><%* } -%>