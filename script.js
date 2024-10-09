// create loadCategories for button

const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

// create cards
let allPets = [];




const loadCards = () => {
  setTimeout(() => {

    fetch("https://openapi.programming-hero.com/api/peddy/pets")
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("loading").classList.remove("hidden")
        allPets = data.pets;
        displayCards(allPets);
      })
      .catch((error) => console.log(error));
  }, 2000)
};

// sort buttons work
// const sortPetsByPriceDescending = (pets) => {
  
  // return pets.sort(function (a, b) {
  //   return b.price - a.price;
  // });
// }
const sortPetsByPriceDescending = (pets) => {
  document.getElementById("sortBtn").addEventListener("click", () => {
    const notSortedPets = sortPetsByPriceDescending([...allPets]);
    console.log(notSortedPets);

    let sortedPets = pets.sort((a, b) => 
      (b.price - a.price))
    
    console.log(sortedPets)
  });
};

// sort button


// load categories pet wise
const loadCategoriesPets = (category) => {
  setTimeout(() => {

    fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
      .then((res) => res.json())
      .then((data) => displayCards(data.data))
      .catch((error) => console.log(error));
  }, 2000)
// tried but failed to give a loading for the buttons, no when i click the button it take 2 second to load

};

// show modal
const loadModal = (petId) => {
  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
    .then((res) => res.json())
    .then((data) => displayModal(data.petData))
    .catch((error) => console.log(error));
};

const loadImage = (petId) => {
  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
    .then((res) => res.json())
    .then((data) => displayImage(data.petData))
    .catch((error) => console.log(error));
};


const displayImage = (singleImage) => {
  const imageContainer = document.getElementById("images");

  const oneImage = document.createElement("div");

  oneImage.innerHTML = `
    <img
    src=${singleImage.image}
    alt="404 error"
    class="rounded-xl w-full object-cover border">
  
  `;
  imageContainer.appendChild(oneImage);

  document.getElementById("load-image").addEventListener("click", displayImage);
};


// display count down modal details
let countDownFrom = 3;
let countDownInterval;
const countModal = () => {
  document.getElementById("countDownModal");
  const countDownDisplay = document.getElementById("count-down-display");

  // modal open
  document.getElementById("modal-countDown-show").click();

  // set the value = 3 all the time
  countDownFrom = 3;
  countDownDisplay.innerText = countDownFrom;

  // set the countdown
  const countDownInterval = setInterval(() => {
    countDownFrom--;
    countDownDisplay.innerText = countDownFrom;
    if (countDownFrom === 0) {
      clearInterval(countDownInterval);
      closeModal();
    }
    countDownDisplay.innerText = countDownFrom;
  }, 1000);
};

// closing function
function closeModal() {
  document.getElementById("countDownModal").close();
  clearInterval(countDownInterval);
}

// all buttons are together
const buttons = document.querySelectorAll(".btn-countdown");
buttons.forEach((button) => {
  button.addEventListener("click", closeModal);
});

// display modal for details
const displayModal = (modal) => {
  console.log(modal);
  const detailContainer = document.getElementById("modal-content");

  document.getElementById("modal-details-show").click();

  detailContainer.innerHTML = `
  <img src=${modal.image} alt="404 error" class="w-full object-cover">
  <h1 class="mt-6 font-bold text-2xl ">${modal.pet_name}</h1>
    <div class="grid grid-cols-2">
      <div class="flex gap-2">
        <img src="./images/breed.png" alt="" class="px-2 py-2">
        ${
          modal.breed
            ? `<p> Breed: ${modal.breed}</p>`
            : "<p>Breed: Unknown</p>"
        }
      </div>
      <div class="flex gap-2">
        <img src="./images/Birth.png" alt="" class="px-2 py-2 ">
        ${
          modal.date_of_birth
            ? `<p>Date of Birth: ${modal.date_of_birth}</p>`
            : "<p>Date of Birth: Unknown</p>"
        }
      </div>
      <div class="flex gap-2">
        <img src="./images/Gender.png" alt="" class="px-2 py-2">
        ${
          modal.gender
            ? `<p>Gender: ${modal.gender}</p>`
            : "<p>Gender: Unknown</p>"
        }
      </div>
      <div class="flex gap-2">
        <img src="./images/price.png" alt="" class="px-2 py-2">
        ${
          modal.price ? `<p>price: ${modal.price}$</p>` : "<p>price: Inbox </p>"
        }
      </div>
      <div class="flex gap-2">
        <img src="./images/Gender.png" alt="" class="px-2 py-2">
        ${
          modal.vaccinated_status
            ? `<p>Vaccinated status: ${modal.vaccinated_status}</p>`
            : "<p>Vaccinated status: Unknown</p>"
        }
      </div>
    </div>
    <hr>
    <h2 class="mt-6 font-semibold text-xl">Details Information</h2>
    <p>${modal.pet_details}</p>
  `;
  

};

