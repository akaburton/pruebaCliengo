let log = console.log
const question = string => document.write(`<h3>Consigna: </h3><h5>${string}</h5>`)
const answer = string => document.write(`<h3>Respuesta: </h3><h5>${string}</h5>`) || log(string)
question(`- Escribir una función que devuelva un string ordenado al inverso.
Es decir, si el string fuese 'Hola' ,  la función debería retornar "aloH"`)

const reverseString = string => string.split('').reverse().join('')

answer(reverseString('Hola'))

///////////////////////////////////////////////////////////////

question(`- Escribir una función que imprima por consola una escalera como la siguiente<br/>
<code>#<br/>
##<br/>
###<br/>
####<br/>
#####<br/>
######</code>`)

const repeatAndJoin = (string, separator, times) => {
    const arr = Array(times).fill(undefined)
    const result = arr.map( (x,i) => string.repeat(i+1) )

    return result.join(separator)
}

log = () => {}
answer(repeatAndJoin('#', '<br/>', 6))
log = console.log
console.log(repeatAndJoin('#', '\n', 6))

///////////////////////////////////////////////////////////////

question(`Dado el array 'candidatesGlobal', escribir una función que devuelva uno nuevo con la estructura del array 'candidatesResume'`)

const candidatesGlobal = [
    { name: 'Jorge',
    	surname: 'Ocampos',
    	age: 25,
    	mainSkill: 'Backend',
    	loves: 'Play Framework'
    },
    { name: 'Laureano',
    	surname: 'Serrano',
    	age: 28,
    	mainSkill: 'Frontend',
    	loves: 'CSS'
    },
    { name: 'Marina',
    	surname: 'Perez Ramirez',
    	age: 30,
    	mainSkill: 'Product Manager',
    	loves: 'Silence'
    },
    { name: 'Kristopher',
    	surname: 'Perdomo Chung',
    	age: 23,
    	mainSkill: 'Fullstack',
    	loves: 'Cold'
    },
    { name: 'Ramiro',
    	surname: 'Savoie',
    	age: 32,
    	mainSkill: 'Python',
    	loves: 'Meetings'
    }]
    
    


const candidatesResume = candidatesGlobal.map(x => (
    {
        demographics: x.name + x.surname + ' is ' + x.age,
        personal: 'His main skill is ' + x.mainSkill + 'and likes ' + x.loves
    })
)

answer(JSON.stringify(candidatesResume))

///////////////////////////////////////////////////////

question(`- Escribir una función para encontrar el item más frecuente dentro de un array:

var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Output esperado: a(5 veces)`)


var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

const getMostFrequently = arr => arr.reduce((y, x, i, arr) => {
    let result = {
        value: y.value,
        times: y.times
    }
    const matches = arr.filter(v => v === x).length
    const xIsBigger = matches > result.times

    return xIsBigger ? {value: x, times: matches}  : y
}, {value: 0, times: 0})

answer(`El item "${getMostFrequently(arr1).value}" es el valor más frecuente, a
        apareciendo ${getMostFrequently(arr1).times} veces`)

/////////////////////////////////////////////////////////

question(`Que loguea por consola la siguiente función: var array1 = [5, 12, 8, 130, 10]; 
var found = array1.find(function(element) { 
return element > 10;
}); 
console.log(found);`)

answer('La función devuelve el primer número mayor a 10')

//////////////////////////////////////////////////////////  

question(`Que loguea por consola la siguiente función: let    e = (a,x) => d => x(a, d), 
f = e(10, (a , d) => a * d)
console.log(f(2))`)

answer('La función devuelve el número que pasa por parámetro multiplicado por 10')

//////////////////////////////////////////////////////////  

question(`Que loguea por consola la siguiente función: let    operate = (m1,operation) => m2 => operation(m1, m2),
multX10 = operate(10, (multiplicando1 , multiplicando2) => multiplicando1 * multiplicando2)
  console.log(multX10(2))`)

answer('Hace lo mismo que la funcíon del ejercicio anterior pero esta está sin minificar')