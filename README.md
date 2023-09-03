*** ts-node: executa aplicações node com typescript em tempo de execução.
*** aplciando ts-node junto com nodemon

sh```
"start:dev": "nodemon --watch 'src/' --exec 'ts-node src/index.ts' -e ts"
```

*** configurações basicas para o .eslitrc.json
npx eslint --init

{
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier" ## prettier é adicionado a lista para evitar que ocorram conflitos em propriedades do prettier e eslint
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",q   1
        "sourceType": "module",
        "project": ["./tsconfig.json"] ## habilitar o project apontando para tsconfig.json evitando erros de compilação
    },
    "plugins": [ "@typescript-eslint" ],
    "rules": {
    }
}

*** eslint-config-prettier => utilizado para trabalhar com padrões conjuntos do eslint e prettier
*** para o correto funcionamento do prettier, nas configurações do seu editor procure por
"Format on save" definindo para true e o "Default formatter" definindo para prettier


*** husky e lint-staged:
=> Husky é utilizado para criar hooks de commit, por tanto é possível definir comandos para serem executados antes de cada commit
=> lint-staged é utilizado para executar comandos em arquivos que estão dentro do commit

=> antes de executar um commit é feita a execução do lint-staged

npm run husky:prepare => cria pre-commits
npx husky add .husky/pre-commit "npx lint-staged" => executa os pre-commits

Ao realizar um commit é feita toda checkagem utilizando o pre-commit do lint-staged