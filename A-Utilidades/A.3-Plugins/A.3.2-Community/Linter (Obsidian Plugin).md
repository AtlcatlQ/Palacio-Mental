---
icon: "🔦"
tags: ["⚙️/🔌"]
status: "✔️"
aliases: ["Corrector de Estilo", "Linter", Configuración]
publish: true
created: 2024-10-02T01:00:47
modified: 2024-11-22T00:14:45
---

< (previas:: [[Tidy Footnotes]]) | (siguientes::) >

---

**description**:: Permite dar formato automáticamente a las notas, permitiendo una gran configuración

**comentario**:: Resuelve perfectamente lo que ofrece, evitando que te preocupes por el formato, aunque la cantidad de opciones puede resultar algo abrumadora.

[enlace:: [Linter (Repositorio de GitHub)](https://github.com/platers/obsidian-linter)]

%% Le vendría bien una corrección del lenguaje de su interfaz para hacerlo más similar al de Obsidian. #🔔 %%

# Configuración

## General

- Lint on Save: `TRUE`
- Display message on lint: `TRUE` (Default)
- Lint on File Change `TRUE`
- Display Lint on File Change Message: `TRUE`
- Override Locale: `Same as system` (Default)
- YAML aliases section style: `single-line` (Default)
- YAML tags section style: `single-line` (Default)
- Default Escape Character: `"` (Default)
- Remove Unnecesary Escape Characters when in Multi-Line Array Format: `TRUE` (Default)
- Number of Dollar Sings to Indicate Math Block: *2* (Default)
- Folders to ignore
    - "A. Utilidades/2. Plantillas"
    - "A. Utilidades/1. Clases"
- Files to ignore (RegEx)

## YAML

- Add Blank Line After YAML: `TRUE`
- Dedupe YAML Array Values: `TRUE`
    - Dedupe YAML aliases section: `TRUE`
    - Dedupe YAML tags section: `TRUE`
    - Dedupe YAML array sections: `TRUE`
- Escape YAML Special Characters: `TRUE`
    - Try to Escape Single Line Arrays: `TRUE`
- Force YAML Escape: `FALSE` *(Default)* %% #🔔 %%
    - Force YAML Escape on keys:
        - "icon"
        - "status"
- Format Tags in YAML: `TRUE`
- Format YAML Array: `TRUE`
    - Format YAML aliases section: `TRUE`
    - Format YAML tags section: `TRUE`
    - Default YAML array section style: `single-line`
    - Format YAML array sections: `TRUE`
    - Force key values to be single-line arrays: ""
    - Force key values to be multi-line arrays: ""
- Insert YAML attributes: `TRUE`
    - Text to Insert
        - "aliases: "
        - "tags: "
        - "publish: false"
- Move Tags to YAML: `FALSE` %% #🔔 %%
    - Body tag operation
    - Tags to Ignore: "🔔"
- Remove YAML Keys: `TRUE`
    - id
    - sincronizar
    - favorite
    - favorito
    - private
    - activo
- Sort YAML Array Values: `TRUE`
    - Sort YAML aliases section: `TRUE`
    - Sort YAML tags section: `TRUE`
    - YAML Keys to Ignore: ""
    - Sort Order: `Ascending Alphabetical`
- YAML Key Sort: `TRUE`
    - YAML Key Priority Sort Order:
        - icon
        - tags
        - status
        - aliases
        - publish
        - cssclasses
        - cssclass
        - created
        - modified
        - linter-alias
    - Priority Keys at Start of YAML: `TRUE`
        - YAML Sort Order for Other Keys: `Ascending Alphabetical`
- YAML Timestamp: `TRUE`
    - Date Created: `TRUE`
        - Date Created Key: "created"
        - Date Created Source of Truth: `YAML frontmatter`
    - Date Modified: `TRUE`
        - Date Modified Key: "modified"
        - Date Modified Source of Truth: `Changes in Obsidian`
    - Format: "YYYY-MM-DD[T]HH:mm:ss"
    - Convert Local Time to UTC: `TRUE`
    - Update YAML Timestamp on File Contents Update:
- YAML Title Alias: `TRUE`
    - Preserve existing aliases section style: `TRUE`
    - Keep alias that matches the filename: `FALSE`
    - Use the YAML key specified by `Alias helper key` to help with filename and heading changes:
    - Alias helper key: "linter-alias"
- YAML Title: `FALSE`
    - Tittle Key: ""
    - Mode:

## Heading

- Capitalize Headings: `TRUE`
    - Style: `Title Case`
    - Ignore Cased Words: `TRUE`
    - Ignore Words: %% #🔔 %%
    - Lowercase Words: al, de, por, que, a %% #🔔 %%
- Filename Heading: `TRUE`
- Header Increment: `TRUE`
    - Start Header Increment at Heading Level 2: `FALSE` *(Default)*
- Headings at Start Line: `TRUE`
- Remove Trailing Punctuation in headings: `TRUE`
    - Trailing Punctuation: ".,;:!"

## Footnote

- Footnote after Punctuation: `TRUE`
- Move Footnotes to the bottom: `TRUE`
- Re-Index Footnotes: `TRUE`

## Content

- Auto-correct Common Misspellings: `FALSE`
    - Ignore Words
    - Skip Words with Multiple Capitals: `FALSE` *(Default)*
    - Extra Auto-Correct Source Files
- Blockquote Style: `TRUE`
    - Style: `space`
- Convert Bullet List Markers: `TRUE`
- Default Language for Code Fences: `TRUE`
    - Programming Language: "javascript"
- Emphasis Style: `TRUE`
    - Style: `asterisk`
- No Bare URLs: `TRUE`
    - No Bare URIs: `FALSE`
- Ordered List Style: `TRUE`
    - Number Style: `preserve`
    - Ordered List Indicator End Style: `.`
    - Preserve Starting Number: `TRUE`
- Proper Ellipsis: `FALSE`
- Quote Style: `FALSE`
    - Enable `Single Quote Style`: `TRUE`
        - Single Quote Style: `''`
    - Enable `Double Quote Style`: `TRUE`
        - Double Quote Style: `""`
- Remove Consecutive List Markers: `TRUE`
- Remove Empty List Markers: `TRUE`
- Remove Hyphenated Line Breaks: `TRUE`
- Remove Multiple Spaces: `TRUE`
- Strong Style: `TRUE`
    - Style: `asterisk`
- Line Break Between Lines With Content: `TRUE`
    - Line Break Indicator: `<br/>`
- Unordered List Style: `TRUE`
    - List item Style: `-`

## Spacing

- Compact YAML: `TRUE`
    - Inner New Lines: `TRUE`
- Consecutive blank lines: `TRUE`
- Convert Spaces to Tabs: `FALSE`
    - Tabsize: ""
- Empty Line Around Blockquotes: `TRUE`
- Empty Line Around Code Fences: `TRUE`
- Empty Line Around Horizontal Rules: `TRUE`
- Empty Line Around Math Blocks: `TRUE`
- Empty Line Around Tables: `TRUE`
- Heading blank lines: `TRUE`
    - Bottom: `TRUE`
    - Empty Line Between YAML and Header: `TRUE`
- Line Break at Document End: `TRUE`
- Move Math Block Indicators to Their Own Line: `FALSE`
- Paragraph blank lines: `TRUE`
- Remove Empty Lines Between List Markers and Checklists: `TRUE`
- Remove link spacing: `TRUE`
- Remove Space around Characters: `FALSE`
    - Include Fullwith forms: `FALSE`
    - Include CJK Symbols and Punctuation: `FALSE`
    - Include Dashes: `FALSE`  
    - Other symbols: ""
- Remove Space Before or After Characters: `TRUE`
    - Remove Space Before Characters: ",;.:!?)]>"
    - Remove Space After Characters: "¡¿([{<"
- Space after list markers: `TRUE`
- Space between Chinese Japanese or Korean and English or Numbers: `FALSE`
- Trailing Spaces: `TRUE`
    - Two Space Linebreak: `TRUE`

## Paste

- Add Blockquote Indentation on Paste: `TRUE`
- Prevent Double Checklist Indicator on Paste: `TRUE`
- Prevent Double List Item Indicator on Paste: `TRUE`
- Proper Ellipsis on Paste: `FALSE`
- Remove Hyphens on Paste: `FALSE`
- Remove Leading on Trailing Whitespace on Paste: `TRUE`
- Remove Leftover Footnotes from Quote on Paste: `TRUE`
- Remove Multiple Blank Lines on Paste: `TRUE`

## Custom

> [!fail] No tengo experiencia y creo que con lo que ofrece el plugin es suficiente para mí.

### Custom Commands

### Custom Regex Replacement

## Debug

- Log Level: `trace`
- Linter Config *(Default)*
- Collect logs when linting on save and linting the current file: `TRUE`
