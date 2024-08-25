---
tags: [⚙️/🔌]
status: ✔️
aliases: ["Migas de Pan", "índice de notas"]
publish: true
sr-due: 2023-07-10
sr-interval: 148
sr-ease: 250
created: 2023-05-01T21:29:22
modified: 2023-05-07T22:50:06
---

**description**:: Permite establecer relaciones de jerarquía entre los distintos archivos.

**comentario**:: Actualmente es posible establer múltiples jerarquías. Es algo complicado de utilizar.

[enlace:: [Breadcrumbs (Repositorio en GitHub)](https://github.com/SkepticMystic/breadcrumbs)]

# Configuración

Está es la configuración que yo utilizo. Pueden ignorarla.

## Hierarchies

- (categorías) (relacionadas) (incluido) (siguientes) (previas)
- (fuente) () () () (referencia)
- (autor) () (obra) () ()

## Relationships

- Same Parent is Siblings: `TRUE` (Default)
- Sibling's Siblings: `FALSE` (Default)
- Sibling's Parent is Parent: `FALSE` (Default)
- Aunt/Uncle: `FALSE` (Default)
- Cousins: `FALSE` (Default)

## General Options

- Refresh Index on Note Change: `FALSE` (Default)
- Refresh Index On Note Save: `TRUE`
- Show Refresh Index Notice: `TRUE` (Default)
- Alias Fields:
- Only show first alias: `FALSE` (Default)
- Use YAML or inline fields for Hierarchy data: `TRUE` (Default)
- Use Juggl link syntax without having Juggl installed: `FALSE` (Default)
- Enable Field Suggestor: `FALSE`
- Enable Relation Suggestor: `FALSE` (Default)
- Relation Suggestor Trigger: ""
- Dataview Wait Time: *5* (Default)

## Views

- Open Vies by Default:
    - Trail/Grid/Juggl: `TRUE` (Default)
    - Matrix: `TRUE` (Default)
    - Ducks: `FALSE` (Default)
    - Tree: `FALSE`

### Matrix View

- Show all field names or just relation types: %% No sé si ponerlas o no %%
- Show Relationship Type: `TRUE` (Default)
- Directions Order: "1234"
- Enable Alphabetical Sorting: `FALSE`
- Sort Alphabetically Ascending/Descending: `TRUE` %%Ascending%%
- Sort by note name, but show alias: `FALSE`
- Show Implied Relations: `TRUE` (Default)
- Open View in Right or Left Side: `TRUE` %%Right%% (Default)

### Trail/Grid/Juggl

- Show Breadcrumbs in Edit/Live-Preview Mode: `FALSE` (Default)
- Limit Trail View to only show certain fields: (All Selected)
- Views to Show
    - Trail: `TRUE` (Default)
    - Grid: `FALSE`
    - Next/Previous: `TRUE` (Default)
- Grid view depth: *0*
- Index Note(s):
- Show all paths if none to index note are found: `FALSE` (Default)
- Default: All, Longest, or Shortest: `Longest`
- Separator: '>'
- No path found message: "Huérfano"
- Respect: Readable Line Length: `TRUE` (Default)
- Show up fields in Juggle: `FALSE` (Default)
- Juggle view layout: `Hierarchy` (Default)

### Visualisation Modal

> [!fail] No lo utilizo realmente

- Default Visualisation Type: `Force Directed Graph` (Default)
- Default Relation: `Parent` (Default)
- Default Real/Closed: `Real` (Default)
- Default Unlinked: `All` (Default)

## Alternative Hierarchies

## Commands

## Debugging

- Debug Mode: `TRACE`
