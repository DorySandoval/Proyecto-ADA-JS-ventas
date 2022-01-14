
//Open Modal New Sales-primera modal
const openModal = document.querySelector('#open-sales');
const modal = document.querySelector('#new-sales');
const cancelModal = document.querySelector('#cancel-sales');
const precios = [
  ["Monitor GPRS 3000",200] ,
  ["Motherboard ASUS 1500",120 ],
  ["Monitor ASC 543", 250 ],
  ["Motherboard ASUS 1200", 100 ],
  ["Motherboard MZI", 30 ],
  ["HDD Toyiva", 90 ],
  ["HDD Wezter Dishital", 75 ],
  ["RAM Quinston", 110 ],
  ["RAM Quinston Fury", 230 ],
];
const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"];
const sucursales = ["Caballito", "Centro"]

openModal.addEventListener('click', () => { //abre la modal de nueva venta 
   modal.style.display = 'block'
   sales(); 
   products();
   branch();
 })

 cancelModal.addEventListener('click', () => { //cancela la nueva venta
   modal.style.display = 'none'
 })

 //Insertar los <option> desde js para VENDEDORAS

const sales = () => {
for( let i = 0; i < vendedoras.length; i++) {
    insertName(vendedoras[i]) //recorre el array de vendedoras y da su longitud
  }
}
 
 const insertName = (nameSales) => { //inserta cada nombre de una vendedora en un <option>
   const selectName = document.getElementById("sales-Name"); //accedemos a <select>
   let insertOptionName = `<option> ${nameSales} </option>`
   selectName.insertAdjacentHTML("beforeend", insertOptionName) //se ejecuta cuando se abre la ventana modal de newSales
}

 //Insertar los <option> desde js para COMPONENTES
let precioIndice = 0;
const products = () => {
 for( let i = 0; i < precios.length; i++) {
    insertProducts(precios[i][0]); 
  
  }
}

const insertProducts = (nameProducts) => {
  const selectProducts = document.getElementById("componentes"); //accedemos a <select>
  let insertOptionProducts = `<option> ${nameProducts} </option>`
  selectProducts.insertAdjacentHTML("beforeend", insertOptionProducts)
}

 //Insertar los <option> desde js para SUCURSALES
const branch = () => {
 for( let i = 0; i < sucursales.length; i++){ 
    insertBranch(sucursales[i]);
 
  }
}

const insertBranch = (nameBranch) => {
  const selectBranch = document.getElementById("sucursales"); //accedemos a <select>
  let insertOptionBranch = `<option> ${nameBranch} </option>`
  selectBranch.insertAdjacentHTML("beforeend", insertOptionBranch)
}
 
//intentamos capturar una venta e insertarlo en la tabla 
const capturarValor = () => { //Construyendo una venta 
  function Venta ( fecha, vendedora, sucursal, componente, precio ) {
    this.fecha = fecha; 
    this.vendedora = vendedora;
    this.sucursal = sucursal; 
    this.componente = componente;
    this.precio = precio;
   //datos necesarios para realizar la venta
}
//toma los valores de cada <option> creando un array de datos 
let fecha = document.getElementById("date-fecha").value;
let vendedora = document.getElementById("sales-Name").value;
let sucursal = document.getElementById("sucursales").value;
let componente= document.getElementById("componentes").value;
const precio = precios.find((precio) => precio[0] === componente)[1];
//console.log(componentes)
nuevaVenta = new Venta(fecha, vendedora, sucursal, componente, precio ); //genera una venta con los datos tomados de los <option>
agregarDatos() //agrega los datos en <table>
  
}
//obtiene los datos de la venta realizada y lo vuelve un array 
const datosVenta = []; 
const agregarDatos = () => {
  datosVenta.push(nuevaVenta);
  console.log(datosVenta);

  let newTable = document.getElementById("table");
let insertTable = newTable.insertRow(-1) //crea una fila

let insertCell = insertTable.insertCell(0) //crea una celda
insertCell.textContent = nuevaVenta.fecha;

insertCell = insertTable.insertCell(1)
insertCell.textContent = nuevaVenta.vendedora;

insertCell = insertTable.insertCell(2)
insertCell.textContent = nuevaVenta.sucursal;

insertCell = insertTable.insertCell(3)
insertCell.textContent = nuevaVenta.componente;

insertCell = insertTable.insertCell(4)
insertCell.textContent = nuevaVenta.precio;

let removeTable = insertTable.insertCell(5)
let btnRemove = document.createElement("button");
btnRemove.innerHTML= 'eliminar'
//removeTable.appendChild(btnRemove);

//btnRemove.addEventListener('click', () =>{
 //remove()
//})
//document.getElementById("table").innerHTML+='<tbody><td>'+nuevaVenta.fecha+'</td><td>'+nuevaVenta.vendedora+'</td><td>'+nuevaVenta.sucursal+'</td><td>'+nuevaVenta.componente+'</td><td>'+nuevaVenta.precio+'</td></tbody>'
}


///me faltan los precios de los componentes 

