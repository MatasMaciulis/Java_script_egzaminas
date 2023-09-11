/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */


const ENDPOINT = "cars.json";

async function fetchCars() {
    try {
      const response = await fetch(ENDPOINT);
      if (response.ok) {
        const cars = await response.json();
        // console.log(cars);
        cars.forEach((car) => {
            generateCar(car);
        });
      } else {
        alert("Failed to fetch");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  }

function generateCar (car) {

    const output = document.getElementById("output");
    output.style.display = "flex";
    output.style.flexWrap = "wrap"
    output.style.justifyContent = "center"
    output.style.gap = "10px"
    
    const card = document.createElement("div");
    card.style.border = "2px solid #405636";
    card.style.borderRadius = "10px";
    card.style.padding = "16px";
    card.style.marginBottom = "16px";
    card.style.textAlign = "center"
    card.style.backgroundColor = "#F2F2F2" 

    const brandName = document.createElement ("h2");
    brandName.textContent = car.brand;

    brandName.style.textAlign = "center";
    brandName.style.color = "green";
    brandName.style.padding = "20px"

    const list = document.createElement ("ul")

    car.models.forEach ((modelName)=> {
    const model = document.createElement ("li");
    model.style.listStyle = "none"
    model.textContent = modelName;

    list.append (model);

    });

    card.append (brandName,list);
    output.append (card);

};

fetchCars()
