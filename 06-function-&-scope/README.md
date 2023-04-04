# function

## 3 bentuk function

```js
function namaFunction() {
  // isi code
}

let functionVariabel = function () {
  // isi code
};

let arrowFunction = () => {
  // isi code
};
```

## kenapa butuh function?
sebelum function
```js
if (2 % 2 == 0) {
  console.log("Genap");
} else {
  console.log("Ganjil");
}

if (3 % 2 == 0) {
  console.log("Genap");
} else {
  console.log("Ganjil");
}
```

sesudah function
```js
function cekGenap(angka) {
  if (angka % 2 == 0) {
    console.log("Genap");
  } else {
    console.log("Ganjil")
  }
}

cekGenap(2)
cekGenap(3)
```

## return pada function

### **tanpa return**
ibarat lagi jajan, kembaliannya cuma disebutin oleh pemilik toko dan ga dikasih kembaliannya
```js
function jajan(uang){
  let kembalian = uang - 10_000
  console.log(kembalian)
}

jajan(20_000)
```

### **dengan return**
ibarat lagi jajan, uang kembaliannya kita terima dan dapat kita olah lagi uangnya
```js
function jajan(uang){
  let kembalian = uang - 10_000
  return kembalian
}

console.log(jajan(20_000) + 2000) //22000
```
