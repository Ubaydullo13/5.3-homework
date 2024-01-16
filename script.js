// Quyidagi kabi massiv berilganda uning elementlaridan iborat cardlar yasash.
// Cardlarni korinishi rasm holatida yuklangan.

// Bundan tashqari card larda delete button mavjud. Ushbu button bosilganda sahifadan ushbu
// cardni o'chirib tashlashi kerak bo'ladi. O'chirishda ham confirm modaldan foydalanib oldin
// haqiqatdan ochirmoqchi ekanini sorab olinishi zarur.

const cars = [
  {
    image:
      "https://auto-lab.ru/upload/iblock/2cc/je1d0q778r01ic3bhmp6q21bcwrpt93f.jpg",
    name: "BMW",
    price: "$155000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quam.",
  },
  {
    image:
      "https://images.carexpert.com.au/crop/800/533/app/uploads/2022/12/2023-Mercedes-Benz-C63-Review-CarExpert-Australia19.jpg",
    name: "Mercedes",
    price: "$88000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quam.",
  },
  {
    image:
      "https://bringatrailer.com/wp-content/uploads/2023/04/2022_tesla_model-s-plaid_dsc_7531-01901.jpg?fit=940%2C626",
    name: "Tesla",
    price: "$70000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quam.",
  },
];

const cardContainer = document.querySelector(".cards");

function renderCards(cars) {
  cardContainer.innerHTML = "";
  cars.forEach((car, index) => {
    const cardElement = createCard(car, index);
    cardContainer.appendChild(cardElement);
  });
}

function createCard(car, index) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.innerHTML = `
     <img src="${car.image}" alt="${car.name}">
        <div class="card-info">
            <h2 class="card-title">${car.name}</h2>
            <p class="price">
                ${car.price}
            </p>
            <p class="card-text">${car.description}</p>
        </div>
            
            <button class="btn">Delete</button>`;
  return cardElement;
}

renderCards(cars);

cardContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    const index = Array.from(cardContainer.children).indexOf(
      e.target.parentElement
    );

    const isConfirmed = confirm("Are you sure you want to delete this card?");

    if (isConfirmed) {
      cars.splice(index, 1);
      renderCards(cars);
    }
  }
});
