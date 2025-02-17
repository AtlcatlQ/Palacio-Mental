---
tags: ["⚙️/🔌"]
status: "✔️"
aliases: []
publish: true
created: 2023-05-01T21:29:22
modified: 2024-12-23T16:52:51
---

< (previas:: [[Quick Switcher]])

---

**description**:: Extiende las funcionalidades de [[Quick Switcher]]. Agregando nuevos modos para cambiar de contenido.

**comentario**:: Posee actualmente bastante más funcionalidades que el [[Quick Switcher|Quick Switcher nativo]] y tiene ciertos parecidos con [[Better Command Palette]].

[enlace:: [Quick Switcher++ (Repositorio de GitHub)](https://github.com/darlal/obsidian-switcher-plus)]

# Modos

| Prefijo | Modo                                                         |
|:-------:| ------------------------------------------------------------ |
|   `!`   | Mode trigger escape character                                |
|   `:`   | Editor list mode trigger                                     |
|   `*`   | [[Bookmarks (Obsidian Plugin)\|Bookmarks]] list mode trigger |
|   `>`   | [[Command Palette\|Commands]] list mode trigger              |
|   `#`   | Heading List mode trigger                                    |
|   `$`   | [[Workspaces\|Workspace]] list mode trigger                  |
|   `^`   | Symbol list mode trigger                                     |
|   `<`   | Symbol list mode trigger - Active editor only                |
|   `~`   | Related items list mode trigger                              |
|   `?`   | Related items list mode trigger - Active editor only         |
|   `/`   | Vault list mode trigger                                      |

**Nota:** Utilizo estos símbolos para que no me generen conflicto con los [[Tipos de Ficheros#Prefijos|prefijos]] que utilizo dentro de la vault.

# ⚙ Configuración

## General Settings

- Show Ribbon Icons: ""
- Override default Switcher launch button: `Do not override` *(Default)*
- Prefered suggestion title source: `Default`
- Prefered file path display format: `Parent folder & filename`
    - Hide path for root items: `TRUE`
- ==Mode trigger escape character:== "!"
- Default to open in new tab: `TRUE`
- Overrrde Standard mode behavior: `TRUE` *(Default)*
- Show indicator icons: `TRUE`
- Allow Backspace to close the Switcher: `TRUE`
- Result priority adjustment: `FALSE`
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

> [!info] Sirve para buscar `Bloques` atendiendo a su formato.

- ==Symbol list mode trigger:== "^" *(Pendiente)*
- ==Symbol list mode trigger - Active editor only:== "<" *(Pendiente)*
- List symbols as intended outline: `TRUE`
- Open Symbols in new tab: `FALSE`
- Open Symbols in active tab on mobile devices: `FALSE`
- Auto-select nearest heading: `FALSE`
- Show Headings: `TRUE`
- Show Tags: `TRUE`
- Show Embeds: `TRUE`
- Show Callouts: `TRUE`
- Show Links: `TRUE`
    - Links to headings: `TRUE`
    - Links to blocks: `TRUE`

## Heading

- ==Headings list mode trigger:== "#"
- Search Headings: `TRUE`
    - Turn off filename fallback: `FALSE`
    - Search all headings: `TRUE`
- Search Filenames: `TRUE`
- Search Bookmarks: `TRUE`
- Max recent files to show: *25*
- Exclude Folders: ""
- Hide Obsidian "Excluded files": `TRUE`
- File extension override:
    - canvas

## Editor List Mode Settings

- ==Editor list mode trigger:== ":"
- Include side panel views:
    - backlink
    - image
    - markdown
    - pdf
- Order default editor list by most recently accessed: `TRUE`

## Related Items List Mode Settings

- ==Related Items list mode trigger:== "~"
- ==Related Items list mode trigger - Active editor only:== "?"
- Show related item types:
    - disk-location
    - backlink
    - outgoing-link
- Exclude open files: `FALSE` *(Default)*

## Bookmarks List Mode Settings

- ==Bookmarks list mode trigger:== "\*"

## Command List Mode Settings

- ==Command list mode trigger:== ">"

## Workspace List Mode Settings

- ==Workspace list mode trigger:== "$"

## Vault List Mode Trigger

- ==Vault list mode trigger:== "/" *(Default)*

---

[relacionadas:: [[Better Command Palette]]]
