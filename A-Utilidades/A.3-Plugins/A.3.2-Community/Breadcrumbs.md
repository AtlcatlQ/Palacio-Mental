---
icon: "🍞"
tags: [⚙️/🔌]
status: "✔️"
aliases: [índice de notas, Migas de Pan]
publish: true
created: 2023-05-01T21:29:22
modified: 2025-01-04T01:02:44
---

[description:: Permite establecer relaciones de jerarquía entre los distintos archivos.]

[comentario:: Actualmente es posible establer múltiples jerarquías. Es algo complicado de utilizar.]

[enlace:: [Breadcrumbs (Repositorio en GitHub)](https://github.com/SkepticMystic/breadcrumbs)]

# ⚙️ Configuración

Está es la configuración que yo utilizo. Pueden ignorarla.

## Hierarchies

- (categorías) (relacionadas) (incluido) (siguientes) (previas)
- (fuente) () () () (referencia)
- (autor) () (obra) () ()

## Relationships

- Same Parent is Siblings: `TRUE` *(Default)*
- Sibling's Siblings: `FALSE` *(Default)*
- Sibling's Parent is Parent: `FALSE` *(Default)*
- Aunt/Uncle: `FALSE` *(Default)*
- Cousins: `FALSE` *(Default)*

## General Options

- Refresh Index on Note Change: `FALSE` *(Default)*
- Refresh Index On Note Save: `FALSE` *(Default)*
- Show Refresh Index Notice: `TRUE` *(Default)*
- Alias Fields: ""
- Only show first alias: `FALSE` *(Default)*
- Use YAML or inline fields for Hierarchy data: `TRUE` *(Default)*
- Use Juggl link syntax without having Juggl installed: `FALSE` *(Default)*
- Enable Field Suggestor: `FALSE`
- Enable Relation Suggestor: `FALSE` *(Default)*
- Relation Suggestor Trigger: ""
- Dataview Wait Time: *5* *(Default)*

## Views

- Open Vies by Default:
    - Trail/Grid/Juggl: `TRUE` *(Default)*
    - Matrix: `TRUE` *(Default)*
    - Ducks: `FALSE` *(Default)*
    - Tree: `FALSE`

### Matrix View

- Show all field names or just relation types: `TRUE` *(Default)* %% No sé si ponerlas o no %%
- Show Relationship Type: `TRUE` *(Default)*
- Directions Order: "1234"
- Enable Alphabetical Sorting: `FALSE` *(Default)*
- Sort Alphabetically Ascending/Descending: `TRUE` %%Ascending%%
- Sort by note name, but show alias: `FALSE`
- Show Implied Relations: `TRUE` *(Default)*
- Open View in Right or Left Side: `TRUE` %%Right%% *(Default)*

### Trail/Grid/Juggl

- Show Breadcrumbs in Edit/Live-Preview Mode: `FALSE` *(Default)*
- Limit Trail View to only show certain fields: (All Selected)
- Views to Show
    - Trail: `TRUE` *(Default)*
    - Grid: `FALSE`
    - Next/Previous: `TRUE` *(Default)*
- Grid view depth: *0*
- Index Note(s): "" *(Default)*
- Show all paths if none to index note are found: `FALSE` *(Default)*
- Default: All, Longest, or Shortest: `Longest`
- Separator: '>'
- No path found message: "Orphan"
- Respect: Readable Line Length: `TRUE` *(Default)*
- Show up fields in Juggle: `FALSE` *(Default)*
- Juggle view layout: `Hierarchy` *(Default)*

### Visualisation Modal

> [!fail] No lo utilizo

- Default Visualisation Type: `Force Directed Graph` *(Default)*
- Default Relation: `Parent` *(Default)*
- Default Real/Closed: `Real` *(Default)*
- Default Unlinked: `All` *(Default)*

## Alternative Hierarchies

> [!note] No lo utilizo

### Tag Notes

- Default Tag Note Field: `categorías`

### Regex Notes

- Default Regex Note Field: `-` *(Default)*

### Naming System

- Naming System Regex: "" *(Default)*
- Naming System Delimiter: "." *(Default)*
- Naming System Field: "-" *(Default)*
- Naming System Ends with Delimiter: `FALSE` *(Default)*

### Hierarchy Notes

- Hierarchy Notes: "" *(Default)*
- Hierarchy note is parent of top-level items: `FALSE` *(Default)*
- Default Hierarchy Note Field: `categorías` *(Default)*

### CSV Notes

- CSV Breadcrumb Paths: ""*(Default)*

### Dendron Notes

- Add Dendron notes to graph: `FALSE` *(Default)*
- Delimiter: "." *(Default)*
- Trim Dendron Note Names: `FALSE` *(Default)*
- Dendron Note Field: `-` *(Default)*

### Dataview Notes

- Default Dataview Note Field: `-` *(Default)*

### Date Notes

- Add Date Notes to Graph: `FALSE` *(Default)*
- Daily Note Format: "yyyy-MM-dd" *(Default)*
- Date Note Field: `-` *(Default)*

## Commands

### Write Breadcrumbs to File

> [!options] Limit to only certain fields:
> `Deselect all`

- Write Inline: `FALSE` *(Default)*
- Show the `Write Breadcrumbs to ALL Files` command: `FALSE` *(Default)*

### Create Index

- Add wikilink brackets: `TRUE` *(Default)*
- Indent Character: "" *(Default)*
- Show aliases of notes in index: `FALSE` *(Default)*

### Threading

- Open new threads in new pane or current pane: `FALSE` *(Default)*
- Thread under cursor: `FALSE` *(Default)*
- New Note Name Template: `FALSE` *(Default)*
- Date Format: "YYYY-MM-DD" *(Default)*
- Templater template per direction
    - up: "" *(Default)*
    - same: "" *(Default)*
    - down: "" *(Default)*
    - left: "" *(Default)*
    - right: "" *(Default)*

### Jump to Next Direction

Limit which fields to jump to:

- categorías: `TRUE`
- relacionadas: `TRUE`
- incluido: `TRUE`
- siguientes: `TRUE`
- previas: `TRUE`
- fuente: `TRUE`
- referencia: `TRUE`
- autor: `TRUE`
- obra: `TRUE`

## Debugging

- Debug Mode: `DEBUG`
