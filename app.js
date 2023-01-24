
localStorage.setItem('saludo', 'Good Morning');
localStorage.setItem('unNumero', 30);
localStorage.setItem('esValido', true);

sessionStorage.setItem('email', 'mariano@iksfijd.com')

for(let i = 0; i < localStorage.length; i++){
    let clave = localStorage.key(i);
    // console.log(clave)
    // console.log(localStorage.getItem(clave))
    console.log(clave, localStorage.getItem(clave), typeof localStorage.getItem(clave))
}