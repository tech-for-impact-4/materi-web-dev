// =========== 3 bentuk function ====================

function loopNumber() {
  for (let i = 1; i <= 5; i++) {
    console.log(i)
  }
}

// loopNumber()
// loopNumber()
// loopNumber()



// mesin cuci
function cekGenap(angka) {
  if (angka % 2 == 0) {
    console.log("Genap");
  } else {
    console.log("Ganjil")
  }
}

cekGenap(7)
cekGenap(3)
cekGenap(8)
// cekGenap("tes")
// cekGenap(true)


function jajan(uang){
  let kembalian = uang - 10_000
  return kembalian
}

console.log(jajan(20_000) + 2000)


// function variable
const luasPersegi = function(panjang, lebar) {
  let hasil = panjang * lebar
  return hasil
}

// arrow function
const volumePersegi = (panjang, lebar, tinggi) => {
  return luasPersegi(panjang, lebar,) * tinggi
}

// const volumePersegi = (panjang, lebar, tinggi) => luasPersegi(panjang, lebar,) * tinggi
console.log("luas", luasPersegi(4, 2))
console.log("volume", volumePersegi(4, 2, 3))


// buat menggunakan function
// [1,2] -> [2,1]
// [3,4,7] -> [7,4,3]



function reverseArray(array) {
  let hasil = []

  for (let i = array.length-1; i >= 0; i--) {
    hasil.push(array[i])
  }

  return hasil
}

console.log(reverseArray([1,2,3,4]))
console.log(reverseArray([8,4,6]))




