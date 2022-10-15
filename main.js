const kafe={
    taomlar:{
       quyuq:{
           xamir:{
               manti:"manti"
           }
       }
    }
}

kafe?.taomlar.xamir ? console.log("bor") : console.log("yuq")



const obj={
    firstName:"Jalol",
    lastName:"Yaxyoyev",
    age:21,
    job:"Student",
    city:"Shahrisabz",
}

for (let element of Object.entries(obj)){
    console.log(`${element[0]}===${element[1]}`)
}


let arr=[1,2,3,1,4,5,6,3,4,5,2,6]
let newArr=new Set(arr)
console.log(newArr)

const rest=new Set([10,20,10,10,10,20,30,40,50,40])
console.log((rest))

const newRest=new Set("alichall")
console.log(newRest)

console.log(rest.size)
console.log(rest.has(20))
console.log(rest.add(4))
rest.delete(10)
console.log(rest)
rest.clear()
console.log(rest)

const array=[...newArr]
console.log(array)