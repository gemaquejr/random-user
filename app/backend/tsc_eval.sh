#!/bin/bash

npx -y tsc

if [ $? != 0 ]; then
  echo "A compilação do TypeScript falhou. Se o problema persistir, consulte a documentação do TypeScript ou peça ajuda à equipe de desenvolvimento."
  exit 1
fi