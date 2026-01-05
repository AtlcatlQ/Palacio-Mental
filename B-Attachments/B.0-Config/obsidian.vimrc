" -------------------------------------------------------------
" Remapeo de Teclas adaptado para Layouts en Español Latino (Ñ)
" -------------------------------------------------------------

" WARNING: el plugin vimrc-support de obsidian, actualmente no recibe
" mantenimiento. El plugin no funciona desde la migración de obsidian a
" CodeMirror 6.

" LEADER
" Se ha optado por establecer 'ñ' como <leader> de forma manual (pseudo leader)
" Debido a que no existe forma de establecer una leader key en el modo Vim de Code Mirror
" Y es lo que utiliza Obsidian para sus Vim Keybindings" LEADER

nunmap <Space>
vunmap <Space>


" MOVEMENTS

nnoremap gh ^

" Visual Lines

nnoremap k gk
nnoremap gk k
vnoremap k gk
vnoremap gk k
nnoremap j gj
nnoremap gj j
vnoremap j gj
vnoremap gj j

" MACROS

nnoremap Q @
vnoremap Q @
nnoremap QQ @@
nnoremap ñQ @@

" MARKS

nnoremap ' `
nnoremap ñ' '

" INDENTATION

nnoremap ñL >>
vnoremap ñL >gv
nnoremap ñH <<
vnoremap ñH <gv
nnoremap ñl >
nnoremap ñh <

" CLIPBOARD

nnoremap ñy "+y
vnoremap ñy "+y
nnoremap ñY "+Y
vnoremap ñY "+Y

nnoremap ñd "+d
vnoremap ñd "+d
nnoremap ñD "+D
vnoremap ñD "+D

nnoremap ñc "+c
vnoremap ñc "+c
nnoremap ñC "+C
vnoremap ñC "+C

nnoremap ñp "+p
vnoremap ñp "+p
nnoremap ñP "+P
vnoremap ñP "+P

" MISC UTILITY

nnoremap ño o<Esc>k
nnoremap ñO O<Esc>j
