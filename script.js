document.getElementById("search-btn").addEventListener("click", function () {
    const searchInputBox = document.getElementById("search-input").value;
    myFunction(searchInputBox);
});

async function myFunction(value) {
    try {

        // const request = await fetch(`https://api.nationalize.io/?name=${value}`);
        // console.log(request);  
        // const data = await request.json();
        // console.log(data); 
        // console.log("guvi",data.name);
        // return data;

        const url = `https://api.nationalize.io/?name=${value}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => displayCountry(data));

    } catch (error) {
        console.error(error) // from creation or business logic
    }
};

const displayCountry = (country) => {
    const cardContainer = document.getElementById("card-container");
    const countryArray = country.country;

    countryArray.forEach((country) => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card single-card";
        const cardInfo = `
                        <div class='card-body'>
                <h5 class='card-title text-center'>${country.country_id}</h5>
                <h5 class='card-title text-center'>${country.probability}</h5>
                </div>
            
            `;
        cardDiv.innerHTML = cardInfo;
        cardContainer.appendChild(cardDiv);
    });
};
document.getElementById("search-input").value = "";
