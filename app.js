
let array = ['bat', 'tab', 'cat', 'tab', 'path'];
let sortedWord1 = array.toLowerCase().split("").sort().join("");
let sortedWord2 = array.toLowerCase().split("").sort().join("");
array.forEach((value) => {
    if (sortedWord1 === sortedWord2) {
return true
    }
    else{
        return false
    }
    
})
