let arr = ["2", 2, "a", 3, 6, true, false, [1, "2", [1, "a", "b", true, false], "a"], false, true];

let countOfNum = 0;
let countOfStr = 0;
let countOfBool = 0;
var store;
var secondStore;


for (let i = 0; i < arr.length; i++) {
    var type = typeof arr[i]

    if(type === 'string'){
        countOfStr++
    }
    else if(type === 'number'){
        countOfNum++
    }
    else if(type === 'boolean'){
        countOfBool++
    }
    else{
        store = arr[i]
        for (let j = 0; j < store.length; j++) {
            var type = typeof store[j]
            if(type === 'string'){
                countOfStr++
            }
            else if(type === 'number'){
                countOfNum++
            }
            else if(type === 'boolean'){
                countOfBool++
            }
            else{
                secondStore = store[j]
                for (let k = 0; k < secondStore.length; k++) {
                    var type = typeof secondStore[k]
                    if(type === 'string'){
                        countOfStr++
                    }
                    else if(type === 'number'){
                        countOfNum++
                    }
                    else if(type === 'boolean'){
                        countOfBool++
                    }
            }
            }
        }
    }
}

alert(`Numbers: ${countOfNum} \n Strings: ${countOfStr} \n Boolean: ${countOfBool}`)
