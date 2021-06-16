const obj = {
    a: 1,
    o:{
        i: 7,
    }
}

const obj2 = obj

obj.a = 5

obj.o.i = 150

obj.test = 555

const copyObject = (obj) => {
    return obj
}

const obj3 = copyObject(obj)

obj.b = 5

//не будет все время равен obj, мы просто передали все его параметры и всё
const obj4 = {...obj}

obj.c = 323

console.log(obj2)
