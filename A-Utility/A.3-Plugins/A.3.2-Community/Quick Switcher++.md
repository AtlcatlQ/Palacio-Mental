---
tags:
  - ⚙️/🔌
status: ✔️
aliases: 
publish: true
created: 2025-06-24T01:14:57
modified: 2025-07-04T13:39:34
---

⬆️ (categorías::)

↔️ (relacionado:: [[Another Quick Switcher]], [[Better Command Palette]])

---

<(previas:: [[Quick Switcher]]) | (siguientes::)>

**Descripción** (description:: Extiende las funcionalidades de [[Quick Switcher]]. Agregando nuevos modos para buscar más tipos de contenido. Requiere que el Plugin [[Quick Switcher|core]] esté activado para funcionar.)

**Comentario:** (comment:: A diferencia de [[Another Quick Switcher]], no permite configurar tan a profundidad cada tipo de búsqueda, ni crear búsquedas personalizadas.)

**Enlace:** (enlace:: [Quick Switcher++ (Repositorio de GitHub)](https://github.com/darlal/obsidian-switcher-plus))

# Funcionalidades

## Modos

> [!info] Verificar los [[Tipos de Ficheros#^Prefijos|Prefijos]] que se pueden utilizar.

| Prefijo | Modo                                                         |
|:-------:| ------------------------------------------------------------ |
|   `\`   | Escaping characters                                          |
|   `:`   | [[#Editor]] list mode trigger                                |
|   `$`   | [[Workspaces\|Workspace]] list mode trigger                  |
|   `?`   | [[#Symbol]] list mode trigger                                |
|   `~`   | Symbol list mode trigger - Active editor only                |
|   `[`   | [[#Related Items]] list mode trigger                         |
|   `]`   | Related items list mode trigger - Active editor only         |
|   `*`   | [[Bookmarks (Obsidian Plugin)\|Bookmarks]] list mode trigger |
|   `#`   | [[#Heading]] List mode trigger                               |
|   `^`   | [[Command Palette\|Commands]] list mode trigger              |
|   `/`   | Vault list mode trigger                                      |

**Nota:** Utilizo estos símbolos para que no me generen conflicto con los [[Tipos de Ficheros 1#Prefijos|prefijos]] que utilizo dentro de la vault.

# ⚙️ Configuración

## General

- Show Ribbon Icons: ""
- Override default Switcher launch button: `Do not override` *(Default)*
- Prefered suggestion title source: `Default`
- Prefered file path display format: `Parent folder & filename`
	- Hide path for root items: `TRUE`
- ==Mode trigger escape character:== "\\" #🔔
- Default to open in new tab: `TRUE`
- Overrrde Standard mode behavior: `TRUE` *(Default)*
- Show indicator icons: `TRUE`
- Allow Backspace to close the Switcher: `TRUE`
- Result priority adjustment^[All of them are numerical values]: `FALSE`
	- Open items
	- Bookmarked items
	- Recent items
	- Attachment file types
	- Filenames
	- Aliases
	- Unresolved filenames
	- H1 Headings
	- Canvas files
- Insert link in editor
	- Use filename as alias: `FALSE`
	- Use heading as alias: `FALSE`
- Restore previous input in Command Mode: `FALSE`
- Restore previous input: `TRUE`
- Disaplay mode trigger Instructions: `TRUE`
- Reset active Quick Filters: `FALSE`
- Display Headings as Live Preview: `TRUE`
- Enable quick open hotkeys for top results: `TRUE`

## Symbol

> [!info]- `Bloques` según su Formato (Encabezados, [[Outgoing links|Enlaces Salientes]], Embebidos, [[Callouts|Callouts]], Etiquetas o Nodos de [[Canvas (Obsidian Plugin)|Canvas]])
> No busca ==resaltados==, **Negritas** o *cursivas*, ya que no son `bloques`.

- ==Symbol list mode trigger:== "?" *(Pendiente)*
- ==Symbol list mode trigger - Active editor only:== "~" *(Pendiente)*
- List symbols as intended outline: `TRUE` *(Default)*
- Open Symbols in new tab: `FALSE` *(Default)*
- Open Symbols in active tab on mobile devices: `FALSE` *(Default)*
- Auto-select nearest heading: `FALSE`
- Show Headings: `TRUE` *(Default)*
- Show Tags: `TRUE` *(Default)*
- Show Embeds: `TRUE` *(Default)*
- Show Callouts: `TRUE` *(Default)*
- Show Links: `TRUE` *(Default)*
	- Links to headings: `TRUE` *(Default)*
	- Links to blocks: `TRUE` *(Default)*

## Heading


> [!important] Busca solamente los encabezados de los archivos, no los nombres de archivos


- ==Headings list mode trigger:== "#"
- Search Headings: `TRUE` *(Default)*
	- Turn off filename fallback: `FALSE` *(Default)*
	- Search all headings: `TRUE` *(Default)*
- Search Filenames: `TRUE`
- Search Bookmarks: `TRUE`
- Max recent files to show: *25* *(Default)*
- Exclude Folders: ""
- Hide Obsidian "Excluded files": `TRUE`
- File extension override:
	- canvas

## Editor


> [!info] Pestañas Abiertas

- ==Editor list mode trigger:== ":"
- Include side panel views:
	- backlink
	- image
	- markdown
	- pdf
- Order default editor list by most recently accessed: `TRUE`

## Related Items

> [!info] Elementos que están en la misma carpeta o que enlazan de forma [[Backlinks|Entrante]] o [[Outgoing links|Saliente]] al valor de entrada.

- ==Related Items list mode trigger:== "["
- ==Related Items list mode trigger - Active editor only:== "]"
- Show related item types:
	- disk-location
	- backlink
	- outgoing-link
- Exclude open files: `FALSE` *(Default)*

## Bookmarks

- ==Bookmarks list mode trigger:== "\*"

## Command

- ==Command list mode trigger:== "^"

## Workspace

- ==Workspace list mode trigger:== "$"

## Vault

- ==Vault list mode trigger:== "/" *(Default)*
