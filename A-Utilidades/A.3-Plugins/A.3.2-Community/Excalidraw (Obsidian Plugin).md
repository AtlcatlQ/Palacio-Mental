---
icon: '🖌️'
tags: [⚙️/🔌, 🔔]
status: '✔️'
aliases: [Excalidraw]
publish: true
created: 2023-05-01T21:29:22
modified: 2025-01-09T02:01:44
---

[description:: Permite implementar el editor de dibujos de [Excalidraw](https://excalidraw.com/) embebido dentro de Obsidian.]

[comentario:: Útil cuando se bosqueja mucho y se desea editar constantemente estos bosquejos. Recomendado para gente que gusta de dibujar, o para cuando sea necesario hacer un bosquejo.]

[enlace:: [Excalidraw (Repositorio de GitHub)](https://github.com/zsviczian/obsidian-excalidraw-plugin)]

# Configuración

## Basic

%% A-Utilidades/A.2-Plantillas/A.2.C-Excalidraw %%

- Display Release Notes after update: `FALSE`
- Plugin update notification: `FALSE`
- Excalidraw folder: "B-Adjuntos/B.1-Diagramas/B.1.0-Excalidraw"
- Use Excalidraw folder when embedding a drawing into the active document: `TRUE`
- Crop file folder: "B-Adjuntos/B.1-Diagramas/B.1.-Excalidraw-Cropped"
- Image annotation file folder: "B-Adjuntos/B.1-Diagramas/B.1.0-Excalidraw-Annotations"
- Excalidraw template file or folder: "A-Utilidades/A.2-Plantillas/A.2.C-Excalidraw/" ^[It's possible to add [[Templater|Templater code]] to this templates]
- Excalidraw automate script folder (CASE SeNSitiVE!): "B-Adjuntos/B.1-Diagramas/B.1.0-Excalidraw-Scripts"

## Saving

- Compress Excalidraw JSON in Markdown: `TRUE` *(Default)*
- Decompress Excalidraw JSON in Markdown View: `FAlse` *(Default)*
- Interval for autosave on Desktop: `Frequent` *(Default)*
- Interval for autosave on Mobile: `Frequent` *(Default)*

### Filename

- Filename prefix: "" %% #🔔 %%
- Filename prefix when embedding a new drawing into a markdown note: `TRUE` *(Default)*
- Custom text after Markdown Note's name when embedding: " - Diagrama "
- Filename Date: "" ^[It's too much clutter]
- `.excalidraw.md` or `.md`: `TRUE` *(Default)*
- Crop file prefix: ""
- Annotation file prefix: ""
- Preserve image size when annotating: `TRUE`

## AI Settings - Experimental

> [!fail] No voy a utilizar estas caracterísitcas

- OpenAI API key: "" *(Default)*
- Default AI model: "" *(Default)*
- Default AI vision model: "" *(Default)*
- Default image Generation AI model: "" *(Default)*
- OpenAI API URL: "" *(Default)*

## Excalidraw Appearance and Behavior

- Render as image when in markdown reading mode of an Excalidraw file: `FALSE` *(Default)*
- Render Excalidraw file as an image in hover preview: `FALSE` *(Default)*
- Left-handed mode: `FALSE` *(Default)*
- Show splash screen in new drawings: `FALSE`

### Hotkeys Overrides

> [!info] Basically overrides the Obsidian Hotkeys
> I have to think in the commands I will use for this

### Theme and Styling

- Limit Obsidian Font Size to Editor Text: `FALSE` *(Default)*
- Dynamic styling: `Match color` *(Default)*
- Markdown embeds to match Excalidraw theme: `FALSE`
- New drawing to match Obsidian theme: `FALSE` *(Default)*
- Existing drawings to match Obsidian theme: `FALSE` *(Default)*
- Excalidraw to follow when Obsidian Theme changes: `FALSE` *(Default)*
- Default mode when opening Excalidraw: `Usually normal, but view-mode on Phone`

### Zoom

- Allow pinch zoom in pen mode: `FALSE` *(Default)*
- Mouse wheel to zoom by default: `FALSE` *(Default)*
- Zoom to fit on file open: `TRUE` *(Default)*
- Zoom to fit on view resize: `TRUE` *(Default)*
- Zoom to fit max ZOOM level: *2* *(Default)*

### Pen

- Pen mode: `Never` *(Default)*
- Enable double-tap erraser in pen mode: `TRUE` *(Default)*
- Enable single-finger panning in pen mode: `TRUE` *(Default)*
- Show crosshair in pen mode: `TRUE` *(Default)*

### Grid

- Dynamic grid color: `TRUE` *(Default)*
- Grid opacity: *50*

### Laser Pointer

- Laser pointer color: *(Default)*
- Laser pointer decay time: *1000* *(Default)*
- Laser pointer decay length: *50* *(Default)*

### Link Click and Drag&Drop Modifier Keys

%% #🔔 I'm Adjusting this later %%

- Long press to open desktop: *500* *(Default)*
- Long press to open mobile: *500* *(Default)*
- Allow double-click to open links in view mode: `TRUE` *(Default)*

#### Web Browser Drag Action

|                                            | <kbd>⇧</kbd> | <kbd>Ctrl</kbd> | <kbd>Alt</kbd> | <kbd>Meta</kbd> |
| ------------------------------------------ |:------------:|:---------------:|:--------------:|:---------------:|
| Insert Image or YouTube Thumbnail with URL |              |                 |                |     `FALSE`     |
| Insert Link                                |              |                 |                |     `FALSE`     |
| Insert Interactive-Frame                   |              |                 |                |     `FALSE`     |
| Import Image to Vault                      |              |                 |                |     `FALSE`     |

#### OS Local File Drag Action

|                                                                    | <kbd>⇧</kbd> | <kbd>Ctrl</kbd> | <kbd>Alt</kbd> | <kbd>Meta</kbd> |
| ------------------------------------------------------------------ |:------------:|:---------------:|:--------------:|:---------------:|
| Insert Image: import external or reuse existing if path in Vault   |              |                 |                |     `FALSE`     |
| Insert Link: local URI or internal link if from Vault              |              |                 |                |     `FALSE`     |
| Insert Image: with local URI or internal-link if from Vault        |              |                 |                |     `FALSE`     |
| Insert Interactive-Frame: local URI or internal-link if from Vault |              |                 |                |     `FALSE`     |

#### Obsidian Internal Drag Action

|                          | <kbd>⇧</kbd> | <kbd>Ctrl</kbd> | <kbd>Alt</kbd> | <kbd>Meta</kbd> |
| ------------------------ |:------------:|:---------------:|:--------------:|:---------------:|
| Insert Link              |              |                 |                |     `FALSE`     |
| Insert Interactive-Frame |              |                 |                |     `FALSE`     |
| Insert Image             |              |                 |                |     `FALSE`     |
| Insert Image @100%       |              |                 |                |     `FALSE`     |

#### Link Click Behavior

|                                           | <kbd>⇧</kbd> | <kbd>Ctrl</kbd> | <kbd>Alt</kbd> | <kbd>Meta</kbd> |
| ----------------------------------------- |:------------:|:---------------:|:--------------:|:---------------:|
| Open in current  active window            |   `FALSE`    |     `FALSE`     |    `FALSE`     |     `FALSE`     |
| Open in new tab                           |   `FALSE`    |     `TRUE`      |    `FALSE`     |     `FALSE`     |
| Open in a new adjacent window             |   `FALSE`    |     `TRUE`      |     `TRUE`     |     `FALSE`     |
| Open in a pop up window                   |    `TRUE`    |     `TRUE`      |     `TRUE`     |     `FALSE`     |
| Show the Markdown Image-Properties dialog |    `TRUE`    |     `FALSE`     |     `TRUE`     |     `FALSE`     |

## Links, Translusion and TODO's

- Show second-order links: `FALSE`
- Reuse adjacent pane: `TRUE` *(Default)*
- Focus on Existing tab: `TRUE` *(Default)*
- Open in main workspace: `TRUE` *(Default)*
- show `[[brackets]]` around links: `FALSE`
- Link prefix: "🔗"
- URL prefix: "🌐"
- Parse todo: `TRUE`
- Open TODO icon: "☑️"
- Completed TODO icon: "✅"
- Opacity of link icon: *1* (Default)
- Hover Preview without pressing the <kbd>Ctrl</kbd> key: `FALSE`
- <kbd>Ctrl</kbd>+CLICK on text with `[[links]]` or `[](links)` to open them: `TRUE` *(Default)*
- Overflow wrap behavior of transcluded text: `FALSE` *(Default)*
- Page transclusion max char count: *200* *(Default)*
- Transclusion word wrap default: *0* *(Default)*
- Quote translusion: remove leading '>' from each line: `TRUE` *(Default)*
- Use iframely to resolve page title: `FALSE`

## Embedding Excalidraw into Your Notes and Exporting

- Image type in markdown preview: `Native SVG`
- Type of file to insert into the document: `excalidraw` *(Default)*
- Embed drawing using Wikilink: `TRUE` *(Default)*

### Obsidian Canvas Support

- Inmersive Embedding: `TRUE` *(Default)*

### Image Caching and Rendering Optimization

- Image rendering concurrency: *3* *(Default)*
- Cache Images for embedding in markdown: `FALSE`
- Cache nested Excalidraws in Scene: `FALSE`
- If found, use the already exported image for preview: `FALSE` (Default)

### Export Settings

- Render the file as an image when exporting an Excalidraw file to PDF: `TRUE`
- Embed scene in exported image: `FALSE` *(Default)*

#### Image Sizing

- Default width of embedded (transcluded): *400* *(Default)*
- Default height of embedded (transcluded): *400* *(Default)*
- PNG export image scale: *1* *(Default)*
- Image Padding: *10* *(Default)*
    - `excalidraw-export-padding` (Property)

#### Image Theme and Background Color

- Export image with background: `FALSE`
- Export image with theme: `FALSE`
- Excalidraw preview to match Obsidian theme: `FALSE` *(Default)*

#### Auto-export Settings

- Keep the `.SVG` and/or `.PNG` filenames in sync with the drawing file: `TRUE`
- Auto-export SVG: `TRUE`
- Auto-export PNG: `TRUE`
- Export both dark and light-themed image: `TRUE`

## Embed Files into Excalidraw

### PDF to Image

 - PDF to image conversion scale: *4* (Default)

### Interactive Markdown Files

- Single click to embedded markdown: `FALSE` *(Default)*
- Use Obsidian Default: `FALSE` *(Default)*
- Filename Visible: `FALSE` *(Default)*

#### Embedded Note Background Color

- Match Element Background Color: `FALSE`
- Match Canvas Background Color: `TRUE`
- Background Opacity: *60* **%** *(Default)*

#### Embeded Note Border Color

- Match Element Border color: `TRUE` *(Default)*
- Border Opacity: *0* **%** *(Default)*

### Embed Markdown into Excalidraw as Image

- Default Width of a transcluded markdown document: *500* *(Default)*
- Default maximum height of a transcluded markdown document: *800* *(Default)*
- The default font typeface to use for embedded markdown files: `Nunito.ttf`
- The default font color to use for embedded markdown files: "Black" *(Default)*
- The default border color to use for embedded markdown files: "Black" *(Default)*
- CSS file: "" *(Default)*

## Non-Excalidraw.com Supported Features

- Rendering Tweaks (Maximum image zoom in resolution): *1* *(Default)*
- Custom Pens (Numbers of custom pens): *10* *(Default)*

## Fonts

### Local Font

- Enable local font option: `TRUE` *(Default)*
- Local font file: `Virgil` *(Default)*

### Offline CJK Font Support

- CJK Font Folder: "Excalidraw/CJK Fonts" *(Default)*
- Load Chinese fonts from file at startup: `FALSE` *(Default)*
- Load Japanese fonts from file at startup: `FALSE` *(Default)*
- Load Korean fonts from file at startup: `FALSE` *(Default)*

## Miscellaneous Features

- Default LaTeX formula for new equations: `\textcolor{}{}`
- Display type (✏️) for excalidrw.md files in File Explorer: `TRUE`
- Set the type indicator for excalidraw.md files: "🖌️"
- Immersive image embedding in live preview editing mode: `FALSE` *(Default)*
- Fade out Excalidraw markup: `FALSE` *(Default)*
- Load Excalidraw Properties into Obsidian Suggester: `TRUE` *(Default)*

### Taskbone Optical Character Recognition

- Enable Taskbone: `TRUE` *(Default)*
- Taskbone API key: ""*(Default)*

## Excalidraw Automate

- Enable Field Suggester: `FALSE` *(Default)*
- Startup Script: "" *(Default)*

## Compatibility Features

- Sliding panes plugin support: `FALSE` *(Default)*
- New drawings as legacy as legacy files: `FALSE` *(Default)*
- Auto-export Excalidraw: `FALSE` *(Default)*
- Sync `*.excalidraw` with `*.md` version of the same drawing: `FALSE` *(Default)*
