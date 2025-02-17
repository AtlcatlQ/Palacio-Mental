---
tags: [📓]
status: '🌲'
aliases:
  - Diferencia entre Functores y Predicados
publish: true
created: 2023-12-19T15:12:04
modified: 2023-12-19T16:11:52
---

↖ (fuente::)

⬆️ (categorías:: [[Lógica]], [[Relación Matemática|Relación Matemática]], [[Matemáticas - Operación|Operación]])

---

< (previas::) | (siguientes::) >

# Diferencia Entre Functores Y Predicados

La diferencia entre un [[Lógica de Predicados#Functores|Functor]] y un predicado es más que todo semántica. Los functores se usan para indicar [[Matemáticas - Operación|Operaciones]], es decir, Transformaciones de una [[Lógica de Predicados#^Constante-Individual|constante]] en otra, o de una [[Lógica de Predicados#^Variable-Individual|Variable]] en otra. Mientras que los predicados se utilizan para [[Lógica de Predicados#^gist-predicado|describir]] [[Lógica de Predicados#^gist-Propiedades|propiedades]] o [[Lógica de Predicados#^gist-Relaciones|Relaciones]].

## Ejemplos

> [!example]+ Relación de Orden
>
> > $$<(x,y)$$
>
> - No indica ninguna **Transformación** o Composición de valores, sólo establece que $x$ *precede a* $y$, de alguna manera
>     - [[Lógica de Predicados#Relaciones|Indica cómo es una variable respecto a la otra]]
> - A menos que se especifique el [[Lógica - Operadores#^Dominio|Dominio del Discurso]] y se aplique un [[Lógica - Operadores|Cuantificador]], no tiene un valor de verdad definido ([[Lógica de Predicados#^Proposicion-abierta|es una proposición abierta]]).

> [!example]+ Operación suma
>
> > $$+(x,y)$$
>
> - Para el conjunto en que se especifica dicha operación, sin importar cuales $x$ o $y$ escojamos, [[Matemáticas - Operación#^Def|Siempre obtendremos un resultado y sólo un resultado]].
>     - Aunque sea posible obtener ese resultado utilizando otras tuplas.
> - Si $+(x,y) \mapsto z = x + y$, entonces, podemos sustituir la operación con $z$ (Su respectivo resultado).

# Equivalencia Entre Relaciones Y Operaciones

> $$P(x,y) \iff  x= f(y)$$
>
> $$f(x) = y \iff \forall x \in X, \exists y \in Y: P(x,y)$$

Para toda [[Matemáticas - Operación|Operación]] (o [[Lógica de Predicados#Functores|Lógica Predicativa]]), existe una [[Relación Matemática#Relaciones Binarias|Relación Binaria]] ([[Lógica de Predicados#^gist-predicado|Predicado]]) equivalente, entre la [[tupla]] que la Operación toma como argumento y su Resultado.
