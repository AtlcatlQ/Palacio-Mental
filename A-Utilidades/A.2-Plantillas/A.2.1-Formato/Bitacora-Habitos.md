<%*

/* ***VARIABLES*** */

/* **Utilidades** */

const habits = ["Ejercicio", "Meditar", "Ducharse", "Music", "Cara", "NoPMO", "Revision", "Dientes"];  
const habitsText = ["💪 Ejercicio", "🧘‍♂️ Meditación", "🚿 Ducharse", "🎼 Música", "🩹 Cara", "🛡️ NoPMO", "📆 Revisión Periódica", "🦷 Dientes"];  
const icons = ["💪", "🧘‍♂️", "🚿", "👂", "🩹", "🛡️", "📆", "🦷"];  

/* **Variables de Entrada** */

let habit, entry, condition, icon;

/* **Funciones** */

/* ***ACTUALIZACIÓN*** */

/* **Entrada** */

habit = await tp.system.suggester(habitsText, habits, true, " 🔂 Hábito");


if (habit == "Ejercicio"){
    entry = await tp.system.suggester(["🚴‍♂️ Bicicleta" , "🏃‍♂️ Correr", "🚶‍♂️ Caminar", "Otro..."], ["🚴‍♂️ Salí con la Bicicleta" , "🏃‍♂️ Salí a Correr a la Cancha", "🚶‍♂️ Caminar a la Universidad", "Otro"], true, "💪 Ejercicio");
    if (entry == "Otro"){entry = await tp.system.prompt("💪 Ejercicio", "", true);}
}

else {
    icon = icons[habits.indexOf(habit)];
    entry = icon + " " + await tp.system.prompt("📒 Entrada", "", true);
}

/* **Formato** */

condition = await tp.system.suggester(["📒 Entrada Regular", "🛟 Resaltado"], [0, 1], false, "Tipo de Entrada");

if (condition){entry = `(Resaltado:: ${entry})`;}  

/* **Salida** */

tR += `\n- ${entry} ^${habit}\n`;

_%>
