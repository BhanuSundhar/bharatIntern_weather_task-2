//Api Key
const apikey = 'f5c49aea5439c850ae47dce287ed7f74';

function  myBtn(){
    let inputEle = document.getElementById('search');
    let tempEle = document.getElementById('temp-value');
    let weatherdesEle = document.getElementById('weather-des');
    let locEle = document.getElementById('location');
    let unitEle = document.getElementById('unit');
    let cEle = document.getElementById('c');
    let iconEle = document.getElementById('icon');
    if(inputEle==""){
        console.log("Enter location");
    }
    else{
        const city = inputEle.value;
        url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
        fetch(url).then(res => res.json()).then(data =>{
            console.log(data);
            tempEle.innerHTML = `${data.main.temp}`;
            unitEle.innerHTML = '&#176';
            cEle.innerHTML = `C`;
            iconEle = '<i class="fa-solid fa-cloud" ></i>';
            weatherdesEle.innerHTML = `${data.weather[0].description}`;
            locEle.innerHTML = `${data.name}`;
        })
        .catch(err =>{
            weatherdesEle.innerHTML = '<p style="color:rgb(7, 68, 122);;font-weight:bold" >Enter valid location</p>';
            console.log("Error occured and handled = ",err);
        })
    }
    inputEle="";
    tempEle.innerHTML="";
    locEle.innerHTML="";
    unitEle.innerHTML = '';
    cEle.innerHTML = "";
    iconEle = ""
}










