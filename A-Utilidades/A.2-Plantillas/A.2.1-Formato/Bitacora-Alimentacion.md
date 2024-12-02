<%* 

let tiempo = await tp.system.suggester(["🌄 Desayuno", "🏙️ Almuerzo", "🌃 Cena"], ["Desayuno", "Almuerzo", "Cena"], true, "Sugerencias");

let comida = await tp.system.prompt("🍽️ Comida", "", true);

tR += `\n- 🍽️ [${tiempo}:: ${comida}] \n`;_%>
