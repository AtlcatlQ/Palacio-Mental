---
icon: '🖌️'
tags: [⚙️/🔌, 🔔]
status: '✔️'
aliases:
  - Excalidraw
publish: true
created: 2023-05-01T21:29:22
modified: 2024-06-20T12:18:55
---

[description:: Permite implementar el editor de dibujos de [Excalidraw](https://excalidraw.com/) embebido dentro de Obsidian.]

[comentario:: Útil cuando se bosqueja mucho y se desea editar constantemente estos bosquejos. Recomendado para gente que gusta de dibujar, o para cuando sea necesario hacer un bosquejo.]

[enlace:: [Excalidraw (Repositorio de GitHub)](https://github.com/zsviczian/obsidian-excalidraw-plugin)]

# Configuración

## Basic

%% A-Utilidades/A.2-Plantillas/A.2.C-Excalidraw %%

- Display Release Notes after update: `FALSE`
- Plugin update notification: `FALSE`
- Excalidraw folder: "B. Adjuntos/1. Diagramas/0. Excalidraw"
- Use Excalidraw folder when embedding a drawing into the active document: `TRUE`
- Crop file folder:
- Excalidraw template file: ""
- Excalidraw automate script folder (CASE SeNSitiVE!): ""

## Saving

- Compress Excalidraw JSON in Markdown: `TRUE`
- Interval for autosave on Desktop: `Frequent` (Default)
- Interval for autosave on Mobile: `Frequent` (Default)

## AI Settings - Experimental

> [!fail] No voy a utilizar estas caracterísitcas

- OpenAI API key: "" (Default)
- Default AI model: "" (Default)
- Default AI vision model: "" (Default)
- Default image Generation AI model: "" (Default)
- OpenAI API URL: "" (Default)

## Excalidraw Appearance and Behavior

- Pen mode: `Never`
- Left-handed mode: `FALSE`

### Theme and Styling

- Dynamic styling: `Match color` (Default)
- Markdown embeds to match Excalidraw theme: `FALSE`
- New drawing to match Obsidian theme: `FALSE` (Default)
- Existing drawings to match Obsidian theme: `FALSE` (Default)
- Excalidraw to follow when Obsidian Theme changes: `FALSE` (Default)
- Default mode when opening Excalidraw: `Usually normal, but view-mode on Phone`

### Zoom

- Allow pinch zoom in pen mode: (Default)
- Mouse wheel to zoom by default: `TRUE` (Default)
- Zoom to fit on file open: `TRUE` (Default)
- Zoom to fit on view resize: `TRUE` (Default)
- Zoom to fit max ZOOM level: *2* (Default)

### Laser Pointer

- Laser pointer color: (Default)
- Laser pointer decay time: *100* (Default)
- Laser pointer decay length: *50* (Default)

### Link Click and Drag&Drop Modifier Keys

#🔔 I'm Adjusting this later

#### Web Browser Drag Action

|                                            | <kbd>⇧</kbd> | <kbd>Ctrl</kbd> | <kbd>Alt</kbd> | <kbd>Meta</kbd> |
| ------------------------------------------ | ------------ | --------------- | -------------- | --------------- |
| Insert Image or YouTube Thumbnail with URL |              |                 |                |      `FALSE`           |
| Insert Link                                |              |                 |                |    `FALSE`             |
| Insert Interactive-Frame                   |              |                 |                |     `FALSE`            |
| Import Image to Vault                      |              |                 |                |     `FALSE`            |

#### OS Local File Drag Action

|                                                                    | <kbd>⇧</kbd> | <kbd>Ctrl</kbd> | <kbd>Alt</kbd> | <kbd>Meta</kbd> |
| ------------------------------------------------------------------ | ------------ | --------------- | -------------- | --------------- |
| Insert Image: import external or reuse existing if path in Vault   |              |                 |                | `FALSE`         |
| Insert Link: local URI or internal link if from Vault               |              |                 |                | `FALSE`         |
| Insert Image: with local URI or internal-link if from Vault        |              |                 |                | `FALSE`         |
| Insert Interactive-Frame: local URI or internal-link if from Vault |              |                 |                | `FALSE`         |

#### Obsidian Internal Drag Action

|                          | <kbd>⇧</kbd> | <kbd>Ctrl</kbd> | <kbd>Alt</kbd> | <kbd>Meta</kbd> |
| ------------------------ | ------------ | --------------- | -------------- | --------------- |
| Insert Link              |              |                 |                |     `FALSE`            |
| Insert Interactive-Frame |              |                 |                |    `FALSE`             |
| Insert Image             |              |                 |                |     `FALSE`            |
| Insert Image @100%       |              |                 |                |   `FALSE`              |

#### Link Click Behavior

|                                           | <kbd>⇧</kbd> | <kbd>Ctrl</kbd> | <kbd>Alt</kbd> | <kbd>Meta</kbd> |
| ----------------------------------------- |:------------:|:---------------:|:--------------:|:---------------:|
| Open in current  active window            |   `FALSE`    |     `FALSE`     |    `FALSE`     |     `FALSE`     |
| Open in new tab                           |   `FALSE`    |     `TRUE`      |    `FALSE`     |     `FALSE`     |
| Open in a new adjacent window             |   `FALSE`    |     `TRUE`      |     `TRUE`     |     `FALSE`     |
| Open in a pop up window                   |    `TRUE`    |     `TRUE`      |     `TRUE`     |     `FALSE`     |
| Show the Markdown Image-Properties dialog |    `TRUE`    |     `FALSE`     |     `TRUE`     |     `FALSE`     |

## Links, Translusion and TODO's

- Reuse adjacent pane: `TRUE`
- Focus on Existing Tab: `FALSE` (Default)
- Open in main Workspace: `TRUE` (Default)
- Show Brackets around links: `FALSE`
    - `excalidraw-link-brackets` property
- Link prefix: "🔗"
- URL prefix: "🌐"
- Parse todo: `TRUE`
- Open TODO icon: "☑️"
- Completed TODO icon: "✅"
- Opacity of link icon: *1* (Default)
- Hover Preview without pressing the <kbd>Ctrl</kbd> key: `TRUE`
- <kbd>Ctrl</kbd>+Click on text with \[\[links]] or \[](links) to open them: `TRUE` (DEFAULT)
- Overflow wrap behavior to to transcluded text: `FALSE` (Default)
    - `![[doc#^ref]]{number}`
- Page translusion max char count: *200* (Default)
- Translusion word wrap default: *0* (Default)
- Quote translusion: remove leading "> " from each line: `TRUE` (Default)
- Use iframely to resolve page title: `TRUE` (Default)

## Embedding Excalidraw into Your Notes and Exporting

- Image type in markdown preview: `Native SVG`
- Type of file to insert into the document: `PNG`
    - Embed link to drawing as comment: `TRUE`
- Embed drawing using Wiki link: `TRUE` (Default)

### Obsidian Canvas Support

- Inmersive Embedding: `TRUE` (Default)

### Image Caching

- Cache Images for embedding in markdown: `FALSE`
- If found, use the already exported image for preview: `FALSE` (Default)

### Export Settings

#### Image Sizing

- Default width of embedded (transcluded): *400* (Default)
- PNG export image scale: *1* (Default)
- Image Padding: *10* (Default)
    - `excalidraw-export-padding` (Property)

#### Image Theme and Background Color

- Export image with background: `FALSE`
- Export image with theme: `FALSE`
- Excalidraw preview to match Obsidian theme: `FALSE` (Default)

#### Auto-export Settings

- Keep the `.SVG` and/or `.PNG` filenames in sync with the drawing file: `TRUE`
- Auto-export SVG: `FALSE` (Default)
- Auto-export PNG: `TRUE`
- Export both dark and light-themed image: `FALSE` (Default)

## Embed Files into Excalidraw

### PDF to Image

 - PDF to image conversion scale: *4* (Default)

### Interactive Markdown Files

- Use Obsidian Default: `FALSE` (Default)
- Filename Visible: `FALSE` (Default)

#### Embedded Note Background Color

- Match Element Background Color: `FALSE`
- Match Canvas Background Color: `TRUE`
- Background Opacity: *60*% (Default)

#### Embeded Note Border Color

- Match Element Border color: `TRUE` (Default)
- Border Opacity: *0*%

### Embed Markdown into Excalidraw as Image

- Default Width of a transluded markdown document: *500* (Default)
- Default maximum height of a transcluded markdown document: *500*
- The default font typeface to use for embedded markdown files: `Nunito.ttf`
- The default font color to use for embedded markdown files: "Black"
- The default border color to use for embedded markdown files: "Black"
- CSS file:

## Non-Excalidraw.com Supported Features

- Rendering Tweaks (Maximum image zoom in resolution): *1*
- Custom Pens (Numbers of custom pens): *10*
- Fourth font (Enable fourth font option): `TRUE`
    - Fourth font file: `SegoeUI.ttf`

## Miscellaneous Features

- Default LaTeX formula for new equations: `\textcolor{}{}`
- Display type (✏️) for excalidrw.md files in File Explorer: `TRUE`
- Set the type indicator for excalidraw.md files: "🖌️"
- Immersive image embedding in live preview editing mode: `FALSE` (Default)

### Taskbone Optical Character Recognition

- Enable Taskbone: `TRUE`
- Taskbone API key: ""

## Excalidraw Automate

- Enable Field Suggester: `FALSE`
- Startup Script: ""

## Compatibility Features

- Sliding panes plugin support: `FALSE` (Default)
- New drawings as legacy as legacy files: `FALSE` (Default)
- Auto-export Excalidraw: `FALSE` (Default)
- Sync `*.excalidraw` with `*.md` version of the same drawing: `FALSE` (Default)
