# localStorage
localStorage
Los set que hagamos seran persistentes aunque:
recarguemos la pagina
cerremos la ventana
localStorage.setItem('clave', 'valor');

sessionStorage
Los set que hagamos seran persistentes aunque:
recarguemos la pagina
hasta que:
cerremos la ventana.
sessionStorage.setItem('clave', 'valor');

Obtener valores del localStorage
Array
when se obtiene valores de un array desde el local
storage nos devolvera un objeto nulo [objeto] [objeto]

JSON
Es un string con formato especifico.
Metodos
Strigify: acepta un objeto como parametro, y devuelve
la forma de texto  JSON equivalente.
parse: recibe un texto JSON como parametro, y devuelve 
el objeto javascript correspondiente.

comandos para trabajar en un repositorio remoto
git init 
git remote add nombre-cualquiera url(repo remoto)
git fetch nombre-cualquiera-local
git pull nombre-cualquiera-local rama-remota
git add .
git commit -m "first commi#
git push --set-upstream