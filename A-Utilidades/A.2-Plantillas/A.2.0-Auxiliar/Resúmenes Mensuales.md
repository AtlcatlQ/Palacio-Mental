###  🛟 Resaltado

```dataview
LIST resaltado
FROM [[]]
WHERE type = "Mensual" AND resaltado
SORT file.name
```

### 📒 Recuerdos

```dataview
TABLE Mejor AS "😇", Peor AS "👿"
FROM [[]]
WHERE type = "Mensual" AND (Mejor OR Peor)
SORT file.name
```

### 🚏 Cambios

```dataview
LIST cambio
FROM [[]]
WHERE type = "Mensual" AND cambio
SORT file.name
```
