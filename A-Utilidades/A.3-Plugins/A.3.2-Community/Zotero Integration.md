---
tags:
  - ⚙️/🔌
status: ✔️
aliases:
  - Zotero to Obsidian
  - Zotero Plugin
  - Zotero
publish: true
created: 2023-05-22T15:57:43
modified: 2023-11-07T15:17:32
icon: ↖️
---

⬆️ (categorías:: [[Zotero]])

---

< (previas::) | (siguientes::) >

**description**:: Permite importar las anotaciones de [[Zotero]].

**comentario**:: Para crear las plantillas, utiliza [Nunjucks](https://mozilla.github.io/nunjucks/) (Es decir la sintaxis de [[¬ 2023-10-24 Jinja - Template Design|Jinja]])

[enlace:: [Zotero Integration (Repositorio de GitHub)](https://github.com/mgmeyers/obsidian-zotero-integration)]

# Plugins Similares

- Citations
- Zotero Link
- Zotero Bridge

# Configuración

## General Settings

- PDF Utility Path Override: "" (Default)
- Database: `Zotero` (Default)
- Note Import Location: "5. Captura/"
- Open the created or update note(s) after import: `TRUE`
- Which notes to open after import: `First Imported Note` (Default)
- Enable Cite Key Autocomplete: `TRUE`
- Cite Key Autocomplete Insertion Template: "[[{{citekey}}]]" (Default)
- Enable Annotation Concatenation: `TRUE`

## Citation Formats

- Cita:
    - Output Format: Template
    - Template: "\[\[{{citekey}}|{{citekey}}]]"

## Import Formats

- Documentos:
    - Output Path: "5. Captura/{{citekey}}.md"
    - Image Output Path: "B. Adjuntos/A. Zotero/{{citekey}}/"
    - Image Base Name: "{{citekey}}"
    - Template file: "[[Zotero-Documento|A-Utilidades/A-Plantillas/A.B-Externas/Zotero-Documento.md]]"
    - Bibliography Style: "" (null)

## Import Image Settings

- Image Format: `jpeg`
- Image Quality (jpg only): *120*
- Image DPI: *120*

---

- Image OCR:
- Tesseract path
- Image OCR Language
- Tesseract data directory
