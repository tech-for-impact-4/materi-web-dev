let hewan = ["kucing", "kelinci", "kancil", "kuda"];

console.log(hewan.length);

// ====== manipulasi data di belakang =============
hewan.pop()
hewan.push("buaya")

// ====== manipulasi data di depan ================
hewan.shift()
hewan.unshift("kadal")

// ============ manipulasi data di tengah =========
hewan.splice(0, 1)
// let newHewan = hewan.slice(1, 3)
// console.log(newHewan);

// ============== LOOP ARRAY ======================
// manual
// console.log(hewan[0]);
// console.log(hewan[1]);
// console.log(hewan[2]);
// console.log(hewan[3]);

for (let i = 0; i <= hewan.length - 1; i++) {
  console.log(hewan[i]);
}

hewan.forEach((item, index) => {
  console.log(item + " index ke-" + index);
})

// map dapat melakukan return array
let newHewan = hewan.map((item, index) => {
  return item + " lucu"
})
console.log(newHewan);

let angka = [1,2,3,4,5]
let newAngka = angka.map((item) => {
  return item * 14000
})
console.log(newAngka);

let kelas = ["html", "css", "javascript"]
let cardKelas = kelas.map((item) => {
  return `
    <div>
      <span>${item}</span>
    </div>`
})
// console.log(cardKelas);

// =============== LATIHAN ======================

// hapus data array
// sebelum function ===========
let hewan1 = ["kucing", "kelinci", "kancil", "kuda"];
for (let i = 0; i < hewan1.length; i++) {
  if (hewan1[i] == "kancil") {
    hewan1.splice(i, 1);
  }
}
console.log(hewan1);

// sesudah function ==================
const deleteDataArray = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      arr.splice(i, 1);
    }
  }

  return arr;
};

let hewan2 = ["kucing", "kelinci", "kancil", "kuda"];
console.log(deleteDataArray(hewan2, "kancil"));

let angka1 = [1, 2, 3, 4, 5];
console.log(deleteDataArray(angka1, 3));
