---
tags:
  - 🗂️
aliases: 
publish: false
icon: 📆
fields:
  - id: 7iZdDL
    name: Propósito
    options:
      template: "{{Propósito}}"
    type: Input
    path: ""
  - id: fm4Q94
    name: Ejercicio
    options:
      valuesList:
        "1": "[[#💪 Ejercicio|💚]]"
        "2": "[[#💪 Ejercicio|💛]] "
        "3": "[[#💪 Ejercicio|🧡]]"
        "4": "[[#💪 Ejercicio|🖤]]"
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
      allowNull: false
    type: Select
    path: ""
  - id: 195rbG
    name: Rutina
    options:
      step: "1"
      min: "1"
      max: "60"
    type: Number
    path: ""
  - id: ydnS0c
    name: Duolingo
    options:
      valuesList:
        "1": "[[<% tp.file.title %>#^English|🇬🇧]]"
        "2": "[[<% tp.file.title %>#^Pronunciation|🗣️]]"
        "3": "[[<% tp.file.title %>#^German|🇩🇪]]"
        "4": "[[<% tp.file.title %>#^Japanese|🇯🇵]]"
        "5": "[[<% tp.file.title %>#^Kanji|仮名]]"
        "6": "[[<% tp.file.title %>#^Catalan|🇪🇸🇨🇹]]"
        "7": "[[<% tp.file.title %>#^Latin|🏟️]]"
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    type: Multi
    path: ""
  - id: E3rW1G
    name: Cara
    options:
      valuesList:
        "0": "[[<% tp.file.title %>#^Cara|💚]]"
        "1": "[[<% tp.file.title %>#^Cara|💛]]"
        "2": "[[<% tp.file.title %>#^Cara|🧡]]"
        "3": "[[<% tp.file.title %>#^Cara|🖤]]"
        "4": 🤍
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    type: Select
    path: ""
  - id: VTTRS5
    name: Música
    options:
      valuesList:
        "1": "[[<% tp.file.title %>#^music|💚]]"
        "2": "[[<% tp.file.title %>#^music|💛]]"
        "3": "[[<% tp.file.title %>#^music|🧡]]"
        "4": "[[<% tp.file.title %>#^music|🖤]]"
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
      allowNull: false
    type: Select
    path: ""
  - id: Wi88Zq
    name: Desayuno
    options: {}
    type: Input
    path: ""
  - id: FglcmF
    name: Almuerzo
    options: {}
    type: Input
    path: ""
  - id: GkmX5k
    name: Cena
    options: {}
    type: Input
    path: ""
  - id: dcwip7
    name: Canción
    options:
      template: '"[{{Artista}} - <cite>{{Canción}}</cite>]({{url}})"'
    style:
      code: false
    type: Input
    path: ""
  - id: BAva9e
    name: NoPMO
    options:
      valuesList:
        "1": "[[<% tp.file.title %>#^NoPMO|💚]]"
        "2": "[[<% tp.file.title %>#^NoPMO|💛]]"
        "3": "[[<% tp.file.title %>#^NoPMO|🖤]]"
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    type: Select
    path: ""
  - id: i1pKpT
    name: Revisión
    options:
      valuesList:
        "1": "[[<% tp.file.title %>#^Revision|💚]]"
        "2": "[[<% tp.file.title %>#^Revision|💛]]"
        "3": "[[<% tp.file.title %>#^Revision|🧡]]"
        "4": "[[<% tp.file.title %>#^Revision|🖤]]"
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    type: Select
    path: ""
  - id: TyPPL8
    name: Meditar
    options:
      valuesList:
        "1": "[[<% tp.file.title %>#^Meditar|💚]]"
        "4": "[[<% tp.file.title %>#^Meditar|🖤]]"
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
    type: Select
    path: ""
  - name: Resaltado
    type: Input
    options: {}
    path: ""
    id: YBfdUE
  - name: Ducharse
    type: Select
    options:
      sourceType: ValuesList
      valuesList:
        "1": "[[<% tp.file.title %>#^Ducharse|💚]]"
        "2": "[[<% tp.file.title %>#^Ducharse|🖤]]"
    path: ""
    id: PaM4x7
  - name: Dientes
    type: Select
    options:
      sourceType: ValuesList
      valuesList:
        "1": "[[<% tp.file.title %>#^Dientes|💚]]"
        "2": "[[<% tp.file.title %>#^Dientes|💛]]"
        "3": "[[<% tp.file.title %>#^Dientes|🖤]]"
    path: ""
    id: 7M0m93
  - name: TIL
    type: Input
    options: {}
    path: ""
    id: psMHUg
