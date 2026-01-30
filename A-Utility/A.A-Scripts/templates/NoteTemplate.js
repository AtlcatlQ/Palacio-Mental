/**
 * @description Clase base para archivos de plantillas
 * @param {Object} tp - Requiere importar el Objeto de Templater
 * @returns {Class} La clase que define la estructura de una plantilla
 */

module.exports = (tp) => {
    const TYPES = tp.user.noteTypes();
	const SECTIONS = tp.user.noteSections();

	let NoteTemplate = class {
        constructor () {
            this.meta = {
                "folder": tp.file.folder(true),
                "title": tp.file.title,
                "type": "",
            };
            this.frontmatter = {
                "tags": "",
                "publish": false
            }; 
            this.sections = ["frontmatter", "hierarchy"];
	    }

	    async build() {
			const typeMatch = (folder) => {
				const matches = Object.entries(TYPES)
					.filter(([_, t]) => 
					t.folder && folder.startsWith(t.folder));
					
					if (matches.length === 0) return null;
		
					matches.sort((a, b) => 
						b[1].folder.length - a[1].folder.length);
				return matches[0][0];
			};
	
			const typeSelector = async () => {
				const keys = Object.keys(TYPES);
				const labels = keys.map(k => TYPES[k].label || k);
				return await tp.system.suggester(
					labels, keys, false, "Selecciona un tipo");
			};
	
			this.meta.type = typeMatch(this.meta.folder) || await typeSelector()  || "default";
			
			await TYPES[this.meta.type]?.handler(tp, this);
		}
	
	    async render() {
            // Es async porque es posible que hayan secciones que le pidan al usuario input.
            var content = [];
            for (const s of this.sections){
                if (!SECTIONS[s]) continue;
                content.push(await SECTIONS[s]?.content(tp, this));
            }
            return content.join("\n\n");
        }

        /**************************/
        /***** HELPER METHODS *****/
        /**************************/

        setFrontmatter(frontmatter) { this.frontmatter = { ...this.frontmatter, ...frontmatter };} 

        addSection(sectionKeys = []) {
            for (const s of sectionKeys) {
                if (this.sections.includes(s)) {continue;}
                this.sections.push(s);
            }
        }
        setType(type){
            this.meta.type = type;
            return type;
        }

        getType(){
            return this.meta.type;
        }
        async setFolder(folder){
            this.meta.folder = folder;
            await this.syncFolder();
            return folder;
        }
        
        getFolder() {
            return this.meta.folder;
        }

        async syncFolder(){
            var path = tp.file.path(true);
            var move = async (newFolder) => {
                if (!newFolder.endsWith("/")) {newFolder += "/";}
                await tp.app.fileManager.renameFile(
                    tp.app.vault.getFileByPath(path),
                    newFolder+this.getTitle());
                var newPath = tp.file.path(true);
                return newPath;
            };
            if (this.getFolder() !== tp.file.folder(true)) {
                await move(this.getFolder());
            }
        }

        async setTitle(title) {
            this.meta.title = title;
            await tp.app.fileManager.renameFile(
                tp.app.vault.getFileByPath(tp.file.path(true)),
                title+".md");
            return this.meta.title;
        }

        getTitle(){ return this.meta.title; }
	}
    return NoteTemplate;
};