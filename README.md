# Webpack Started

Esta es la configuracion basica que se necesita para configurar webpack.

para instalar la carpeta de node utilizar el comando.

npm install

para instalar la carpeta dist

npm run build

en caso de que salga un error a la hora de instalar build, hay que borrar el archivo package-lock.json y si ya tienen la carpeta node_modules tambien eliminarla, luego borrar la memoria cache con el comando

npm cache clean --force

y volver a inicializarlo con el comando npm install y npm run build