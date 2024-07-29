const URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json"

const dropdowns = document.querySelectorAll(".dropdown select");   // dropdown ke andar sare selects

const btn = document.querySelector(" form button")

for (let select of dropdowns) {
    for (currCode in countryList) {           // dropdown ke liye loop
        //console.log(currCode, countryList[currCode]);
        let newOption = document.createElement("option");   // ek ek country code ke liye option add kiya
        newOption.innerText = currCode;
        newOption.value = currCode;

        if(select.name === "from" && currCode === "USD") {
            newOption.selected ="selected";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected ="selected";
        }

        select.append(newOption);     // adding newOption to select
    
    }
    select.addEventListener("change",(evt) =>{
        updateFlag(evt.target);
    })
}

// Changes flags acc to code  imppppp
const updateFlag = (element) => {
    //console.log(element);
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newLink = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newLink;
};

//working button
btn.addEventListener("click", (evt) => {
    evt.preventDefault();     // stops additional other work if refreshed
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    console.log("amtVal");
})

// not fully done