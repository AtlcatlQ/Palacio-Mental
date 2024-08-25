---
icon: '✏️'
tags: [⚙️/🔌]
status: '✔️'
aliases:
  - Omnivore Highlights
  - Omnivore Obsidian Integration
  - Omnivore Plugin
  - Omnivore Annotations
  - Omnivore to Obsidian
publish: true
created: 2023-12-29T11:21:07
modified: 2024-01-28T10:40:03
---

⬆️ (categorías:: [[Omnivore]], [[Plugins]])

---

< (previas:: [[Raindrop Highlights|Raindrop.io]]) | (siguientes::) >

**description**:: Integración de [[Omnivore]] con [[Obsidian]]

**comentario**:: Al principio pensé que era bastante limitado en su uso de plantillas, pero resulta que a través de [[Templater]] es posible extender bastante su uso

[enlace:: [Omnivore (Obsidian Plugin) (Repositorio de GitHub)](Omnivore (Obsidian Plugin))]

# ⚙️ Configuración

#🔔/📌 Dividir las Plantillas de [[Omnivore]] en Metadata y Contenido

- Filter: `advanced`
- Custom query: `in:inbox is:read`
- Highlight Order: `the location of highlights in the article`
- Front Matter:
- Article Template: [[Omnivore - Plantilla|Plantilla]]
- Frequency: *0*
- Folder: "0-ENTRADA/0.1.D-Omnivore"
- Attachment Folder: "B-Adjuntos/Omnivore"
- Is Single File: `False`
- Filename: "{{id}}"
- Filename Date Format: "yyyy-MM-dd"
- Folder Date Format: "yyyy-MM-dd"
- Date Saved Format: "yyyy-MM-dd'T'HH:mm:ss"
- Date Highlighted Format: "yyyy-MM-dd'T'HH:mm:ss"

# *➕* Advanced Settings

- API endpoint: <https://api-prod.omnivore.app/api/graphql> *(Default)*
- Front-matter Template:
