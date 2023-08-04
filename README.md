This project is created using the following command
`npm init vue@latest`

This project uses the express server to serve the application

To integrate SSR into our application, we’ll need to perform the following steps:

Adjust the build script within package.json to produce a client and SSR build and generate preload directives
Create a server using express
Develop an entry point for both the server and the client
This will require making changes to the file structure and adding new files to the project. A typical SSR application has the following directory structure:

- index.html
- server.js 
- src/
 - main.ts   
 - entry-client.ts
 - entry-server.ts  
