---
tags: [📓]
status: '🌲'
aliases:
  - Tabla de Verdad
  - Tautología
  - Contradicción
  - Contingencia
  - Tablas de Verdad
publish: true
created: 2023-06-08T17:26:27
modified: 2023-12-17T14:37:52
---

[fuente:: [[§ 2023-06-07 Especialización Docente - Matemática - Módulo VII - U4. Cálculo Proposicional|Especialización Docente - Matemática - Módulo VII - U4. Cálculo Proposicional]]]

[categorías:: [[Lógica y Algoritmos|LYA115]], [[Lógica Proposicional]]]

< (previas:: [[Lógica - Operadores]]) | (siguientes::) >

---

> [!Def]+ Tabla de Verdad
>
> > Representación esquemática de las relaciones entre proposiciones que permite determinar los valores de verdad de las proposiciones compuestas a partir de los valores de verdad de sus proposiciones simples y de sus [[Lógica - Operadores]]

^Def

- Son atribuidas a George Bool
- La cantidad de filas de las tablas de verdad dependen de la cantidad de proposiciones simples
    - Para $n$ proposiciones simples se requieren $2^{n}$ filas, es decir, existen $2^{n}$ combinaciones de los valores formales
- Para evitar repetir casos, es recomendable empezar en el caso en que todas las proposiciones simples son `verdaderas` y terminar en el caso en que todas son `falsas`.

# Tabla De Verdad Para Los Operadores Lógicos

| $p$ | $q$ | $\lnot p$ | $p \lor q$ | $p \veebar q$ | $p \land q$ | $p \implies q$ | $p \iff q$ |
|:---:|:---:|:---------:|:----------:|:-------------:|:-----------:|:--------------:|:----------:|
| `1` | `1` |    `0`    |    `1`     |      `0`      |     `1`     |      `1`       |    `1`     |
| `1` | `0` |    `0`    |    `1`     |      `1`      |     `0`     |      `0`       |    `0`     |
| `0` | `1` |    `1`    |    `1`     |      `1`      |     `0`     |      `1`       |    `0`     |
| `0` | `0` |    `1`    |    `0`     |      `0`      |     `0`     |      `1`       |    `1`     |

^Tabla-Operadores

# Casos De Los Valores Lógicos

## Tautología

> [!Def]+ Tautología
>
> > (Tautología:: Proposición compuesta que es `verdadera` para todas las combinaciones posibles de los valores de verdad de las proposiciones simples.)

^Tautologia

## Contradicción

> [!Def]+ Contradicción
>
> > (Contradicción:: Proposición compuesta que es `falsa` para todas las combinaciones posibles de valores de verdad de las proposiciones simples que las conforman.)

^Contradiccion

## Contingencia

> [!Def]+ Contingencia
>
> > (Contingencia:: Proposición compuesta cuyo valor de verdad no puede ser deducido por medio lógicos.)

^contingencia

- Se les llama **Contingencias** porque no son *necesariamente* verdaderas ni *necesariamente* falsas.
    - "Su valor es contingente"
- Toda proposición que no es ni [[#Tautología]], ni [[#Contradicción]] es una contingencia.
