---
tags: [📓]
status: 🌲
aliases: ["Demostraciones", "Demostraciones de las leyes de Implicación (Lógica proposicional)"]
publish: true
modified: 2023-06-17T11:15:58
created: 2023-06-15T21:07:37
sr-due: 2023-07-01
sr-interval: 15
sr-ease: 290
---

[categorías:: [[Lógica Proposicional]]]

< (previas::) | (siguientes:: [[Lógica Proposicional - Leyes de Implicación|Leyes de Implicación]]) >

---

# 1. Modus Ponendo Ponens

$$t = \boxed{\underbrace{(p \implies q) \land p}_{s} \implies q}$$

| $p$ | $q$ | $p \implies q$ | $s$ |   $t$   |
|:---:|:---:|:--------------:|:---:|:-------:|
| `v` | `V` |      `V`       | `V` | ==`V`== |
| `V` | `F` |      `F`       | `F` | ==`V`== |
| `F` | `V` |      `V`       | `F` | ==`V`== |
| `F` | `F` |      `V`       | `F` | ==`V`== |

# 2. Modus Tollendo Tollens

$$t = \boxed{\underbrace{(p \implies q) \land \lnot q}_{s} \implies \lnot p}$$

| $p$ | $q$ | $\lnot p$ | $\lnot  q$ | $p \implies q$ | $s$ |   $t$   |
|:---:|:---:|:---------:|:----------:|:--------------:|:---:|:-------:|
| `V` | `V` |    `F`    |    `F`     |      `V`       | `F` | ==`V`== |
| `V` | `F` |    `F`    |    `V`     |      `F`       | `F` | ==`V`== |
| `F` | `V` |    `V`    |    `F`     |      `V`       | `F` | ==`V`== |
| `F` | `F` |    `V`    |    `V`     |      `V`       | `V` | ==`V`== |

# 3. Modus Tollendo Ponens

$$t = \boxed{\underbrace{(p \lor q) \land \lnot p}_{s} \implies q}$$

| $p$ | $q$ | $\lnot p$ | $p \lor q$ | $s$ |   $t$   |
|:---:|:---:|:---------:|:----------:|:---:|:-------:|
| `V` | `V` |    `F`    |    `V`     | `F` | ==`V`== |
| `V` | `F` |    `F`    |    `V`     | `F` | ==`V`== |
| `F` | `V` |    `V`    |    `V`     | `V` | ==`V`== |
| `F` | `F` |    `V`    |    `F`     | `F` | ==`V`== |

# 4. Silogismo Hipotético

$$t = \boxed{\underbrace{(p \implies q) \land (q \implies r)}_{s} \implies (p \implies r)}$$

| $p$ | $q$ | $r$ | $p \implies q$ | $q \implies r$ | $p \implies r$ | $s$ |   $t$   |
|:---:|:---:|:---:|:--------------:|:--------------:|:--------------:|:---:|:-------:|
| `V` | `V` | `V` |      `V`       |      `V`       |      `V`       | `V` | ==`V`== |
| `V` | `V` | `F` |      `V`       |      `F`       |      `F`       | `F` | ==`V`== |
| `V` | `F` | `V` |      `F`       |      `V`       |      `V`       | `F` | ==`V`== |
| `V` | `F` | `F` |      `F`       |      `V`       |      `F`       | `F` | ==`V`== |
| `F` | `V` | `V` |      `V`       |      `V`       |      `V`       | `V` | ==`V`== |
| `F` | `V` | `F` |      `V`       |      `F`       |      `V`       | `F` | ==`V`== |
| `F` | `F` | `V` |      `V`       |      `V`       |      `V`       | `V` | ==`V`== |
| `F` | `F` | `F` |      `V`       |      `V`       |      `V`       | `V` | ==`V`== |

# 5. Conjunción

> $$\boxed{p \land q \implies p \land q}$$

| $p$ | $q$ | $p \land q$ | $q \land p$ | $p \land q \implies p \land q$ |
|:---:|:---:|:-----------:|:-----------:|:------------------------------:|
| `V` | `V` |     `V`     |     `V`     |            ==`V`==             |
| `V` | `F` |     `F`     |     `F`     |            ==`V`==             |
| `F` | `V` |     `F`     |     `F`     |            ==`V`==             |
| `F` | `F` |     `F`     |     `F`     |            ==`V`==             |

# 6. Simplificación

> $$\boxed{p \land q \implies q}$$

| $p$ | $q$ | $p \land q$ | $p \land q \implies q$ |
|:---:|:---:|:-----------:|:----------------------:|
| `V` | `V` |     `V`     |        ==`V`==         |
| `V` | `F` |     `F`     |        ==`V`==         |
| `F` | `V` |     `F`     |        ==`V`==         |
| `F` | `F` |     `F`     |        ==`V`==         |

# 7. Adición

> $$\boxed{p \implies p \lor q}$$

| $p$ | $q$ | $p \lor q$ | $p \implies p \lor q$ |
|:---:|:---:|:----------:|:---------------------:|
| `V` | `V` |    `V`     |        ==`V`==        |
| `V` | `F` |    `V`     |        ==`V`==        |
| `F` | `V` |    `V`     |        ==`V`==        |
| `F` | `F` |    `F`     |        ==`V`==        |
