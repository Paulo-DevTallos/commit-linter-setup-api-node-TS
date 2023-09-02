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
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ["./tsconfig.json"] ## habilitar o project apontando para tsconfig.json evitando erros de compilação
    },
    "plugins": [ "@typescript-eslint" ],
    "rules": {
    }
}