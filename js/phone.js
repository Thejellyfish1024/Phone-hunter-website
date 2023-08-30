//
// phone container
// 
const loadPhone = async (searchText, loading) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
  const data = await res.json();
  const phones = data.data;
  console.log(phones);
  // console.log(phones.length);
  addPhones(phones, loading);
}
// 
// 
// 
const addPhones = (phones, loading) => {
  console.log(phones);
  // phone container div
  const phoneContainer = document.getElementById('phone-container')
  phoneContainer.textContent = '';
  // no phone available container
  const nothingAvailable = document.getElementById('nothing-available-container')
  nothingAvailable.textContent = '';
  // create new div
  if (phones.length === 0) {
    const newPara = document.createElement('div');
    newPara.innerHTML = `
      <div class="text-4xl font-semibold text-center mt-12"><p>No phones available of this model</p> </div>
      `
    nothingAvailable.appendChild(newPara);
  }
  else if (phones.length < 12) {
    phones.forEach(phone => {
      const newDiv = document.createElement('div');
      newDiv.innerHTML = `
        <div id="${phone.slug}" class="card bg-base-100 shadow-xl">
                    <figure class="bg-gray-200 px-5 m-5 py-5">
                      <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>There are many variations of passages of available, but the majority have suffered</p>
                      <h2 class="card-title">$999</h2>
                      <div class="card-actions">
                        <button id="show-details-btn" onClick="showDetails('${phone.slug}')" class="btn btn-primary text-white">Show Details</button>
                      </div>
                    </div>
                  </div>
        `
      // append
      phoneContainer.appendChild(newDiv);
    })
  }
  else {
    const phonesSlice = phones.slice(0, 12);
    phonesSlice.forEach(phone => {
      const newDiv = document.createElement('div');
      newDiv.innerHTML = `
        <div id="${phone.slug}" class="card bg-base-100 shadow-xl">
                    <figure class="bg-gray-200 px-5 m-5 py-5">
                      <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>There are many variations of passages of available, but the majority have suffered</p>
                      <h2 class="card-title">$999</h2>
                      <div class="card-actions">
                        <button id="show-details-btn" onClick="showDetails('${phone.slug}')" class="btn btn-primary text-white">Show Details</button>
                      </div>
                    </div>
                  </div>
        `
      // append
      phoneContainer.appendChild(newDiv);
    })
    // 
    // show all btn
    // 
    const showAllBtn = document.getElementById('show-all-btn')
    showAllBtn.classList.remove('hidden')
  }
  // 
  //show all function
  // 
  document.getElementById('show-all-btn').addEventListener('click', function () {
    console.log(phones);
    // /////////////////////////////////////////
    phoneContainer.textContent = '';
    phones.forEach(phone => {
      const newDiv = document.createElement('div');
      newDiv.innerHTML = `
        <div id="${phone.slug}" class="card bg-base-100 shadow-xl">
                    <figure class="bg-gray-200 px-5 m-5 py-5">
                      <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>There are many variations of passages of available, but the majority have suffered</p>
                      <h2 class="card-title">$999</h2>
                      <div class="card-actions">
                        <button id="show-details-btn" onClick="showDetails('${phone.slug}')" class="btn btn-primary text-white">Show Details</button>
                      </div>
                    </div>
                  </div>
        `
      // append
      phoneContainer.appendChild(newDiv);
    })
    // add hidden to show all btn again
    const showAllBtn = document.getElementById('show-all-btn')
    showAllBtn.classList.add('hidden')
  })
  loading.classList.add('hidden');
}
// 
// search text
// 
const inputText = () => {
  // loading
  const loading = document.getElementById('loading-container');
  loading.classList.remove('hidden')
  const inputField = document.getElementById('input-field');
  const inputText = inputField.value;
  loadPhone(inputText, loading);
}
// 
// show details
// 
const showDetails = async (id) => {
  // api
  // 
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  const data = await res.json();
  const phone = data.data;
  console.log(phone.name);
  // modal container
  const modalTextContainer = document.getElementById('modal-text-container');
  // 
  //  create modal div
  // 
  modalTextContainer.textContent = '';
  const modalDiv = document.createElement('div');
  modalDiv.innerHTML = `
      <div class="flex justify-center px-16 py-8 bg-gray-300 mb-3">
      <img src="${phone.image}" alt="">
    </div>
    <h3 class="text-3xl font-semibold my-3">${phone.name}</h3>
    <div class="space-y-2">
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when
          looking at its layout.</p>
      <p><span class="text-xl font-medium">Storage: </span>${phone?.mainFeatures?.storage}</p>
      <p><span class="text-xl font-medium">Display Size : </span>${phone?.mainFeatures?.displaySize}</p>
      <p><span class="text-xl font-medium">Chipset : </span>${phone?.mainFeatures?.chipSet}</p>
      <p><span class="text-xl font-medium">Memory : </span>${phone?.mainFeatures?.memory}</p>
      <p><span class="text-xl font-medium">Slug : </span>${phone?.slug}</p>
      <p><span class="text-xl font-medium">Release Date : </span>${phone?.releaseDate}</p>
      <p><span class="text-xl font-medium">Brand : </span>${phone?.brand}</p>
      <p><span class="text-xl font-medium">GPS : </span>${phone?.others?.GPS ? phone.others.GPS : 'No GPS'}</p>
    </div>
  `
  modalTextContainer.appendChild(modalDiv)
  show_details_modal.showModal();

}

// loadPhone();