version: "2.12"
limit: 100
mapWithTag: false
tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: []
favoriteView: 
fieldsOrder:
  - eX1NqT
  - YBfdUE
  - TyPPL8
  - i1pKpT
  - BAva9e
  - dcwip7
  - GkmX5k
  - FglcmF
  - Wi88Zq
  - VTTRS5
  - E3rW1G
  - ydnS0c
  - 195rbG
  - fm4Q94
  - 7iZdDL
---

# 🌄 Mañana

Propósito:: {"type":"Input","options":{"template":"{{Propósito}}"}}


 Ejercicio:: {"type":"Select","options":{"valuesList":{"1":"[[#💪 Ejercicio|💚]]","2":"[[#💪 Ejercicio|💛]] ","3":"[[#💪 Ejercicio|🧡]]","4":"[[#💪 Ejercicio|🖤]]"},"sourceType":"ValuesList","valuesListNotePath":"","valuesFromDVQuery":"","allowNull":false}}

Rutina:: {"type":"Number","options":{"step":"1","min":"1","max":"60"}}

Duolingo:: {"type":"Multi","options":{"valuesList":{"1":"[[<% tp.file.title %>#^English|🇬🇧]]","2":"[[<% tp.file.title %>#^Pronunciation|🗣️]]","3":"[[<% tp.file.title %>#^German|🇩🇪]]","4":"[[<% tp.file.title %>#^Japanese|🇯🇵]]","5":"[[<% tp.file.title %>#^Kanji|仮名]]","6":"[[<% tp.file.title %>#^Catalan|🇪🇸🇨🇹]]"},"sourceType":"ValuesList","valuesListNotePath":"","valuesFromDVQuery":""}}

# 🧼 Higiene

Ducharse:: {"type":"Select","options":{"valuesList":{"0":"[[<% tp.file.title %>#^Ducharse|💚]]","1":"[[<% tp.file.title %>#^Ducharse|💛]]","2":"[[<% tp.file.title %>#^Ducharse|🖤]]"},"sourceType":"ValuesList","valuesListNotePath":"","valuesFromDVQuery":""}}

Cara:: {"type":"Select","options":{"valuesList":{"0":"[[<% tp.file.title %>#^Cara|💚]]","1":"[[<% tp.file.title %>#^Cara|💛]]","2":"[[<% tp.file.title %>#^Cara|🧡]]","3":"[[<% tp.file.title %>#^Cara|🖤]]","4":"🤍"},"sourceType":"ValuesList","valuesListNotePath":"","valuesFromDVQuery":""}}


# 🏙️ Tarde

Música:: {"type":"Select","options":{"valuesList":{"1":"[[<% tp.file.title %>#^music|💚]]","2":"[[<% tp.file.title %>#^music|💛]]","3":"[[<% tp.file.title %>#^music|🧡]]","4":"[[<% tp.file.title %>#^music|🖤]]"},"sourceType":"ValuesList","valuesListNotePath":"","valuesFromDVQuery":"","allowNull":false}}



# 🍽️ Alimentación

Desayuno:: {"type":"Input","options":{}}

Almuerzo:: {"type":"Input","options":{}}

Cena:: {"type":"Input","options":{}}

# 🌃 Noche

Canción:: {"type":"Input","options":{"template":"\"[{{Artista}} - <cite>{{Canción}}</cite>]({{url}})\""},"style":{"code":false}}

Dientes:: {"type":"Select","options":{"valuesList":{"1":"[[<% tp.file.title %>#^Dientes|💚]]","2":"[[<% tp.file.title %>#^Dientes|💛]]","3":"[[<% tp.file.title %>#^Dientes|🖤]]"},"sourceType":"ValuesList","valuesListNotePath":"","valuesFromDVQuery":""}}

NoPMO:: {"type":"Select","options":{"valuesList":{"1":"[[<% tp.file.title %>#^NoPMO|💚]]","2":"[[<% tp.file.title %>#^NoPMO|💛]]","3":"[[<% tp.file.title %>#^NoPMO|🖤]]"},"sourceType":"ValuesList","valuesListNotePath":"","valuesFromDVQuery":""}}

Revisión:: {"type":"Select","options":{"valuesList":{"1":"[[<% tp.file.title %>#^Revision|💚]]","2":"[[<% tp.file.title %>#^Revision|💛]]","3":"[[<% tp.file.title %>#^Revision|🧡]]","4":"[[<% tp.file.title %>#^Revision|🖤]]"},"sourceType":"ValuesList","valuesListNotePath":"","valuesFromDVQuery":""}}
Meditar:: {"type":"Select","options":{"valuesList":{"1":"[[<% tp.file.title %>#^Meditar|💚]]","2":"[[<% tp.file.title %>#^Meditar|💛]]","3":"[[<% tp.file.title %>#^Meditar|🧡]]","4":"[[<% tp.file.title %>#^Meditar|🖤]]"},"sourceType":"ValuesList","valuesListNotePath":"","valuesFromDVQuery":""}}



