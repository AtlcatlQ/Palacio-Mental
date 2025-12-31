---
icon: '🔎 '
tags:
  - ⚙️/🔌
status: '✔️'
aliases:
  - Buscador de Archivos
  - Plugin de búsqueda
  - Search
publish: true
created: 2023-05-01T12:47:03
modified: 2025-07-10T05:16:05
---

↖️ (fuente:: [[¬ 2023-10-24 Obsidian - Help]])

⬆️ (categorías:: [[Obsidian]])

↔️ (relacionado::)

---

<(previas::) | (siguientes:: [[Dataview]])>

**Descripción** (description:: Permite realizar búsquedas, y realizar consultas embebidas dentro de bloques de código cercado (se activa poniendo como lenguaje `query`))

**Comentario:** (comment:: No la uso mucho pero su utilidad es notoria, además de ser básica y necesaria. Para sacarle mayor partido conviene aprender su lenguaje de consultas)

**Enlace:** (enlace:: [Search (Ayuda de Obsidian)](https://help.obsidian.md/Plugins/Search))

# 📃 Documentación

- Admite Expresiones Regulares

## Términos De Búsqueda

> [!Def]+ Término de Búsqueda
>
> > La palabra o frase que se incluye en el campo de búsqueda

^SearchTerms

- Los términos de búsqueda se separan con espacios
	- `casa hogar` Muestra los resultados que incluyan tanto "casa" como "¨hogar", mientras que `casa OR hogar` muestra los resultados que incluyan al menos una de las dos palabras
		- Es posible agrupar los distintos términos con paréntesis para hacer búsquedas con [[Lógica - Operadores|Operaciones lógicas]] más complejas
- Para excluir un resultado se utiliza un `-` antes de la palabra que se quiere excluir
- Para buscar textualmente algún texto, el texto se encierra entre comillas

## Operadores De Búsqueda

- `file:` <cite>El nombre del archivo incluye...</cite>
- `path:` <cite>La ruta del archivo incluye...</cite>
- `content:` <cite>El texto de la nota incluye...</cite>
- `match-case:` Diferencia entre mayúsculas y minúsculas
- `ignore-case:` Ignora mayúsculas y minúsculas
- `tag:` <cite>Archivos que contengan la etiqueta la etiqueta...</cite>
- `line:(term1 term2)` <cite>Archivos que contengan en la misma línea "term1" y "term2"</cite>
- `block:(term1 term2)` <cite>Archivos que contengan en el mismo bloque "term1" y "term2"</cite>
- `section:(term1 term2)` <cite>Archivos que contengan en la misma sección "term1" y "term1"</cite>
- `task:` <cite>Tareas que incluyan...</cite>
- `task-todo:` <cite>Tareas sin completar que incluyan...</cite>
- `task-done:` <cite>Tareas completadas que incluyan...</cite>

## Búsqueda De Propiedades

- `[property]`: <cite>Archivos que contengan la propiedad "property"</cite>
- `[property:value]`: <cite>Archivos en que la propiedad "property" tenga el valor "value"</cite>
- `[property:value OR foo]`: <cite>Archivos en que la propiedad "property" tenga el valor "value" o el valor "foo"</cite>
