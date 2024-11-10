---
tags: ["⚙️/🔌"]
status: 🔳
aliases: ["Mejor Contador de Palabras", "Contador de Palabras Mejorado"]
publish: false
created: 2023-05-02T10:55:35
modified: 2023-05-07T22:49:56
---

< (previas:: [[Word Count]])

**description**:: El plugin es un reemplazo al contador de palabras nativo y añade la funcionalidad de contar las palabras seleccionadas, no solo las de todo el documento. Además de contar palabras, también permite mostrar otras estadísticas

**comentario**:: No es especialmente útil, pero está interesante.

[enlace:: [Better Word Count (Repositorio de GitHub)](https://github.com/lukeleppan/better-word-count)]

# Configuración

## General Settings

- Collect Statistics: `TRUE`
- Don't Count Comments: `TRUE`
- Display Section Word count: `TRUE`
- Page Word Count: *300* (Default)

## Advanced Settings

- Vault Stats File Path: ".Conf/vault-stats.json"

## Markdown Status Bar

### Sentences in Note

- Metric Counter: `Sentences`
- Metric Type: `Current Note`
- Prefix Text: ""
- Sufix Text: "s,"

### Words in Note

- Metric Counter: `Words`
- Metric Type: `Current Note`
- Prefix Text: ""
- Sufix Text: "w,"

### Chars in Note

- Metric Counter: `Characters`
- Metric Type: `Current Note`
- Prefix Text: ""
- Sufix Text: "c,"

## Alternative Status Bar

### Daily Words

- Metric Counter: `Files`
- Metric Type: `Total in Vault`
- Prefix Text: ""
- Sufix Text: "W"

### Daily Notes

- Metric Counter: `Files`
- Metric Type: `Total in Vault`
- Prefix Text: ""
- Sufix Text: "D"

### Total Notes

- Metric Counter: `Files`
- Metric Type: `Total in Vault`
- Prefix Text: ""
- Sufix Text: "T"
