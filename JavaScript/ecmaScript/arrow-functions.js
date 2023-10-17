const numeros = [1, 2, 5, 10, 300]

const mesa = ['Coral', 'Anna', 'Demétrio', 'Lacerda']


//callback function
// mesa.forEach(
//     function Carlos(pessoa) {
//         console.log('bom dia ' + pessoa);
//     }
// )

//arrow functions
mesa.forEach( (cadaPessoa) => {
        console.log('bom dia ' + cadaPessoa);
    }
)

//outro jeito de fazer arrow function
// const dobro = (x) =>{
//     return x *2
// }

//forma simplificada
const dobro = (x) => x * 2; 

console.log(dobro(4));