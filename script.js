var myArray = ['Bannana', 'Strawberry', 'Blueberry', 'Rassberry', 'Blackberry']

document.getElementById("arrayList").innerHTML = myArray


myArray.push('Cranberry')
document.getElementById("arrayList2").innerHTML = myArray.join(', 🐱‍👤')



myArray.shift()
myArray.pop()

document.getElementById("arrayList3").innerHTML = myArray.join('</br>')



var listOfCars = []
var newCar

function addElement() {
    newCar = document.getElementById("arrayElement").value

    listOfCars.push(newCar)

    document.getElementById('carList').innerHTML = listOfCars
}