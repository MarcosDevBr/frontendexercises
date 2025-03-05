# 🚀 Frontend Exercises

<div align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
</div>

## 📋 Sobre o Projeto

Este repositório contém uma coleção de exercícios práticos de frontend desenvolvidos com Next.js, TypeScript e React. Cada exercício demonstra diferentes conceitos e práticas de desenvolvimento web moderno.

## 🛠️ Tecnologias Utilizadas

- Next.js 15
- TypeScript
- React
- Material UI
- Styled Components
- Jest para testes

## 🚀 Como Executar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/MarcosDevBr/frontendexercises.git
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

4. Acesse o projeto em `http://localhost:3000`

## 📚 Exercícios Implementados

### 1. Rick and Morty API
Consumo da API do Rick and Morty para exibir informações dos personagens principais.

```typescript
// Exemplo de uso
const characters = await rickAndMortyService.getCharacters();
```

### 2. FIPE API
Consulta de valores de veículos através da API da FIPE.

```typescript
// Exemplo de uso
const vehicleValue = await fipeService.getVehicleValue(brand, model, year);
```

### 3. Função de Atualização de Objeto
Função utilitária para atualizar objetos mantendo apenas as propriedades existentes.

```typescript
// Exemplo de uso
const result = updateData(
  { name: "Marcos", country: "Brasil", age: 22 },
  { country: "Japão", age: 33 }
);
// Resultado: { name: "Marcos", country: "Japão", age: 33 }
```

## 🧪 Testes

O projeto utiliza Jest para testes unitários. Para executar os testes:

```bash
npm test
# ou
yarn test
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── rickandmorty/
│   ├── fipe/
│   └── utils/
├── services/
│   ├── rickandmorty/
│   └── fipe/
└── components/
```

## 📝 Licença

Copyright © 2024 [Marcos Augusto](https://github.com/MarcosDevBr)

This project is MIT licensed.

## 👥 Autores

- Marcos Augusto - [Marcos Augusto](https://github.com/MarcosDevBr)
---

<div align="center">
  <p>Feito com ❤️ e ☕</p>
</div>
