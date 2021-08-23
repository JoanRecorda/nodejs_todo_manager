# nodejs_todo_manager
This is a node.js CRUD exercise for my Full Stack Development Bootcamp.

## Table of Contents
1. [General Info](#general-info)
2. [Stack and Technologies](#stack-technologies)
3. [Installation and Setup](#installation-setup)
4. [Collaboration](#collaboration)
6. [FAQs](#faqs)

## General info
***
* This is a node.js CRUD exercise for my Full Stack Development Bootcamp.
* Project status: work in progress.
* Heroku deployment url: https://xyxyxyxyxyxyxyxyxyxyxy.herokuapp.com/

## Stack and Technologies

* Node v14.17.1 - https://nodejs.org/
* npm (Node Package Management) 6.14.13 - https://www.npmjs.com/
* nodemon ^2.0.12

## Installation and Setup

### Installing Node if you haven't installed yet
```
node install
```

### Check if Node is already installed
```
node -v
```

### You can also install Node globally
```
node install -g
```

### Installing npm if you haven't installed yet
```
npm install
```

### Check if npm  installed yet
```
npm -v
```

### You can also install npm globally
```
npm install -g
```

### Initialize a node project, that creates a package.json
```
npm init
```

### Or initialize a node project and customize everything by default
```
npm init -y
```

### To get the Lifecycle scripts (to check the "scripts applyied at package.json"
```
npm run
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Initialize the project
```
npm start
```

### Installing nodemon to automatically restart the node app when file changes in the directory are detected
```
npm install nodemon -D
```

### After that, we introduce the file it has to execute
```
./node_modules/.bin/nodemon index.js
```

### Or even better, just add to package.json "scripts"
```
  "scripts": {
    "dev": "nodemon index.js",
```

### Or even better, just add to package.json "scripts"
```
  "scripts": {
    "dev": "nodemon index.js",
```

### Initialize the project once nodemon is installed
```
npm run dev
```

## Customize configuration
See...

#### Setting content type to JSON
- Common MIME types (https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)

### Then, when installing node.js we follow that tutorial:
- https://www.youtube.com/watch?v=o85OkeVtm7k&list=PLV8x_i1fqBw0Kn_fBIZTa3wS_VZAqddX7&index=7&ab_channel=midudev
min 25
- https://www.youtube.com/watch?v=ep_plUeKV1Y&list=PLV8x_i1fqBw0Kn_fBIZTa3wS_VZAqddX7&index=8&ab_channel=midudev