<%*

/* ***VARIABLES*** */

/* **Utilidades** */  
const languages = ["English", "Pronunciation", "German", "Japanese", "Kanji", "Catalan", "Latin"];  
const languagesText = ["🇬🇧 Inglés", "🗣️ Inglés (Pronunciación)", "🇩🇪 Alemán", "🇯🇵 Japonés", "仮名 Japónés (Escritura)", "🇪🇸🇨🇹 Catalán", "🏟️ Latín"];  
const icons = ["🇬🇧", "🗣️", "🇩🇪", "🇯🇵", "仮名", "🇪🇸🇨🇹", "🏟️"];

/* **Variables de Entrada** */  
let language, entry, icon;

/* ***ACTUALIZACIÓN*** */

/* **Entrada** */  
language = await tp.system.suggester(languagesText, languages, true, "🦉 Idiomas");  
entry = await tp.system.prompt("📒 Entrada", "", true);

/* **Formato** */  
icon = icons[languages.indexOf(language)];  

/* **Salida** */  
tR += `\n- ${icon} (${language}:: ${entry}) ^${language}\n`;

_%>
