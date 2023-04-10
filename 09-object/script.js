const person = {
  nama: "naruto",
  umur: 19,
  pendidikan: "ninja",
  peliharaan: ["rubah", "kodok"],
  anak: ["boruto", "himawari"],
  alamat: {
    desa: {
      nama: "konoha",
      simbol: "api",
      hokage: "naruto",
    },
    jl: "jl api",
    no: "20",
  },
  rasengan: () => {
    console.log("rasengaaaaan...");
  },
  kagebunshin: function () {
    console.log("jurus seribu bayammm");
  },
};

delete person.alamat;
console.log(person);

console.log(person.anak[0]);
console.log(person["anak"][0]);

console.log(person.pendidikan);
console.log(person[`pendidikan`]);

person.umur = 20;

console.log(person.kagebunshin());

let digimon = [
  {
    name: "Koromon",
    img: "https://digimon.shadowsmith.com/img/koromon.jpg",
    level: "In Training",
  },
  {
    name: "Tsunomon",
    img: "https://digimon.shadowsmith.com/img/tsunomon.jpg",
    level: "In Training",
  },
  {
    name: "Yokomon",
    img: "https://digimon.shadowsmith.com/img/yokomon.jpg",
    level: "In Training",
  },
  {
    name: "Motimon",
    img: "https://digimon.shadowsmith.com/img/motimon.jpg",
    level: "In Training",
  },
];

console.log(digimon[0].name);

let movies = [
  {title: "spiderman", desc: "", year: 2021}, 
  {title: "ironman", desc: "", year: 2008}
]

console.log(movies[1].title);

let car = {
  engine: "4-cyl",
  capacity: "1500cc",
  type: "sedan",
  ngebut: () => {
    return "200 km/h"
  },
  ngerem: () => {

  }
};

let hewan = {
  nama: "beruangg",
  jenis: "mamalia",
  makanan: "daging"
};

let pc = {
  Ram: "24gb",
  VGA: "RTX",
  processor: "i7-1170k"
};

let matkul = {
  nama: "Pemrograman",
  Dosen: "Mail",
  SKS: 3,
};

let pokemon = {
  name: "Bulbasaur",
  category: "seed",
  abilitiy: "overgrow",
  weight: 15,
};
