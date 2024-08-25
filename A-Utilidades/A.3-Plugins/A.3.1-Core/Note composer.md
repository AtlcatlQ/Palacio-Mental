---
tags: [⚙️/🔌]
status: 🔳
aliases: ["Compositor de Notas", "Componer Notas", "Note Composer"]
publish: true
sr-due: 2023-08-30
sr-interval: 199
sr-ease: 290
created: 2023-05-01T12:47:03
modified: 2023-10-02T12:00:11
---

↖️ (fuente:: [[¬ 2023-10-24 Obsidian - Help]])

⬆️ (categorías:: [[Obsidian]])

---

(siguientes:: [[Note Refactor]]) >

**description**:: Permite extraer fragmentos de notas o combinar notas, puede ser utilizado en conjunto con plantillas.

**comentario**:: No lo utilizo, todavía

[enlace:: [Note Composer (Ayuda de Obsidian)](https://help.obsidian.md/Plugins/Note+composer)]

# 📃 Documentación

Ambas funciones, tanto [[#Combinar Notas]] como [[#Extraer Notas]] pueden tener distintos comportamientos dependiendo de qué teclas se:

1. <kbd>↵</kbd>: Añade el contenido de la nota inicial *al final* de la nota de destino.
2. <kbd>⇧</kbd>+<kbd>↵</kbd>: Añade el contenido de la nota inicial *al principio* de la nota de destino
3. <kbd>Ctrl</kbd>+<kbd>↵</kbd>: *Crea una nueva nota* con el contenido de la nota de fuente

## Combinar Notas

> [!note] [[Command Palette|Comando]]: `Note composer: Merge current file with another file...`

Añade el Contenido de una nota a otra y elimina la primera, además de actualizar todos los enlaces a la nota fusionada.

## Extraer Notas

> [!note] [[Command Palette|Comando]]: `Note composer: Extract current selection...`

Mueve el texto seleccionado a otra nota.

# ⚙️ Configuración

- **Text after Extraction:** `Link to new file` *(Default)*
- **Template file location:** [[NUEVA NOTA]]
- **Confirm file merge:** `TRUE` *(Default)*
