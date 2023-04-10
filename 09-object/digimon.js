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

let formSearch = document.querySelector("#form-search")
let inputSearch = document.querySelector("#input-search")
let listDigimon = document.querySelector("#list-digimon")

showDigimon(digimon)

formSearch.addEventListener("submit", (event) => {
  event.preventDefault()

  let filterDigimon = digimon.filter((item) => {
    if (item.name.toLowerCase().includes(inputSearch.value)) {
      return item
    }
  })

  listDigimon.innerHTML = ""

  console.log(filterDigimon);
  showDigimon(filterDigimon)
})

function showDigimon(arr) {
  arr.map((item) => {
    listDigimon.innerHTML += `
      <div class="card">
        <img width="100" src="${item.img}" alt="">
        <span>${item.name}</span>
      </div>
    `
  })
}