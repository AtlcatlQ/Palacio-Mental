---
icon: 🗂️
tags:
  - ♻️/📃
  - 🗺️
aliases:
  - "#⚙️/🗂️"
  - Prefijos
  - Sistema de Prefijos
  - Tag Taxonomoy
  - Tipos de Archivos
  - Tipos de Notas
publish: true
created: 2025-09-20T23:38:44
modified: 2026-04-29T18:58:04
---

⬆️ (categorías:: [[6.0-Documentacion-Interna|Documentación Interna]])

↔️ (relacionado::)

---

<(previas::) | (siguientes::)>

```table-of-contents
title: # 🗺️ Mapa De Contenidos
style: nestedOrderedList
minLevel: 0
includeLinks: true
hideWhenEmpty: true
debugInConsole: true
```

# Sistema De Tipificación

Los distintos tipos de ficheros^[Se entiende por fichero un archivo de Markdown que contiene notas/información] se van a definir de las siguientes formas:

- Con las [[Tags View|Etiquetas]] que ya trae Obsidian, para poder manejar los metadatos usando [[Metadata Menu]].
	- Los únicos ficheros que no van a tener una etiqueta propia son las [[Templater|Plantillas]] (porque estorbarían en situaciones dónde necesito un texto reutilizable limpio) y las [[Periodic Notes|Notas Periódicas]] (para facilitar seguir hábitos usando enlaces).
