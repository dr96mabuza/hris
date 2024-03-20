# HUMAN RESOURCE INFORMATION SYSTEM API

## Description
Express CRUD API Backend for HR Information System that uses JSON webtokens for authentication. Hosted on Render.

## Contents
- [Project Status](#projects-status)
- [How to use](#how-to-use)
- [For Development](#for-development)
- [Technologies](#technologies)
- [Issues](#issues)

## Project status
- Complete

## How to use
- To sigin you need to have a username and password. the username can only be generated by someone who already has access.
Use mock user details to login. username: ******ElPre2024****** password: ******test******.
```bash 
******POST****** http address: https://hris-qp6t.onrender.com/signin
```
### Request parameters
| Parameter | Type   | Description
------------|--------|----------------
| username | string | (required) system generated username after new employeee is added.
| password | string | (required) users chosen password.

### Success response parameters
| Parameter | Type   | Description
------------|--------|-----------------
| token | string | returns a unique jsonwebtoken.
| user | json | json containing all the users details excluding password. 


## For Development
- To start working on the project you will need to have node.js and npm installed on your system. And a .env with all the required enviroment variables.
- run the command below to install the project dependencies.
```bash
npm install
```
- The command webpack --watch, runs a server in the local enviroment that auto refreshes as the document changes.
```bash
npx webpack --watch
```

## Technologies
- Prisma
- Express.js
- MySQL
- Bcrypt

## Issues
- Render shuts down or idles the api when not in use, therefore response times are slow.


