let allCars = [];

async function fetchAllCarData() {
  const limit = 1000;
  let skip = 0;
  let results = [];
  let keepFetching = true;

  while (keepFetching) {
    const where = encodeURIComponent(JSON.stringify({
      "Model": { "$exists": true },
      "Make": { "$exists": true },
      "Year": { "$exists": true }
    }));

    const url = `https://parseapi.back4app.com/classes/Car_Model_List?limit=${limit}&skip=${skip}&order=Make,Model,Year&where=${where}`;
    const response = await fetch(url, {
      headers: {
        'X-Parse-Application-Id': 'hlhoNKjOvEhqzcVAJ1lxjicJLZNVv36GdbboZj3Z',
        'X-Parse-Master-Key': 'SNMJJF0CZZhTPhLDIqGhTlUNV9r60M2Z5spyWfXW'
      }
    });

    const data = await response.json();
    results = results.concat(data.results);
    skip += limit;
    keepFetching = data.results.length === limit;
  }

  return results;
}

async function initDropdowns() {
  try {
    allCars = await fetchAllCarData();

    // Populate brand dropdown
    const brandSelect = document.getElementById("car_brand");
    const uniqueBrands = [...new Set(allCars.map(car => car.Make))].sort();

    uniqueBrands.forEach(make => {
      const option = document.createElement("option");
      option.value = make;
      option.textContent = make;
      brandSelect.appendChild(option);
    });

  } catch (err) {
    console.error("Error fetching car data:", err);
  }
}

document.getElementById("car_brand").addEventListener("change", function () {
  const selectedBrand = this.value;
  const modelSelect = document.getElementById("vehicle_model");

  // Reset model dropdown
  modelSelect.innerHTML = '<option value="" disabled selected>Select Vehicle Model</option>';

  const filteredModels = allCars.filter(car => car.Make === selectedBrand);
  const seen = new Set();

  filteredModels.forEach(car => {
    const label = `${car.Model} (${car.Year})`;
    const value = `${car.Make} ${car.Model} ${car.Year}`;
    if (!seen.has(label)) {
      seen.add(label);
      const option = document.createElement("option");
      option.value = value;
      option.textContent = label;
      modelSelect.appendChild(option);
    }
  });
});

// Start!
initDropdowns();