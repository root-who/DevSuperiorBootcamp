# DsVendas 📑

![dsvendas](https://github.com/root-who/projetoSpringReactDevSuperior/blob/main/dashBoard.png)

<p align="center">
<img alt="JAVA" src="https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java"/>
<img alt="SPRINGBOOT" src="https://img.shields.io/badge/-Spring-6DB33F?style=flat-square&logo=spring&logoColor=white"/>
<img alt="POSTGRES" src="https://img.shields.io/badge/-Postgresql-336791.svg?&style=flat-square&logo=postgresql&logoColor=white"/>

<img alt="REACT" src="https://img.shields.io/badge/-React%20-%2320232a.svg?&style=flat-square&logo=react&logoColor=%2361DAFB"/>
<img alt="TypeScript" src="https://img.shields.io/badge/-Typescript%20-%23007ACC.svg?&style=flat-square&logo=typescript&logoColor=white"/>
<img alt="Bootstrap" src="https://img.shields.io/badge/-Bootstrap-563D7C?style=flat-square&logo=bootstrap&logoColor=white"/>
</p>

## Sobre o Projeto📖

DS Vendas é uma aplicação full stack web, Spring Boot com React, construída durante a 3ª edição da Semana DevSuperior (#sds3), evento organizado pela DevSuperior.

A aplicação em React.js consiste em uma organização feita em formato de gráfico, para apresentar os dados de vendedores, como: nome, taxa de sucesso de vendas, valor da venda e data.
Os dados são buscado na API criado em Java utilzando o framework SpringBoot. 

## Ferramentas 🛠

### Back end

- Java
- Spring Boot
- JPA / Hibernate
- Maven

### Front end

 - HTML 
 - Bootstrap 
 - TypeScript
 - ReactJS

### Implantação em produção

 - Back end: Heroku
 - Front end web: Netlify
 - Banco de dados: Postgresql
 
 [![Netlify Status](https://api.netlify.com/api/v1/badges/1fd8124c-97fd-4b53-abb9-f3ed74756794/deploy-status)](https://app.netlify.com/sites/igti-github-search/deploys)

## Como executar o projeto :rocket:

### Back end
Pré-requisitos: Java 8

```bash
# clonar repositório
git clone https://github.com/root-who/projetoSpringReactDevSuperior
# entrar na pasta do projeto backend
cd backend
# executar o projeto
./mvnw spring-boot:run
```

### Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/root-who/projetoSpringReactDevSuperior
# entrar na pasta do projeto front end web
cd frontend
# instalar dependências
yarn install
# executar o projeto
yarn start
```