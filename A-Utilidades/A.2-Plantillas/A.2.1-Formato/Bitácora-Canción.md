<%*
let song = await tp.system.prompt("🎵 Canción", "", true);
let artist = await tp.system.prompt("👤 Artista", "", true);
let link = await tp.system.prompt("🔗 Enlace", "", false);

tR += `\n- 🎵 (Canción:: [${artist} - <cite>${song}</cite>](${link})) ^Cancion\n`;

_%>
