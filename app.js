
localStorage.setItem('saludo', 'Good Morning');
localStorage.setItem('unNumero', 30);
localStorage.setItem('esValido', true);

sessionStorage.setItem('email', 'mariano@iksfijd.com')

let product1 = {id: 1, name: 'contactor', price: 1500}

localStorage.setItem('producto1',product1);

let myProduct = localStorage.getItem('producto1');

console.log(myProduct)

for(let i = 0; i < localStorage.length; i++){
    let clave = localStorage.key(i);
    // console.log(clave)
    // console.log(localStorage.getItem(clave))
    console.log(clave, localStorage.getItem(clave), typeof localStorage.getItem(clave))
}