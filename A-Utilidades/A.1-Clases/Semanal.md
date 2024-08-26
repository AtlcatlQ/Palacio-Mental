---
tags: 🗂️
aliases: []
publish: false
mapWithTag: true
extends: Generic
fields:
  - id: NuP9vg
    name: Cama
    options:
      valuesList:
        "1": 🤍
        "2": "[[|💚]]"
        "3": "[[|💙]]"
        "4": "[[|🖤]]"
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
      allowNull: false
    type: Select
    path: ""
  - id: KFPNRv
    name: Refrigeradora
    options:
      valuesList:
        "1": 🤍
        "4": "[[|💚]]"
        "5": "[[|💙]]"
        "6": "[[|🖤]]"
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
      allowNull: false
    type: Select
    path: ""
  - id: "0xc82A"
    name: Afeitarse
    options:
      valuesList:
        "1": 🤍
        "4": "[[|💚]]"
        "5": "[[|🖤]]"
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
      allowNull: false
    type: Select
    path: ""
  - id: YS8iIg
    name: Revisión
    options:
      valuesList:
        "1": "[[|💚]]"
        "2": "[[|🖤]]"
        "3": 🤍
      sourceType: ValuesList
      valuesListNotePath: ""
      valuesFromDVQuery: ""
      allowNull: false
    type: Select
    path: ""
  - id: 3Bg0aD
    name: Película
    options:
      template: "[<cite>{{title}}</cite>]({{Ficha IMBd}})"
    type: Input
    path: ""
  - id: wR1Jo9
    name: resaltado
    options: {}
    type: Input
    path: ""
version: "2.0"
---

# Semanal

Cama:: {"type":"Select","options":{"valuesList":{"1":"🤍","2":"[[|💚]]","3":"[[|💙]]","4":"[[|🖤]]"},"sourceType":"ValuesList","valuesListNotePath":"","valuesFromDVQuery":"","allowNull":false}}

Refrigeradora:: {"type":"Select","options":{"valuesList":{"1":"🤍","4":"[[|💚]]","5":"[[|💙]]","6":"[[|🖤]]"},"sourceType":"ValuesList","valuesListNotePath":"","valuesFromDVQuery":"","allowNull":false}}

Afeitarse:: {"type":"Select","options":{"valuesList":{"1":"🤍","4":"[[|💚]]","5":"[[|🖤]]"},"sourceType":"ValuesList","valuesListNotePath":"","valuesFromDVQuery":"","allowNull":false}}

Revisión:: {"type":"Select","options":{"valuesList":{"1":"[[|💚]]","2":"[[|🖤]]","3":"🤍"},"sourceType":"ValuesList","valuesListNotePath":"","valuesFromDVQuery":"","allowNull":false}}

Película:: {"type":"Input","options":{"template":"[<cite>{{title}}</cite>]({{Ficha IMBd}})"}}

resaltado:: {"type":"Input","options":{}}