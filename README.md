# react-ts-bun-test

Teste da runtime engine Bun, com uma aplicação simples em React.

## 1. Quick reference

### 1.1. Instalações

#### 1.1.1. Runtime engine - Bun

 Acesse a [documentação](https://bun.sh/docs) ou execute no terminal:

```bash
curl -fsSL https://bun.sh/install | bash
```

#### 1.1.2. Dependências de projeto

```bash
bun install
```

### 1.2. Rodando da aplicação

#### 1.2.1. Desenvolvimento

Para rodar a aplicação utilizando uma build de desenvolvimento, basta executar

```bash
bun run start:dev
```

#### 1.2.2. Produção

Para rodar a aplicação utilizando uma build otimizada, basta executar

```bash
bun run build && bun run start:prod
```

Para testar a aplicação via navegador, basta acessar [`http://localhost:3000`](http://localhost:3000).
