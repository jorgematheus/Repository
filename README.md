- [Preview](#preview)
- [Configuração do ambiente de desenvolvimento](#configuração)

# Repository 
##### (Consulta e listagem de repositórios e problemas utilizando a API do GitHub)
Aplicação feita em ReactJS aonde foi usada a API do Github para consulta de repositórios e issues.

nessa aplicação foram aplicados conceitos como **paginação**, **consumo de API**, **state** e **props** no ReactJS, **styledComponents** entre outos.

Exemplo de repositório para ser pesquisado na aplicação: **facebook/react**

## Preview
#### Página Inicial (pesquisa de repositório): 

![imagem inicial do projeto](https://raw.githubusercontent.com/jorgematheus/Repository/master/temp/image/Screenshot_1.png)

#### Página de detalhes (listagem dos problemas):

![imagem inicial do projeto](https://raw.githubusercontent.com/jorgematheus/Repository/master/temp/image/Screenshot_2.png)


## Configuração
### Configurando ambiente de desenvolvimento ( ESLint, Prettier, EditorConfig)

- ``yarn add eslint -D``
- ``yarn eslit --init `` (configurar como preferir, recomendo utilizar alguma style guide padrão, nesse projeto utilizo da Airbnb)

Instale o [Prettier](https://prettier.io/) e todos os plugins dependentes para integração com eslint como dependência de desenvolvimento.
- ``yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D``

O arquivo .eslintrc.js deve estar parecido com o abaixo:

```module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint', //entender os codigos ES6,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js']
      }
    ],
    'import/prefer-default-export': 'off'
  },
}; 
``` 

Crie o arquivo .prettierrc e adicione:

```
{
   "singleQuote": true,
   "trailingComma": "es5"
}
```
