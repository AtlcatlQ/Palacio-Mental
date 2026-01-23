---
tags:
  - 📃
aliases: []
publish: false
created: 2025-12-28T04:14:14
modified: 2026-01-23T23:41:11
---

⬆️ (categorías:: [[Git]])

↔️ (relacionado::)

---

<(previas::) | (siguientes::)>

# Convención De Commits

Al ser mi [[3.0. Palacio Mental|Palacio Mental]] un lugar para Aprender en público (#🔔), me gustaría poder documentar sus modificaciones. Por eso, es un repositorio público en [GitHub](https://github.com).

Sin embargo, para garantizar un historial limpio en [[Git]], es necesario implementar una convención en los commits (Conventional Commits #🔔). La convención que se utiliza busca adaptarse a la naturaleza propia del proyecto que no es código, sino conocimiento versionado. Debido a esto, los commits de tipo `feat`, `chore` o similares no serán las categorías utilizadas y se definirán categorías propias, más adecuadas al proyecto, pero inspiradas en el orden y la normalización de Conventional Commits.

El enfoque de la convención es obtener la mayor cantidad de información posible sobre el commit en el menor tiempo posible. Por ello, se utilizarán emojis y los verbos van en mayúsculas, permitiendo una identificación ágil del tipo, del scope y del verbo. También, se busca evitar commits que contengan información repetida ^[Ejemplo: `fix(template): fix capture template`].

# Tipos De Commits

Mi [[3.0. Palacio Mental|Palacio Mental]] tiene cuatro niveles de funcionamiento, donde cada uno cumple su propia función y pueden ser utilizados para definir los tipos de cambios que se realizan:

1. **[[#🗃️ Zettelkasten]]:** Gestión de Conocimiento Personal (#🔔)
2. **[[#📦 Modules]]:** Información personal y privada ([[El Método P. A. R. A.|P. A. R. A.]], un Diario y un sistema de escritura creativa) que gestiono en la vault a través de submódulos de git en repositorios privados. ^[Cada commit en esta categoría representa una actualización del estado del submódulo, **no cambios internos a su contenido.**]
3. **[[#⚙️ Config]]:** Configuración de la Vault de Obsidian en general
4. **[[#♻️ Workflow]]:** Cómo se realizan los Procesos de la vault ([[A.0. Flujo de Trabajo|Flujo de Trabajo]]) y herramientas de apoyo que no forman parte de la configuración (Plantillas o [[Tipos de Ficheros|FileClasses]].

Como cada uno de los niveles de funcionamiento de la vault afectan a partes distintas de esta, cada uno tiene sus respectivos scopes que se definirán a continuación.

## 🗃️ Zettelkasten

- **📓 Notes:** Modificación de *Permanent Notes*
- **📥 Capture:** Modificación en las *Bibliography Notes*/*Literacy Notes* (Notas de Captura #🔔)

## 📦 Modules

- 🏹 [[El Método P. A. R. A.#PROYECTOS|PROJECTS]]
- 🪐 [[El Método P. A. R. A.#AREAS|AREAS]]
- 📒 REGISTRO (El diario y notas privadas)
- ✍️ Escritura (Mi Crisol de Escritura)

## ⚙️ Config

- **💻 Desktop:** Configuración General de Obsidian
- **📱 Mobile:** Configuración de Obsidian en Android
- **⌨️ Hotkeys:** Cambiar, añadir o modificar atajos.
	- **Vim:** Edición de mappings en `.vimrc`
- **🔌 Plugins:** gestión de plugins.
- **💄 Style:** Cambios en cómo se visualizan las cosas en Obsidian
	- **UI:** User Interface
	- **Snippets:** Ajustes en mis snippets
- **⛔ gitignore:** Modificaciones hechas a gitignore.

## ♻️ Workflow

- **🃏 Templates** (Plantillas)
- **🗂️ FileClasses:** Definiciones de [[Tipos de Ficheros]] (Usando [[Metadata Menu]] para gestionarlo)
- **📃 Docs:** [[Documentación Interna|Documentación]] de Herramientas (software), procesos ("Rituales", Revisiones periódicas), Estructura de la Vault (Carpetas, tipos de ficheros, etc).

# 📦 Módulos

Si bien, los commits propios de los submódulos no se usan dentro del repositorio, he decidido dejar las convenciones de commits utilizadas en los submódulos en este mismo documento; en caso de que resultaran de utilidad para quién quisiera imitar la arquitectura de mi Palacio Mental

%% #🔔 Por definir %%

## 🏹 PROJECTS

## 🪐 AREAS

## 📒 REGISTER

## ✍️ Writing

# Verbos

%% Este apartado tendrá cambios más adelante %%

Se debe procurar evitar verbos demasiado vagos e inespecíficos como `CHANGE`, prefiriendo en todo momento verbos más descriptivos y específicos como `UPDATE`, `RENAME`, `REFACTOR`.

Los verbos utilizados, también, procuran ser *transversales*, es decir, que se puedan utilizar en varios tipos de commits y en varios scopes y no solo en uno específico. Aunque, hay que recalcar que algunos verbos sí serán propios de un solo tipo y scope, con el fin de que sea lo más descriptivo posible.

La lista de verbos utilizados es la siguiente:

- `DISTILL`: Añadir contenido a una Permanent note, a partir de una Nota de Captura
- `SPLIT`: Dividir una nota en dos notas más específicas (mayor atomicidad)
- `MERGE`: Combinar dos notas de temas similares en una misma (mayor claridad)
- `ARCHIVE`: Mueve notas de captura ya procesadas al archivo de P. A. R. A.
- `UPDATE`: Actualizar el modulo
- `SET`: Cambiar opciones de configuración (Set `<option>` to `<value>`),
- `ASSIGN`: Configurar un atajo de teclado
- `ENABLE`: Habilitar (principalmente plugins)
- `DISABLE`: Deshabilitar (principalmente plugins)
- `ADD`: Añadir un elemento nuevo (genérico)
- `FIX`:Corregir algo que no funcionaba
- `IMPORT`: Agregar elemento que estaba presente en la vault anterior (Previo al seguimiento con Git)
- `REFINE`: Mejora en explicación (redacción y expansión del concepto)
- `RENAME`: Cambio de nombre de fichero
- `REFACTOR`: Reorganización de la información sin cambiar su significado
- `LINT`: Corrección de formato en las notas o documentación utilizando [[Linter|Linter (Obsidian Plugin)]].
- Corrección de formato (Usando Linter)
- `REMOVE`: Eliminar algo (genérico)
- `REVERT`: Regresar algo a una versión anterior
- `MOVE`: Cambiar un fichero de carpeta (Genérico)

# Ejemplos De Commits

```
⚙️ Config (⌨️ Hotkeys): ASSIGN "Command" 
⚙️ Config (📱 Mobile): SET Mobile Toolbar 
⚙️ Config (🔌 Plugins): FIX 🟰 LaTeX Suite snippets file path 
⚙️ Config (⛔ gitignore): ADD "File" 
⚙️ Config (🔌 Plugins): ENABLE 🎞️ Media Extended 
⚙️ Config (🔌 Plugins): UPDATE 🎞️ Media Extended 
🗃️ Zettelkasten (📓 Notes): IMPORT "Alfabeto Griego" 
🗃️ Zettelkasten (📓 Notes): ADD "Lógica Proposicional" 
🗃️ Zettelkasten (📥 Capture): ADD "% MIGALA - ¿De qué trata la vida?" 
📦 Modules (✍️ Escritura): UPDATE Module 
♻️ Workflow (🃏 Templates): REFACTOR Capture template 
♻️ Workflow (🗂️ FileClasses): REFACTOR Capture template
```
