//
// phone container
// 
const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    console.log(phones);
    addPhones(phones);
}
// 
// 
// 
const addPhones = (phones) => {
    // phone container div
    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent = '';
    // create new div
    phones.forEach(phone => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div class="card bg-base-100 shadow-xl">
                    <figure class="bg-gray-200 px-5 m-5 py-5">
                      <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>There are many variations of passages of available, but the majority have suffered</p>
                      <h2 class="card-title">$999</h2>
                      <div class="card-actions">
                        <button class="btn btn-primary text-white">Show Details</button>
                      </div>
                    </div>
                  </div>
        `
        // append
        phoneContainer.appendChild(newDiv);
    })
}
// 
// search text
// 
const inputText = () =>{
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    loadPhone(inputText);
}
// loadPhone();