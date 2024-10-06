// create loadCategories

const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

// create cards
const loadCards = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => displayCards(data.pets))
    .catch((error) => console.log(error));
};

// load categories pet wise
const loadCategoriesPets = (samePet) => {
  fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    .then((res) => res.json())
    .then((data) => displayCategories(data.petId))
    .catch((error) => console.log(error));
  alert(samePet);
  
};

// display cards
const displayCards = (pets) => {
  const cardsContainer = document.getElementById("cards");
  pets.forEach((pet) => {
    console.log(pet);

    // create card
    const card = document.createElement("div");
    card.classList = "card bg-base-100 shadow-xl";
    card.innerHTML = `
         <figure class="lg:px-10 md:px-8 px-4 pt-10">
    <img
      src=${pet.image}
      alt="Shoes"
      class="rounded-xl">
  </figure>
  <div class="card-body">
    <h2 class="card-title font-bold pl-3">${pet.pet_name}</h2>
    <div>
      <div class="flex gap-2">
      <img src="./images/breed.png" alt="" class="px-2 py-2">
      ${pet.breed ? `<p> Breed: ${pet.breed}</p>` : '<p>Breed: Unknown</p>'}
      </div>
      <div class="flex gap-2">
      <img src="./images/Birth.png" alt="" class="px-2 py-2">
      ${pet.date_of_birth ? `<p>Date of Birth: ${pet.date_of_birth}</p>` : '<p>Date of Birth: Unknown</p>'}
      </div>
      <div class="flex gap-2">
      <img src="./images/Gender.png" alt="" class="px-2 py-2">
      ${pet.gender ? `<p>Gender: ${pet.gender}</p>` : '<p>Gender: Unknown</p>'}
      </div>
      <div class="flex gap-2">
      <img src="./images/price.png" alt="" class="px-2 py-2">
      ${pet.price ? `<p>price: ${pet.price}$</p>` : '<p>price: Inbox </p>'}
      </div>
    </div>
    <hr>
    <div class="card-actions flex justify-between">
      <button class="btn bg-white text-[#0E7A81] border">
        <img src="./images/like.png" alt="">
      </button>
      <button class="btn bg-white text-[#0E7A81] border">Adopt</button>
      <button class="btn bg-white text-[#0E7A81] border">Details</button>
    </div>
  </div>
        `;
    cardsContainer.append(card);
  });
};

// displayCategories
const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");

  categories.forEach( (item) => {
    console.log(item);

    // create a button

    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = 
    `
      <button onclick="loadCategoriesPets(${item.petId})" class="btn flex gap-2">
        <img
      src=${item.category_icon}
      alt="404 Error"
      class="rounded-xl w-10 object-cover">
      <div  class="mt-3">
        <p class="font-bold">${item.category}</p>
      </div>
      </button>
    `
    // button.innerText = item.category;

    //  add button to category

    categoryContainer.append(buttonContainer);
  });
};

loadCategories();
loadCards();

// {
//     "petId": 1,
//     "breed": "Golden Retriever",
//     "category": "Dog",
//     "date_of_birth": "2023-01-15",
//     "price": 1200,
//     "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//     "gender": "Male",
//     "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//     "vaccinated_status": "Fully",
//     "pet_name": "Sunny"
//   },

/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2081_39)">
<path d="M3.33334 3.33337H8.33334V8.33337H3.33334V3.33337Z" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.6667 3.33337H16.6667V8.33337H11.6667V3.33337Z" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.33334 11.6666H8.33334V16.6666H3.33334V11.6666Z" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.6667 14.1666C11.6667 14.8297 11.9301 15.4656 12.3989 15.9344C12.8677 16.4032 13.5036 16.6666 14.1667 16.6666C14.8297 16.6666 15.4656 16.4032 15.9344 15.9344C16.4033 15.4656 16.6667 14.8297 16.6667 14.1666C16.6667 13.5036 16.4033 12.8677 15.9344 12.3989C15.4656 11.93 14.8297 11.6666 14.1667 11.6666C13.5036 11.6666 12.8677 11.93 12.3989 12.3989C11.9301 12.8677 11.6667 13.5036 11.6667 14.1666Z" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2081_39">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg> */

/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_2081_39)">
<path d="M3.33334 3.33337H8.33334V8.33337H3.33334V3.33337Z" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.6667 3.33337H16.6667V8.33337H11.6667V3.33337Z" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.33334 11.6666H8.33334V16.6666H3.33334V11.6666Z" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.6667 14.1666C11.6667 14.8297 11.9301 15.4656 12.3989 15.9344C12.8677 16.4032 13.5036 16.6666 14.1667 16.6666C14.8297 16.6666 15.4656 16.4032 15.9344 15.9344C16.4033 15.4656 16.6667 14.8297 16.6667 14.1666C16.6667 13.5036 16.4033 12.8677 15.9344 12.3989C15.4656 11.93 14.8297 11.6666 14.1667 11.6666C13.5036 11.6666 12.8677 11.93 12.3989 12.3989C11.9301 12.8677 11.6667 13.5036 11.6667 14.1666Z" stroke="#5A5A5A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_2081_39">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg> */

// ${pet.breed == false ? `<p> Breed: ${pet.breed}</p>` : "Not available"}

/* <p> Birth: ${pet.date_of_birth}</p> */


