" -------------------------------------------------------------
" Remapeo de Teclas adaptado para Layouts en Español Latino (Ñ)
" -------------------------------------------------------------

" WARNING: el plugin vimrc-support de obsidian, actualmente no recibe
" mantenimiento. El plugin no funciona desde la migración de obsidian a
" CodeMirror 6.
"

" LEADER
" Se ha optado por establecer '<space>' como <leader> de forma manual (pseudo leader)
" Debido a que no existe forma de establecer una leader key en el modo Vim de Code Mirror
" Y es lo que utiliza Obsidian para sus Vim Keybindings" LEADER

nunmap <Space>
vunmap <Space>

" MACROS

nnoremap Q @
vnoremap Q @
nnoremap QQ @@
nnoremap <space>Q @@

" MARKS

nnoremap ' `
nnoremap <space>' '

" INDENTATION

nnoremap <space>L >>
vnoremap <space>L >gv
nnoremap <space>H <<
vnoremap <space>H <gv
nnoremap <space>l >
nnoremap <space>h <

" CLIPBOARD

nnoremap <space>y "+y
vnoremap <space>y "+y
nnoremap <space>Y "+Y
vnoremap <space>Y "+Y

nnoremap <space>d "+d
vnoremap <space>d "+d
nnoremap <space>D "+D
vnoremap <space>D "+D

nnoremap <space>c "+c
vnoremap <space>c "+c
nnoremap <space>C "+C
vnoremap <space>C "+C

nnoremap <space>p "+p
vnoremap <space>p "+p
nnoremap <space>P "+P
vnoremap <space>P "+P

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
