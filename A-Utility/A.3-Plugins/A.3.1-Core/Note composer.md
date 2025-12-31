---
tags:
  - ⚙️/🔌
status: "🔳"
aliases:
  - Componer Notas
  - Compositor de Notas
  - Note Composer
publish: true
created: 2023-05-01T12:47:03
modified: 2025-07-10T05:04:15
---

↖️ (fuente:: [[¬ 2023-10-24 Obsidian - Help]])

⬆️ (categorías:: [[Obsidian]])

↔️ (relacionado::)

---

<(previas::) | (siguientes:: [[Note Refactor]])>

**Descripción** (description:: Permite extraer fragmentos de notas o combinar notas, puede ser utilizado en conjunto con plantillas.)

**Comentario:** (comment:: No lo utilizo, todavía.)

**Enlace:** (enlace:: [Note composer (Ayuda de Obsidian)](https://help.obsidian.md/Plugins/Note+composer))

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
