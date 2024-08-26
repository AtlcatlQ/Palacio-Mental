---
tags: 🪐
<%* if (tp.file.folder() == "0. Valores") { %>cssclass: big_quotes<%* } -%>
---

%% [categorías:: [[2-ÁREAS]]<%* if (tp.file.folder() == "0. Valores") { %>, [[Principios Centrales]]<%* } %>] %%
# 📌 Tareas

- [ ] 

# 📆 Actividad Hoy

```dataview
LIST FROM [[]] WHERE file.mday = date(today)
```


# 🏹 Proyectos Activos

```dataview
LIST meta FROM "1-PROYECTOS"
WHERE contains(categorías, [[]])
```

# 🪐 Sub-Áreas

```dataview
LIST description FROM "2-ÁREAS"
WHERE contains(categorías, [[]])
```

# 📓 Notas

```dataview
LIST status FROM [[]] AND (#📓 OR #㊙️)
```

# 📥 Bibliografía Relacionada

```dataview
LIST FROM #📥 WHERE contains(categorías, [[]]) OR contains(etiquetas, [[]]) 
```