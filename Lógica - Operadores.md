---
tags: [📓]
status: '🪴'
aliases: [Bicondicional, Condicional, Conectivos Lógicos, Conjunción, Cuantificador, Cuantificador Existencial, Cuantificador Existencial Único, Cuantificador Universal, Cuantificadores, Disyunción, Disyunción Exclusiva, Negación, Operador Lógico, Operadores Lógicos]
publish: true
cssclasses: []
created: 2023-06-07T18:26:59
modified: 2025-02-17T15:55:09
---

↖️ (fuente:: [[§ 2023-06-07 Especialización Docente - Matemática - Módulo VII - U4. Cálculo Proposicional|Especialización Docente - Matemática - Módulo VII - U4. Cálculo Proposicional]])

⬆️ (categorías:: [[Lógica]], [[Lógica y Algoritmos|LYA115]])

---

< (previas:: [[Lógica Proposicional]]) | (siguientes:: [[Lógica Proposicional - Tablas de Verdad|Tabla de Verdad]]) >

- Los operadores lógicos surgieron a partir de los operadores aritméticos

> [!Def]- Proposición Compuesta
>
> > Aquella que está formada por dos o más proposiciones simples y por uno o más operadores lógicos.

^compuesta

> [!fail]- Las proposiciones simples **no** poseen operadores lógicos

![[Atajos de KaTeX#^Logica-Operadores|clean seamless]]

# Operadores Lógicos

![[Lógica Proposicional - Tablas de Verdad#^Tabla-Operadores|clean seamless]]

## Negación

$$
\LARGE  \boxed{\lnot p}
$$

> ==No== $p$

- Si $p$ es `verdadera` $\lnot p$ es `falsa`.

> [!info] $p \equiv \lnot (\lnot p)$

## Conectivos Lógicos

### Conjunción

$$
\LARGE  \boxed{p \land q}
$$

> $p$ ==y== $q$

- Es verdadera solamente si **ambas** son `verdaderas`.
- Las proposiciones pueden no estar relacionadas
    - Ejemplo: "Está lloviendo **y** tengo un dólar en mi bolsillo"
- Posee la propiedad conmutativa

### Disyunción

$$
\LARGE  \boxed{p \lor q}
$$

> $p$ ==o== $q$

- Es verdadera si **al menos** una de las proposiciones es `verdadera`.

#### Disyunción Exclusiva

$$
\LARGE  \boxed{p \veebar q}
$$

> ==O== **sólo** $p$ ==o== **sólo** $q$

> [!info]- Notación Alternativa
>
> - $p \nleftrightarrow q$
> - $p \oplus q$
> - $p \not \equiv q$

> $$
> \veebar (p,q) \coloneqq (p \land \lnot q) \land (\lnot p \land q)
> $$

### Condicional

$$
\LARGE  \boxed{p \implies q}
$$

> $p$ ==implica== $q$

- Es falsa solamente cuando el *antecedente* ($p$) es `verdadero` y el *consecuente* ($q$) es `falso` ((ver::[[Lógica Proposicional - Tablas de Verdad#Tabla de verdad para los operadores lógicos|ver]]))
- También se le llama implicación

####

1. **Conversa:** $q \implies p$
1. **Inversa:** $\lnot p \implies \lnot q$
1. **Contra Positiva:** $\lnot q \implies \lnot p$

## Bicondicional

> $$
> \LARGE  \boxed{p \iff q}
> $$

- También se le llama **Equivalencia** porque el [[Lógica Proposicional - Tablas de Verdad#Tabla de verdad para los operadores lógicos|valor de verdad]] sólo es `verdadero` *cuando ambas proposiciones poseen el mismo valor de verdad*. ^equivalencia
- Puede ser representado tanto por el símbolo $\iff$ cómo por el símbolo $\equiv$

# Agrupación De Operadores Lógicos

Mediante corchetes, paréntesis y llaves podemos agrupar las distintas proposiciones para hacer que unos operadores tengan prioridad sobre otros

# Cuantificadores

> [!Def]+ Cuantificador
>
> > (Cuantificador:: [[Lógica - Operadores|Operador Lógico]] sobre un [[Teoría de Conjuntos|Conjunto]] de entidades, para las cuales un [[Lógica#^Predicado|Predicado]] se convierte en una [[Lógica Proposicional#^Proposicion|Proposición]].)

^Cuantificador

> [!Def]+ Dominio del Discurso
>
> > (Dominio:: [[Teoría de Conjuntos|Conjunto]] de entidades de las cuales se habla al aplicar un [[Lógica - Operadores#^Cuantificador|Cuantificador]] sobre un [[Lógica#^Predicado|Predicado]] con variable.)

^Dominio

El dominio del discurso *afirma el predicado* ^[Es decir, supone que tiene un [[Lógica Proposicional#^valor-de-verdad|Valor de Verdad]] verdadero] para la ==cantidad== de individuos que indica el cuantificador dentro de ciertos valores^[Es decir, [[Teoría de Conjuntos|un Conjunto]] de entidades]

## Cuantificador Universal

$$
\LARGE  \boxed{\forall x}
$$

> ==Para todo== $x$

## Cuantificador Existencial

$$
\LARGE  \boxed{\exists x}
$$

> ==Existe **por lo menos un**== $x$

### Cuantificador Existencial Único

$$
\LARGE  \boxed{\exists! x }
$$

> ==Existe **un único**== $x$
