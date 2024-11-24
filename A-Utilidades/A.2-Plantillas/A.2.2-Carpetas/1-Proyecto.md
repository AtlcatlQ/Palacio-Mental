---
tags: 🏹
programado: <% tp.system.prompt("¿Cuándo empieza?", tp.date.tomorrow("YYYY-MM-DD"), false) %>
límite: <% tp.system.prompt("Finaliza:", "", false) %>
---

%%

(categorías:: [[PROYECTOS]]<%* if (tp.file.folder() == "0. Objetivos") { _%>, [[Objetivos]]<%* } else if (tp.file.folder() == "1. Asignaturas") { %>, [[3.1. UNIVERSIDAD]]<%* } else if (tp.file.folder() == "2. Escritos") { %>, [[Escritos]]<%* } %>

(meta:: <% tp.system.prompt("¿Qué quiero conseguir con este proyecto?", "Meta", false) %>)

%%

> 🏁 `dv=this.meta`

# Información Relevante



# 📌 Tareas

- [ ] 
# 📓 Notas

```dataview
LIST FROM [[]] AND (#📓 OR #㊙️)
```

# 📥 Bibliografía Relacionada

```dataview
LIST FROM [[]] AND #📥 
```