// display cards
const displayCards = (pets) => {
  const cardsContainer = document.getElementById("cards");
  cardsContainer.innerHTML = "";

  if (pets.length == 0) {
    cardsContainer.classList.remove("grid");
    cardsContainer.innerHTML = `
    <div class="min-h-[300px] w-full flex flex-col gap-5 justify-center items-center">
      <img src="./images/error.webp" alt="">
      <h2 class="text-center text-xl font-bold">
        Under Construction
      </h2>
      <p>
        We will be adding the birds section soon. We are currently working on it, Stay Tuned with us for more upcoming updates.
      </p>
    </div>
    `;
    return;
  } else {
    cardsContainer.classList.add("grid");
  }

  pets.forEach((pet) => {
    
    const card = document.createElement("div");
    card.classList = "card bg-base-100 shadow-xl border";
    card.innerHTML = `
         <figure class="lg:px-10 md:px-8 px-4 pt-10">
    <img
      src=${pet.image}
      alt="404 error"
      class="rounded-xl w-full object-cover">
  </figure>
  <div class="card-body">
    <h2 class="card-title font-bold pl-3">${pet.pet_name}</h2>
    <div>
      <div class="flex gap-2">
      <img src="./images/breed.png" alt="" class="px-2 py-2">
      ${pet.breed ? `<p> Breed: ${pet.breed}</p>` : "<p>Breed: Unknown</p>"}
      </div>
      <div class="flex gap-2">
      <img src="./images/Birth.png" alt="" class="px-2 py-2">
      ${
        pet.date_of_birth
          ? `<p>Date of Birth: ${pet.date_of_birth}</p>`
          : "<p>Date of Birth: Unknown</p>"
      }
      </div>
      <div class="flex gap-2">
      <img src="./images/Gender.png" alt="" class="px-2 py-2">
      ${pet.gender ? `<p>Gender: ${pet.gender}</p>` : "<p>Gender: Unknown</p>"}
      </div>
      <div class="flex gap-2">
      <img src="./images/price.png" alt="404 error" class="px-2 py-2">
      ${pet.price ? `<p>price: ${pet.price}$</p>` : "<p>price: Inbox </p>"}
      </div>
    </div>
    <hr>
    <div class="card-actions flex justify-between">

      <button id="load-image" onclick="loadImage(${pet.petId})" class="btn  bg-white text-[#0E7A81] border">
        <img src="./images/like.png" alt="">
      </button>

      <button onclick="countModal()" class="btn bg-white text-[#0E7A81] border btn-countdown">
        Adopt
      </button>

      <button onclick="loadModal(${
        pet.petId
      })" class="btn bg-white text-[#0E7A81] border">
        Details
      </button>
    </div>
  </div>
        `;
    cardsContainer.append(card);

    
  });

};

// displayCategories for buttons
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");

  categories.forEach((item) => {
    

    // create a button

    const buttonContainer = document.createElement("div");

    buttonContainer.innerHTML = `
      <button onclick="loadCategoriesPets('${item.category}')" class="btn lg:flex  justify-center w-24 h-20 md:w-40 md:h-16 lg:w-40 lg:h-16 mx-auto">
        <img
      src=${item.category_icon}
      alt="404 Error"
      class="rounded-xl w-10 object-cover">
      <div  class="">
        <p class="font-bold">${item.category}</p>
      </div>
      </button>
    `;
    

    //  add button to category

    categoryContainer.append(buttonContainer);
  });
};

loadCategories();
loadCards();


