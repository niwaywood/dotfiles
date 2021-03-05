# Dotfiles

This repo is a collection of my Neovim, tmux, zsh, etc. configurations. This dotfile project is heavily inspired by [Nick Nisi's dotfile project](https://github.com/nicknisi/dotfiles). See his talk [vim + tmux - OMG!](https://www.youtube.com/watch?v=5r6yzFEXajQ) if you want to be inspired.

## Install

1. `git clone https://github.com/nwaywood/dotfiles.git ~/.dotfiles`
1. `cd ~/.dotfiles`
1. `bash install.sh`

This `install.sh` script will start by installing all symbolic links into your home directory. Every file with a `.symlink` extension will be symlinked to the home directory with a `.` in front of it. As an example, `zshrc.symlink` will be symlinked in the home directory as `~/.zshrc`. Then, all files in the `$DOTFILES/config` directory will be symlinked to the `~/.config/` directory for applications that follow the [XDG base directory specification](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html), such as Neovim.

Next, the script will check to see if the OS is MacOS. If so, it will install Homebrew (if its not already installed) and will install all the packages listed in `install/brew.sh`. Then, `install/osx.sh` will run and change some OSX configurations. Finally, `zsh` is configured and `oh-my-zsh` is installed.

In `install/` folder there are other scripts for installing `go`, `atom`, and `npm` packages which are not automatated. If you want to install any of these packages, manually run the file (e.g. `bash install/atom.sh`).

## Neovim Setup

[Neovim](https://neovim.io/) config is symlinked to `~/.config/nvim` directory by the `install/link.sh` script. Inside of [`.zshrc`](zsh/zshrc.symlink), the `EDITOR` shell variable is set to `nvim`, defaulting to Neovim for editor tasks, such as git commit messages. Additionally, I have aliased `vim` to `nvim` in [`aliases.zsh`](zsh/aliases.zsh) You can remove this if you would rather not alias the `vim` command to `nvim`.

### Installation

Neovim plugins are managed with [vim-plug](https://github.com/junegunn/vim-plug). To install plugins, run:

`nvim +PlugInstall`

## ZSH Setup

ZSH is configured in the `zshrc.symlink` file, which will be symlinked to the home directory. The following occurs in this file:

- set the EDITOR to nvim
- Recursively search the $DOTFILES/zsh directory for files ending in .zsh and source them
- Setup `oh-my-zsh` and install plugins
- Add the ~/bin and $DOTFILES/bin directories to the path
- And more...

`nick-pure.zsh-theme` contains my custom terminal prompt. If you would like to use it, manually symlink it into `~/.oh-my-zsh/custom/themes` or change `ZSH_THEME` in `zshrc.symlink` from `nick` to one of the built-in themes (e.g. `robbyrussell`). My `zshrc` config also relies on a custom plugin `my-vi-mode` which should be copied into `~/.oh-my-zsh/custom/plugins`

```
ln -s /Users/nick.waywood/.dotfiles/oh-my-zsh/custom/themes/nick_pure.zsh-theme /Users/nick.waywood/.oh-my-zsh/custom/themes/nick_pure.zsh-theme
ln -s /Users/nick.waywood/.dotfiles/oh-my-zsh/custom/plugins/my-vi-mode /Users/nick.waywood/.oh-my-zsh/custom/plugins/my-vi-mode
```

## Tmux Setup

Tmux is a terminal multiplexor which lets you create windows and splits in the terminal that you can attach and detach from. I use it to keep multiple projects open in separate windows and sessions and to create an IDE-like environment to work in where I can have my code open in Neovim and a shell open to run tests/scripts. Tmux is configured in ~/.tmux.conf, and in tmux/theme.sh, which defines the colors used, the layout of the tmux bar, and what what will be displayed, including the time and date, open windows, tmux session name, computer name. If not running on macOS, this configuration should be removed.

### Installation

Tmux plugins are managed with [tpm](https://github.com/tmux-plugins/tpm). To install plugins, run:

`<prefix> - I`

from within tmux. This installs the `tmux-resurrect` plugin which lets tmux sessions/windows/panes be persisted across OS reboots. `prefix - ^s` to save the tmux environment and `prefix - ^r` to restore the tmux environent.

## Font

My neovim and zsh setups both make use patched [nerd fonts](https://github.com/ryanoasis/nerd-fonts). It is recommended to use one, otherwise some characters will look funky. I personally use `Fira Mono Nerd Font`.
