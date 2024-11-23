<%* 

let date = await tp.date.now("YYYY-MM-DDTHH:mm:ss");

let comment = await tp.system.prompt("💬 Comentario", "", true);

tR += `\n- 💬 **(${date})** ${comment} \n`;_%>
