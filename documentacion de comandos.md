5. Resumen de Comandos Útiles
cd mi-proyecto/server
Navega a la carpeta del backend.
nodemon app.js
Inicia el servidor Express con
nodemon
.
cd mi-proyecto/client
Navega a la carpeta del frontend.
npm start
Inicia el servidor de desarrollo de React.
npm install concurrently
Instala concurrently
para ejecutar múltiples comandos en una sola terminal.

6. Conclusión
Sí, necesitarás al menos dos terminales


Iniciar el Backend
Abre una terminal y navega a la carpeta server:
bash
Copy
1
cd server
Inicia el servidor Express:
bash
Copy
1 nodemon app.js
Si no tienes nodemon, puedes usar:
bash
Copy
1
node app.js
Verás un mensaje como:
Copy
1 Servidor corriendo en http://localhost:5000
Paso 2: Iniciar el Frontend
Abre otra terminal y navega a la carpeta client:
bash


Pasos para Configurar concurrently:
Instala concurrently en la carpeta raíz del proyecto:
bash
Copy
1
npm install concurrently --save-dev
Modifica el archivo package.json en la carpeta raíz para agregar un script combinado:
json
Copy
1
2
3
⌄
"scripts": {
  "start": "concurrently \"cd server && nodemon app.js\" \"cd client && npm start\""
}
Desde la carpeta raíz, ejecuta:
bash
Copy
1
npm start
Esto iniciará tanto el backend como el frontend en una sola terminal.
