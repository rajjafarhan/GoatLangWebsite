let reqArray = [10,45,65,87,98,33,85]

let head = 50
let dir = "left"

let leftArr = []
let rightArr = []

reqArray.forEach((lvl) => {
    if ( lvl > head){
        rightArr.push(lvl)
    }
    if ( lvl < head){
        leftArr.push(lvl)
    }
})

leftArr.sort((a,b ) => b - a)
rightArr.sort((a,b ) => a - b)

let path = []
dir === "left" ? path =  [...leftArr,...rightArr ]: path = [...rightArr,...leftArr ]  

let totalDistance = 0
path.forEach((floor) => {
    totalDistance += Math.abs(head - floor)
    head = floor
})

console.log("Total seek time is: ", totalDistance)
console.log("Sequence is :" , path)