- Con el [[#Sistema De `Prefijos`|Sistema de Prefijos]], para facilitar la búsqueda usando [[Another Quick Switcher]] y [[Quick Switcher++]].
- Con la [[Estructura de Carpetas dentro de la Vault|Estructura de Carpetas]], que permite una vista más limpia y manejar estados evitando la sobrecarga visual.

## Sistema De `Prefijos`

Voy a utilizar distintos símbolos *no alfanuméricos*, para establecer un sistema de **Prefijos** para poder buscar e identificar de forma más rápida los distintos tipos de archivos en la Vault. ^[La idea original es de [[@ Bryan Jenks]] %% #🔔 Insertar la referencia %%]

- [Disponibles::]
- [Utilizados:: `{(♦♣♠ '; ¿¡! & ¬=-— +§ %•°○ _, })@`]  
- [No-Utilizables:: `<>\\/|:?"*. $~ []#^`]^[Generan conflicto con Windows, con WSL (Linux) y con Obsidian por la forma en que se manejan los comandos de consola y los sistemas de archivos.]
- [Posibles:: `♥ ¶ ‰`]
# 🗂️ Tipos De Ficheros

## ㊙️ Notas Personales

Información privada que prefiero que no esté expuesta o pública.

### 📒 Notas Periódicas

#### 📆 Notas Diarias

#### 🗓️ Semanales

#### 📅 Mensuales

#### ☸️ Trimestrales

#### 🎆 Anuales

#### Quinquenales

#### Decadales

#### VIDA

### 💽 Anécdotas

Registro de cosas que me pasan en las que me quiero extender o que quiero dejar mejor expresadas, con sensaciones y no solamente cómo una entrada dentro de la bitácora. También la voy a ocupar para Desahogarme.

### 👥 Contactos

## 📔 Notas P. A. R. A

### 🪐 ÁREAS

#### ⚜️Valores

#### 🔂 Seguidores De Hábitos

### 🏹 PROYECTOS

|  🆔   | 🗂️                  |
| --- | ------------------- |
| 📂  | Proyectos           |
| 📂  | [[#🎯 Objetivos]]   |
| 📂  | [[#🏫 Asignaturas]] |
| `{` | **[[#Creación]]**   |
| `(` | [[#✍️ Escritura]]   |
|     | [[#🎙️ Narración]]   |

^PROYECTOS-Tipos

#### 🎯 Objetivos

#### 🏫 Asignaturas

#### Creación

##### ✍️ Escritura

#### 🎙️ Narración

Obras de Literatura Narradas por mí.

### 🗺️ Mapas De Contenidos

Son notas de Índice que sirven para ubicarse dentro del contenido de la vault. Sirven tanto como notas de Índice en Zettelkasten o como Recursos de PARA

## [[Zettelkasten]]

### 📥 Notas De Captura

Combinación de las Literacy Notes, Bibliography Notes y Fleeting Notes de Zettelkasten. La idea es que todas las anotaciones correspondientes a cada una de las fuentes vivan en un mismo archivo de Markdown, de preferencia en formato de lista de tareas, para ir tachando las notas que se vayan procesando y se pasen a Permanentes. Es decir, contienen anotaciones rápidas de las notas sin procesar.

| 🆔  | 🗂️                          | 🔤                                                                                                                                           | 📰 Publicable |
|:---:| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |:-------------:|
|     | **🏫 UNIVERSIDAD**          |                                                                                                                                              |               |
| `'` | 🏫 Apuntes de Clases        |                                                                                                                                              |      NO       |
| `;` | 🎓 Material de Clase        |                                                                                                                                              |      NO       |
|     | **㊙️ PERSONALES**          | Surgen más de situaciones que ocurren o me interesan que de fuentes propias                                                                  |               |
| `¿` | ❓ Pregunta                 |                                                                                                                                              |      SI       |
| `¡` | 💭 Pensamiento              | Reflexiones o razonamientos que buscan generar ideas                                                                                         |      SI       |
| `!` | 💡 Idea                     | Principalmente cosas que me gustaría incluir en mis escritos                                                                                 |    DEPENDE    |
| `&` | 🎨 Obra de Arte             | Que me gustaría Analizar o tener de referencia                                                                                               |      SI       |
|     | **TEXTOS ESCRITOS**         |                                                                                                                                              |               |
| `¬` | 📃 Documentación            | De programas, Herramientas, etc.                                                                                                             |      SI       |
| `=` | 🔬 Paper Científico         |                                                                                                                                              |      SI       |
| `-` | **🗞️ Artículo de Internet** | Que *no* son fuentes académicas                                                                                                              |    DEPENDE    |
| `—` | 📜 Artículo de Wikipedia    | Sirve para obtener contexto de temas o son puntos de entrada rápidos                                                                         |      SI       |
| `+` | **📚 Libro**                | Sirven más cómo ficha técnica para la Lista de Lectura que para almacenar las notas (Importar notas desde Zotero o desde cuálquier otra app) |               |
| `+` | 📘 Libro de Texto           |                                                                                                                                              |      NO       |
| `§` | 📗 Extracto                 | Fragmentos de libros (Principalmente capítulos)                                                                                              |      NO       |
| `&` | *📙 Ficción*                | Escritos por otra persona. También son considerados como arte.                                                                               |      NO       |
| `♠` | ♠️ Novela                   |                                                                                                                                              |      NO       |
| `♣` | ♣️ Cuento                   | Relatos, microrrelatos, etc.                                                                                                                 |      NO       |
| `♦` | ♦️ Poema                    |                                                                                                                                              |      NO       |
|     | **MULTIMEDIA**              |                                                                                                                                              |               |
| `%` | 📹 Vídeo                    | Principalmente de YouTube                                                                                                                    |      SI       |
| `•` | 🎧 Podcast                  |                                                                                                                                              |      SI       |
| `°` | 📽️ Película                 |                                                                                                                                              |      NO       |
| `○` | 📺 Serie de Televisión      |                                                                                                                                              |      NO       |
| `‰` | 🎮 Videojuego               |                                                                                                                                              |      SI       |
| `_` | **📥 OTRO**                 |                                                                                                                                              |    DEPENDE    |
| `,` | Curso                       | Principalmente en línea                                                                                                                      |      NO       |
| `‼` | 👥 Reunión                  | Notas de Reuniones virtuales y presenciales                                                                                                  |    DEPENDE    |

^CAPTURA-Tipos

### 📓 Notas Permanentes

| 🆔  | 🗂️             | 🔤                                                                                    |
| --- | -------------- | ------------------------------------------------------------------------------------- |
| 🗂️  | 📓 Permanentes | Información procesada y estructurada por mí,                                          |
| `}` | Transversal    | Conceptos importantes que suelo aplicar en varios contextos                           |
| `)` | ✏️ Apunte      | Información que Necesito a mano y que esté sin procesar (Tablas, gráficos, etc.)      |
| `@` | 👤 Autores     | Referencias a autores de piezas de información específicas^[Ayuda a brindar contexto] |

#### ✏️ Apunte

#### 👤 Autores

## ⚙️ Configuración

Ficheros que documentan la configuración interna de la vault. También incluye los ficheros de los cuáles depende ciertas configuraciones de ciertos plugins.

- Revisiones de Temas de Obsidian (Casi no lo voy a utilizar)
- Revisiones de Snippets

### 🗂️ Clases

Permiten definir y gestionar los metadatos de los distintos tipos de ficheros usando [[Metadata Menu]].

### 🔌 Revisión De Plugins

Plugins que utilizo en mi flujo de trabajo dentro de Obsidian o que veo si tienen o no utilidad.

### 💄 Revisión De Temas

### Revisiones De Snippets

### [[Templater|Plantillas]]

## ♻️ Flujo De Trabajo

### [[6.0-Documentacion-Interna|Documentación Interna]]

Conjunto de estándares, procesos y herramientas que utilizo dentro de mi flujo de trabajo que me permiten agilizarlo.

#### 🔧Herramientas

### 📊 Tableros

Consulta visual de Información (Dashboards)

## ✍️ Escritos

%%

### Argumentativa

### Lírica

### Narrativa

### Teatro

%%
