## 🔂 Hábitos Diarios

```dataview
TABLE
	Ejercicio AS "💪",
	Meditar AS "🧘‍♂️",
	Música AS "🎼",
	Ducharse AS "🚿",
	Dientes AS "🦷",
	Cara AS "🩹",
	NoPMO AS "🛡",
	Revisión AS "📆"
FROM [[]] WHERE type = "Diaria" SORT file.name DESC
```

### 🏁 Propósito VS Resumen

```dataview
TABLE Proposito AS "🏁", Resaltado AS "🛟"
FROM [[]]
WHERE type = "Diaria" AND (Proposito or Resumen)
SORT file.name ASC
```

### 🧠 Aprendizajes

```dataview
LIST TIL FROM [[]] WHERE type = "Diaria" AND TIL SORT file.name DESC
```
