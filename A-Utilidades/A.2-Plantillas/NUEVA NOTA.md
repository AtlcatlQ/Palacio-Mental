<%* if (tp.file.folder() == "0-ENTRADA") { _%><% tp.file.include("[[0-NOTA]]") %>

<%* } else if (tp.file.folder().includes("0.1-CAPTURA")) { %><% tp.file.include("[[0.1-Captura]]") %>

<%* } else if (tp.file.folder(true).includes("1-PROYECTOS")) { %><% tp.file.include("[[1-Proyecto]]") %>

<%* } else if (tp.file.folder(true).includes("1-Proyectos-de-Escritura")) { %><% tp.file.include("[[1.C-Proyecto de Escritura]]") %>

<%* } else if (tp.file.folder() == "2-AREAS" || tp.file.folder() == "2.0-Valores") { %><% tp.file.include("[[2-Área]]") %>

<%* } else if (tp.file.folder(true).includes("2.1-Hábitos")) { %><% tp.file.include("[[2.1-Hábito]]") %>

<%* } else if (tp.file.folder(true).includes("3-RECURSOS")) { %>  
<% tp.file.include("[[3-Recurso]]") %>

<%* } else if (tp.file.folder(true).includes("5-REGISTRO")) { %><% tp.file.include("[[5.0-Nota Temporal]]") %>

<%* } else if (tp.file.folder().includes("6-Flujo")) { %><% tp.file.include("[[6-Flujo]]") %>

<%* } else if (tp.file.folder() == "A.1-Clases") { _%><% tp.file.include("[[A.1-Clase]]") %>

<%* } else if (tp.file.folder(true).includes("A.3-Plugins")) { %><% tp.file.include("[[A.3-Plugin]]") %>

<%* } else { %><% tp.file.include("[[0-NOTA]]") %><%* } _%>
