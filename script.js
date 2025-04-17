const button = document.getElementById("seachButton")
const input = document.getElementById('cityInput')

const cityName = document.getElementById('cityName')
const cityTime = document.getElementById('cityTime')
const cityTemp = document.getElementById('cityTemp')

async function getData(cityName){
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=7d64c56c7f174784bad84032250804&q=${cityName}&aqi=yes`
    );
    return await promise.json()
}

button.addEventListener("click", async() => {
    const value = input.value;
    const result = await getData(value);
    // console.log(result);
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c;
    
})

// http://api.weatherapi.com/v1/current.json?key=7d64c56c7f174784bad84032250804&q=London&aqi=yes
