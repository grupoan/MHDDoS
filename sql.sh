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
git clone https://github.com/grupoan/MySQL-Brute-Force.git

cd MySQL-Brute-Force

python3 -m ensurepip --upgrade

python -m pip install -r requirements.txt

python main.py --server= --port=3306
