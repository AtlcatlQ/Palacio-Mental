---
tags: [📓, 🗺️]
status: '🪴'
aliases: [Lógica, Lógica de Orden Superior, Lógica de Segundo Orden, Lógica Predicativa, Orden de Lógica]
publish: true
created: 2023-12-08T15:03:00
modified: 2025-02-17T15:59:45
---

↖️ (fuente:: [[Lógica y Algoritmos|LYA115]], [[— 2023-12-03 Lógica de primer orden (1)|— Lógica de primer orden (1)]])

⬆️ (categorías:: [[Lógica y Algoritmos|LYA115]])

---

< (previas::) | (siguientes::) >

# 🗺️ Mapa De Contenidos

- [[#Conceptos Básicos]]
    - [[#^Def|Definición de Lógica]]
    - [[#Inferencia]]
    - [[#Validez]]
- [[Lógica - Operadores|Operadores Lógicos]]
- [[Lógica Proposicional|Lógica Proposicional]]
    - [[Lógica Proposicional - Tablas de Verdad|Tablas de Verdad]]
    - [[Lógica Proposicional - Leyes de Implicación|Leyes de Implicación]]
        - [[Lógica Proposicional - Leyes de Implicación - Demostraciones|Demostraciones de las leyes de Implicación]]
    - [[Lógica Proposicional - Leyes de Equivalencia|Leyes de Leyes de Equivalencia]]
        - [[Lógica Proposicional - Leyes de Equivalencia - Demostraciones|Demostración de las Leyes de Equivalencia]]
- [[Lógica#Órdenes De Lógica|Orden de Lógica]]
    - [[Lógica Proposicional]] (Lógica de Orden Cero)
    - [[Lógica de Predicados]] (Lógica de Primer Orden)

# Conceptos Básicos

> La lógica no se ocupa del contenido de los pensamientos sino de la **estructura** o forma de los pensamientos

> [!Def]- Lógica
>
> > (Definición:: Ciencia formal que estudia la [[#^Validez|validez]] de las [[#^Inferencia|inferencias]].)

^Def

## Inferencia

> [!Def]- Inferencia
>
> > (Inferencia:: Forma de razonamiento en la que se obtiene una conclusión a partir de unas premisas.)

^Inferencia

## Validez

> [!Def]- Validez
>
> > (Validez:: Propiedad que tiene una inferencia cuando las premisas implican directamente la conclusión)

^Validez

### Diferencia Entre Validez Y Verdad Empírica

> Sean:
> - $p = \text{llueve}$
> - $q = \text{La ropa se seca}$  
>
> > Luego: ^[Se lee como $(1)$ Sí llueve, entonces la ropa se seca. $(2)$ Llueve. $(C)$ Por tanto, la ropa se seca.]
> >
> > $$
> > \begin{align*} \tag{1} p &\implies q \\ \tag{2} p \\ \tag{C} & \therefore q \end{align*}
> > $$

El silogismo anterior es valido porque existe una diferencia entre *Validez* (Verdad formal), que es lo que se puede concluir teniendo únicamente las premisas y la *Verdad Empírica,* que se toma de la experiencia, lo que se observa que pasa.  

# Lenguaje De la Lógica

#🔔 En lógica debido a que lo importante es la estructura y las conexiones lógicas, se suele simplificar la cantidad de símbolos de los enunciados a un mínimo esencial. El lenguaje de la lógica suele utilizar el mínimo de símbolos posible, a diferencia del lenguaje natural, ya que el lenguaje lógico no requiere expresar sentimientos o usarse en contextos sociales.

# Órdenes De Lógica

> [!Def]+ Orden de Lógica
>
> > (Orden-logica:: El alcance de lo que es capaz de expresar un lenguaje formal y los Tipos de Entidades que Considera.)
>
> - Cada lógica estudia las inferencias construidas con un lenguaje de su mismo Orden.

^Orden-logica

## Orden Cero

![[Lógica Proposicional#^Orden-Cero|clean seamless]]

## Primer Orden

![[Lógica de Predicados#^Def|seamless clean]]

## Segundo Orden

## Orden Superior
