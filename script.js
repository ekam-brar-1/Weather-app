
const weather = async()=>{
    let cityname = 'delhi';
    let APIkey = '21f5d35bc2b6f59c55d61655b4217886';
    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityname}&appid=${APIkey}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    min_temp.innerHTML=data.main.temp_min + " Celsius";
    max_temp.innerHTML=data.main.temp_max+ " Celsius";
    Grnd_level.innerHTML=data.wind.speed;
    temp.innerHTML=data.main.temp+ " Celsius";
    humidity.innerHTML=data.main.humidity;
    Feels_like.innerHTML=data.main.feels_like;
    Pressure.innerHTML=data.main.pressure;
    sea_level.innerHTML=data.visibility;
}
weather();
let search = document.getElementById("search1");

let searchFeild = document.getElementById("searchFeild");
console.log(typeof(searchFeild.value) + "efef");
search.addEventListener('click',async (e)=>{
    e.preventDefault();
    if (searchFeild.value == ''){
        alert("search field is empty")
    } else{
        cityname= searchFeild.value;
        let APIkey = '21f5d35bc2b6f59c55d61655b4217886';
        const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityname}&appid=${APIkey}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        city_name.innerHTML=searchFeild.value.toUpperCase() + " Weather";
        min_temp.innerHTML=data.main.temp_min + " Celsius";
        max_temp.innerHTML=data.main.temp_max+ " Celsius";
        Grnd_level.innerHTML=data.wind.speed;
        temp.innerHTML=data.main.temp+ " Celsius";
        humidity.innerHTML=data.main.humidity;
        Feels_like.innerHTML=data.main.feels_like;
        Pressure.innerHTML=data.main.pressure;
        sea_level.innerHTML=data.visibility;
    }
})
const toronto=async()=>{
 let cityname = 'toronto';
let APIkey = '21f5d35bc2b6f59c55d61655b4217886';
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityname}&appid=${APIkey}`;
let response = await fetch(url);
let data = await response.json();
console.log(data);
toronto_1.innerHTML=data.main.temp_min + " Celsius";
toronto_2.innerHTML=data.main.temp_max+ " Celsius";
toronto_3.innerHTML=data.wind.speed;
toronto_4.innerHTML=data.main.temp+ " Celsius";
toronto_5.innerHTML=data.main.humidity;
toronto_6.innerHTML=data.main.feels_like;
toronto_7.innerHTML=data.main.pressure;
toronto_8.innerHTML=data.visibility;
}
toronto()
const surrey=async()=>{
    let cityname = 'surrey';
   let APIkey = '21f5d35bc2b6f59c55d61655b4217886';
   const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityname}&appid=${APIkey}`;
   let response = await fetch(url);
   let data = await response.json();
   console.log(data);
   surrey_1.innerHTML=data.main.temp_min + " Celsius";
   surrey_2.innerHTML=data.main.temp_max+ " Celsius";
   surrey_3.innerHTML=data.wind.speed;
   surrey_4.innerHTML=data.main.temp+ " Celsius";
   surrey_5.innerHTML=data.main.humidity;
   surrey_6.innerHTML=data.main.feels_like;
   surrey_7.innerHTML=data.main.pressure;
   surrey_8.innerHTML=data.visibility;
   }
surrey()
const brampton=async()=>{
    let cityname = 'brampton';
   let APIkey = '21f5d35bc2b6f59c55d61655b4217886';
   const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityname}&appid=${APIkey}`;
   let response = await fetch(url);
   let data = await response.json();
   console.log(data);
   brampton_1.innerHTML=data.main.temp_min + " Celsius";
   brampton_2.innerHTML=data.main.temp_max+ " Celsius";
   brampton_3.innerHTML=data.wind.speed;
   brampton_4.innerHTML=data.main.temp+ " Celsius";
   brampton_5.innerHTML=data.main.humidity;
   brampton_6.innerHTML=data.main.feels_like;
   brampton_7.innerHTML=data.main.pressure;
   brampton_8.innerHTML=data.visibility;
   }
brampton()
const calgary=async()=>{
    let cityname = 'calgary';
   let APIkey = '21f5d35bc2b6f59c55d61655b4217886';
   const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityname}&appid=${APIkey}`;
   let response = await fetch(url);
   let data = await response.json();
   console.log(data);
   calgary_1.innerHTML=data.main.temp_min + " Celsius";
   calgary_2.innerHTML=data.main.temp_max+ " Celsius";
   calgary_3.innerHTML=data.wind.speed;
   calgary_4.innerHTML=data.main.temp+ " Celsius";
   calgary_5.innerHTML=data.main.humidity;
   calgary_6.innerHTML=data.main.feels_like;
   calgary_7.innerHTML=data.main.pressure;
   calgary_8.innerHTML=data.visibility;
   }
calgary()
