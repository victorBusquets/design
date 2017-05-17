Panel de adminisracion en desarrollo
=======================================

Tecnologias
-----------
  1. AngularJS
  1. NodeJS
  1. MongoDB
 
Para empezar y tras descargar el proyecto debemos instalar sus dependencias tanto del Servidor como del cliente, para ello y teniendo previamente instalado node, ejecutamos `npm install` en la raiz de nuestro proyecto. Este comando instalara las dependencias de nodeJS asi como las dependencias de Front ( usando bower) de manera automatica.


Una vez instaladas nuestras dependencias, podemos levantar el servidor de dos formas, usando base de datos o mocks:

Levantar node con  BD
---------------------
  1. Levantamos MongoDB
  1. Iniciamos el servidor de node `node server`

Levantar node con mocks
-----------------------
  1. Podemos levantarlo de dos formas, con `node server mocks` o `node server onlyFront`
   
Enlaces de referencia:
----------------------
  * [Scrum Board](https://tree.taiga.io/project/victorbusquetsboro-design)
  * [Vincular taiga y github](https://tree.taiga.io/support/integrations/github-integration)
  * [Modificar estado historias de taiga con commits](https://tree.taiga.io/support/integrations/changing-elements-status-via-commit-message/)
  * [Asociar commits con historias de taiga](https://tree.taiga.io/support/integrations/attach-commits-to-elements-via-commit-message/)
  * [Paginación con MongoDB](https://scalegrid.io/blog/fast-paging-with-mongodb)
