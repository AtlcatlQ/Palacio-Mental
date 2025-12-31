---
tags:
  - ⚙️/🔌
status: ✔️
aliases:
  - Graph View
  - Vista de Grafo
publish: true
created: 2023-05-01T12:47:03
modified: 2025-07-17T18:11:15
---

⬆️ (categorías::)

↔️ (relacionado::)

---

<(previas::) | (siguientes::)>

**Descripción** (description:: Permite ver los enlaces entre notas, de una manera más visual para navegar entre las notas de una manera no lineal.)

**Comentario:** (comment:: Es una de las características más importantes de obsidian.)

**Enlace:** (enlace:: [Graph View (Ayuda de Obsidian)](https://help.obsidian.md/Plugins/Graph+view))

# 📃 Documentación

## Filters

- **Search files** lets you filter notes based on a search query. To learn about how you can write more advanced search queries, refer to [[Search]].
- **Tags** toggles whether to show tags in the graph.
- **Attachments** toggles whether to show attachments in the graph.
- **Existing files only** toggles whether to show notes that exists in your vault. Since a note doesn't need to exist to link to it, this can help reduce limit your graph to notes that you actually have in your vault.
- **Orphans** toggles whether to show notes without any links

## Groups

> [!tip] Create groups of notes to distinguish them from each other using color.

## Display

- **Arrows** toggles whether to show the direction of each link.
- **Text fade threshold** controls the text transparency for the name of each note.
- **Node size** controls the size of the circle representing each note.
- **Link thickness** controls the line width for each link.

## Forces

- **Center Forces:** controls how compact the graph is. A higher value creates a more circular graph.
- **Repel force** controls how much a node pushes other nodes away from it.
- **Link force** controls the pull on each link. If the link was a rubber band, the link force controls how tight or loose the band is.
- **Link distance** controls the length of the lines between each note.

# ⚙️ Configuración

## Filters

- [[Search|Query]]: `-path:A-Utility/A.2-Templates/ OR -path:A-Utility/A.1-Classes -path:0-INBOX/Importar`^[]
- [[Tipos de Ficheros|Tags]]: `FALSE`
- Attachments: `TRUE`
- Existing files only: `FALSE`
- Orphans: `TRUE`

## Groups

|                              Color ^[RGB in Decimal] | Query                              |
| ----------------------------------------------------:|:---------------------------------- |
|  <mark style="background: #1dc990ff;">1952144</mark> | `tag:#🗺️`                          |
| <mark style="background: #ff9933ff;">16750899</mark> | `path:5-REGISTRO/5.1-DIARIO`       |
| <mark style="background: #ff8d1aff;">16747802</mark> | `path:5-REGISTRO/5.2-Semanal`      |
| <mark style="background: #ff8000ff;">16744448</mark> | `path:5-REGISTRO/5.3-Mensual`      |
| <mark style="background: #e57300ff;">15037184</mark> | `path:5-REGISTRO/5.4-Trimestral`   |
| <mark style="background: #cc6600ff;">13395456</mark> | `path:5-REGISTRO/5.5-Anual`        |
| <mark style="background: #ffd24cff;">16765516</mark> | `path:5-REGISTRO/5.A-Experiencias` |
|  <mark style="background: #ffbf00ff">16760576</mark> | `path:5-REGISTRO`                  |
|  <mark style="background: #549933ff;">5544243</mark> | `tag:#🪐/⚜️`                       |
|  <mark style="background: #78c653ff;">7915091</mark> | `tag:#🪐`                          |
| <mark style="background: #f699ffff;">16161279</mark> | `tag:#📥/💡/✍`                     |
|  <mark style="background: #578edbff;">5738203</mark> | `tag:#📥`                          |
| <mark style="background: #d057dbff;">13653979</mark> | `tag:#🏹/✍️`                       |
| <mark style="background: #e83131ff;">15216945</mark> | `tag:#🏹/🏫`                       |
| <mark style="background: #ed5e5eff;">15556190</mark> | `tag:#🏹`                          |
|  <mark style="background: #14b8b8ff;">1358008</mark> | `tag:#📃`                          |
|  <mark style="background: #884cffff;">8932607</mark> | `tag:#⚙️/🔌`                       |
| <mark style="background: #aa80ffff;">11174143</mark> | `tag:#⚙️`                          |

## Mostrar

- Arrows: `TRUE`
- Text fade threshold: *-1.00*
- Node size: *1.50*
- Link thickness: *1.75*

## Forces

- Center Force: *0.50*
- Repel Force: *12.03*
- Link Force: *0.25*
- Link Distance: *500*

# 💄 Estilo
