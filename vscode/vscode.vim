" plugins
call plug#begin('~/.config/nvim/plugged')

Plug 'tpope/vim-commentary' " Adds the operators 'gc' and '[count]gcc' to comment code
Plug 'tpope/vim-unimpaired' " mappings which are simply short normal mode aliases for commonly used ex commands
Plug 'tpope/vim-surround' " mappings to easily delete, change and add such surroundings in pairs, such as quotes, parens, etc.
Plug 'tpope/vim-repeat' " adds support for the '.' command for vim-surround, vim-commentary and vim-unimpaired

Plug 'kana/vim-textobj-user' " Allows custom text objects
Plug 'kana/vim-textobj-entire' " Adds the text objects 'ie' and 'ae'
Plug 'kana/vim-textobj-line' " Adds the text objects 'il' and 'al'

" TODO sneak
Plug 'unblevable/quick-scope' " Improve usability of f,F,t,T
Plug 'machakann/vim-highlightedyank' " Visually shows yank area

call plug#end()

" mapleader
let g:mapleader = "\<Space>"

set clipboard=unnamed " for copy/paste with osx

nnoremap <silent> <leader>e :<C-u>call VSCodeNotify('workbench.action.toggleSidebarVisibility')<CR>
nnoremap <silent> <leader>f :<C-u>call VSCodeNotify('workbench.action.quickOpen')<CR>
nnoremap <silent> <leader>a :<C-u>call VSCodeNotify('workbench.view.search')<CR>
nnoremap <silent> <leader>d :<C-u>call VSCodeNotify('workbench.actions.view.problems')<CR>
nnoremap <silent> <leader>s :<C-u>call VSCodeNotify('workbench.action.gotoSymbol')<CR>
nnoremap <silent> <leader>S :<C-u>call VSCodeNotify('workbench.action.showAllSymbols')<CR>
nnoremap <silent> <leader>t :<C-u>call VSCodeNotify('workbench.action.toggleActivityBarVisibility')<CR>
nnoremap <silent> <leader>gs :<C-u>call VSCodeNotify('gitlens.showQuickRepoStatus')<CR>
nnoremap <silent> <leader>gb :<C-u>call VSCodeNotify('gitlens.toggleFileBlame')<CR>
nnoremap <silent> <leader>n :<C-u>call VSCodeNotify('workbench.files.action.focusFileExplorer')<CR>


nmap <silent> gv :<C-u>call VSCodeNotify('editor.action.revealDefinitionAside')<CR>

" clear search highlighting and clear any message already displayed
noremap <silent> <leader>/ :set hlsearch! hlsearch?<cr>

nnoremap <silent> <leader>w :w<cr>
nnoremap <silent> <leader>x :x<cr>
nnoremap <silent> <leader>q :q<cr>

" navigate between tabs
nnoremap <silent> K :<C-u>call VSCodeNotify('workbench.action.nextEditorInGroup')<CR>
nnoremap <silent> J :<C-u>call VSCodeNotify('workbench.action.previousEditorInGroup')<CR>

" make Y have the same behavior as C and D
nnoremap Y y$

" blackhole register shortcut
nnoremap \ "_

" scroll the viewport faster
nnoremap <C-e> 3<C-e>
nnoremap <C-y> 3<C-y>

" will make navigation of wrapped lines worked as you'd expect
nnoremap <silent> j gj
nnoremap <silent> k gk
nnoremap <silent> ^ g^
nnoremap <silent> $ g$

nnoremap <silent> <C-w>o :<C-u>call <SID>closeOtherEditors()<CR>
function! s:closeOtherEditors()
    call VSCodeNotify('workbench.action.closeEditorsInOtherGroups')
    call VSCodeNotify('workbench.action.closeOtherEditors')
endfunction

" Plugin settings
" ===============

let g:highlightedyank_highlight_duration = 200

let g:qs_highlight_on_keys = ['f', 'F', 't', 'T']
highlight QuickScopePrimary guifg='#61afef' gui=underline ctermfg=155 cterm=underline
highlight QuickScopeSecondary guifg='#c678dd' gui=underline ctermfg=81 cterm=underline
