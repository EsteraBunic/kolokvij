
//prvi dio
function ocjena() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const num4 = parseFloat(document.getElementById("num4").value);

    const average = (num1 + num2 + num3 + num4) / 4;
    document.getElementById("result").innerText = "Prosjek je " + average;
}
//Drugi dio






document.addEventListener("DOMContentLoaded", function() {
const phones = [
    {
        "maker": "Šmasung",
        "logo": "smasung_logo.png",
        "model": "Šmasung 2",
        "tag": "Smartphone",
        "year": 2021
    },
    {
        "maker": "Šmasung",
        "logo": "smasung_logo.png",
        "model": "Šmasung 1",
        "tag": "Smartphone",
        "year": 2020
    },
    {
        "maker": "Šmasung",
        "logo": "smasung_logo.png",
        "model": "Šmasung 3",
        "tag": "cigla",
        "year": 2023
    },
    {
        "maker": "Šmasung",
        "logo": "smasung_logo.png",
        "model": "Šmasung 4",
        "tag": "cigla",
        "year": 2024
    },
    {
        "maker": "Šmasung",
        "logo": "smasung_logo.png",
        "model": "Šmasung 5",
        "tag": "Smartphone",
        "year": 2025
    },
];

const yearSelector = document.getElementById("yearSelector");
const uniqueYears = [...new Set(phones.map(phone => phone.year))];
uniqueYears.sort((a, b) => a - b);
uniqueYears.forEach(year => {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelector.appendChild(option);
});





function displayPhonesByYear(year) {
    const filteredPhones = phones.filter(phone => phone.year == year);

    const phoneTableBody = document.querySelector("#phoneTable tbody");
    phoneTableBody.innerHTML = ""; 



    filteredPhones.forEach(phone => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${phone.maker}</td>
            <td><img src="${phone.logo}" alt="${phone.maker} Logo" style="width: 50px; height: auto;"></td>
            <td>${phone.model}</td>
            <td>${phone.tag}</td>
            <td>${phone.year}</td>
        `;
        phoneTableBody.appendChild(row);
    });
}




yearSelector.addEventListener("change", function() {
    const selectedYear = parseInt(this.value);
    displayPhonesByYear(selectedYear);
});
});