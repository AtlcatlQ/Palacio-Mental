/**
 * @description Asistente de creación de mensajes de commits
 * @param {Object} tp - Requiere importar el Objeto de Templater
 * @returns {string} Mensaje de commit según convención interna
 */  

module.exports = async function(tp) {
	const TYPES = tp.user.commitTypes();
	const VERBS = tp.user.commitVerbs();
	const verbList = (vDict, reachTag) => Object.fromEntries(
		Object.keys(vDict).map(v => [v, `${v} (${reachTag}): ${vDict[v]}`]));
	const selector = tp.system.suggester;
	const prompt = tp.system.prompt;
	
	class Commit {
		constructor() {
			this.head = { "type": "", "scope": "", "verb": "", "desc": ""};
			this.body = "";
			this.foot = {
				// No los quiero implementar todavía, 
				// sólo los quiero tener aquí en caso de que a futuro los necesite.
				"breaking": {
					"isBreaking": false,
				},
				"footer": {},
				"trailer": {}
			}
		}
	
		async create() {
			this.head.type = await selector(
				Object.values(TYPES).map(k => k.label), 
				Object.keys(TYPES), 
				false, "Select Type:") || "zettelkasten";
			
			const type = TYPES[this.head.type];
			
			this.head.scope = await selector(
				Object.values(type.scopes).map(k => k.label), 
				Object.keys(type.scopes), 
				false, "Select Scope:") || type.defaultScope;
				
			const scope = type.scopes[this.head.scope];
			
			let verbsDict = {
				...verbList(scope.verbs, "S"),
				...verbList(type.verbs, "T"),
				...verbList(VERBS, "G"),
				"MANUAL": "Otro...",
			};
			
			this.head.verb = await selector(
				Object.values(verbsDict),
				Object.keys(verbsDict),
				false, "Select Verb:") || 
				scope.defaultVerb ||
				type.defaultVerb || "MANUAL";
			
			// Las siguientes asignaciones hacen que si el usuario cancela el prompt
			// lance un error y se aborte la plantilla.
			// De momento no tiene mayor validación/robustez justo por eso, luego lo añado
			
			if(this.head.verb === "MANUAL"){
				this.head.verb = await prompt(
					"Ingrese Verbo (¿Qué acción describe mejor este commit?)", "", true);
				this.head.verb = this.head.verb.trim().toUpperCase();
				if(!this.head.verb) {
					throw new Error("No se ingresó ningún verbo");
				}
			}
	
			this.head.desc = await prompt("Descripción del Commit", "", true);
			if(!this.head.desc) {
				throw new Error("No se ingresó descripción");
			}
		
			this.body = await prompt("Más detalles del Commit", "", false);
			if(this.body) {this.body = this.body; }
		}
	
		message() {
			const type = TYPES[this.head.type];
			const scope = type.scopes[this.head.scope];
			
			let m = "";
			m += `${type.label} `;
			m += `(${scope.label}): `;
			m += `${this.head.verb} `;
			m += `${this.head.desc.trim()}`;
			m += this.body ? `\n\n${this.body.trim()}` : "";
			return m.trim();
		}
	}
	
	let c = new Commit();
	await c.create();
	let message = await c.message();
	return message;
}