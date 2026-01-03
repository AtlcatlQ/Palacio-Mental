" Remapeo de Teclas adaptado para Layouts en Español Latino (Ñ)

" LEADER

let mapleader = " "

nnoremap <leader><leader> \

" MACROS

nnoremap Q @
vnoremap Q @
nnoremap QQ @@
nnoremap <leader>Q @@

" MARKS

nnoremap ' `
nnoremap <leader>' '

" INDENTATION

nnoremap <leader>L >>
vnoremap <leader>L >gv
nnoremap <leader>H <<
vnoremap <leader>H <gv
nnoremap <leader>l >
nnoremap <leader>h <

" CLIPBOARD

nnoremap <leader>y "+y
vnoremap <leader>y "+y
nnoremap <leader>Y "+Y
vnoremap <leader>Y "+Y

nnoremap <leader>d "+d
vnoremap <leader>d "+d
nnoremap <leader>D "+D
vnoremap <leader>D "+D

nnoremap <leader>c "+c
vnoremap <leader>c "+c
nnoremap <leader>C "+C
vnoremap <leader>C "+C

nnoremap <leader>p "+p
vnoremap <leader>p "+p
nnoremap <leader>P "+P
vnoremap <leader>P "+P

" MOVEMENTS

nnoremap gh ^
