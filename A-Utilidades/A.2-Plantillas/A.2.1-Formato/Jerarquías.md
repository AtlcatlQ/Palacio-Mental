<%* 
const capturas = [";", "%", "+", ",", "'", "§", "-", "°", "¿", "¡", "!", "&", "¬"];
const notas = ["@", "{", "}"];

let prefix = tp.file.title.charAt(0);
let folder = tp.file.folder();
var type;

if (capturas.includes(prefix)) {
    switch (prefix) { 
        case "'": type = "[[APUNTES DE CLASE]]"; break;
        case ";": type = "[[MATERIAL DE CLASE]]"; break;
        case ",": type = "[[CURSO]]"; break;
        case "¿": type = "[[PREGUNTAS]]"; break;
        case "¡": type = "[[PENSAMIENTOS]]"; break;
        case "!": type = "[[IDEAS]]"; break;
        case "¡": type = "[[PENSAMIENTOS]]"; break;
        case "&": type = "[[ARTE]]"; break;
        case "+": type = "[[LIBRO]]"; break;
        case "¬": type = "[[EXTRACTO]]"; break;
        case "=": type = "[[PAPER]]"; break;
        case "-": type = "[[WIKIPEDIA]]"; break;
        case "_": type = "[[ARTÍCULO]]"; break;
        case "%": type = "[[VÍDEO]]"; break;
        case "°": type = "[[PODCAST]]"; break;
        case "§": type = "[[Extracto]]"; break;
        case "¬": type = "[[Documentación]]"; break;
    }
} else 
if (notas.includes(prefix)) {
    switch (prefix) { 
        case "@": type = "[[PERSONAS]]"; break;
        case "}": type = "[[Apuntes]]"; break;
        case "{": type = "[[Tema de Interés]]"; break;
    }
} else {
    switch (folder) {
        case "0. Documentación Interna": 
            type = "[[0. Acerca de la documentación Interna|Documentación Interna]]"; 
            break;
        case "1. Herramientas": 
            type = "[[Herramientas Utilizadas|Aplicaciones Utilizadas]]"; 
            break;
        case "2. ÁREAS": 
            type = "[[2-AREAS]]"; break;
        case "1. Hábitos": 
            type = "[[Hábitos Activos|Hábito]]"; break;
        case "3. PROYECTOS": 
            type = "[[PROYECTOS|Proyecto]]"; break;
        case "4. Mapas de Contenido": 
            type = "[[0. ÍNDICE|Mapas de Contenido]]"; break;
        case "C. Escritos": 
            type = "[[4.1. Escritura|Escritura]]"; break;
        default: type = "";
    }
}
_%>

⬆️ (categorías:: <%* tR += type; %>)

↔ (relacionado:: )

---

< (previas::) | (siguientes:: ) >
