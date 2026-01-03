" Remapeo de Teclas adaptado para Layouts en Español Latino (Ñ)

" LEADER

let mapleader = "ñ"

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

" MOVEMENTS

nnoremap gh ^
