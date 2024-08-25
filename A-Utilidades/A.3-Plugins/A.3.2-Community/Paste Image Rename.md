---
tags: ["⚙️/🔌"]
status: 🔳
aliases: []
publish: false
created: 2023-05-20T21:34:59
modified: 2023-05-20T22:02:05
---

**description**:: Permite darle un formato personalizado a las imágenes que importas a obsidian a través del pegado.

**comentario**::

[enlace:: [Paste Image Rename (Repositorio de GitHub)](https://github.com/reorx/obsidian-paste-image-rename)]

# Configuración

- Image name pattern: "{{fileName}} - Diagrama"
- Duplicate number at start (or end): `FALSE` (end)
- Duplicate number delimiter: "-"
- Always add duplicate number: `FALSE`
- Auto rename: `FALSE`
- Handle all attachments: `TRUE`
- Exclude extension pattern: ""
- Disable rename notice: `FALSE`

# Documentation

## Acceptable Variables in Image name Pattern

- {{filename}}: Name of the active file
- {{imageNameKey}}: Defined in frontmatter
- {{DATE:$FORMAT}}: In moment.js format
