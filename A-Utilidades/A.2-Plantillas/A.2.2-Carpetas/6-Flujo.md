---
tags: 
aliases: 
publish: false
created: 2023-10-31T06:07:17
modified: 2023-10-31T18:13:10
---

<%* var tags = (tp.file.folder(true).includes("1. Herramientas"))?"📃/⚙️":"📃"; _%>

---

tags: <%* tR += tags; %>

---

<% tp.file.include("[[Jerarquías]]") %>

<%* if (tp.file.folder(true).includes("6.0.1-Herramientas")) { _%>

# 📇 Ficha

| <% tp.file.title %>                                                             |
| ------------------------------------------------------------------------------- |
| [enlace:: [🔗](<% tp.system.prompt("enlace", tp.system.clipboard(), false) %>)] |
| [plataforma::]                                                                                |

**description**:: <% tp.system.prompt("Descripción", "", false) %>

**comentario**:: <% tp.system.prompt("Comentario", "", false) %>

# Alternativas

# Funcionalidades

<%* } _%>
